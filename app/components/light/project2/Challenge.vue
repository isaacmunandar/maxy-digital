<template>
  <section class="section-padding bord-thin-bottom">
    <div class="container">
      <div class="row">
        <div class="col-lg-5">
          <h2 class="mb-50">
            The <br />
            Challenge
          </h2>
        </div>
        <div class="col-lg-7">
          <div class="text">
            <h5 class="line-height-40">{{ problem }}</h5>
          </div>
          <div class="accordion bord mt-100">
            <div class="item active mb-15 wow fadeInUp" data-wow-delay=".1s">
              <div @click="openAccordion" class="title">
                <h6>Our Approach</h6>
                <span class="ico ti-plus"></span>
              </div>
              <div class="accordion-info">
                <p>{{ solution }}</p>
              </div>
            </div>

            <div class="item mb-15 wow fadeInUp" data-wow-delay=".3s">
              <div @click="openAccordion" class="title">
                <h6>The Outcome</h6>
                <span class="ico ti-plus"></span>
              </div>
              <div class="accordion-info">
                <p>{{ outcome }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  problem: { type: String, required: true },
  solution: { type: String, required: true },
  outcome: { type: String, required: true },
});

function openAccordion(event) {
  document.querySelectorAll('.accordion-info').forEach((element) => {
    element.classList.remove('active');
    element.style.maxHeight = 0;
    element.parentElement.classList.remove('active');
  });
  event.currentTarget.parentElement.classList.add('active');
  event.currentTarget.nextElementSibling.style.maxHeight = '300px';
  event.currentTarget.nextElementSibling.classList.add('active');
}
</script>
