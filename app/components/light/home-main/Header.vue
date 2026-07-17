<template>
  <header class="header main-header bg-img" style="background-image: url('/light/assets/imgs/header/bg1.jpg'); background-color: #0d0d0d" data-overlay-dark="8">
    <div class="container pt-100">
      <div class="row justify-content-end">
        <div class="col-lg-6">
          <div class="text mb-100">
            <p v-reveal class="sub-title main-color mb-15">
              Agentic AI, Deployed in Production
            </p>
            <h4 v-reveal="{ delay: 100 }">
              MAXY AI builds production-grade agentic AI solutions for SMEs and enterprises.
              Custom agentic AI agents, AI-native software, and growth engines deployed in
              weeks.
            </h4>
            <p v-reveal="{ delay: 200 }" class="mt-20">
              From your first AI agent to a full transformation roadmap across Singapore,
              Southeast Asia, and the United States.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid ontop">
      <div class="container">
        <div class="lg-text">
          <div class="d-flex"></div>
          <h1 class="hero-split">MAXY AI</h1>
        </div>
      </div>
      <div v-reveal="{ delay: 250 }" class="img">
        <img src="/light/assets/imgs/header/2.png" alt="MAXY AI agentic AI and software team" data-speed="0.9" />
      </div>
    </div>
  </header>
</template>

<script setup>
useHeroSplitReveal(".hero-split", "chars");
</script>
