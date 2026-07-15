<template>
  <section class="section-padding">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-11">
          <div class="img">
            <img :src="galleryImages[0]" alt="" style="width: 100%; height: 420px; object-fit: cover" class="radius-15" />
          </div>
          <div class="cont section-padding">
            <div class="row">
              <div class="col-md-3 sm-mb30">
                <h6>The Story</h6>
              </div>
              <div class="col-lg-6 col-md-9">
                <div class="text">
                  <p>{{ summary }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="img">
            <img :src="galleryImages[1]" alt="" style="width: 100%; height: 420px; object-fit: cover" class="radius-15" />
          </div>
          <div class="cont section-padding">
            <div class="row">
              <div class="col-md-3 offset-lg-2 sm-mb30">
                <h6>Approach</h6>
              </div>
              <div class="col-lg-6 col-md-9">
                <div class="text">
                  <p>{{ solution }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="img">
            <img :src="galleryImages[2]" alt="" style="width: 100%; height: 420px; object-fit: cover" class="radius-15" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { computed } from 'vue';

const props = defineProps({
  summary: { type: String, required: true },
  solution: { type: String, required: true },
  gallery: { type: Array, default: () => [] },
});

const fallbackImages = [
  '/light/assets/imgs/works/projects/2/4.jpg',
  '/light/assets/imgs/works/projects/2/5.jpg',
  '/light/assets/imgs/works/projects/2/6.jpg',
];

const galleryImages = computed(() => [0, 1, 2].map((i) => props.gallery[i] || fallbackImages[i]));
</script>
