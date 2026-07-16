<template>
  <a href="/contact" class="floating-cta">
    <span>Book a Call</span>
    <span class="icon ti-arrow-top-right ml-10"></span>
  </a>
</template>

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
@media (max-width: 768px) {
  .floating-cta {
    padding: 12px 20px;
    bottom: 20px;
    right: 20px;
  }
}
</style>
