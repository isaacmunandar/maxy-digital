<template>
  <main class="main-bg">
    <Header />
    <Services />
    <Marquee />
    <Price />
    <Process />
    <section class="work-stand section-padding sub-bg">
      <div class="container">
        <div class="sec-head mb-80">
          <h6 class="sub-title main-color mb-25">Selected Work</h6>
          <div class="bord pt-25 bord-thin-top">
            <h2 class="fw-600">
              Real systems. Real revenue.
              <span class="fw-200">Real operators.</span>
            </h2>
          </div>
        </div>
        <div v-for="group in caseStudyGroups" :key="group.label" class="mb-80">
          <h5 class="fz-18 fw-600 mb-40 bord-thin-bottom pb-15">
            {{ group.label }}
          </h5>
          <div class="row stand-marg">
            <div
              v-for="(item, i) in group.items"
              :key="i"
              class="col-lg-4 col-md-6"
            >
              <div class="item mt-40">
                <div class="img">
                  <img :src="item.img" :alt="item.title" />
                </div>
                <div class="cont mt-20">
                  <h5 class="fz-20">{{ item.title }}</h5>
                  <span class="sub-title opacity-7">{{ item.tag }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <Footer />
</template>
<script setup>
import Footer from "@/components/light/modern-agency/Footer";
import Header from "@/components/light/services/Header";
import Services from "@/components/light/services/Services";
import Marquee from "@/components/light/services/Marquee";
import Price from "@/components/light/services/Price";
import Process from "@/components/light/services/Process";
import portfolioData from "@/l-data/portfolios/workstand.json";
import { computed } from "vue";

const categoryOrder = ["Agentic AI", "Web & App", "Digital Growth"];

const caseStudyGroups = computed(() => {
  return categoryOrder.map((label) => ({
    label,
    items: portfolioData.filter((item) => item.tag === label),
  }));
});
</script>
