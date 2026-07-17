<template>
  <section class="skills-img-crev pb-50">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-lg-4 offset-lg-1 valign">
          <div v-reveal class="img md-mb80">
            <div class="rotate-butn-vid">
              <NuxtLink to="/contact" class="vid d-flex align-items-center">
                <div class="icon">
                  <i class="fas fa-arrow-right main-color"></i>
                </div>
                <span class="sub-title ml-15">Work With Us</span>
              </NuxtLink>
            </div>
            <img src="/light/assets/imgs/intro/04.png" alt="MAXY AI team" class="radius-30" />
          </div>
        </div>
        <div class="col-lg-6 valign">
          <div class="content full-width">
            <div class="sec-head mb-50">
              <h6 v-reveal class="sub-title mb-15 main-color">
                Agentic AI operators - shipping since 2022
              </h6>
              <h2 v-reveal:clip="{ delay: 80 }" class="d-block">
                Built by operators who've shipped agentic AI in three markets.
              </h2>
            </div>
            <div class="row justify-content-end">
              <div class="col-lg-11">
                <div class="text">
                  <p v-reveal="{ delay: 150 }">
                    MAXY AI is the agentic AI and software arm of
                    MAXY AI Holdings, recognized as a HolonIQ Top 50 Southeast Asia EdTech
                    company in 2025. We don't theorize about agentic AI. We deploy it in
                    Singapore, the US, and Indonesia — and we've been deploying since 2022,
                    before most competitors had a name for it.
                  </p>
                </div>
                <div class="row mt-50 pt-50 bord-thin-top" v-reveal:stagger="{ delay: 200 }">
                  <div class="col-md-6 col-12">
                    <div class="item stat-item sm-mb30">
                      <h2 class="fz-60 line-height-1">
                        <span v-count class="numb-count">50+</span>
                      </h2>
                      <span class="sub-title opacity-7 ml-30">
                        Enterprises<br />Served across SG, SEA, and US
                      </span>
                    </div>
                  </div>
                  <div class="col-md-6 col-12">
                    <div class="item stat-item">
                      <h2 class="fz-60 line-height-1">
                        <span v-count class="numb-count">6</span>
                      </h2>
                      <span class="sub-title opacity-7 ml-30">
                        Markets with<br />live agentic AI deployments
                      </span>
                    </div>
                  </div>
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
.stat-item {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.stat-item .sub-title {
  flex: 1;
  min-width: 0;
}
</style>
