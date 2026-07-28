<template>
  <div>
    <main class="main-bg playground-page">
      <PlaygroundHero />
      <PlaygroundIntro />
      <PlaygroundToolkit />
      <PlaygroundTryCta />
      <PlaygroundImpact />
      <PlaygroundFinalCta />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Footer from "@/components/light/blog-details/Footer";
import PlaygroundFinalCta from "@/components/light/ai-playground/FinalCta";
import PlaygroundHero from "@/components/light/ai-playground/Hero";
import PlaygroundImpact from "@/components/light/ai-playground/Impact";
import PlaygroundIntro from "@/components/light/ai-playground/Intro";
import PlaygroundToolkit from "@/components/light/ai-playground/Toolkit";
import PlaygroundTryCta from "@/components/light/ai-playground/TryCta";
import { pageSeo } from "@/l-data/seo";
import "@/assets/css/ai-playground.css";

usePageSeo({
  ...pageSeo.aiPlayground,
  breadcrumbs: [
    { name: "Home", item: "/" },
    { name: "AI Playground", item: "/ai-playground" },
  ],
});

useHeroSplitReveal(".hero-split", "words");
</script>
