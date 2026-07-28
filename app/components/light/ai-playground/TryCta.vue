<template>
  <section class="section-padding playground-try">
    <div class="container text-center">
      <div v-reveal class="sec-head mb-40">
        <h2 class="fw-600">
          Like what you see?
          <span class="fw-200">Go try it yourself.</span>
        </h2>
      </div>
      <a
        v-reveal="{ delay: 100 }"
        :href="aiPlaygroundUrl"
        target="_blank"
        rel="noopener"
        class="butn butn-md radius-30 playground-button"
      >
        <span class="text">Open AI Playground</span>
        <span class="icon ti-arrow-top-right ml-10"></span>
      </a>
    </div>
  </section>
</template>

<script setup>
import { aiPlaygroundUrl } from "@/l-data/ai-playground";
</script>

<style scoped>
.playground-try {
  background: var(--play-blue) !important;
}

.playground-try h2 {
  color: #f8fbff;
}

.playground-try .fw-200 {
  color: #dce9ff;
}
</style>
