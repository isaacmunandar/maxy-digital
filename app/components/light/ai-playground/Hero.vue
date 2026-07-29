<template>
  <header
    class="header page-header bg-img section-padding playground-hero"
    style="background-image: url('/light/assets/imgs/ai-playground/ai-playground-hero-v2.jpg')"
    data-overlay-dark="0"
  >
    <div class="container pt-100">
      <div class="text-center">
        <h6 v-reveal class="sub-title mb-15 hero-kicker">AI Playground</h6>
        <h1 class="hero-split">
          Free AI learning tools. No account. No payment.
        </h1>
        <p v-reveal="{ delay: 150 }" class="mt-20 hero-copy">
          Six browser-based tools for coding, cybersecurity, and business
          strategy from MAXY Academy - open to anyone who wants to learn.
        </p>
        <a
          v-reveal="{ delay: 200 }"
          :href="aiPlaygroundUrl"
          target="_blank"
          rel="noopener"
          class="butn butn-md radius-30 mt-30 playground-button hero-cta"
        >
          <span class="text">Open AI Playground Now</span>
          <span class="icon ti-arrow-top-right ml-10"></span>
        </a>
        <div v-reveal="{ delay: 300 }" class="mt-25 hero-breadcrumb">
          <NuxtLink to="/">Home</NuxtLink>
          <span class="padding-rl-20">|</span>
          <span>AI Playground</span>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { aiPlaygroundUrl } from "@/l-data/ai-playground";
</script>

<style scoped>
.playground-hero {
  isolation: isolate;
  background-position: center;
}

.playground-hero::before {
  background: linear-gradient(
    110deg,
    rgba(18, 62, 145, 0.88),
    rgba(30, 95, 204, 0.66),
    rgba(20, 38, 79, 0.72)
  );
  opacity: 1;
}

.playground-hero h1 {
  max-width: 980px;
  margin-inline: auto;
  color: #f8fbff;
  text-shadow: 0 8px 30px rgba(18, 62, 145, 0.35);
}

.hero-copy {
  max-width: 680px;
  margin-inline: auto;
  color: #f1f6ff !important;
}

.hero-breadcrumb,
.hero-breadcrumb a,
.hero-breadcrumb span {
  color: #f1f6ff;
}

.hero-cta {
  box-shadow: 0 18px 42px rgba(18, 62, 145, 0.34);
}

@media (max-width: 768px) {
  .playground-hero {
    background-position: 62% center;
  }
}
</style>
