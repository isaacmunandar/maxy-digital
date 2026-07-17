<template>
  <section class="process section-padding">
    <div class="container">
      <div class="sec-head mb-80">
        <h6 class="sub-title main-color mb-25">How We Work</h6>
        <div class="bord pt-25 bord-thin-top d-flex align-items-center">
          <h2 v-reveal:clip class="fw-600">
            From pilot to <span class="fw-200">production.</span>
          </h2>
          <div class="ml-auto">
            <NuxtLink to="/roadmap" class="go-more">
              <span class="text">See Full Roadmap</span>
              <span class="icon ti-arrow-top-right"></span>
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="row md-marg" v-reveal:stagger="{ delay: 100 }">
        <div class="col-lg-3 col-md-6 item md-mb50">
          <div class="icon-img-60 mb-30">
            <img src="/light/assets/imgs/serv-icons/3.png" alt="" />
          </div>
          <h5 class="mb-15">Diagnose</h5>
          <p>
            Map your workflows. Identify the one workflow where agentic AI earns first. Name the outcome it's accountable to.
          </p>
          <NuxtLink to="/roadmap" class="rmore mt-30">
            <span class="sub-title">Read More</span>
            <img src="/light/assets/imgs/arrow-right.png" alt="" class="icon-img-20 ml-5" />
          </NuxtLink>
        </div>
        <div class="col-lg-3 col-md-6 item md-mb50">
          <div class="icon-img-60 mb-30">
            <img src="/light/assets/imgs/serv-icons/4.png" alt="" />
          </div>
          <h5 class="mb-15">Design</h5>
          <p>
            Define the agent's job description: what it does, what data it can access, what escalates to a human.
          </p>
          <NuxtLink to="/roadmap" class="rmore mt-30">
            <span class="sub-title">Read More</span>
            <img src="/light/assets/imgs/arrow-right.png" alt="" class="icon-img-20 ml-5" />
          </NuxtLink>
        </div>
        <div class="col-lg-3 col-md-6 item sm-mb50">
          <div class="icon-img-60 mb-30">
            <img src="/light/assets/imgs/serv-icons/5.png" alt="" />
          </div>
          <h5 class="mb-15">Build & Train</h5>
          <p>
            Custom architecture, trained on your data, integrated with your stack — CRM, helpdesk, comms, internal tools.
          </p>
          <NuxtLink to="/roadmap" class="rmore mt-30">
            <span class="sub-title">Read More</span>
            <img src="/light/assets/imgs/arrow-right.png" alt="" class="icon-img-20 ml-5" />
          </NuxtLink>
        </div>
        <div class="col-lg-3 col-md-6 item">
          <div class="icon-img-60 mb-30">
            <img src="/light/assets/imgs/serv-icons/6.png" alt="" />
          </div>
          <h5 class="mb-15">Deploy & Optimize</h5>
          <p>
            Production launch. Live monitoring. Weekly optimization for 90 days. Measured against the named outcome from
            step one.
          </p>
          <NuxtLink to="/roadmap" class="rmore mt-30">
            <span class="sub-title">Read More</span>
            <img src="/light/assets/imgs/arrow-right.png" alt="" class="icon-img-20 ml-5" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
