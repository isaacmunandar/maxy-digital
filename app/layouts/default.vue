<template>
  <ProgressScroll />
  <Lines />
  <Navbar />
  <div id="smooth-wrapper">
    <div id="smooth-content">
      <slot />
    </div>
  </div>
</template>

<script setup>
import Lines from "@/components/light/common/Lines";
import ProgressScroll from "@/components/light/common/ProgressScroll";
import Navbar from "@/components/light/creative-agency/Navbar";
import { nextTick, onBeforeUnmount, onMounted, watch } from "vue";

let smoother;

onMounted(() => {
  if (
    typeof gsap === "undefined" ||
    typeof ScrollSmoother === "undefined" ||
    typeof ScrollTrigger === "undefined"
  ) {
    return;
  }

  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  ScrollTrigger.normalizeScroll(true);
  smoother = ScrollSmoother.create({
    smooth: 2,
    effects: true,
  });
});

const route = useRoute();

watch(
  () => route.fullPath,
  async () => {
    await nextTick();
    if (typeof ScrollTrigger !== "undefined") {
      ScrollTrigger.refresh();
    }
    if (smoother && typeof smoother.refresh === "function") {
      smoother.refresh();
    }
  },
);

onBeforeUnmount(() => {
  if (smoother && typeof smoother.kill === "function") {
    smoother.kill();
  }
  smoother = null;
});
</script>
