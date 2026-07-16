<template>
  <section class="section-padding">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-11">
          <div v-if="gallery[0]" class="img">
            <img :src="gallery[0]" alt="" style="width: 100%; height: 420px; object-fit: cover" class="radius-15" />
          </div>
          <div class="cont mt-60 mb-60">
            <div class="row">
              <div class="col-md-3 sm-mb30">
                <h6>The Result</h6>
              </div>
              <div class="col-lg-6 col-md-9">
                <div class="text">
                  <p>{{ outcome }}</p>
                </div>
              </div>
            </div>
          </div>
          <div v-if="gallery[1]" class="img">
            <img :src="gallery[1]" alt="" style="width: 100%; height: 420px; object-fit: cover" class="radius-15" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
defineProps({
  outcome: { type: String, required: true },
  gallery: { type: Array, default: () => [] },
});
</script>
