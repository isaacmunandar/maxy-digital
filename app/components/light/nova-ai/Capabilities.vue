<template>
  <section class="section-padding nova-capabilities">
    <div class="container">
      <div v-reveal class="nova-heading-row">
        <p class="nova-section-label">What Nova does for you</p>
        <h2>Four jobs. One daily operating system for marketing.</h2>
      </div>
      <div class="row nova-card-grid" v-reveal:stagger>
        <div
          v-for="(item, index) in novaCapabilities"
          :key="item.title"
          class="col-lg-6"
        >
          <article class="nova-card">
            <span class="nova-card-number">0{{ index + 1 }}</span>
            <div>
              <h3>{{ item.title }}</h3>
              <p>{{ item.body }}</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { novaCapabilities } from "@/l-data/nova-ai";
</script>

<style scoped>
.nova-capabilities {
  background: var(--nova-paper);
}

.nova-heading-row {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 40px;
  align-items: start;
  padding-bottom: 50px;
  border-bottom: 1px solid rgba(23, 29, 77, 0.16);
}

.nova-card-grid {
  margin-top: 28px;
}

.nova-card-grid > div {
  padding-top: 24px;
}

.nova-card {
  display: grid;
  grid-template-columns: 62px 1fr;
  gap: 26px;
  height: 100%;
  min-height: 220px;
  padding: 36px;
  border: 1px solid rgba(23, 29, 77, 0.14);
  border-radius: 14px;
  background: var(--nova-white);
  transition:
    transform 0.25s ease,
    border-color 0.25s ease;
}

.nova-card:hover {
  border-color: var(--nova-amber);
  transform: translateY(-4px);
}

.nova-card-number {
  color: var(--nova-amber);
  font-family: Poppins, sans-serif;
  font-size: 14px;
  font-weight: 700;
}

.nova-card h3 {
  margin-bottom: 16px;
  font-size: 28px;
  letter-spacing: -0.025em;
}

.nova-card p {
  color: rgba(22, 27, 66, 0.7);
  line-height: 1.7;
}

@media (max-width: 991px) {
  .nova-heading-row {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 576px) {
  .nova-card {
    grid-template-columns: 1fr;
    min-height: auto;
    padding: 28px 24px;
  }
}
</style>
