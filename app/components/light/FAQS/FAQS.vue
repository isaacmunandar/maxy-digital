<template>
  <section class="faqs section-padding position-re">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-lg-4">
          <div class="sec-head md-mb80">
            <h6 class="sub-title main-color mb-15">Frequently Asked</h6>
            <h2>
              What buyers ask <br />
              before booking a call.
            </h2>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="list-serv">
            <div class="accordion bord">
              <div class="item mb-15 wow fadeInUp" data-wow-delay=".1s">
                <div @click="openAccordion" class="title">
                  <h6>What size companies do you work with?</h6>
                  <span class="ico ti-plus"></span>
                </div>
                <div class="accordion-info">
                  <p>
                    SMEs with $2M–$50M annual revenue. We've shipped for solo founders all the way to enterprise teams, but our sweet spot is operator-led companies with the appetite to ship and the budget to do it properly. Project tickets typically range $5,000–$50,000.
                  </p>
                </div>
              </div>

              <div class="item active mb-15 wow fadeInUp" data-wow-delay=".2s">
                <div @click="openAccordion" class="title">
                  <h6>How fast can you ship something live?</h6>
                  <span class="ico ti-plus"></span>
                </div>
                <div class="accordion-info">
                  <p>
                    First AI deployment: 4–8 weeks from kickoff. Web/app builds: 6–12 weeks depending on scope. We don't ship fake "MVPs" that don't work — we ship production systems with measurable outcomes.
                  </p>
                </div>
              </div>

              <div class="item mb-15 wow fadeInUp" data-wow-delay=".3s">
                <div @click="openAccordion" class="title">
                  <h6>Do you only work with Southeast Asian companies?</h6>
                  <span class="ico ti-plus"></span>
                </div>
                <div class="accordion-info">
                  <p>
                    No. We're Singapore-HQ'd, with Indonesia and US client work currently in production. The work itself is borderless — we ship across markets routinely. What we offer Southeast Asian clients additionally is grant-aligned scoping (PSG/EDG in Singapore) and local market expertise.
                  </p>
                </div>
              </div>

              <div class="item mb-15 wow fadeInUp" data-wow-delay=".4s">
                <div @click="openAccordion" class="title">
                  <h6>What's the difference between you and a consulting firm?</h6>
                  <span class="ico ti-plus"></span>
                </div>
                <div class="accordion-info">
                  <p>
                    Consultancies write strategy decks. We ship code. A consulting firm will charge you $200K to tell you what to do. We charge a fraction of that to actually do it. We don't do strategy as a standalone product — strategy is how we open every engagement before we build.
                  </p>
                </div>
              </div>

              <div class="item mb-15 wow fadeInUp" data-wow-delay=".5s">
                <div @click="openAccordion" class="title">
                  <h6>We already have a website / agency / AI tool. How do you fit in?</h6>
                  <span class="ico ti-plus"></span>
                </div>
                <div class="accordion-info">
                  <p>
                    We work alongside existing teams and vendors regularly. Most of our engagements are extending what's already there — adding agents to a working site, layering AI into an existing stack, fixing what underperforms. We don't require a clean slate.
                  </p>
                </div>
              </div>

              <div class="item mb-15 wow fadeInUp" data-wow-delay=".6s">
                <div @click="openAccordion" class="title">
                  <h6>What stack do you build on?</h6>
                  <span class="ico ti-plus"></span>
                </div>
                <div class="accordion-info">
                  <p>
                    We're stack-agnostic — we build with what fits the problem and integrates with your existing infrastructure. We have deep experience across modern LLMs, agent frameworks, vector databases, web frameworks, mobile (React Native, Flutter), and major CRMs and helpdesks. We'll recommend the right tool for the job, not the one we have a partnership with.
                  </p>
                </div>
              </div>

              <div class="item mb-15 wow fadeInUp" data-wow-delay=".7s">
                <div @click="openAccordion" class="title">
                  <h6>What do you not do?</h6>
                  <span class="ico ti-plus"></span>
                </div>
                <div class="accordion-info">
                  <p>
                    We don't do generic ChatGPT seat rollouts. We don't do "AI strategy" as a standalone deliverable without a build attached. We don't do projects under $5K — the math stops working for both sides.
                  </p>
                </div>
              </div>

              <div class="item mb-15 wow fadeInUp" data-wow-delay=".8s">
                <div @click="openAccordion" class="title">
                  <h6>How does the Singapore grant actually work?</h6>
                  <span class="ico ti-plus"></span>
                </div>
                <div class="accordion-info">
                  <p>
                    PSG and EDG are administered by IMDA and Enterprise Singapore. They cover up to 50% of qualifying project costs for SG-registered SMEs. We help you structure the project to align with grant criteria and prepare documentation. The approval is theirs, not ours — but we know what works and what doesn't.
                  </p>
                </div>
              </div>

              <div class="item mb-15 wow fadeInUp" data-wow-delay=".9s">
                <div @click="openAccordion" class="title">
                  <h6>Do you sign NDAs?</h6>
                  <span class="ico ti-plus"></span>
                </div>
                <div class="accordion-info">
                  <p>
                    Yes. Standard for every engagement. We can sign yours or send ours. Pre-call NDAs available on request.
                  </p>
                </div>
              </div>

              <div class="item wow fadeInUp" data-wow-delay="1s">
                <div @click="openAccordion" class="title">
                  <h6>How do we start?</h6>
                  <span class="ico ti-plus"></span>
                </div>
                <div class="accordion-info">
                  <p>
                    One 30-minute strategy call. You walk away with a concrete first-move recommendation, whether you work with us or not. No pitch deck, no proposal until we both decide there's fit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="line-overlay up opacity-7">
      <svg
        viewBox="0 0 1728 1101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-43 773.821C160.86 662.526 451.312 637.01 610.111 733.104C768.91 829.197 932.595 1062.9 602.782 1098.75C272.969 1134.6 676.888 25.4306 1852 1"
          style="stroke-dasharray: 3246.53, 0"
        ></path>
      </svg>
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
