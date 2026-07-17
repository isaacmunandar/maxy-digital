<template>
  <section class="clients-carso section-padding pt-0 sub-bg">
    <div class="container">
      <div class="sec-bottom mb-80">
        <div v-reveal class="sub-bg d-flex align-items-center">
          <h6 class="fz-14 fw-400">
            Agentic AI deployed for operators in
            <span class="fw-600">Singapore, the United States, and Indonesia.</span>
          </h6>
        </div>
      </div>
      <h6 v-reveal class="sub-title main-color mb-25">Our Clients</h6>
      <PartnersMarquee />
    </div>
  </section>
</template>
<script setup>
import PartnersMarquee from '@/components/light/common/PartnersMarquee';
</script>
