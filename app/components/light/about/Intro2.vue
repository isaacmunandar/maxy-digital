<template>
  <section class="page-intro-cerv section-padding">
    <div class="container">
      <div class="phase-grid">
        <div class="phase-1">
          <div class="row justify-content-end rest">
            <div class="col-md-5 rest">
              <div class="cont">
                <div v-reveal:clip class="mb-40">
                  <h2 class="fz-100 numb-font">1.</h2>
                </div>
                <h4 v-reveal="{ delay: 80 }">Phase 01: First Agentic AI Deployment.</h4>
                <div v-reveal="{ delay: 140 }" class="text mt-30">
                  <p>
                    Your first agentic AI system goes live in 4-8 weeks. We identify a high-impact workflow, build a custom agentic AI agent, and
                    deploy it in production.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-5 rest">
              <div class="img fit-img bord-thin-left">
                <img src="/light/assets/imgs/intro/02.png" alt="" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
        <div class="phase-2">
          <div class="bord-thin-top position-re">
            <div class="row">
              <div class="col-md-11">
                <div class="cont">
                  <div v-reveal:clip class="mb-40">
                    <h2 class="fz-100 numb-font">2.</h2>
                  </div>
                  <h4 v-reveal="{ delay: 80 }">Phase 02: Compound Workflows.</h4>
                  <div v-reveal="{ delay: 140 }" class="text mt-30">
                    <p>
                      We expand into adjacent workflows across sales, support, and
                      operations. This phase often includes GEO optimization so you
                      appear in AI search results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-dots bg-img" style="background-image: url('/light/assets/imgs/patterns/dots.png')"></div>
          </div>
        </div>
        <div class="phase-3">
          <div class="row justify-content-end bord-thin-top rest">
            <div class="col-md-5 rest">
              <div class="img fit-img">
                <img src="/light/assets/imgs/intro/03.png" alt="" loading="lazy" />
              </div>
            </div>
            <div class="col-md-5 rest">
              <div class="cont bord-thin-left">
                <div v-reveal:clip class="mb-40">
                  <h2 class="fz-100 numb-font">3.</h2>
                </div>
                <h4 v-reveal="{ delay: 80 }">Phase 03: Transformation Infrastructure.</h4>
                <div v-reveal="{ delay: 140 }" class="text mt-30">
                  <p>
                    Multi-agent systems, shared knowledge layers, and governance
                    that scale across departments. AI runs a material share of
                    operations, not a single workflow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Mobile default: natural document order (Phase 1, 2, 3 stacked). */
.phase-2 {
  margin-top: 60px;
}

/* The theme's flat 60px inset leaves too little room for the phase headings on
   phones and narrow desktops, so scale it with the viewport instead. */
.page-intro-cerv .cont {
  padding: clamp(20px, 2.5vw, 60px);
}

@media (min-width: 992px) {
  .phase-grid {
    display: grid;
    grid-template-columns: 66.6667% 33.3333%;
    grid-template-rows: auto auto;
    column-gap: 0;
    row-gap: 0;
  }
  .phase-1 {
    grid-column: 1;
    grid-row: 1;
    border-right: 1px solid rgba(0, 0, 0, 0.14);
  }
  .phase-3 {
    grid-column: 1;
    grid-row: 2;
    border-right: 1px solid rgba(0, 0, 0, 0.14);
  }
  .phase-2 {
    grid-column: 2;
    grid-row: 1 / 3;
    margin-top: 100px;
  }
  .phase-1 .row,
  .phase-3 .row {
    height: 100%;
  }
}
</style>
