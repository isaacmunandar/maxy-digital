<template>
  <div>
    <main class="nova-page">
      <NovaHero />
      <NovaMeet />
      <NovaCapabilities />
      <NovaOutcomes />
      <NovaFinalCta />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Footer from "@/components/light/blog-details/Footer";
import NovaCapabilities from "@/components/light/nova-ai/Capabilities";
import NovaFinalCta from "@/components/light/nova-ai/FinalCta";
import NovaHero from "@/components/light/nova-ai/Hero";
import NovaMeet from "@/components/light/nova-ai/Meet";
import NovaOutcomes from "@/components/light/nova-ai/Outcomes";
import "@/assets/css/nova-ai.css";

usePageSeo({
  title: "NOVA AI - AI Chief Marketing Officer",
  description:
    "Meet NOVA AI, the AI Chief Marketing Officer that researches competitors, sharpens strategy, and builds execution-ready marketing plans by tomorrow.",
  breadcrumbs: [
    { name: "Home", item: "/" },
    { name: "NOVA AI", item: "/nova-ai" },
  ],
});

useHeroSplitReveal(".nova-hero-title", "words");
</script>
