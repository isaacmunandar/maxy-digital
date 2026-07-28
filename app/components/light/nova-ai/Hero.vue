<template>
  <header class="nova-hero">
    <div class="nova-orbit" aria-hidden="true"></div>
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <p v-reveal class="nova-eyebrow">NOVA AI · A MAXY AI Company</p>
          <h1 class="nova-hero-title">
            The AI CMO your business has been missing.
          </h1>
          <p v-reveal="{ delay: 100 }" class="nova-lead">
            We are in the Marketing 5.0 era. Every brand is competing for the
            same customer with more content, every day.
          </p>
          <p v-reveal="{ delay: 150 }" class="nova-copy">
            Winning takes sharp strategy and someone who understands how modern
            marketing works. Experienced talent that can read the market,
            out-think competitors, and turn insight into content that sells is
            rare and expensive. That is why we built NOVA AI.
          </p>
          <div v-reveal="{ delay: 200 }" class="nova-actions">
            <a
              href="https://nova.maxy.academy/"
              target="_blank"
              rel="noopener"
              class="nova-button"
            >
              Discover NOVA AI
              <span class="ti-arrow-top-right" aria-hidden="true"></span>
            </a>
          </div>
        </div>

        <div class="col-lg-6">
          <div
            v-reveal="{ delay: 220 }"
            class="nova-console"
            aria-label="Example NOVA AI agent run"
          >
            <div class="nova-console-bar">
              <span class="nova-mark">N</span>
              <span>NOVA · AGENT RUN</span>
              <span class="nova-status">LIVE</span>
            </div>
            <div class="nova-brief">
              <span>YOUR BRIEF</span>
              <p>Build next month's marketing plan for my business.</p>
            </div>
            <ol class="nova-run-list">
              <li v-for="(task, index) in novaAgentTasks" :key="task">
                <span class="nova-step">0{{ index + 1 }}</span>
                <span>{{ task }}</span>
                <span class="nova-check">DONE</span>
              </li>
            </ol>
            <div class="nova-output">
              <span>EXECUTION-READY PLAN</span>
              <strong>Delivered by tomorrow</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { novaAgentTasks } from "@/l-data/nova-ai";
</script>

<style scoped>
.nova-hero {
  position: relative;
  min-height: 820px;
  padding: 190px 0 120px;
  background:
    linear-gradient(rgba(255, 255, 255, 0.045) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.045) 1px, transparent 1px),
    var(--nova-navy);
  background-size: 72px 72px;
  color: var(--nova-white);
}

.nova-orbit {
  position: absolute;
  top: 110px;
  right: -160px;
  width: 620px;
  height: 620px;
  border: 1px solid rgba(247, 169, 27, 0.28);
  border-radius: 50%;
  box-shadow:
    0 0 0 90px rgba(247, 169, 27, 0.035),
    0 0 0 180px rgba(30, 95, 204, 0.04);
}

.nova-hero h1 {
  max-width: 660px;
  color: var(--nova-white);
  font-size: clamp(54px, 6vw, 92px);
  line-height: 0.96;
  letter-spacing: -0.055em;
}

.nova-lead {
  max-width: 610px;
  margin-top: 32px;
  color: var(--nova-white);
  font-size: clamp(19px, 2vw, 24px);
  font-weight: 500;
  line-height: 1.5;
}

.nova-copy {
  max-width: 610px;
  margin-top: 18px;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.75;
}

.nova-actions {
  display: flex;
  align-items: center;
  gap: 22px;
  margin-top: 34px;
}

.nova-console {
  position: relative;
  margin-left: 40px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 36px 100px rgba(3, 6, 31, 0.38);
  backdrop-filter: blur(18px);
}

.nova-console-bar,
.nova-run-list li,
.nova-output {
  display: flex;
  align-items: center;
}

.nova-console-bar {
  gap: 10px;
  padding: 16px 18px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  color: rgba(255, 255, 255, 0.72);
  font-family: Poppins, sans-serif;
  font-size: 11px;
  letter-spacing: 0.13em;
}

.nova-mark {
  display: grid;
  width: 28px;
  height: 28px;
  place-items: center;
  border-radius: 7px;
  background: var(--nova-amber);
  color: var(--nova-navy);
  font-size: 14px;
  font-weight: 800;
}

.nova-status {
  margin-left: auto;
  color: #8ce0ec;
}

.nova-brief {
  margin: 22px;
  padding: 20px;
  border: 1px solid rgba(247, 169, 27, 0.3);
  border-radius: 10px;
  background: rgba(8, 12, 49, 0.45);
}

.nova-brief span,
.nova-output span {
  color: var(--nova-amber-light);
  font-family: Poppins, sans-serif;
  font-size: 10px;
  letter-spacing: 0.16em;
}

.nova-brief p {
  margin-top: 12px;
  color: var(--nova-white);
  font-family: Poppins, sans-serif;
  font-size: 14px;
}

.nova-run-list {
  margin: 0;
  padding: 0 22px;
  list-style: none;
}

.nova-run-list li {
  gap: 14px;
  padding: 18px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.82);
  font-size: 14px;
}

.nova-step {
  color: var(--nova-amber-light);
  font-family: Poppins, sans-serif;
  font-size: 11px;
}

.nova-check {
  margin-left: auto;
  color: #8ce0ec;
  font-family: Poppins, sans-serif;
  font-size: 9px;
  letter-spacing: 0.12em;
}

.nova-output {
  justify-content: space-between;
  margin: 22px;
  padding: 20px;
  border-radius: 10px;
  background: var(--nova-amber);
  color: var(--nova-navy);
}

.nova-output span {
  color: inherit;
}

.nova-output strong {
  font-size: 14px;
}

@media (max-width: 991px) {
  .nova-hero {
    min-height: auto;
    padding: 160px 0 90px;
  }

  .nova-console {
    margin: 70px 0 0;
  }
}

@media (max-width: 576px) {
  .nova-hero {
    padding: 135px 0 70px;
  }

  .nova-hero h1 {
    font-size: 48px;
  }

  .nova-actions {
    align-items: flex-start;
    flex-direction: column;
  }

  .nova-console {
    border-radius: 12px;
  }

  .nova-output {
    align-items: flex-start;
    gap: 8px;
    flex-direction: column;
  }
}
</style>
