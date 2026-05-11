<template>
  <footer class="clean-footer crev bg-img" data-background="/light/assets/imgs/header/bg1.jpg" data-overlay-dark="10">
    <div class="container pb-40 section-padding ontop">
      <div class="cal-action pb-50 mb-80 bord-thin-bottom">
        <h2 class="fz-120 line-height-1 d-rotate wow">
          <span class="rotate-text">
            <a href="/contact">
              Book a Strategy Call
              <span class="ml-30 fz-70 ti-arrow-top-right"></span>
            </a>
          </span>
        </h2>
      </div>
      <div class="row">
        <div class="col-lg-3">
          <div class="logo icon-img-100">
            <img src="/light/assets/imgs/logo-light.png" alt="" />
          </div>
        </div>
        <div class="col-lg-4">
          <div class="column">
            <div class="mb-40">
              <h6 class="sub-title mb-30">Singapore HQ</h6>
              <h5 class="opacity-8">
                21b Bukit Pasoh Rd<br />
                Singapore 089835
              </h5>
            </div>

            <a href="mailto:isaac@maxy.academy" class="underline">
              <span class="fz-22 main-color">isaac@maxy.academy</span>
            </a>
          </div>
        </div>
        <div class="col-lg-2 offset-lg-1">
          <div class="column">
            <h6 class="sub-title mb-30">Solutions</h6>
            <ul class="rest fz-14">
              <li class="mb-15">
                <a href="/solutions/agentic-ai">Agentic AI</a>
              </li>
              <li class="mb-15">
                <a href="/solutions/web-app">Web & App</a>
              </li>
              <li class="mb-15">
                <a href="/solutions/digital-growth">Digital Growth</a>
              </li>
              <li>
                <a href="/singapore-grant">SG AI Grant</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-2">
          <div class="column">
            <h6 class="sub-title mb-30">Company</h6>
            <ul class="rest fz-14">
              <li class="mb-15">
                <a href="/about">About MAXY</a>
              </li>
              <li class="mb-15">
                <a href="/case-studies">Case Studies</a>
              </li>
              <li class="mb-15">
                <a href="/insights">Insights</a>
              </li>
              <li>
                <a href="/faq">FAQ</a>
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
            © 2026 MAXY Digital. Part of
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
<script setup>
import loadBackgroudImages from '@/common/loadBackgroudImage';

onMounted(() => {
  loadBackgroudImages();
});
</script>
