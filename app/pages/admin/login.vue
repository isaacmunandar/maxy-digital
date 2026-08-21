<template>
  <div class="admin-login-page">
    <div class="login-card">
      <div class="logo text-center mb-30">
        <img src="/light/assets/imgs/logo-light.svg" alt="MAXY AI" style="width: 150px;" />
        <p class="text-muted mt-10 fz-13">Admin & Editorial Content Manager</p>
      </div>

      <div v-if="errorMessage" class="alert-box mb-20">
        {{ errorMessage }}
      </div>

      <form @submit.prevent="handleLogin">
        <div class="form-group mb-20">
          <label class="label">Email / Username</label>
          <input
            v-model="username"
            type="email"
            class="input-control"
            placeholder="admin@maxy.asia"
            required
            autocomplete="username"
          />
        </div>

        <div class="form-group mb-30">
          <label class="label">Password</label>
          <input
            v-model="password"
            type="password"
            class="input-control"
            placeholder="••••••••••••"
            required
            autocomplete="current-password"
          />
        </div>

        <button type="submit" class="submit-btn" :disabled="loading">
          <span v-if="loading">Signing in...</span>
          <span v-else>Sign In to Admin</span>
        </button>
      </form>

      <div class="footer-links text-center mt-30">
        <NuxtLink to="/" class="fz-13 text-muted hover-white">← Back to Website</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: false,
});

useHead({
  title: 'Admin Login | MAXY AI',
  meta: [{ name: 'robots', content: 'noindex, nofollow' }],
});

const username = ref('');
const password = ref('');
const loading = ref(false);
const errorMessage = ref('');

const router = useRouter();

async function handleLogin() {
  loading.value = true;
  errorMessage.value = '';

  try {
    const res = await $fetch('/api/auth/login', {
      method: 'POST',
      body: {
        username: username.value,
        password: password.value,
      },
    });

    if (res?.success) {
      await router.push('/admin');
    }
  } catch (err) {
    errorMessage.value = err?.data?.statusMessage || err?.message || 'Invalid login credentials.';
  } finally {
    loading.value = false;
  }
}
</script>

<style scoped>
.admin-login-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at 50% 30%, #151a30 0%, #090c15 60%, #05070d 100%);
  padding: 24px;
  color: #fff;
  font-family: 'Poppins', sans-serif;
}

.login-card {
  width: 100%;
  max-width: 440px;
  background: rgba(18, 22, 38, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 40px 32px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(16px);
}

.text-muted {
  color: rgba(255, 255, 255, 0.55);
}

.label {
  display: block;
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 8px;
  color: rgba(255, 255, 255, 0.8);
}

.input-control {
  width: 100%;
  padding: 13px 16px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 10px;
  color: #fff;
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s, background-color 0.2s;
}

.input-control:focus {
  border-color: #3b82f6;
  background: rgba(255, 255, 255, 0.08);
}

.submit-btn {
  width: 100%;
  padding: 14px;
  border-radius: 10px;
  border: none;
  background: #2563eb;
  color: #fff;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.1s;
}

.submit-btn:hover:not(:disabled) {
  background: #1d4ed8;
  transform: translateY(-1px);
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.alert-box {
  background: rgba(239, 68, 68, 0.15);
  border: 1px solid rgba(239, 68, 68, 0.4);
  color: #fca5a5;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 13px;
}

.hover-white:hover {
  color: #fff;
}
</style>
