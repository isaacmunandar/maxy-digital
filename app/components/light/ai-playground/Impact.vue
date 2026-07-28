<template>
  <section class="section-padding playground-impact">
    <div class="container">
      <div v-reveal class="sec-head mb-80">
        <h6 class="sub-title playground-eyebrow mb-25">Why This Matters</h6>
        <div class="bord pt-25 bord-thin-top d-flex align-items-center">
          <h2 class="fw-600">
            Three ways to <span class="fw-200">stand with us.</span>
          </h2>
        </div>
      </div>
      <div class="row" v-reveal:stagger>
        <div
          v-for="track in playgroundTracks"
          :key="track.title"
          class="col-lg-4 sm-mb40 impact-column"
        >
          <h6 class="sub-title mb-20 bord-thin-bottom pb-20">
            {{ track.title }}
          </h6>
          <p class="opacity-8">{{ track.desc }}</p>
        </div>
      </div>
      <div
        class="row mt-80 pt-50 bord-thin-top align-items-center justify-content-center"
        v-reveal:stagger
      >
        <div
          v-for="logo in playgroundPartnerLogos"
          :key="logo"
          class="col-4 col-md-2 text-center mb-30"
        >
          <div class="partner-logo">
            <img
              :src="`/light/assets/imgs/partners/${logo}`"
              :alt="`${logo.replace('.png', '').replace(/-/g, ' ')} logo`"
              style="max-height: 40px; width: auto; max-width: 100%"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {
  playgroundPartnerLogos,
  playgroundTracks,
} from "@/l-data/ai-playground";
</script>

<style scoped>
.playground-impact {
  background: var(--play-cream) !important;
}

.impact-column {
  padding: 32px;
  border-radius: 18px;
}

.impact-column:nth-child(2) {
  background: var(--play-sky);
}

.impact-column h6 {
  color: var(--play-blue-deep);
}

.partner-logo {
  display: grid;
  min-height: 84px;
  place-items: center;
  padding: 16px;
  border: 1px solid rgba(30, 95, 204, 0.16);
  border-radius: 16px;
  background: #f8fbff;
  box-shadow: 0 12px 28px rgba(18, 62, 145, 0.08);
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.partner-logo:hover {
  transform: translateY(-4px);
}

@media (max-width: 768px) {
  .impact-column {
    padding: 26px 22px;
  }
}
</style>
