<template>
  <section class="work-stand section-padding sub-bg">
    <div class="container-xxl">
      <div class="row">
        <div class="filtering col-12 mb-50 text-center">
          <div class="filter">
            <span class="text">Filter By :</span>
            <span data-filter="*" class="active"> Show All </span>
            <span data-filter=".agentic-ai">Agentic AI</span>
            <span data-filter=".web-app">Web &amp; App</span>
            <span data-filter=".digital-growth">Digital Growth</span>
          </div>
        </div>
      </div>
      <div class="gallery row stand-marg">
        <div v-for="(item, i) in data" :key="i" :class="['col-lg-4', 'col-md-6', 'items', item.filter]">
          <div class="item mt-40">
            <div class="img">
              <img :src="item.img" alt="" />
            </div>
            <div class="cont mt-20">
              <h5 class="fz-22">
                <a :href="item.link">{{ item.title }}</a>
              </h5>
              <p>
                <a href="/case-studies">
                  {{ item.tag }}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import data from '@/l-data/portofolios/workstand.json';
import initIsotope from '@/common/initIsotope';
onMounted(() => {
  initIsotope('gallery');
});
</script>
