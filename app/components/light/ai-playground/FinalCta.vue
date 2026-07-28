<template>
  <section class="section-padding playground-final">
    <div class="container text-center">
      <div v-reveal class="sec-head mb-50">
        <h6 class="sub-title playground-eyebrow mb-25">Get Started</h6>
        <div class="bord pt-25 bord-thin-top d-flex justify-content-center">
          <h2 class="fw-600">
            Open the tools.
            <span class="fw-200">No sign-up required.</span>
          </h2>
        </div>
      </div>
      <a
        v-reveal="{ delay: 150 }"
        :href="aiPlaygroundUrl"
        target="_blank"
        rel="noopener"
        class="butn butn-md radius-30 playground-button playground-button-blue"
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
.playground-final {
  background: var(--play-yellow) !important;
}

.playground-final .playground-eyebrow {
  background: var(--play-blue);
  color: #f8fbff !important;
}

.playground-button-blue {
  border-color: var(--play-blue-deep);
  background: var(--play-blue-deep);
  color: #f8fbff;
}

.playground-button-blue:hover {
  background: var(--play-cream);
  color: var(--play-blue-deep);
}
</style>
