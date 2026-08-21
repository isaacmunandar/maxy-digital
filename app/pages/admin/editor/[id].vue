<template>
  <div class="admin-editor-page">
    <!-- Top Header -->
    <header class="editor-header">
      <div class="container-fluid d-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center gap-15">
          <NuxtLink to="/admin" class="btn-back" title="Back to Dashboard">
            <span class="ti-arrow-left mr-5"></span> Dashboard
          </NuxtLink>
          <span class="editor-title-crumb">
            {{ isNew ? 'Create New Article' : 'Edit Article' }}
          </span>
        </div>

        <div class="d-flex align-items-center gap-10">
          <button
            type="button"
            @click="togglePreview"
            class="btn-secondary"
          >
            <span :class="showPreview ? 'ti-pencil' : 'ti-eye'" class="mr-5"></span>
            {{ showPreview ? 'Edit Content' : 'Live Preview' }}
          </button>

          <button
            type="button"
            @click="saveArticle('draft')"
            class="btn-secondary"
            :disabled="saving"
          >
            Save Draft
          </button>

          <button
            type="button"
            @click="saveArticle('published')"
            class="btn-primary"
            :disabled="saving"
          >
            <span v-if="saving">Saving...</span>
            <span v-else>Publish Live</span>
          </button>
        </div>
      </div>
    </header>

    <main class="container-fluid py-30">
      <div v-if="successMsg" class="alert alert-success mb-20">
        {{ successMsg }}
      </div>
      <div v-if="errorMsg" class="alert alert-danger mb-20">
        {{ errorMsg }}
      </div>

      <div class="row">
        <!-- Main Form Column -->
        <div class="col-lg-8">
          <div class="card-panel mb-25">
            <!-- Article Title -->
            <div class="form-group mb-20">
              <label class="form-label">Article Title *</label>
              <input
                v-model="form.title"
                @input="handleTitleInput"
                type="text"
                class="input-title"
                placeholder="Enter compelling article headline..."
                required
              />
            </div>

            <!-- Slug -->
            <div class="form-group mb-20">
              <label class="form-label">URL Slug</label>
              <div class="slug-input-wrapper">
                <span class="slug-prefix">/blog/</span>
                <input
                  v-model="form.slug"
                  type="text"
                  class="input-slug"
                  placeholder="article-url-slug"
                />
              </div>
            </div>

            <!-- Excerpt -->
            <div class="form-group mb-25">
              <label class="form-label">Short Excerpt (SEO Summary & Card Description)</label>
              <textarea
                v-model="form.excerpt"
                rows="2"
                class="input-textarea"
                placeholder="Brief summary shown on social previews and blog listing..."
              ></textarea>
            </div>

            <!-- Content Editor & Toolbar -->
            <div class="form-group">
              <label class="form-label d-flex justify-content-between">
                <span>Article Body (Rich Text / HTML) *</span>
                <span class="text-muted fz-12">HTML and Markdown formatting supported</span>
              </label>

              <!-- Quick Formatting Toolbar -->
              <div v-if="!showPreview" class="editor-toolbar mb-10">
                <button type="button" @click="insertTag('<h2>', '</h2>')" title="Heading 2">H2</button>
                <button type="button" @click="insertTag('<h3>', '</h3>')" title="Heading 3">H3</button>
                <button type="button" @click="insertTag('<strong>', '</strong>')" title="Bold"><b>B</b></button>
                <button type="button" @click="insertTag('<em>', '</em>')" title="Italic"><i>I</i></button>
                <button type="button" @click="insertTag('<blockquote>', '</blockquote>')" title="Quote">Quote</button>
                <button type="button" @click="insertTag('<ul>\n  <li>', '</li>\n</ul>')" title="Bullet List">List</button>
                <button type="button" @click="insertTag('<pre><code>', '</code></pre>')" title="Code Block">Code</button>
                <button type="button" @click="insertLink" title="Insert Link">Link</button>
                <button type="button" @click="insertImage" title="Insert Image Tag">Image</button>
              </div>

              <!-- Textarea Editor -->
              <textarea
                v-if="!showPreview"
                ref="contentInputEl"
                v-model="form.content"
                rows="18"
                class="input-content"
                placeholder="Write your article content here in rich HTML or markdown formatting..."
                required
              ></textarea>

              <!-- Live Article Preview Box -->
              <div v-else class="preview-container">
                <div class="preview-badge">Live Reader Preview</div>
                <div class="article-content" v-html="form.content"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Sidebar Options Column -->
        <div class="col-lg-4">
          <!-- Publishing & Category Card -->
          <div class="card-panel mb-25">
            <h6 class="panel-title mb-15">Article Metadata</h6>

            <div class="form-group mb-20">
              <label class="form-label">Category *</label>
              <select v-model="form.category" class="input-control">
                <option value="Agentic AI">Agentic AI</option>
                <option value="Software Engineering">Software Engineering</option>
                <option value="Digital Growth">Digital Growth</option>
                <option value="Case Study">Case Study</option>
                <option value="Company News">Company News</option>
              </select>
            </div>

            <div class="form-group mb-20">
              <label class="form-label">Estimated Read Time</label>
              <input
                v-model="form.readTime"
                type="text"
                class="input-control"
                placeholder="5 min read"
              />
            </div>

            <div class="form-group mb-20">
              <label class="form-label">Tags (comma separated)</label>
              <input
                v-model="tagsInput"
                type="text"
                class="input-control"
                placeholder="AI, Innovation, Tech"
              />
            </div>

            <div class="form-group">
              <label class="form-label">Status</label>
              <select v-model="form.status" class="input-control">
                <option value="published">Published (Live)</option>
                <option value="draft">Draft (Private)</option>
              </select>
            </div>
          </div>

          <!-- Cover Image Card -->
          <div class="card-panel mb-25">
            <h6 class="panel-title mb-15">Cover Banner Image</h6>

            <div class="form-group mb-15">
              <label class="form-label">Cover Image URL</label>
              <input
                v-model="form.coverImage"
                type="text"
                class="input-control"
                placeholder="/light/assets/imgs/works/agentic-ai/..."
              />
            </div>

            <div class="upload-box mb-15">
              <input
                type="file"
                ref="fileInputEl"
                @change="handleFileUpload"
                accept="image/*"
                class="d-none"
              />
              <button
                type="button"
                @click="$refs.fileInputEl.click()"
                class="btn-upload"
                :disabled="uploading"
              >
                <span v-if="uploading">Uploading image...</span>
                <span v-else>📁 Upload Banner Image</span>
              </button>
            </div>

            <!-- Image Preview Thumbnail -->
            <div v-if="form.coverImage" class="cover-preview">
              <img :src="form.coverImage" alt="Cover Preview" />
            </div>
          </div>

          <!-- Author Info Card -->
          <div class="card-panel">
            <h6 class="panel-title mb-15">Author Details</h6>

            <div class="form-group mb-15">
              <label class="form-label">Author Name</label>
              <input
                v-model="form.authorName"
                type="text"
                class="input-control"
                placeholder="MAXY AI Team"
              />
            </div>

            <div class="form-group mb-15">
              <label class="form-label">Author Role</label>
              <input
                v-model="form.authorRole"
                type="text"
                class="input-control"
                placeholder="Agentic AI Solutions"
              />
            </div>

            <div class="form-group">
              <label class="form-label">Author Avatar URL</label>
              <input
                v-model="form.authorAvatar"
                type="text"
                class="input-control"
                placeholder="/light/assets/imgs/logo-maxy-dark.png"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
definePageMeta({
  layout: false,
  middleware: 'admin',
});

const route = useRoute();
const router = useRouter();

const isNew = computed(() => route.params.id === 'new');
const articleId = computed(() => route.params.id);

const form = ref({
  title: '',
  slug: '',
  excerpt: '',
  content: '',
  coverImage: '/light/assets/imgs/works/agentic-ai/sales-follow-up-agent.png',
  category: 'Agentic AI',
  authorName: 'MAXY AI Team',
  authorRole: 'AI Solutions & Research',
  authorAvatar: '/light/assets/imgs/logo-maxy-dark.png',
  status: 'published',
  readTime: '5 min read',
});

const tagsInput = ref('Agentic AI, Enterprise');
const showPreview = ref(false);
const saving = ref(false);
const uploading = ref(false);
const successMsg = ref('');
const errorMsg = ref('');

const contentInputEl = ref(null);
const fileInputEl = ref(null);

useHead({
  title: computed(() => `${isNew.value ? 'New Article' : 'Edit: ' + form.value.title} | Admin CMS`),
  meta: [{ name: 'robots', content: 'noindex, nofollow' }],
});

function handleTitleInput() {
  if (isNew.value || !form.value.slug) {
    form.value.slug = form.value.title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }
}

function togglePreview() {
  showPreview.value = !showPreview.value;
}

function insertTag(startTag, endTag) {
  const el = contentInputEl.value;
  if (!el) return;

  const start = el.selectionStart;
  const end = el.selectionEnd;
  const text = form.value.content || '';
  const selected = text.substring(start, end) || 'text';

  form.value.content = text.substring(0, start) + startTag + selected + endTag + text.substring(end);
  nextTick(() => {
    el.focus();
    el.setSelectionRange(start + startTag.length, start + startTag.length + selected.length);
  });
}

function insertLink() {
  const url = prompt('Enter URL:', 'https://');
  if (url) {
    insertTag(`<a href="${url}" target="_blank">`, '</a>');
  }
}

function insertImage() {
  const url = prompt('Enter Image URL:', '/light/assets/imgs/works/...');
  if (url) {
    form.value.content += `\n<img src="${url}" alt="Image" class="radius-15 my-20" style="width: 100%; height: auto;" />\n`;
  }
}

async function handleFileUpload(e) {
  const file = e.target.files?.[0];
  if (!file) return;

  uploading.value = true;
  errorMsg.value = '';

  const formData = new FormData();
  formData.append('file', file);

  try {
    const res = await $fetch('/api/admin/upload', {
      method: 'POST',
      body: formData,
    });

    if (res?.url) {
      form.value.coverImage = res.url;
      successMsg.value = 'Image uploaded successfully!';
      setTimeout(() => (successMsg.value = ''), 4000);
    }
  } catch (err) {
    errorMsg.value = 'Failed to upload image: ' + (err?.data?.statusMessage || err?.message);
  } finally {
    uploading.value = false;
  }
}

async function fetchArticle() {
  if (isNew.value) return;

  try {
    const res = await $fetch(`/api/admin/posts/${articleId.value}`);
    if (res?.success && res?.data) {
      const d = res.data;
      form.value = {
        title: d.title,
        slug: d.slug,
        excerpt: d.excerpt || '',
        content: d.content || '',
        coverImage: d.coverImage || '',
        category: d.category || 'Agentic AI',
        authorName: d.authorName || 'MAXY AI Team',
        authorRole: d.authorRole || 'AI Solutions',
        authorAvatar: d.authorAvatar || '/light/assets/imgs/logo-maxy-dark.png',
        status: d.status || 'published',
        readTime: d.readTime || '5 min read',
      };
      tagsInput.value = Array.isArray(d.tags) ? d.tags.join(', ') : d.tags || '';
    }
  } catch (err) {
    errorMsg.value = 'Failed to load article: ' + (err?.data?.statusMessage || err?.message);
  }
}

async function saveArticle(overrideStatus) {
  if (overrideStatus) {
    form.value.status = overrideStatus;
  }

  if (!form.value.title.trim()) {
    alert('Please provide an article title.');
    return;
  }

  if (!form.value.content.trim()) {
    alert('Please enter article content.');
    return;
  }

  saving.value = true;
  successMsg.value = '';
  errorMsg.value = '';

  const parsedTags = tagsInput.value
    .split(',')
    .map((t) => t.trim())
    .filter(Boolean);

  const payload = {
    ...form.value,
    tags: parsedTags,
  };

  try {
    if (isNew.value) {
      const res = await $fetch('/api/admin/posts', {
        method: 'POST',
        body: payload,
      });
      if (res?.success) {
        successMsg.value = 'Article published successfully!';
        setTimeout(() => router.push('/admin'), 1200);
      }
    } else {
      const res = await $fetch(`/api/admin/posts/${articleId.value}`, {
        method: 'PUT',
        body: payload,
      });
      if (res?.success) {
        successMsg.value = 'Article updated successfully!';
      }
    }
  } catch (err) {
    errorMsg.value = 'Save failed: ' + (err?.data?.statusMessage || err?.message);
  } finally {
    saving.value = false;
  }
}

onMounted(() => {
  fetchArticle();
});
</script>

<style scoped>
.admin-editor-page {
  min-height: 100vh;
  background: #090c14;
  color: #fff;
  font-family: 'Poppins', sans-serif;
}

.editor-header {
  background: rgba(14, 18, 30, 0.95);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  padding: 14px 24px;
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(12px);
}

.btn-back {
  display: inline-flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 13px;
  font-weight: 500;
  padding: 6px 12px;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.05);
  transition: all 0.2s;
}

.btn-back:hover {
  color: #fff;
  background: rgba(255, 255, 255, 0.1);
}

.editor-title-crumb {
  font-size: 14px;
  font-weight: 600;
  color: #fff;
}

.gap-10 { gap: 10px; }
.gap-15 { gap: 15px; }

.btn-primary {
  background: #2563eb;
  color: #fff;
  border: none;
  padding: 8px 20px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
}

.btn-primary:hover:not(:disabled) { background: #1d4ed8; }

.btn-secondary {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #fff;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-secondary:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.15);
}

.card-panel {
  background: rgba(15, 20, 34, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 24px;
}

.panel-title {
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  padding-bottom: 10px;
}

.form-label {
  display: block;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: rgba(255, 255, 255, 0.65);
  margin-bottom: 8px;
}

.input-title {
  width: 100%;
  padding: 14px 18px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 10px;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  outline: none;
}

.input-title:focus {
  border-color: #3b82f6;
  background: rgba(255, 255, 255, 0.08);
}

.slug-input-wrapper {
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  overflow: hidden;
}

.slug-prefix {
  padding: 0 12px;
  color: rgba(255, 255, 255, 0.4);
  font-size: 13px;
}

.input-slug {
  flex: 1;
  padding: 10px 12px;
  background: transparent;
  border: none;
  color: #60a5fa;
  font-size: 13px;
  outline: none;
}

.input-textarea {
  width: 100%;
  padding: 12px 14px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: #fff;
  font-size: 13px;
  outline: none;
}

.input-content {
  width: 100%;
  padding: 16px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  color: #fff;
  font-family: monospace;
  font-size: 14px;
  line-height: 1.6;
  outline: none;
}

.input-content:focus {
  border-color: #3b82f6;
}

.input-control {
  width: 100%;
  padding: 10px 14px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: #fff;
  font-size: 13px;
  outline: none;
}

.input-control option {
  background: #111827;
  color: #fff;
}

.editor-toolbar {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  background: rgba(255, 255, 255, 0.04);
  padding: 8px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.editor-toolbar button {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #fff;
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s;
}

.editor-toolbar button:hover {
  background: #2563eb;
  border-color: #2563eb;
}

.preview-container {
  position: relative;
  background: #fff;
  color: #111;
  padding: 30px;
  border-radius: 10px;
  min-height: 380px;
}

.preview-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #2563eb;
  color: #fff;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  padding: 3px 8px;
  border-radius: 12px;
}

.btn-upload {
  width: 100%;
  padding: 10px;
  background: rgba(37, 99, 235, 0.15);
  border: 1px dashed rgba(37, 99, 235, 0.5);
  color: #60a5fa;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-upload:hover {
  background: rgba(37, 99, 235, 0.25);
}

.cover-preview {
  margin-top: 10px;
  border-radius: 8px;
  overflow: hidden;
  max-height: 160px;
}

.cover-preview img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.alert {
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 13px;
}

.alert-success { background: rgba(34, 197, 94, 0.15); border: 1px solid rgba(34, 197, 94, 0.4); color: #86efac; }
.alert-danger { background: rgba(239, 68, 68, 0.15); border: 1px solid rgba(239, 68, 68, 0.4); color: #fca5a5; }

.text-muted { color: rgba(255, 255, 255, 0.4); }
</style>
