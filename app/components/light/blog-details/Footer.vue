<template>
  <footer class="clean-footer crev bg-img" style="background-image: url('/light/assets/imgs/header/bg1.jpg'); background-color: #0d0d0d" data-overlay-dark="10">
    <div class="container pb-40 section-padding ontop">
      <div class="cal-action pb-50 mb-80 bord-thin-bottom">
        <h2 v-reveal:clip class="fz-120 line-height-1">
          <NuxtLink to="/contact">
            Book a Strategy Call
            <span class="ml-30 fz-70 ti-arrow-top-right"></span>
          </NuxtLink>
        </h2>
      </div>
      <div class="row" v-reveal:stagger="{ delay: 100 }">
        <div class="col-lg-3">
          <div class="logo" style="width: 140px;">
            <img src="/light/assets/imgs/logo-light.svg" alt="" />
          </div>
        </div>
        <div class="col-lg-4">
          <div class="column">
            <div class="mb-40">
              <h6 class="sub-title mb-30">Singapore</h6>
              <h5 class="opacity-8">
                21B Bukit Pasoh Road,<br />
                Singapore 089835
              </h5>
            </div>

            <a href="mailto:hello@maxy.asia" class="underline">
              <span class="fz-22 main-color">hello@maxy.asia</span>
            </a>
          </div>
        </div>
        <div class="col-lg-2 offset-lg-1">
          <div class="column">
            <h6 class="sub-title mb-30">Solutions</h6>
            <ul class="rest fz-14">
              <li class="mb-15">
                <NuxtLink to="/solutions/agentic-ai">Agentic AI</NuxtLink>
              </li>
              <li class="mb-15">
                <NuxtLink to="/solutions/web-app">Web & App</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/solutions/digital-growth">Digital Growth</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-2">
          <div class="column">
            <h6 class="sub-title mb-30">Company</h6>
            <ul class="rest fz-14">
              <li class="mb-15">
                <NuxtLink to="/roadmap">Roadmap</NuxtLink>
              </li>
              <li class="mb-15">
                <NuxtLink to="/contact">Contact</NuxtLink>
              </li>
              <li class="mb-15">
                <a href="https://maxy.academy" target="_blank" rel="noopener">MAXY Academy</a>
              </li>
              <li>
                <NuxtLink to="/ai-playground">AI Playground</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="d-flex align-items-center pt-30 pb-30 mt-80 bord-thin-top">
        <div>
          <ul class="rest d-flex align-items-center">
            <li class="hover-this cursor-pointer">
              <a href="#0" class="hover-anim">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li class="hover-this cursor-pointer ml-30">
              <a href="#0" class="hover-anim">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
            <li class="hover-this cursor-pointer ml-30">
              <a href="#0" class="hover-anim">
                <i class="fab fa-tiktok"></i>
              </a>
            </li>
            <li class="hover-this cursor-pointer ml-30">
              <a href="#0" class="hover-anim">
                <i class="fab fa-youtube"></i>
              </a>
            </li>
          </ul>
        </div>
        <div class="ml-auto">
          <p class="fz-14">
            © 2026 MAXY AI. Part of
            <span class="underline main-color">
              <a href="https://maxy.asia" target="_blank">
                MAXY Group
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
