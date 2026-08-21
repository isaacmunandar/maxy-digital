<template>
  <div class="admin-dashboard-page">
    <header class="admin-header">
      <div class="container-fluid d-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center gap-20">
          <NuxtLink to="/admin" class="btn-back" title="Back to Dashboard">
            <span class="ti-arrow-left mr-5"></span> Back
          </NuxtLink>
          <span class="badge-role">Manage Categories</span>
        </div>
        <div class="d-flex align-items-center gap-15">
          <button @click="openCreateModal" class="btn-create">
            <span class="ti-plus mr-5"></span> New Category
          </button>
        </div>
      </div>
    </header>

    <main class="container-fluid py-40">
      <div v-if="successMsg" class="alert alert-success mb-20">{{ successMsg }}</div>
      <div v-if="errorMsg" class="alert alert-danger mb-20">{{ errorMsg }}</div>

      <div class="card-panel">
        <div class="table-responsive">
          <table class="admin-table">
            <thead>
              <tr>
                <th>Category Name</th>
                <th>URL Slug</th>
                <th>Created At</th>
                <th class="text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="loading">
                <td colspan="4" class="text-center py-40 text-muted">Loading categories...</td>
              </tr>
              <tr v-else-if="categories.length === 0">
                <td colspan="4" class="text-center py-40 text-muted">No categories found.</td>
              </tr>
              <tr v-for="cat in categories" :key="cat.id">
                <td class="col-title">
                  <span class="post-title">{{ cat.name }}</span>
                  <span v-if="cat.id === 'cat-uncategorized'" class="badge-default ml-10">Default</span>
                </td>
                <td><span class="text-muted">{{ cat.slug }}</span></td>
                <td class="text-muted fz-13">{{ formatDate(cat.created_at) }}</td>
                <td class="text-right">
                  <div class="action-buttons" v-if="cat.id !== 'cat-uncategorized'">
                    <button @click="openEditModal(cat)" class="btn-action edit" title="Edit category">
                      <span class="ti-pencil"></span>
                    </button>
                    <button @click="confirmDelete(cat)" class="btn-action delete" title="Delete category">
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

    <!-- Modal Form -->
    <div v-if="showModal" class="modal-overlay">
      <div class="modal-content card-panel">
        <h4 class="mb-20">{{ isEditing ? 'Edit Category' : 'New Category' }}</h4>
        <div class="form-group mb-20">
          <label class="form-label">Category Name *</label>
          <input v-model="form.name" type="text" class="input-title" placeholder="e.g. Artificial Intelligence" @keyup.enter="saveCategory" />
        </div>
        <div class="d-flex justify-content-end gap-10 mt-30">
          <button @click="closeModal" class="btn-secondary">Cancel</button>
          <button @click="saveCategory" class="btn-primary" :disabled="saving">
            {{ saving ? 'Saving...' : 'Save Category' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: false,
  middleware: 'admin',
});

useHead({
  title: 'Manage Categories | Admin CMS',
  meta: [{ name: 'robots', content: 'noindex, nofollow' }],
});

const categories = ref([]);
const loading = ref(true);
const saving = ref(false);
const showModal = ref(false);
const isEditing = ref(false);
const currentId = ref(null);
const form = ref({ name: '' });
const successMsg = ref('');
const errorMsg = ref('');

const fetchCategories = async () => {
  loading.value = true;
  try {
    const res = await $fetch('/api/admin/categories');
    if (res?.success) {
      categories.value = res.data;
    }
  } catch (err) {
    console.error(err);
    errorMsg.value = 'Failed to load categories';
  } finally {
    loading.value = false;
  }
};

const openCreateModal = () => {
  isEditing.value = false;
  currentId.value = null;
  form.value.name = '';
  showModal.value = true;
};

const openEditModal = (cat) => {
  isEditing.value = true;
  currentId.value = cat.id;
  form.value.name = cat.name;
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
  form.value.name = '';
};

const saveCategory = async () => {
  if (!form.value.name.trim()) return;
  saving.value = true;
  errorMsg.value = '';
  successMsg.value = '';

  try {
    if (isEditing.value) {
      await $fetch(`/api/admin/categories/${currentId.value}`, {
        method: 'PUT',
        body: { name: form.value.name },
      });
      successMsg.value = 'Category updated successfully!';
    } else {
      await $fetch('/api/admin/categories', {
        method: 'POST',
        body: { name: form.value.name },
      });
      successMsg.value = 'Category created successfully!';
    }
    closeModal();
    fetchCategories();
    setTimeout(() => { successMsg.value = ''; }, 3000);
  } catch (err) {
    errorMsg.value = err?.data?.statusMessage || err?.message || 'Save failed';
  } finally {
    saving.value = false;
  }
};

const confirmDelete = async (cat) => {
  if (confirm(`Are you sure you want to delete "${cat.name}"? All related articles will be moved to Uncategorized.`)) {
    try {
      await $fetch(`/api/admin/categories/${cat.id}`, { method: 'DELETE' });
      successMsg.value = 'Category deleted successfully!';
      fetchCategories();
      setTimeout(() => { successMsg.value = ''; }, 3000);
    } catch (err) {
      errorMsg.value = err?.data?.statusMessage || err?.message || 'Delete failed';
    }
  }
};

const formatDate = (dateString) => {
  if (!dateString) return '';
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric', month: 'short', day: 'numeric',
  });
};

onMounted(() => {
  fetchCategories();
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

.badge-role {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  background: rgba(59, 130, 246, 0.15);
  color: #60a5fa;
  padding: 4px 10px;
  border-radius: 100px;
  border: 1px solid rgba(59, 130, 246, 0.3);
}

.btn-create {
  background: #2563eb;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.2s;
}

.btn-create:hover { background: #1d4ed8; }

.btn-primary {
  background: #2563eb;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
}
.btn-primary:hover:not(:disabled) { background: #1d4ed8; }

.btn-secondary {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #fff;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
}
.btn-secondary:hover { background: rgba(255, 255, 255, 0.15); }

.card-panel {
  background: rgba(15, 20, 34, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 24px;
}

.admin-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
}

.admin-table th {
  text-align: left;
  padding: 12px 16px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.admin-table td {
  padding: 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  vertical-align: middle;
}

.post-title {
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
}

.badge-default {
  font-size: 10px;
  background: rgba(255,255,255,0.1);
  padding: 2px 6px;
  border-radius: 4px;
}

.text-muted { color: rgba(255, 255, 255, 0.5); }
.text-center { text-align: center; }
.text-right { text-align: right; }
.ml-10 { margin-left: 10px; }
.mb-20 { margin-bottom: 20px; }
.mt-30 { margin-top: 30px; }
.gap-10 { gap: 10px; }
.gap-15 { gap: 15px; }
.gap-20 { gap: 20px; }

.action-buttons {
  display: flex;
  gap: 8px;
  justify-content: flex-end;
}

.btn-action {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  color: #fff;
}
.btn-action.edit { background: rgba(59, 130, 246, 0.15); color: #60a5fa; }
.btn-action.edit:hover { background: #3b82f6; color: #fff; }
.btn-action.delete { background: rgba(239, 68, 68, 0.15); color: #f87171; }
.btn-action.delete:hover { background: #ef4444; color: #fff; }

.alert-success { background: rgba(34, 197, 94, 0.15); border: 1px solid rgba(34, 197, 94, 0.4); color: #86efac; padding: 12px 16px; border-radius: 8px; font-size: 13px; }
.alert-danger { background: rgba(239, 68, 68, 0.15); border: 1px solid rgba(239, 68, 68, 0.4); color: #fca5a5; padding: 12px 16px; border-radius: 8px; font-size: 13px; }

.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  width: 100%;
  max-width: 400px;
  background: #0f1422;
}

.form-label {
  display: block;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.65);
  margin-bottom: 8px;
}

.input-title {
  width: 100%;
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 10px;
  color: #fff;
  font-size: 15px;
  outline: none;
}
.input-title:focus { border-color: #3b82f6; }
</style>
