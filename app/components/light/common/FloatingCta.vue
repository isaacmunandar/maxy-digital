<template>
  <a v-if="isPlayground" href="https://ai.maxy.academy/" target="_blank" rel="noopener" class="floating-cta floating-cta-playground">
    <span>Open AI Playground</span>
    <span class="icon ti-arrow-top-right ml-10"></span>
  </a>
  <NuxtLink v-else to="/contact" class="floating-cta">
    <span>Book a Call</span>
    <span class="icon ti-arrow-top-right ml-10"></span>
  </NuxtLink>
</template>

<script setup>
const route = useRoute();
const isPlayground = computed(() => route.path.startsWith('/ai-playground'));
</script>

<style scoped>
.floating-cta {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 999;
  display: inline-flex;
  align-items: center;
  background: #1a1a1a;
  color: #fff;
  padding: 14px 28px;
  border-radius: 30px;
  border: 1px solid #1a1a1a;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  transition: all 0.4s;
}
.floating-cta:hover {
  background: #fff;
  color: #1a1a1a;
}
.floating-cta-playground {
  background: #2563eb;
  border-color: #2563eb;
}
.floating-cta-playground:hover {
  background: #fbb041;
  border-color: #fbb041;
  color: #1a1a1a;
}
@media (max-width: 768px) {
  .floating-cta {
    padding: 12px 20px;
    bottom: 20px;
    right: 20px;
  }
}
</style>
