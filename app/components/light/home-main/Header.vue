<template>
  <header class="hero" aria-label="MAXY AI">
    <video
      class="hero-video"
      autoplay
      muted
      loop
      playsinline
      preload="metadata"
      aria-hidden="true"
    >
      <source
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260613_180732_a54afbf6-b30d-470e-861f-669871f09f67.mp4"
        type="video/mp4"
      />
    </video>

    <div class="hero-overlay" aria-hidden="true"></div>

    <div class="hero-content">
      <h1 class="hero-title text-glow">
        Your AI transformation,<br> engineered.
      </h1>

      <p class="hero-description">
        Production-grade agentic AI for enterprises — from your first agent to a full transformation roadmap.
      </p>

      <NuxtLink to="/contact" class="button button-glow">
        Book a Strategy Call
      </NuxtLink>
    </div>

    <div class="sound-indicator" aria-label="Experience with sound">
      <div class="sound-circle" aria-hidden="true">
        <span class="sound-bar"></span>
      </div>
      <div class="sound-copy">
        <p>Experience</p>
        <p>with sound</p>
      </div>
    </div>
  </header>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  const heroVideo = document.querySelector(".hero-video");
  if (heroVideo) {
    const playPromise = heroVideo.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        /* CSS hero background or poster remains visible if autoplay is blocked. */
      });
    }
  }
});
</script>

<style scoped>
:root {
  --ease-luxury: cubic-bezier(0.22, 1, 0.36, 1);
}

.text-glow {
  text-shadow:
    0 0 40px rgba(255, 255, 255, 0.4),
    0 0 80px rgba(255, 255, 255, 0.2),
    0 0 120px rgba(255, 255, 255, 0.1);
}

.button-glow {
  box-shadow:
    0 0 20px rgba(255, 255, 255, 0.3),
    0 0 40px rgba(255, 255, 255, 0.1);
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 14px 32px;
  border-radius: 999px;
  background: #fff;
  color: #000;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.025em;
  white-space: nowrap;
  cursor: pointer;
  transition:
    background-color 300ms ease,
    transform 300ms cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 300ms ease;
  text-decoration: none;
}

.button:hover {
  background: rgba(255, 255, 255, 0.9);
  transform: translateY(-2px);
}

.button:active {
  transform: translateY(0);
}

.hero {
  position: relative;
  height: 100vh;
  min-height: 640px;
  overflow: hidden;
  isolation: isolate;
  background:
    radial-gradient(circle at 52% 45%, rgba(29, 78, 216, 0.45), transparent 46%),
    linear-gradient(135deg, #0a0e1a 0%, #030712 58%, #000000 100%);
}

.hero-video {
  position: absolute;
  inset: 0;
  z-index: -3;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.01);
  filter: grayscale(80%) sepia(20%) hue-rotate(180deg) opacity(0.5);
}

.hero-overlay {
  position: absolute;
  inset: 0;
  z-index: -2;
  background:
    linear-gradient(180deg, rgba(10, 14, 26, 0.5) 0%, rgba(10, 14, 26, 0.1) 55%, rgba(10, 14, 26, 0.6) 100%),
    rgba(3, 7, 18, 0.3);
}

.hero-content {
  position: absolute;
  inset: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
  text-align: center;
  transform: translateY(-40px);
}

.hero-title {
  max-width: 1200px;
  font-family: "Instrument Serif", Georgia, serif;
  font-size: clamp(56px, 7.7vw, 110px);
  font-weight: 400;
  line-height: 0.9;
  letter-spacing: -0.035em;
  color: #fff;
  text-wrap: balance;
}

.hero-description {
  max-width: 576px;
  margin-top: 28px;
  color: rgba(255, 255, 255, 0.72);
  font-size: 16px;
  line-height: 1.65;
  text-wrap: balance;
}

.hero-content .button {
  margin-top: 36px;
}

.sound-indicator {
  position: absolute;
  bottom: 32px;
  left: 32px;
  z-index: 20;
  display: flex;
  align-items: center;
  gap: 12px;
}

.sound-circle {
  position: relative;
  display: grid;
  width: 40px;
  height: 40px;
  place-items: center;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.01);
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}

.sound-circle::before {
  position: absolute;
  inset: 0;
  padding: 1.4px;
  border-radius: inherit;
  background: linear-gradient(
    180deg,
    rgba(255,255,255,0.45) 0%,
    rgba(255,255,255,0.15) 20%,
    transparent 40%,
    transparent 60%,
    rgba(255,255,255,0.15) 80%,
    rgba(255,255,255,0.45) 100%
  );
  content: "";
  pointer-events: none;
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}

.sound-bar {
  width: 12px;
  height: 2px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.75);
}

.sound-copy {
  color: rgba(255, 255, 255, 0.6);
  font-size: 12px;
  line-height: 1.35;
}

@media (max-width: 767px) {
  .hero {
    min-height: 620px;
  }
  .hero-content {
    transform: translateY(0);
  }
  .hero-title {
    max-width: 680px;
    font-size: clamp(42px, 11vw, 64px);
    line-height: 0.95;
  }
  .hero-description {
    max-width: 520px;
    margin-top: 20px;
    font-size: 14px;
  }
  .hero-content .button {
    margin-top: 24px;
  }
  .sound-indicator {
    display: none;
  }
}

@media (max-width: 420px) {
  .hero-title {
    font-size: 42px;
  }
  .button {
    padding-inline: 26px;
  }
}
</style>
