<template>
  <section class="section-padding">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-11">
          <div v-if="gallery[0]" class="img">
            <img :src="gallery[0]" alt="" style="width: 100%; height: auto" class="radius-15" />
          </div>
          <div v-if="gallery[1]" class="img mt-60">
            <img :src="gallery[1]" alt="" style="width: 100%; height: auto" class="radius-15" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
defineProps({
  gallery: { type: Array, default: () => [] },
});
</script>
