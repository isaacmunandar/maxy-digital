<template>
  <Lines />
  <Navbar />
  <FloatingCta />
  <div id="smooth-wrapper">
    <div id="smooth-content">
      <slot />
    </div>
  </div>
</template>

<script setup>
import FloatingCta from "@/components/light/common/FloatingCta";
import Lines from "@/components/light/common/Lines";
import Navbar from "@/components/light/creative-agency/Navbar";
import { nextTick, onBeforeUnmount, onMounted, watch } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

let smoother;

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  // Skip the smooth-scroll layer on touch devices — it's the main source of
  // scroll jank on mobile and native scroll already feels responsive there.
  if (!ScrollTrigger.isTouch) {
    smoother = ScrollSmoother.create({
      smooth: 1,
      effects: true,
    });
  }
});

const route = useRoute();

watch(
  () => route.fullPath,
  async () => {
    await nextTick();
    if (smoother) {
      smoother.scrollTo(0, false);
    } else {
      window.scrollTo(0, 0);
    }
    ScrollTrigger.refresh();
  },
);

onBeforeUnmount(() => {
  if (smoother) {
    smoother.kill();
  }
  smoother = null;
});
</script>
