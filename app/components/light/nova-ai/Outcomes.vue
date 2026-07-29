<template>
  <section class="section-padding nova-outcomes">
    <div class="container">
      <div class="row align-items-end">
        <div class="col-lg-7">
          <p v-reveal class="nova-section-label">What this means for you</p>
          <h2 v-reveal:clip>
            Stop guessing. Move faster than your competition.
          </h2>
        </div>
        <div class="col-lg-5">
          <p v-reveal="{ delay: 100 }" class="nova-large-copy">
            Free your best people from busywork and save a fortune. An agency
            costs thousands and takes weeks; a single analyst costs more in a
            month than Nova costs in a year.
          </p>
        </div>
      </div>
      <div class="nova-outcome-strip" v-reveal:stagger>
        <div v-for="outcome in novaOutcomes" :key="outcome.title">
          <strong>{{ outcome.title }}</strong>
          <span>{{ outcome.body }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { novaOutcomes } from "@/l-data/nova-ai";
</script>

<style scoped>
.nova-outcomes {
  background: var(--nova-white);
}

.nova-outcome-strip {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 80px;
  overflow: hidden;
  border-radius: 14px;
  background: var(--nova-navy);
}

.nova-outcome-strip div {
  display: flex;
  min-height: 180px;
  padding: 32px;
  flex-direction: column;
  justify-content: flex-end;
  border-right: 1px solid rgba(255, 255, 255, 0.12);
}

.nova-outcome-strip div:last-child {
  border-right: 0;
}

.nova-outcome-strip strong {
  color: var(--nova-amber-light);
  font-size: 28px;
}

.nova-outcome-strip span {
  margin-top: 8px;
  color: rgba(255, 255, 255, 0.7);
}

@media (max-width: 991px) {
  .nova-outcome-strip {
    grid-template-columns: 1fr;
  }

  .nova-outcome-strip div {
    min-height: 140px;
    border-right: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  }
}
</style>
