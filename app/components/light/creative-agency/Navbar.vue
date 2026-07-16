<template>
  <nav class="navbar navbar-expand-lg bord blur" :class="{ change: hasDarkHeader }">
    <div class="container">
      <a class="logo" href="/" style="width: 140px; display: inline-block;">
        <img :src="isScrolled || !hasDarkHeader ? '/light/assets/imgs/logo-maxy-dark.png' : '/light/assets/imgs/logo-maxy-light.png'" alt="MAXY AI" />
      </a>

      <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="/">
              <span class="rolling-text">Home</span>
            </a>
          </li>
          <li @mousemove="handleDropdownMouseMove" @mouseleave="handleDropdownMouseLeave" class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="/solutions" role="button"
              aria-haspopup="true" aria-expanded="false">
              <span class="rolling-text">Solutions</span>
            </a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="/solutions">All Solutions</a>
              <a class="dropdown-item" href="/solutions/agentic-ai">Agentic AI</a>
              <a class="dropdown-item" href="/solutions/web-app">Web and App</a>
              <a class="dropdown-item" href="/solutions/digital-growth">Digital Growth</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/case-studies">
              <span class="rolling-text">Case Studies</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/about">
              <span class="rolling-text">About</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/roadmap">
              <span class="rolling-text">Roadmap</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/contact">
              <span class="rolling-text">Contact</span>
            </a>
          </li>
        </ul>
      </div>

      <div class="topnav d-flex align-items-center">
        <a href="/ai-playground" class="playground-pill d-none d-md-flex align-items-center" style="margin-right: 20px;">
          <span>AI Playground</span>
          <span class="ti-arrow-top-right ml-5"></span>
        </a>
        <div @click="toggleMenu" class="menu-icon cursor-pointer">
          <span class="icon ti-align-right"></span>
        </div>
      </div>
    </div>
  </nav>

  <div :class="`hamenu ${isOpen && 'open'}`">
    <div class="logo" style="width: 140px;">
      <img src="/light/assets/imgs/logo-light.svg" alt="MAXY AI" />
    </div>
    <div @click="closeMenu" class="close-menu cursor-pointer ti-close"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-2">
          <div class="menu-text">
            <div class="text">
              <h2>Menu</h2>
            </div>
          </div>
        </div>
        <div class="col-lg-7">
          <div class="menu-links">
            <ul class="main-menu rest">
              <li @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
                <div class="o-hidden">
                  <a href="/" class="link">
                    <span class="fill-text" data-text="Home">Home</span>
                  </a>
                </div>
              </li>
              <li @click="toggleSubMenu" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
                <div class="o-hidden">
                  <div class="link cursor-pointer dmenu">
                    <span class="fill-text" data-text="Solutions">Solutions</span>
                    <i></i>
                  </div>
                </div>
                <div class="sub-menu">
                  <ul>
                    <li><a href="/solutions" class="sub-link">All Solutions</a></li>
                    <li><a href="/solutions/agentic-ai" class="sub-link">Agentic AI</a></li>
                    <li><a href="/solutions/web-app" class="sub-link">AI-Native Web and App</a></li>
                    <li><a href="/solutions/digital-growth" class="sub-link">Digital Growth</a></li>
                  </ul>
                </div>
              </li>
              <li @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
                <div class="o-hidden">
                  <a href="/case-studies" class="link">
                    <span class="fill-text" data-text="Case Studies">Case Studies</span>
                  </a>
                </div>
              </li>
              <li @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
                <div class="o-hidden">
                  <a href="/about" class="link">
                    <span class="fill-text" data-text="About">About</span>
                  </a>
                </div>
              </li>
              <li @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
                <div class="o-hidden">
                  <a href="/roadmap" class="link">
                    <span class="fill-text" data-text="Roadmap">Roadmap</span>
                  </a>
                </div>
              </li>
              <li @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
                <div class="o-hidden">
                  <a href="/contact" class="link">
                    <span class="fill-text" data-text="Contact">Contact</span>
                  </a>
                </div>
              </li>
              <li @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
                <div class="o-hidden">
                  <a href="/ai-playground" class="link">
                    <span class="playground-pill-mobile">AI Playground <span class="ti-arrow-top-right"></span></span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="cont-info">
            <div class="item mb-50">
              <h6 class="sub-title mb-15 opacity-7">Singapore</h6>
              <h5>21B Bukit Pasoh Road,<br />Singapore 089835</h5>
            </div>
            <div class="item mb-50">
              <h6 class="sub-title mb-15 opacity-7">MAXY AI HUB</h6>
              <h5>Graha Pengharapan Building, 2nd Floor, Jl. Denpasar Raya No.2 Blok F3,Karet Kuningan, South Jakarta 12950</h5>
            </div>
            <div class="item mb-40">
              <h6 class="sub-title mb-15 opacity-7">Contact</h6>
              <h5><a href="mailto:hello@maxy.asia">hello@maxy.asia</a></h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed, onMounted, onUnmounted } from 'vue';
import { ref } from 'vue';

const isScrolled = ref(false);
const route = useRoute();
const hasDarkHeader = computed(() => !/^\/case-studies\/.+/.test(route.path));

function handleScroll() {
  const bodyScroll = window.scrollY;
  const navbar = document.querySelector('.navbar');
  if (bodyScroll > 300) {
    navbar.classList.add('nav-scroll');
    isScrolled.value = true;
  } else {
    navbar.classList.remove('nav-scroll');
    isScrolled.value = false;
  }
}

function handleDropdownMouseMove(event) {
  event.currentTarget.querySelector('.dropdown-menu').classList.add('show');
}

function handleDropdownMouseLeave(event) {
  event.currentTarget.querySelector('.dropdown-menu').classList.remove('show');
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const isOpen = ref(false);
function toggleMenu() {
  const hamenu = document.querySelector('.hamenu');
  isOpen.value = !isOpen.value;
  setTimeout(() => {
    isOpen.value == false
      ? (hamenu.style.left = '-100%')
      : (hamenu.style.left = '0');
  }, 300);
}

function closeMenu() {
  const hamenu = document.querySelector('.hamenu');
  isOpen.value = false;
  setTimeout(() => {
    hamenu.style.left = '-100%';
  }, 300);
}

function handleMouseEnter(event) {
  document.querySelectorAll('ul.main-menu li').forEach((item) => {
    item.classList.add('hoverd');
  });
  event.currentTarget.classList.remove('hoverd');
}

function handleMouseLeave() {
  document
    .querySelectorAll('ul.main-menu li')
    .forEach((item) => item.classList.remove('hoverd'));
}

function toggleSubMenu(event) {
  const subMenu = event.currentTarget.querySelector('.sub-menu');
  if (subMenu) {
    if (subMenu.classList.contains('sub-open')) {
      document.querySelectorAll('.sub-menu').forEach((item) => {
        item.classList.remove('sub-open');
        item.style.maxHeight = '0';
      });
    } else {
      document.querySelectorAll('.sub-menu').forEach((item) => {
        item.classList.remove('sub-open');
        item.style.maxHeight = '0';
      });
      subMenu.classList.add('sub-open');
      subMenu.style.maxHeight = '450px';
    }
  }
}
</script>
<style scoped>
.navbar-nav .nav-link .rolling-text {
  white-space: nowrap;
}
.playground-pill {
  border: 1px solid #14cf93;
  color: #14cf93;
  border-radius: 30px;
  padding: 10px 20px;
  background: transparent;
  white-space: nowrap;
  transition: all 0.3s ease;
}
.playground-pill:hover {
  background: #14cf93;
  color: #fff;
}
.playground-pill-mobile {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: 1px solid #14cf93;
  color: #14cf93;
  border-radius: 30px;
  padding: 8px 18px;
  font-size: 0.85em;
}
</style>
