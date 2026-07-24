<template>
  <nav class="navbar navbar-expand-lg bord blur" :class="{ change: hasDarkHeader }">
    <div class="container">
      <NuxtLink class="logo" to="/" style="width: 140px; display: inline-block;">
        <img :src="isScrolled || !hasDarkHeader ? '/light/assets/imgs/logo-maxy-dark.png' : '/light/assets/imgs/logo-maxy-light.png'" alt="MAXY AI" />
      </NuxtLink>

      <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/">
              <span class="rolling-text">Home</span>
            </NuxtLink>
          </li>
          <li
            @mousemove="handleDropdownMouseMove"
            @mouseleave="handleDropdownMouseLeave"
            @focusin="handleDropdownFocusIn"
            @focusout="handleDropdownFocusOut"
            class="nav-item dropdown"
          >
            <NuxtLink class="nav-link dropdown-toggle" to="/solutions" role="button"
              aria-haspopup="true" :aria-expanded="dropdownOpen ? 'true' : 'false'">
              <span class="rolling-text">Solutions</span>
            </NuxtLink>
            <div class="dropdown-menu">
              <NuxtLink class="dropdown-item" to="/solutions">All Solutions</NuxtLink>
              <NuxtLink class="dropdown-item" to="/solutions/agentic-ai">Agentic AI</NuxtLink>
              <NuxtLink class="dropdown-item" to="/solutions/web-app">Web and App</NuxtLink>
              <NuxtLink class="dropdown-item" to="/solutions/digital-growth">Digital Growth</NuxtLink>
            </div>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/case-studies">
              <span class="rolling-text">Case Studies</span>
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/about">
              <span class="rolling-text">About</span>
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/roadmap">
              <span class="rolling-text">Roadmap</span>
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/contact">
              <span class="rolling-text">Contact</span>
            </NuxtLink>
          </li>
        </ul>
      </div>

      <div class="topnav d-flex align-items-center">
        <NuxtLink to="/ai-playground" class="playground-pill d-none d-md-flex align-items-center" style="margin-right: 20px;" aria-label="Explore AI Playground">
          <span class="playground-ai">AI</span>
          <span class="playground-word">Playground</span>
          <span class="playground-arrow ti-arrow-top-right" aria-hidden="true"></span>
        </NuxtLink>
        <button type="button" @click="toggleMenu" class="menu-icon cursor-pointer" aria-label="Open menu" :aria-expanded="isOpen">
          <span class="icon ti-align-right"></span>
        </button>
      </div>
    </div>
  </nav>

  <div class="hamenu" :class="{ open: isOpen }" :style="{ left: isOpen ? '0' : '-100%' }">
    <div class="logo" style="width: 140px;">
      <img src="/light/assets/imgs/logo-maxy-dark.png" alt="MAXY AI" />
    </div>
    <button type="button" @click="closeMenu" class="close-menu cursor-pointer ti-close" aria-label="Close menu"></button>
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
                  <NuxtLink to="/" class="link" @click="closeMenu">
                    <span class="fill-text" data-text="Home">Home</span>
                  </NuxtLink>
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
                    <li><NuxtLink to="/solutions" class="sub-link" @click="closeMenu">All Solutions</NuxtLink></li>
                    <li><NuxtLink to="/solutions/agentic-ai" class="sub-link" @click="closeMenu">Agentic AI</NuxtLink></li>
                    <li><NuxtLink to="/solutions/web-app" class="sub-link" @click="closeMenu">AI-Native Web and App</NuxtLink></li>
                    <li><NuxtLink to="/solutions/digital-growth" class="sub-link" @click="closeMenu">Digital Growth</NuxtLink></li>
                  </ul>
                </div>
              </li>
              <li @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
                <div class="o-hidden">
                  <NuxtLink to="/case-studies" class="link" @click="closeMenu">
                    <span class="fill-text" data-text="Case Studies">Case Studies</span>
                  </NuxtLink>
                </div>
              </li>
              <li @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
                <div class="o-hidden">
                  <NuxtLink to="/about" class="link" @click="closeMenu">
                    <span class="fill-text" data-text="About">About</span>
                  </NuxtLink>
                </div>
              </li>
              <li @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
                <div class="o-hidden">
                  <NuxtLink to="/roadmap" class="link" @click="closeMenu">
                    <span class="fill-text" data-text="Roadmap">Roadmap</span>
                  </NuxtLink>
                </div>
              </li>
              <li @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
                <div class="o-hidden">
                  <NuxtLink to="/contact" class="link" @click="closeMenu">
                    <span class="fill-text" data-text="Contact">Contact</span>
                  </NuxtLink>
                </div>
              </li>
              <li @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
                <div class="o-hidden">
                  <NuxtLink to="/ai-playground" class="link" @click="closeMenu">
                    <span class="playground-pill-mobile">
                      <span class="playground-ai">AI</span>
                      <span class="playground-word">Playground</span>
                      <span class="playground-arrow ti-arrow-top-right" aria-hidden="true"></span>
                    </span>
                  </NuxtLink>
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
              <h5>Graha Pengharapan Building, 2nd Floor, Jl. Denpasar Raya No.2, South Jakarta 12950</h5>
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
import { computed, onMounted, onUnmounted, ref, watch } from 'vue';

const isScrolled = ref(false);
const route = useRoute();
const hasDarkHeader = computed(() => !/^\/case-studies\/.+/.test(route.path));

let navbarEl = null;
let ticking = false;

function handleScroll() {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    const scrolled = window.scrollY > 300;
    if (navbarEl) navbarEl.classList.toggle('nav-scroll', scrolled);
    isScrolled.value = scrolled;
    ticking = false;
  });
}

const dropdownOpen = ref(false);

function handleDropdownMouseMove(event) {
  dropdownOpen.value = true;
  event.currentTarget.querySelector('.dropdown-menu').classList.add('show');
}

function handleDropdownMouseLeave(event) {
  dropdownOpen.value = false;
  event.currentTarget.querySelector('.dropdown-menu').classList.remove('show');
}

function handleDropdownFocusIn(event) {
  dropdownOpen.value = true;
  event.currentTarget.querySelector('.dropdown-menu')?.classList.add('show');
}

function handleDropdownFocusOut(event) {
  if (event.currentTarget.contains(event.relatedTarget)) return;
  dropdownOpen.value = false;
  event.currentTarget.querySelector('.dropdown-menu')?.classList.remove('show');
}

const isOpen = ref(false);

function handleKeydown(event) {
  if (event.key === 'Escape' && isOpen.value) {
    closeMenu();
  }
}

onMounted(() => {
  navbarEl = document.querySelector('.navbar');
  window.addEventListener('scroll', handleScroll, { passive: true });
  window.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('keydown', handleKeydown);
});

watch(isOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : '';
  document.body.style.overscrollBehavior = open ? 'contain' : '';
});

function toggleMenu() {
  isOpen.value = !isOpen.value;
}

function closeMenu() {
  isOpen.value = false;
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
  position: relative;
  isolation: isolate;
  gap: 7px;
  min-height: 44px;
  border: 1px solid #1e5fcc;
  color: #123e91;
  border-radius: 30px;
  padding: 8px 16px 8px 9px;
  background: #f5bd3c;
  box-shadow: 0 10px 24px rgba(18, 62, 145, 0.18);
  white-space: nowrap;
  animation: playground-float 3.2s ease-in-out infinite;
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.35s cubic-bezier(0.16, 1, 0.3, 1), color 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}
.playground-pill::before {
  content: "";
  position: absolute;
  z-index: -1;
  inset: -5px;
  border: 1px solid rgba(30, 95, 204, 0.42);
  border-radius: inherit;
  animation: playground-ring 2.4s ease-out infinite;
}
.playground-pill:hover {
  animation-play-state: paused;
  background: #1e5fcc;
  color: #f8fbff;
  transform: translateY(-3px);
}
.playground-pill:active {
  transform: translateY(1px) scale(0.98);
}
.playground-pill:focus-visible {
  outline: 3px solid #f5bd3c;
  outline-offset: 4px;
}
.playground-ai {
  display: inline-grid;
  width: 29px;
  height: 29px;
  place-items: center;
  border-radius: 50%;
  background: #1e5fcc;
  color: #f8fbff;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.04em;
}
.playground-pill:hover .playground-ai {
  background: #f5bd3c;
  color: #123e91;
}
.playground-word {
  font-weight: 650;
  letter-spacing: -0.01em;
}
.playground-arrow {
  display: inline-block;
  font-size: 12px;
  animation: playground-arrow 1.8s ease-in-out infinite;
}
.playground-pill-mobile {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: 1px solid #1e5fcc;
  color: #123e91;
  border-radius: 30px;
  padding: 8px 18px 8px 9px;
  background: #f5bd3c;
  font-size: 0.85em;
}
@keyframes playground-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
@keyframes playground-ring {
  0% { opacity: 0.65; transform: scale(0.96); }
  75%, 100% { opacity: 0; transform: scale(1.12); }
}
@keyframes playground-arrow {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(2px, -2px); }
}
.menu-icon,
.close-menu {
  background: transparent;
  appearance: none;
  -webkit-appearance: none;
  font: inherit;
  color: inherit;
}
.menu-icon {
  border: 0;
  padding: 25px 30px;
}
.close-menu {
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 0;
}
.nav-item.dropdown:focus-within .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}
@media (prefers-reduced-motion: reduce) {
  .playground-pill,
  .playground-pill::before,
  .playground-arrow {
    animation: none;
  }
}
</style>
