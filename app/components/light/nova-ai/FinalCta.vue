<template>
  <section class="section-padding nova-final">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-9 text-center">
          <p v-reveal class="nova-eyebrow">The bottom line</p>
          <h2 v-reveal:clip>
            Your competitors moved this week. Know exactly how by tomorrow.
          </h2>
          <p v-reveal="{ delay: 100 }" class="nova-final-copy">
            For less than the cost of one team lunch a month.
          </p>
          <a
            v-reveal="{ delay: 150 }"
            href="https://nova.maxy.academy/"
            target="_blank"
            rel="noopener"
            class="nova-button nova-button-light"
          >
            Discover NOVA AI
            <span class="ti-arrow-top-right" aria-hidden="true"></span>
          </a>
          <p class="nova-built">
            Built by MAXY AI — the company that builds the agents, and the
            people who lead them.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.nova-final {
  position: relative;
  background: var(--nova-amber);
  color: var(--nova-navy);
}

.nova-final::before {
  content: "NOVA";
  position: absolute;
  inset: auto 0 -0.2em;
  overflow: hidden;
  color: rgba(23, 29, 77, 0.055);
  font-size: min(28vw, 420px);
  font-weight: 800;
  line-height: 0.8;
  letter-spacing: -0.08em;
  text-align: center;
  pointer-events: none;
}

.nova-final .container {
  position: relative;
  z-index: 1;
}

.nova-final .nova-eyebrow {
  border-color: rgba(23, 29, 77, 0.3);
  color: var(--nova-navy);
}

.nova-final-copy {
  margin: 26px 0 34px;
  font-size: 20px;
}

.nova-button-light {
  border-color: var(--nova-navy);
  background: var(--nova-navy);
  color: var(--nova-white);
  box-shadow: 0 14px 34px rgba(23, 29, 77, 0.25);
}

.nova-button-light:hover {
  background: var(--nova-navy-soft);
  color: var(--nova-white);
}

.nova-built {
  max-width: 680px;
  margin: 28px auto 0;
  color: rgba(23, 29, 77, 0.68);
  font-size: 14px;
}
</style>
