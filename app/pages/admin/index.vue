<template>
  <div class="admin-dashboard-page">
    <!-- Top Navigation Header -->
    <header class="admin-header">
      <div class="container-fluid d-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center gap-20">
          <NuxtLink to="/" class="admin-logo" target="_blank" title="Preview Main Site">
            <img src="/light/assets/imgs/logo-light.svg" alt="MAXY AI" style="width: 120px;" />
          </NuxtLink>
          <span class="badge-role">CMS Dashboard</span>
        </div>

        <div class="d-flex align-items-center gap-15">
          <NuxtLink to="/admin/editor/new" class="btn-create">
            <span class="ti-plus mr-5"></span> Write Article
          </NuxtLink>
          <button @click="handleLogout" class="btn-logout" title="Sign out">
            <span class="ti-power-off"></span> Logout
          </button>
        </div>
      </div>
    </header>

    <!-- Main Content Body -->
    <main class="container-fluid py-40">
      <!-- Stats Cards -->
      <div class="row mb-30">
        <div class="col-md-4 mb-15">
          <div class="stat-card">
            <div class="stat-icon bg-blue"><span class="ti-files"></span></div>
            <div>
              <div class="stat-num">{{ posts.length }}</div>
              <div class="stat-label">Total Articles</div>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-15">
          <div class="stat-card">
            <div class="stat-icon bg-green"><span class="ti-check-box"></span></div>
            <div>
              <div class="stat-num">{{ publishedCount }}</div>
              <div class="stat-label">Published Live</div>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-15">
          <div class="stat-card">
            <div class="stat-icon bg-yellow"><span class="ti-pencil-alt"></span></div>
            <div>
              <div class="stat-num">{{ draftCount }}</div>
              <div class="stat-label">Drafts</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Controls & Search -->
      <div class="card-panel mb-30">
        <div class="d-flex flex-wrap align-items-center justify-content-between gap-15 mb-20">
          <div class="search-box">
            <span class="ti-search search-icon"></span>
            <input
              v-model="searchQuery"
              type="text"
              class="search-input"
              placeholder="Search by title, category, or author..."
            />
          </div>

          <div class="d-flex gap-10">
            <select v-model="filterCategory" class="select-filter">
              <option value="All">All Categories</option>
              <option value="Agentic AI">Agentic AI</option>
              <option value="Software Engineering">Software Engineering</option>
              <option value="Digital Growth">Digital Growth</option>
              <option value="Case Study">Case Study</option>
              <option value="Company News">Company News</option>
            </select>

            <select v-model="filterStatus" class="select-filter">
              <option value="All">All Statuses</option>
              <option value="published">Published</option>
              <option value="draft">Draft</option>
            </select>
          </div>
        </div>

        <!-- Articles Table -->
        <div class="table-responsive">
          <table class="admin-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Author</th>
                <th>Status</th>
                <th>Date</th>
                <th class="text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="loading">
                <td colspan="6" class="text-center py-40 text-muted">
                  Loading articles from Turso Database...
                </td>
              </tr>
              <tr v-else-if="filteredPosts.length === 0">
                <td colspan="6" class="text-center py-40 text-muted">
                  No articles found matching your criteria.
                </td>
              </tr>
              <tr v-for="post in filteredPosts" :key="post.id">
                <td class="col-title">
                  <div class="title-cell">
                    <span class="post-title">{{ post.title }}</span>
                    <span class="post-slug">/blog/{{ post.slug }}</span>
                  </div>
                </td>
                <td>
                  <span class="category-pill">{{ post.category }}</span>
                </td>
                <td>
                  <span class="author-name">{{ post.author_name || 'MAXY AI' }}</span>
                </td>
                <td>
                  <span :class="['status-pill', post.status === 'published' ? 'status-published' : 'status-draft']">
                    {{ post.status === 'published' ? 'Published' : 'Draft' }}
                  </span>
                </td>
                <td class="text-muted fz-13">
                  {{ formatDate(post.published_at || post.created_at) }}
                </td>
                <td class="text-right">
                  <div class="action-buttons">
                    <NuxtLink
                      :to="`/blog/${post.slug}`"
                      target="_blank"
                      class="btn-action view"
                      title="Preview live"
                    >
                      <span class="ti-eye"></span>
                    </NuxtLink>
                    <NuxtLink
                      :to="`/admin/editor/${post.id}`"
                      class="btn-action edit"
                      title="Edit article"
                    >
                      <span class="ti-pencil"></span>
                    </NuxtLink>
                    <button
                      @click="confirmDelete(post)"
                      class="btn-action delete"
                      title="Delete article"
                    >
                      <span class="ti-trash"></span>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
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

useHead({
  title: 'Blog CMS Dashboard | MAXY AI',
  meta: [{ name: 'robots', content: 'noindex, nofollow' }],
});

const posts = ref([]);
const loading = ref(true);
const searchQuery = ref('');
const filterCategory = ref('All');
const filterStatus = ref('All');

const publishedCount = computed(() => posts.value.filter((p) => p.status === 'published').length);
const draftCount = computed(() => posts.value.filter((p) => p.status === 'draft').length);

const filteredPosts = computed(() => {
  return posts.value.filter((post) => {
    const matchesSearch =
      !searchQuery.value ||
      post.title?.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      post.category?.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      post.author_name?.toLowerCase().includes(searchQuery.value.toLowerCase());

    const matchesCategory =
      filterCategory.value === 'All' || post.category === filterCategory.value;

    const matchesStatus =
      filterStatus.value === 'All' || post.status === filterStatus.value;

    return matchesSearch && matchesCategory && matchesStatus;
  });
});

async function fetchPosts() {
  loading.value = true;
  try {
    const res = await $fetch('/api/admin/posts');
    if (res?.success) {
      posts.value = res.data || [];
    }
  } catch (err) {
    console.error('Failed to load posts:', err);
  } finally {
    loading.value = false;
  }
}

function formatDate(dateStr) {
  if (!dateStr) return '-';
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  } catch {
    return dateStr;
  }
}

async function confirmDelete(post) {
  if (!confirm(`Are you sure you want to delete "${post.title}"? This action cannot be undone.`)) {
    return;
  }

  try {
    await $fetch(`/api/admin/posts/${post.id}`, {
      method: 'DELETE',
    });
    posts.value = posts.value.filter((p) => p.id !== post.id);
  } catch (err) {
    alert('Failed to delete post: ' + (err?.data?.statusMessage || err?.message));
  }
}

async function handleLogout() {
  await $fetch('/api/auth/logout', { method: 'POST' });
  await navigateTo('/admin/login');
}

onMounted(() => {
  fetchPosts();
});
</script>

<style scoped>
.admin-dashboard-page {
  min-height: 100vh;
  background: #090c14;
  color: #fff;
  font-family: 'Poppins', sans-serif;
}

.admin-header {
  background: rgba(14, 18, 30, 0.95);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  padding: 16px 24px;
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(12px);
}

.badge-role {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  background: rgba(37, 99, 235, 0.2);
  color: #60a5fa;
  border: 1px solid rgba(37, 99, 235, 0.4);
  padding: 4px 10px;
  border-radius: 20px;
  font-weight: 600;
}

.gap-10 { gap: 10px; }
.gap-15 { gap: 15px; }
.gap-20 { gap: 20px; }

.btn-create {
  display: inline-flex;
  align-items: center;
  background: #2563eb;
  color: #fff;
  padding: 8px 18px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.2s, transform 0.1s;
}

.btn-create:hover {
  background: #1d4ed8;
  color: #fff;
  transform: translateY(-1px);
}

.btn-logout {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
  padding: 8px 14px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-logout:hover {
  background: rgba(239, 68, 68, 0.2);
  color: #fca5a5;
  border-color: rgba(239, 68, 68, 0.4);
}

.stat-card {
  background: rgba(18, 24, 40, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 16px;
}

.stat-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}

.bg-blue { background: rgba(37, 99, 235, 0.2); color: #60a5fa; }
.bg-green { background: rgba(34, 197, 94, 0.2); color: #4ade80; }
.bg-yellow { background: rgba(234, 179, 8, 0.2); color: #facc15; }

.stat-num {
  font-size: 24px;
  font-weight: 700;
  line-height: 1.2;
}

.stat-label {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.55);
}

.card-panel {
  background: rgba(15, 20, 34, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 24px;
}

.search-box {
  position: relative;
  flex: 1;
  min-width: 260px;
  max-width: 400px;
}

.search-icon {
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, 0.4);
}

.search-input {
  width: 100%;
  padding: 10px 14px 10px 38px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: #fff;
  font-size: 13px;
  outline: none;
}

.search-input:focus {
  border-color: #3b82f6;
}

.select-filter {
  padding: 9px 14px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: #fff;
  font-size: 13px;
  outline: none;
}

.select-filter option {
  background: #111827;
  color: #fff;
}

.admin-table {
  width: 100%;
  border-collapse: collapse;
}

.admin-table th {
  padding: 12px 16px;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: rgba(255, 255, 255, 0.5);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  font-weight: 600;
}

.admin-table td {
  padding: 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  font-size: 14px;
  vertical-align: middle;
}

.col-title {
  max-width: 380px;
}

.title-cell {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.post-title {
  font-weight: 600;
  color: #fff;
  line-height: 1.35;
}

.post-slug {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.4);
}

.category-pill {
  display: inline-block;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 12px;
  white-space: nowrap;
}

.author-name {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.75);
}

.status-pill {
  display: inline-block;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.status-published {
  background: rgba(34, 197, 94, 0.15);
  color: #4ade80;
  border: 1px solid rgba(34, 197, 94, 0.3);
}

.status-draft {
  background: rgba(234, 179, 8, 0.15);
  color: #facc15;
  border: 1px solid rgba(234, 179, 8, 0.3);
}

.action-buttons {
  display: inline-flex;
  gap: 8px;
}

.btn-action {
  width: 32px;
  height: 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.04);
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-action.view:hover { background: rgba(37, 99, 235, 0.2); color: #60a5fa; border-color: #3b82f6; }
.btn-action.edit:hover { background: rgba(234, 179, 8, 0.2); color: #facc15; border-color: #eab308; }
.btn-action.delete:hover { background: rgba(239, 68, 68, 0.2); color: #fca5a5; border-color: #ef4444; }

.text-muted { color: rgba(255, 255, 255, 0.5); }
.text-right { text-align: right; }
</style>
