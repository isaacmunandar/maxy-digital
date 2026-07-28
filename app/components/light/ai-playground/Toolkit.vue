<template>
  <section class="services section-padding playground-toolkit">
    <div class="container">
      <div v-reveal class="sec-head mb-80">
        <h6 class="sub-title playground-eyebrow mb-25">The Toolkit</h6>
        <div class="bord pt-25 bord-thin-top d-flex align-items-center">
          <h2 class="fw-600">
            Learn by doing, <span class="fw-200">not by reading.</span>
          </h2>
        </div>
      </div>
      <div class="row tool-grid" v-reveal:stagger>
        <div
          v-for="tool in playgroundTools"
          :key="tool.slug"
          class="col-lg-4 col-md-6 mb-30"
        >
          <div
            class="tool-card radius-15"
            :class="{ 'is-flipped': flipped.has(tool.slug) }"
            role="button"
            tabindex="0"
            :aria-pressed="flipped.has(tool.slug)"
            :aria-label="`Preview ${tool.name}`"
            @click="toggleFlip(tool.slug)"
            @keydown.enter.prevent="toggleFlip(tool.slug)"
            @keydown.space.prevent="toggleFlip(tool.slug)"
          >
            <div class="tool-card-inner">
              <div class="tool-card-face tool-card-front item-box radius-15">
                <div class="icon mb-40 opacity-5">
                  <img :src="tool.icon" alt="" />
                </div>
                <h5 class="mb-15">{{ tool.name }}</h5>
                <p>{{ tool.desc }}</p>
                <span class="tool-card-hint">Hover or tap to preview</span>
              </div>
              <div class="tool-card-face tool-card-back">
                <img
                  :src="tool.shot"
                  :alt="`${tool.name} screenshot`"
                  class="tool-card-shot"
                />
                <div class="tool-card-overlay">
                  <h5 class="mb-20">{{ tool.name }}</h5>
                  <a
                    :href="`${aiPlaygroundUrl}${tool.slug}`"
                    target="_blank"
                    rel="noopener"
                    class="tool-card-cta"
                    :tabindex="flipped.has(tool.slug) ? 0 : -1"
                    @click.stop
                  >
                    <span class="text">Open {{ tool.name }}</span>
                    <span class="icon ti-arrow-top-right ml-10"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {
  aiPlaygroundUrl,
  playgroundTools,
} from "@/l-data/ai-playground";

const flipped = reactive(new Set());

function toggleFlip(slug) {
  if (flipped.has(slug)) flipped.delete(slug);
  else flipped.add(slug);
}
</script>

<style scoped>
.playground-toolkit {
  background: var(--play-sky) !important;
}

.tool-card {
  perspective: 1400px;
  cursor: pointer;
  outline-offset: 6px;
}

.tool-card-inner {
  position: relative;
  width: 100%;
  height: 380px;
  transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
  transform-style: preserve-3d;
}

.tool-card:hover .tool-card-inner,
.tool-card.is-flipped .tool-card-inner {
  transform: rotateY(180deg) scale(1.04);
}

.tool-card-face {
  position: absolute;
  inset: 0;
  overflow: hidden;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

.tool-card-front {
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(30, 95, 204, 0.18);
  box-shadow: 0 20px 45px rgba(18, 62, 145, 0.1);
}

.tool-card-front::after {
  content: "";
  position: absolute;
  right: -70px;
  bottom: -80px;
  width: 210px;
  height: 210px;
  border: 38px solid currentColor;
  border-radius: 50%;
  opacity: 0.08;
  pointer-events: none;
}

.tool-grid > div:nth-child(3n + 1) .tool-card-front {
  background: var(--play-blue);
  color: #f8fbff;
}

.tool-grid > div:nth-child(3n + 2) .tool-card-front {
  background: var(--play-yellow);
  color: var(--play-ink);
}

.tool-grid > div:nth-child(3n + 3) .tool-card-front {
  background: var(--play-cream);
  color: var(--play-blue-deep);
}

.tool-card-front h5,
.tool-card-front p,
.tool-card-front span {
  color: inherit;
}

.tool-card-front .icon {
  display: grid;
  width: 72px;
  height: 72px;
  margin-bottom: 40px;
  place-items: center;
  border-radius: 20px;
  background: rgba(248, 251, 255, 0.9);
  opacity: 1 !important;
  box-shadow: 0 12px 25px rgba(18, 62, 145, 0.15);
}

.tool-card-front .icon img {
  width: 56px;
}

.tool-card-hint {
  display: block;
  margin-top: 20px;
  font-size: 12px;
  opacity: 0.72;
}

.tool-card-back {
  transform: rotateY(180deg);
  border: 1px solid rgba(30, 95, 204, 0.24);
  border-radius: 15px;
}

.tool-card-shot {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.tool-card-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 30px;
  background: linear-gradient(
    180deg,
    rgba(18, 62, 145, 0) 32%,
    rgba(18, 62, 145, 0.9) 100%
  );
}

.tool-card-overlay h5 {
  position: relative;
  z-index: 2;
  color: #f8fbff;
}

.tool-card-cta {
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  min-height: 44px;
  padding: 10px 22px;
  border-radius: 30px;
  background: var(--play-yellow);
  color: var(--play-blue-deep);
  transition:
    transform 0.3s cubic-bezier(0.16, 1, 0.3, 1),
    background-color 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.tool-card-cta:hover {
  background: #f8fbff;
  color: var(--play-blue-deep);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .tool-card-inner {
    height: 340px;
  }

  .tool-card-front {
    padding: 40px 30px;
  }
}
</style>
