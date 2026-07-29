<template>
  <section class="section-padding nova-meet">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-lg-4">
          <p v-reveal class="nova-section-label">
            Meet your AI Chief Marketing Officer
          </p>
        </div>
        <div class="col-lg-7">
          <h2 v-reveal:clip>
            Give Nova one sentence. It goes to work like an entire marketing
            team.
          </h2>
          <p v-reveal="{ delay: 100 }" class="nova-large-copy">
            It reads your market, studies your competitors, and hands your team
            a finished plan they can execute Monday. Not advice. Work.
          </p>
          <p v-reveal="{ delay: 150 }" class="nova-callout">
            One subscription. The output of a full marketing team.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.nova-meet {
  background: var(--nova-white);
}

.nova-callout {
  margin-top: 38px;
  padding: 20px 0 20px 24px;
  border-left: 4px solid var(--nova-amber);
  color: var(--nova-navy);
  font-size: 22px;
  font-weight: 600;
}
</style>
