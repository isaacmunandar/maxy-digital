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
            <h5 class="line-height-40">
              The client needed to scale customer-facing operations without
              scaling headcount. Existing automation tools handled predictable
              cases — but the edge cases, the judgment calls, the nuanced
              responses: those still required human time. That's where AI earns.
            </h5>
          </div>
          <div class="accordion bord mt-100">
            <div class="item active mb-15 wow fadeInUp" data-wow-delay=".1s">
              <div @click="openAccordion" class="title">
                <h6>Scaling without linear headcount growth</h6>
                <span class="ico ti-plus"></span>
              </div>
              <div class="accordion-info">
                <p>
                  The core problem: demand was growing faster than the team could
                  handle. The AI agent took over the predictable 70% of queries,
                  freeing the human team to focus on complex, high-value interactions.
                </p>
              </div>
            </div>

            <div class="item mb-15 wow fadeInUp" data-wow-delay=".3s">
              <div @click="openAccordion" class="title">
                <h6>Integration with existing infrastructure</h6>
                <span class="ico ti-plus"></span>
              </div>
              <div class="accordion-info">
                <p>
                  No rip-and-replace. The MAXY team layered the AI system on top
                  of the client's current tools — CRM, ticketing system, and
                  communication platform — with no disruption to live operations.
                </p>
              </div>
            </div>

            <div class="item wow fadeInUp" data-wow-delay=".5s">
              <div @click="openAccordion" class="title">
                <h6>Accuracy and brand-safe responses</h6>
                <span class="ico ti-plus"></span>
              </div>
              <div class="accordion-info">
                <p>
                  The agent was trained on the client's actual content and tone
                  of voice — not generic prompts. Response accuracy was measured
                  and refined over the first 30 days post-launch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
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
