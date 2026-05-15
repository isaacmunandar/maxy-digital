<template>
  <nav class="navbar navbar-expand-lg bord blur">
    <div class="container">
      <a class="logo icon-img-100" href="/">
        <img src="/light/assets/imgs/logo-light.png" alt="MAXY Digital" />
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

      <div class="topnav">
        <div @click="toggleMenu" class="menu-icon cursor-pointer">
          <span class="icon ti-align-right"></span>
        </div>
      </div>
    </div>
  </nav>

  <div :class="`hamenu ${isOpen && 'open'}`">
    <div class="logo icon-img-100">
      <img src="/light/assets/imgs/logo-light.png" alt="MAXY Digital" />
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
            </ul>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="cont-info">
            <div class="item mb-50">
              <h6 class="sub-title mb-15 opacity-7">Singapore HQ</h6>
              <h5>21b Bukit Pasoh Rd,<br />Singapore 089835</h5>
            </div>
            <div class="item mb-50">
              <h6 class="sub-title mb-15 opacity-7">Jakarta Office</h6>
              <h5>Pakuwon Tower 26-J,<br />Jakarta Selatan 12870</h5>
            </div>
            <div class="item mb-40">
              <h6 class="sub-title mb-15 opacity-7">Contact</h6>
              <h5><a href="mailto:isaac@maxy.academy">isaac@maxy.academy</a></h5>
              <h5 class="underline mt-10"><a href="/contact">Book a Call</a></h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, onUnmounted } from 'vue';
import { ref } from 'vue';

function handleScroll() {
  const bodyScroll = window.scrollY;
  const navbar = document.querySelector('.navbar');
  if (bodyScroll > 300) navbar.classList.add('nav-scroll');
  else navbar.classList.remove('nav-scroll');
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
