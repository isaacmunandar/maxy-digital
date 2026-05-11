<template>
  <footer class="modern-footer pt-80">
    <div class="footer-container">
      <div class="container ontop">
        <div class="row pb-30 bord-thin-bottom">
          <div class="col-lg-5">
            <div class="logo icon-img-120">
              <img src="/light/assets/imgs/logo-light.png" alt="" />
            </div>
          </div>
          <div class="col-lg-7">
            <div class="social-media d-flex justify-content-end">
              <ul class="rest d-flex align-items-center fz-14">
                <li class="hover-this cursor-pointer">
                  <a href="#0" class="hover-anim">
                    <i class="fab fa-linkedin-in mr-10"></i> LinkedIn
                  </a>
                </li>
                <li class="hover-this cursor-pointer ml-50">
                  <a href="#0" class="hover-anim">
                    <i class="fab fa-instagram mr-10"></i> Instagram
                  </a>
                </li>
                <li class="hover-this cursor-pointer ml-50">
                  <a href="#0" class="hover-anim">
                    <i class="fab fa-tiktok mr-10"></i> TikTok
                  </a>
                </li>
                <li class="hover-this cursor-pointer ml-50">
                  <a href="#0" class="hover-anim">
                    <i class="fab fa-youtube mr-10"></i> YouTube
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row pt-80">
          <div class="col-lg-7">
            <div class="call-action">
              <h2 class="d-slideup wow fz-60 fw-600">
                <span class="sideup-text">
                  <span class="up-text">Ship AI before your competitors</span>
                </span>
                <span class="sideup-text">
                  <span class="up-text underline">
                    <a href="/contact" class="main-color">
                      finish their strategy deck.
                    </a>
                  </span>
                </span>
              </h2>
              <div class="info mt-80 d-flex align-items-center">
                <div>
                  <a href="mailto:isaac@maxy.academy" class="butn butn-md butn-bord-thin radius-30">
                    <span class="text">isaac@maxy.academy</span>
                  </a>
                </div>
                <div>
                  <a href="tel:+628113555855" class="butn butn-md butn-bord-thin radius-30 ml-30">
                    <span class="text">+62 811 3555 855</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 offset-lg-1 bord-left">
            <div class="column">
              <h6 class="sub-title mb-30">Quick Links</h6>
              <div class="row">
                <div class="col-6">
                  <ul class="rest fz-14">
                    <li class="mb-15">
                      <a href="/solutions">Solutions</a>
                    </li>
                    <li class="mb-15">
                      <a href="/case-studies">Case Studies</a>
                    </li>
                    <li class="mb-15">
                      <a href="/insights">Insights</a>
                    </li>
                    <li>
                      <a href="/contact">Contact</a>
                    </li>
                  </ul>
                </div>
                <div class="col-6">
                  <ul class="rest fz-14">
                    <li class="mb-15">
                      <a href="/about">About MAXY</a>
                    </li>
                    <li class="mb-15">
                      <a href="/singapore-grant">SG AI Grant</a>
                    </li>
                    <li class="mb-15">
                      <a href="/roadmap">Roadmap</a>
                    </li>
                    <li>
                      <a href="/faq">FAQ</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="subscribe-minimal mt-50">
              <form action="contact.php">
                <div class="form-group rest">
                  <input type="email" placeholder="Type Your Email" />
                  <button type="submit">
                    <i class="ti-arrow-top-right"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="text-center pt-30 pb-30 sub-bg mt-80">
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
import { onMounted } from 'vue';
onMounted(() => {
  gsap.set('.footer-container', { yPercent: -50 });
  const uncover = gsap.timeline({ paused: true });
  uncover.to('.footer-container', { yPercent: 0, ease: 'none' });

  ScrollTrigger.create({
    trigger: 'main',
    start: 'bottom bottom',
    end: '+=50%',
    animation: uncover,
    scrub: true,
  });
});
</script>
