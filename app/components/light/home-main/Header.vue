<template>
  <header class="hero" aria-label="MAXY AI">
    <!-- Background: ken-burns + gradient, murni dekoratif -->
    <div class="hero-bg" aria-hidden="true">
      <div class="hero-bg-img"></div>
      <div class="hero-bg-grad"></div>
    </div>

    <div class="container hero-inner">
      <!-- Status pill -->
      <div class="hero-eyebrow">
        <span class="hero-dot"><span class="hero-dot-ping"></span></span>
        <span class="hero-eyebrow-text">Agentic AI — Deployed in Production</span>
      </div>

      <!-- Headline -->
      <h1 class="hero-title">
        <span class="hero-line">Your AI transformation,</span>
        <span class="hero-line hero-line-accent">engineered.</span>
      </h1>

      <!-- Deskripsi + CTA, offset kanan seperti referensi -->
      <div class="row justify-content-end">
        <div class="col-lg-5 col-md-8">
          <p class="hero-desc">
            <strong>Production-grade agentic AI for enterprises</strong>
            <span> — from your first agent to a full transformation roadmap across
            Singapore, Southeast Asia, and the United States.</span>
          </p>
          <div class="hero-ctas">
            <NuxtLink to="/contact" class="hero-cta-primary">
              Book a Strategy Call
              <span aria-hidden="true">↗</span>
            </NuxtLink>
            <NuxtLink to="/solutions" class="hero-cta-secondary">
              Explore our solutions
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Stats: hairline + 4 kolom, terdorong ke bawah viewport -->
      <div class="hero-stats-wrap">
        <div class="hero-hairline"></div>
        <div class="hero-stats">
          <div class="hero-stat">
            <span v-count class="hero-stat-num">50+</span>
            <span class="hero-stat-label">Enterprises<br />served</span>
          </div>
          <div class="hero-stat">
            <span v-count class="hero-stat-num">6</span>
            <span class="hero-stat-label">Markets with<br />live deployments</span>
          </div>
          <!-- TODO(user): 2 angka real di bawah ini sebelum merge -->
          <div class="hero-stat">
            <span v-count class="hero-stat-num">XX+</span>
            <span class="hero-stat-label">Agents in<br />production</span>
          </div>
          <div class="hero-stat">
            <span v-count class="hero-stat-num">X</span>
            <span class="hero-stat-label">Weeks avg.<br />to production</span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

let tl, split, cleanupMagnetic;

onMounted(() => {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduce) {
    gsap.registerPlugin(SplitText);
    split = new SplitText(".hero-line", { type: "words", mask: "words" });

    tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.from(".hero-eyebrow", { autoAlpha: 0, y: 12, duration: 0.7 }, 0)
      .from(split.words, {
        yPercent: 115,
        rotate: 3,
        transformOrigin: "0% 100%",
        duration: 0.8,
        stagger: 0.07,
      }, 0.15)
      .from(".hero-desc", { autoAlpha: 0, y: 20, duration: 0.8 }, 0.7)
      .from(".hero-ctas", { autoAlpha: 0, y: 20, duration: 0.8 }, 0.85)
      .from(".hero-hairline", { scaleX: 0, transformOrigin: "0 0", duration: 0.9 }, 0.9)
      .from(".hero-stat", { autoAlpha: 0, y: 20, duration: 0.7, stagger: 0.1 }, 1.0);

    cleanupMagnetic = initMagnetic();
  }
});

onUnmounted(() => {
  tl?.kill();
  split?.revert();
  cleanupMagnetic?.();
});

// Magnetic hover untuk CTA primary — desktop pointer only.
function initMagnetic() {
  if (window.matchMedia("(hover: none)").matches) return;
  const btn = document.querySelector(".hero-cta-primary");
  if (!btn) return;
  const xTo = gsap.quickTo(btn, "x", { duration: 0.4, ease: "power3" });
  const yTo = gsap.quickTo(btn, "y", { duration: 0.4, ease: "power3" });
  const move = (e) => {
    const r = btn.getBoundingClientRect();
    xTo((e.clientX - r.left - r.width / 2) * 0.3);
    yTo((e.clientY - r.top - r.height / 2) * 0.3);
  };
  const leave = () => { xTo(0); yTo(0); };
  btn.addEventListener("mousemove", move);
  btn.addEventListener("mouseleave", leave);
  return () => {
    btn.removeEventListener("mousemove", move);
    btn.removeEventListener("mouseleave", leave);
  };
}
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100svh;
  display: flex;
  overflow: hidden;
  background: #0d0d0d;
  isolation: isolate;
}
.hero-inner {
  display: flex;
  flex-direction: column;
  flex: 1;
  position: relative;
  z-index: 1;
  padding-top: 140px;   /* clear fixed navbar */
  padding-bottom: 48px;
}

/* Background */
.hero-bg { position: absolute; inset: 0; z-index: 0; }
.hero-bg-img {
  position: absolute;
  inset: -3%;
  background: url("/light/assets/imgs/header/bg1.jpg") center / cover no-repeat;
  animation: hero-kenburns 24s ease-in-out infinite alternate;
  will-change: transform;
}
@keyframes hero-kenburns {
  from { transform: scale(1.03) translate(-0.5%, 0); }
  to   { transform: scale(1.09) translate(0.5%, -0.5%); }
}
.hero-bg-grad {
  position: absolute; inset: 0;
  background: linear-gradient(to right,
    rgba(13,13,13,.82), rgba(13,13,13,.45) 45%, rgba(13,13,13,.12));
}

/* Eyebrow */
.hero-eyebrow { display: flex; align-items: center; gap: 10px; }
.hero-eyebrow-text {
  font-size: 11px; text-transform: uppercase; letter-spacing: .32em;
  color: rgba(255,255,255,.65);
}
.hero-dot { position: relative; width: 7px; height: 7px; }
.hero-dot::after {
  content: ""; position: absolute; inset: 0; border-radius: 50%;
  background: #fbb041;
}
.hero-dot-ping {
  position: absolute; inset: 0; border-radius: 50%;
  background: rgba(251,176,65,.7);
  animation: hero-ping 1.6s cubic-bezier(0, 0, .2, 1) infinite;
}
@keyframes hero-ping {
  from { transform: scale(1); opacity: .8; }
  to   { transform: scale(2.6); opacity: 0; }
}

/* Headline */
.hero-title {
  font-family: "Instrument Serif", serif;
  font-weight: 400;
  margin: 32px 0 0;
  color: #f5f1e8;
  letter-spacing: -0.01em;
}
.hero-line { display: block; line-height: 0.92; font-size: clamp(44px, 8vw, 128px); }
.hero-line-accent {
  font-style: italic;
  font-size: clamp(48px, 9vw, 146px);
  margin-top: 0.1em;
  color: #fbb041;
  text-shadow: 0 0 24px rgba(251,176,65,.18);
  padding-bottom: 0.08em; /* ruang descender italic agar tidak terpotong mask */
}

/* Deskripsi + CTA */
.hero-desc {
  margin-top: 48px; max-width: 520px;
  font-size: 16px; line-height: 1.6;
}
.hero-desc strong { color: #fff; font-weight: 500; }
.hero-desc span { color: rgba(255,255,255,.6); }
.hero-ctas {
  margin-top: 32px; display: flex; flex-wrap: wrap;
  align-items: center; gap: 16px 24px;
}
.hero-cta-primary {
  display: inline-flex; align-items: center; gap: 8px;
  min-height: 48px; padding: 12px 28px; border-radius: 999px;
  background: #fbb041; color: #0d0d0d;
  font-weight: 600; font-size: 14px;
  transition: background-color .3s, color .3s;
}
.hero-cta-primary:hover { background: #fff; color: #0d0d0d; }
.hero-cta-secondary {
  display: inline-flex; align-items: center; min-height: 44px;
  color: rgba(255,255,255,.8); font-size: 14px;
  text-decoration: underline;
  text-underline-offset: 6px;
  text-decoration-color: rgba(255,255,255,.3);
  transition: color .3s, text-decoration-color .3s;
}
.hero-cta-secondary:hover { color: #fff; text-decoration-color: #fbb041; }
.hero-cta-primary:focus-visible, .hero-cta-secondary:focus-visible {
  outline: 2px solid #fbb041; outline-offset: 3px;
}

/* Stats */
.hero-stats-wrap { margin-top: auto; padding-top: 64px; }
.hero-hairline { height: 1px; background: rgba(255,255,255,.14); }
.hero-stats {
  display: grid; grid-template-columns: repeat(4, 1fr);
  gap: 24px; margin-top: 32px;
}
.hero-stat { display: flex; flex-direction: column; }
.hero-stat-num {
  font-family: "Instrument Serif", serif;
  font-size: clamp(34px, 3.5vw, 46px); line-height: 1;
  color: #f5f1e8; letter-spacing: -0.02em;
}
.hero-stat-label {
  margin-top: 10px; font-size: 11px; text-transform: uppercase;
  letter-spacing: .18em; line-height: 1.5; color: rgba(255,255,255,.55);
}

/* Responsif */
@media (max-width: 991px) {
  .hero-inner { padding-top: 120px; }
  .hero-desc { margin-top: 36px; }
}
@media (max-width: 767px) {
  .hero-stats { grid-template-columns: repeat(2, 1fr); gap: 28px 16px; }
  .hero-stats-wrap { padding-top: 48px; }
}

/* Reduced motion: matikan loop animations */
@media (prefers-reduced-motion: reduce) {
  .hero-bg-img, .hero-dot-ping { animation: none; }
}
</style>
