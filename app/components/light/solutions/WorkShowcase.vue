<template>
  <section class="work-showcase section-padding sub-bg">
    <div class="container">
      <div v-reveal class="sec-head mb-80">
        <h6 class="sub-title main-color mb-25">What We've Built</h6>
        <div class="bord pt-25 bord-thin-top d-flex align-items-center">
          <h2 class="fw-600">
            Real products. <span class="fw-200">Shipped and running.</span>
          </h2>
        </div>
      </div>
      <div class="row" v-reveal:stagger="{ delay: 100 }">
        <div
          v-for="(item, i) in items"
          :key="i"
          class="col-lg-6 col-md-6 mb-50"
        >
          <div class="showcase-card">
            <div class="img o-hidden radius-15 mb-30">
              <img
                :src="item.img"
                :alt="item.title"
                loading="lazy"
                style="width: 100%; height: 260px; object-fit: cover"
              />
            </div>
            <div class="cont">
              <span
                class="sub-title main-color fz-12 ls1 text-u mb-10 d-block"
                >{{ item.tag }}</span
              >
              <h4 class="fw-600 mb-15">{{ item.title }}</h4>
              <p class="opacity-8">{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import allWork from "../../../l-data/portofolios/workstand.json";
import { computed } from "vue";

const props = defineProps({
  category: {
    type: String,
    required: true,
  },
});

const items = computed(() =>
  allWork.filter((item) => item.filter === props.category),
);
</script>
