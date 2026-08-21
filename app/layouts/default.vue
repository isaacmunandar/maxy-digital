<template>
  <Lines />
  <Navbar />
  <FloatingCta />
  <div id="main-content">
    <slot />
  </div>
</template>

<script setup>
import FloatingCta from "@/components/light/common/FloatingCta";
import Lines from "@/components/light/common/Lines";
import Navbar from "@/components/light/creative-agency/Navbar";
import { nextTick, onMounted, watch } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);
});

const route = useRoute();

watch(
  () => route.fullPath,
  async () => {
    await nextTick();
    window.scrollTo(0, 0);
    if (typeof ScrollTrigger !== "undefined") {
      ScrollTrigger.refresh();
    }
  },
);
</script>
