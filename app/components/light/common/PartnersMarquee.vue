<template>
  <div class="main-marq o-hidden">
    <div class="slide-har st1">
      <div class="box">
        <div v-for="logo in partners" :key="logo.file" class="item">
          <img :src="`/light/assets/imgs/partners/${logo.file}`" :alt="logo.name" class="partner-logo" />
        </div>
      </div>
      <div class="box">
        <div v-for="logo in partners" :key="`dup-${logo.file}`" class="item">
          <img :src="`/light/assets/imgs/partners/${logo.file}`" :alt="logo.name" class="partner-logo" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const partners = [
  { file: 'agape.png', name: 'Agape' },
  { file: 'asia-pacific-salvage.png', name: 'Asia Pacific Salvage' },
  { file: 'bgo.png', name: 'BGO' },
  { file: 'family-first-indonesia.png', name: 'Family First Indonesia' },
  { file: 'hkk.png', name: 'HKK' },
  { file: 'roeamah-indonesia.png', name: 'Roemah Indonesia' },
  { file: 'safe-care-taiwan.png', name: 'Safe Care Taiwan' },
  { file: 'sposea.png', name: 'SPOSEA' },
  { file: 'tbn-alliance.png', name: 'TBN Alliance' },
];
</script>
<style scoped>
.partner-logo {
  height: 56px;
  width: auto;
  filter: grayscale(1);
  opacity: 0.7;
  transition: filter 0.4s, opacity 0.4s;
}
.partner-logo:hover {
  filter: grayscale(0);
  opacity: 1;
}
</style>
