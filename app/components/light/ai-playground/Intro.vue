<template>
  <section class="section-padding playground-intro">
    <div class="container">
      <p v-reveal class="fz-18 opacity-8 mb-50">
        A student in a small town and a director in a corporate tower open the
        same tools, at the same speed, for the same price: nothing.
      </p>
      <div class="row access-stats" v-reveal:stagger>
        <div
          v-for="stat in playgroundAccessStats"
          :key="stat.label"
          class="col-sm-3 sm-mb30"
        >
          <div class="item">
            <h2 class="fz-60 line-height-1">
              <span v-count class="numb-count">{{ stat.value }}</span>
            </h2>
            <span class="sub-title opacity-7">{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { playgroundAccessStats } from "@/l-data/ai-playground";
</script>

<style scoped>
.playground-intro {
  position: relative;
  background: var(--play-cream);
}

.playground-intro::after {
  content: "";
  position: absolute;
  right: -120px;
  top: 40px;
  width: 280px;
  height: 280px;
  border: 52px solid var(--play-yellow);
  border-radius: 50%;
  opacity: 0.28;
  pointer-events: none;
}

.playground-intro .container {
  position: relative;
  z-index: 1;
}

.access-stats {
  padding: 42px 36px;
  border-radius: 24px;
  background: var(--play-blue);
  color: #f8fbff;
  box-shadow: 0 24px 55px rgba(18, 62, 145, 0.18);
}

.access-stats h2,
.access-stats span {
  color: #f8fbff;
}

.access-stats .sub-title {
  opacity: 0.82 !important;
}

@media (max-width: 768px) {
  .access-stats {
    padding: 32px 24px;
  }
}
</style>
