<template>
  <section class="contact section-padding sub-bg">
    <div class="container">
      <div class="row">
        <div class="col-lg-5 valign">
          <div class="sec-head md-mb80">
            <h2 v-reveal:clip class="text-u ls1">
              Let&apos;s ship your <br />
              first agentic
              <span class="fw-200">AI system.</span>
            </h2>
            <p v-reveal="{ delay: 100 }" class="mt-20 mb-20">
              30-minute strategy call. We diagnose where agentic AI earns first,
              you decide. No pitch deck. We respond within one business day.
            </p>
            <div class="row" v-reveal:stagger="{ delay: 160 }">
              <div class="col-md-6">
                <div class="morinfo mt-30">
                  <h6 class="mb-15">Singapore</h6>
                  <p>21B Bukit Pasoh Road,<br />Singapore 089835</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="morinfo mt-30">
                  <h6 class="mb-15">MAXY AI HUB</h6>
                  <p>Graha Pengharapan Building, 2nd Floor, Jl. Denpasar Raya No.2, South Jakarta 12950</p>
                </div>
              </div>
            </div>
            <div v-reveal="{ delay: 220 }" class="phone fz-30 fw-600 mt-30 underline main-color">
              <a href="mailto:hello@maxy.asia">hello@maxy.asia</a>
            </div>
            <!-- <ul class="rest social-text d-flex mt-60">
              <li class="mr-30">
                <a href="#0" class="hover-this">
                  <span class="hover-anim">LinkedIn</span>
                </a>
              </li>
              <li class="mr-30">
                <a href="#0" class="hover-this">
                  <span class="hover-anim">Instagram</span>
                </a>
              </li>
              <li class="mr-30">
                <a href="#0" class="hover-this">
                  <span class="hover-anim">TikTok</span>
                </a>
              </li>
              <li>
                <a href="#0" class="hover-this">
                  <span class="hover-anim">YouTube</span>
                </a>
              </li>
            </ul> -->
          </div>
        </div>
        <div class="col-lg-6 offset-lg-1 valign">
          <div class="full-width">
            <div v-reveal class="sec-head mb-50">
              <h3 class="text-u ls1">
                Send a <span class="fw-200">message</span>
              </h3>
            </div>

            <!-- Success State -->
            <div v-if="submitted" class="messages" aria-live="polite" style="padding: 24px; border: 1px solid #22c55e; border-radius: 8px; background: rgba(34,197,94,0.08); text-align: center;">
              <p style="color: #22c55e; font-size: 16px; margin: 0;">&#10003; Message sent! We&apos;ll respond within one business day.</p>
            </div>

            <form v-else id="contact-form" @submit.prevent="handleSubmit">
              <div v-if="errorMsg" class="messages" aria-live="polite" style="padding: 16px; border: 1px solid #ef4444; border-radius: 8px; background: rgba(239,68,68,0.08); margin-bottom: 20px;">
                <p style="color: #ef4444; font-size: 14px; margin: 0;">{{ errorMsg }}</p>
              </div>

              <div class="controls row" v-reveal:stagger="{ delay: 100 }">
                <div class="col-lg-6">
                  <div class="form-group mb-30">
                    <label for="form_name" class="visually-hidden">Name</label>
                    <input id="form_name" v-model="form.name" type="text" name="name" placeholder="Name…" autocomplete="name" required :disabled="loading" />
                  </div>
                </div>

                <div class="col-lg-6">
                  <div class="form-group mb-30">
                    <label for="form_email" class="visually-hidden">Email</label>
                    <input id="form_email" v-model="form.email" type="email" name="email" placeholder="Email…" autocomplete="email" spellcheck="false" required :disabled="loading" />
                  </div>
                </div>

                <div class="col-12">
                  <div class="form-group mb-30">
                    <label for="form_subject" class="visually-hidden">Subject</label>
                    <input id="form_subject" v-model="form.subject" type="text" name="subject" placeholder="Subject…" autocomplete="off" :disabled="loading" />
                  </div>
                </div>

                <div class="col-12">
                  <div class="form-group">
                    <label for="form_message" class="visually-hidden">Message</label>
                    <textarea id="form_message" v-model="form.message" name="message" placeholder="Message…" autocomplete="off" rows="4" required :disabled="loading"></textarea>
                  </div>
                  <div class="mt-30">
                    <button type="submit" class="butn butn-full butn-bord radius-30" :disabled="loading" :style="loading ? 'opacity: 0.7; cursor: not-allowed;' : ''">
                      <span class="text">{{ loading ? 'Sending…' : 'Send Message' }}</span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue';

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
});

const loading = ref(false);
const submitted = ref(false);
const errorMsg = ref('');

async function handleSubmit() {
  loading.value = true;
  errorMsg.value = '';

  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: { ...form },
    });
    submitted.value = true;
    form.name = '';
    form.email = '';
    form.subject = '';
    form.message = '';
  } catch (e) {
    errorMsg.value = e?.data?.statusMessage || 'Something went wrong. Please try again.';
  } finally {
    loading.value = false;
  }
}
</script>
