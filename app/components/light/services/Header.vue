<template>
  <header class="header page-header bg-img section-padding" style="background-image: url('/light/assets/imgs/header/b5.jpg'); background-color: #0d0d0d"
    data-overlay-dark="9">
    <div class="container pt-100">
      <div class="text-center">
        <h1 class="fz-100 text-u hero-split">AI, Software &amp; Digital Solutions for SMEs and Enterprises.</h1>
        <div v-reveal="{ delay: 300 }" class="mt-15">
          <NuxtLink to="/">Home</NuxtLink>
          <span class="padding-rl-20">|</span>
          <span class="main-color">Solutions</span>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
useHeroSplitReveal(".hero-split", "words");
</script>
