<template>
  <section class="inter-fixed-text section-padding">
    <div class="container">
      <div class="sec-head mb-80">
        <h6 class="sub-title main-color mb-25">Selected Work</h6>
        <div class="bord pt-25 bord-thin-top d-flex justify-content-end">
          <h2 class="fw-600 d-rotate wow">
            <span class="rotate-text">
              Real systems. Real revenue. <span class="fw-200">Real operators.</span>
            </span>
          </h2>
        </div>
      </div>
    </div>
    <div class="container position-re">
      <div class="links-img">
        <div class="row">
          <div class="col-lg-4 items">
            <div class="item">
              <div @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave" class="img" data-tab="tab-1">
                <img src="/light/assets/imgs/works/1/1.jpg" alt="Hospitality Concierge AI" />
                <a href="/case-studies/hospitality-concierge-ai" class="link-overlay"></a>
              </div>
              <div class="cont">
                <span class="tag">AI for Hospitality</span>
                <h2>Hospitality Concierge AI</h2>
              </div>
            </div>
          </div>
          <div class="col-lg-4 items">
            <div class="item">
              <div @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave" class="img" data-tab="tab-2">
                <img src="/light/assets/imgs/works/1/2.jpg" alt="Sales Agent" />
                <a href="/case-studies/sales-agent-us" class="link-overlay"></a>
              </div>
              <div class="cont">
                <span class="tag">Agentic AI for Sales</span>
                <h2>Sales Follow-Up Agent</h2>
              </div>
            </div>
          </div>
          <div class="col-lg-4 items">
            <div class="item">
              <div @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave" class="img" data-tab="tab-3">
                <img src="/light/assets/imgs/works/1/3.jpg" alt="SPOSEA Platform" />
                <a href="/case-studies/sposea-digital-infrastructure" class="link-overlay"></a>
              </div>
              <div class="cont">
                <span class="tag">Web and Brand Infrastructure</span>
                <h2>SPOSEA Digital Platform</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="links-text">
        <ul class="rest">
          <li id="tab-1">
            <span class="tag">AI for Hospitality · Singapore</span>
            <h2>Concierge AI handling guest queries 24/7 across multiple properties.</h2>
          </li>
          <li id="tab-2">
            <span class="tag">Agentic AI · United States</span>
            <h2>Sales agent that qualifies, drafts, and books — end to end.</h2>
          </li>
          <li id="tab-3">
            <span class="tag">Web Infrastructure · Netherlands</span>
            <h2>SAP-native pricing platform — full digital infrastructure across 3 product lines.</h2>
          </li>
        </ul>
      </div>
    </div>
    <div class="container mt-40">
      <div class="sec-bottom mt-100">
        <div class="main-bg d-flex align-items-center">
          <p>A snapshot of what we've shipped in the last 24 months across 6 markets.</p>
          <a href="/case-studies" class="butn main-color ml-40 underline">
            <span>See All Case Studies</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
function handleMouseEnter(event) {
  var tab_id = event.currentTarget.getAttribute('data-tab');

  document.querySelectorAll('.links-text li').forEach((el) => {
    el.classList.remove('current');
  });
  document.querySelectorAll('.links-img .img').forEach((el) => {
    el.classList.remove('current');
  });
  event.currentTarget.classList.add('current');

  document
    .querySelectorAll('.links-img .img')
    .forEach((el) => el.classList.remove('current'));
  document.querySelector('#' + tab_id).classList.add('current');

  if (event.currentTarget.classList.contains('current')) return false;
}

function handleMouseLeave() {
  document
    .querySelectorAll('.links-img .img')
    .forEach((el) => el.classList.remove('current'));
  document
    .querySelectorAll('.links-text li')
    .forEach((el) => el.classList.remove('current'));
}
</script>
