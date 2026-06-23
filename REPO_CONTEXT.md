# REPO CONTEXT — MAXY Digital Website
*Dibuat otomatis untuk keperluan EAS Magang Berdampak*
*Tanggal analisis: 16 Juni 2026*

---

## 1. RINGKASAN PROJECT

**Nama Project:** maxy-digital
**Deskripsi Singkat:** Website profil agensi digital dan platform pemasaran MAXY Digital yang interaktif, dibangun dengan Nuxt 4, menampilkan informasi solusi Agentic AI, Digital Growth, portofolio proyek terintegrasi, serta contact form handler dengan proteksi spam dan rate limiting.
**Domain/Konteks Bisnis:** Agency Website, Agentic AI & Digital Growth Consultancy, Software Development Agency.
**Status Project:** Selesai / Production-Ready (Telah dikonfigurasi untuk rilis produksi pada domain https://maxy.asia).

---

## 2. TECH STACK

**Bahasa Pemrograman:** TypeScript, JavaScript (ES Modules)
**Framework Utama:** Nuxt 4 (Vue 3, Nitro Server Engine)
**Database:** None (Data portofolio, tim, testimonial, dan klien disimpan secara statis dalam format JSON lokal di dalam folder `app/l-data/` untuk kecepatan maksimal dan efisiensi deployment)
**ORM/Query Builder:** Tidak ada (menggunakan native array/JSON methods)
**AI/ML Stack:** Tidak ada modul AI yang dieksekusi secara lokal di server web ini. Situs ini memamerkan kapabilitas solusi Agentic AI eksternal yang ditawarkan MAXY Digital kepada klien.
**Infrastruktur:** Static & Serverless Cloud Hosting (seperti Netlify atau Vercel, dikonfigurasi via Nuxt Site Configuration)
**Tools Lain:** 
* **Resend SDK**: Library integrasi pengiriman email notifikasi transaksional kontak.
* **GSAP (GreenSock Animation Platform)**: ScrollTrigger & ScrollSmoother untuk sistem scroll interaktif tingkat tinggi.
* **Swiper**: Library carousel/slider modern untuk elemen portofolio dan testimonial.
* **@nuxtjs/seo**: Modul SEO terintegrasi (termasuk Satori dan Resvg untuk dynamic OG Image).
* **Splitting.js & Isotope**: Library pembagian teks untuk animasi tipografi dan filtrasi grid layout.

---

## 3. ARSITEKTUR SISTEM

### Pola Arsitektur
Pola yang diterapkan adalah **Jamstack Monolith berbasis Nuxt (Vue SSR & Serverless API)**. Seluruh komponen visual dan logika interaksi dikelola menggunakan Vue 3 di sisi frontend dengan Server-Side Rendering (SSR) untuk SEO yang optimal, sementara logika backend penanganan formulir kontak disederhanakan menjadi single serverless route API di sisi backend (Nitro Engine).

### Alur Kerja Utama
Berikut adalah alur kerja pengiriman pesan lewat formulir kontak pada website:
1. **Request Submit**: Pengunjung mengisi formulir kontak (Nama, Email, Subjek, dan Pesan) pada halaman `/contact` dan menekan tombol "Book a Strategy Call".
2. **Frontend Dispatch**: Event handler `handleSubmit` mengeksekusi request POST secara asynchronous menggunakan `useFetch` menuju serverless route `/api/contact`.
3. **IP Rate Limiting Check**: Serverless route handler mengambil alamat IP pengirim (`getRequestIP`) dan memeriksa ke dalam cache in-memory `ipCache`. Jika IP tersebut mengirim pesan kembali dalam kurun waktu kurang dari 24 jam, server langsung menghentikan proses dan mengembalikan error HTTP 429 (Too Many Requests).
4. **Spam Filtering**: Isi pesan dikonversi menjadi huruf kecil dan dicocokkan dengan daftar blacklist kata kunci spam (`SPAM_WORDS` seperti 'viagra', 'lottery', 'crypto', dll). Jika ditemukan kecocokan, server mengembalikan error HTTP 400 (Bad Request).
5. **Resend API Integration**: Jika lolos validasi, backend membuat instance `Resend` menggunakan `RESEND_API_KEY` dari environment variable, lalu mengirimkan email dengan template HTML premium ke email admin `it.maxy.academy@gmail.com`.
6. **Response & Cache Update**: Alamat IP pengirim dicatat ke dalam `ipCache` dengan timestamp saat ini, kemudian respon sukses dikembalikan ke client untuk menampilkan pesan sukses di antarmuka pengguna.

### Struktur Folder Utama
```
├── app/                  # Frontend code (Nuxt 4 source directory)
│   ├── common/           # Utility functions (Isotope, scroll, dll.)
│   ├── components/       # UI Components (light/...)
│   ├── l-data/           # Static JSON datasets (portfolios, testimonials, services)
│   ├── layouts/          # Global layouts (default layout dengan GSAP integration)
│   ├── pages/            # Page templates (index, roadmap, contact, solutions)
│   └── app.vue           # Nuxt application root component
├── docs/                 # Documentation & briefing assets
│   ├── google-form-portofolio.gs  # Google Apps Script for portfolio briefs
│   └── porto_template_curated.md   # Curated portfolio reference catalog
├── server/               # Server-side API endpoints
│   └── api/
│       └── contact.post.ts  # Contact email form handler menggunakan Resend
├── nuxt.config.ts        # Nuxt framework configuration
├── package.json          # Node package dependencies
└── tsconfig.json         # TypeScript configuration
```

---

## 4. FITUR-FITUR YANG DIIMPLEMENTASIKAN

### Fitur Utama
* **Autentikasi & Otorisasi**: Tidak ada (Situs profil publik tanpa login panel).
* **Interactive Landing Page & Portfolio Filter**: Halaman depan interaktif dengan dynamic grid yang menampilkan portofolio MAXY Digital, difilter secara dinamis menggunakan Isotope berdasarkan kategori "Agentic AI", "Web & App", dan "Digital Growth".
* **Dynamic Solutions Directory**: Sistem sub-direktori `/solutions` yang menyajikan portofolio spesifik berdasarkan rute halaman (`/solutions/agentic-ai`, `/solutions/web-app`, dan `/solutions/digital-growth`) dengan menyaring dataset `workstand.json`.
* **Automated Booking Request & Validation**: Formulir pemesanan sesi strategi call dengan pengiriman otomatis ke email admin, dilengkapi validasi input data, validasi duplikasi pengiriman berbasis IP (24-hour limit), dan penyaringan spam otomatis.
* **Premium GSAP Animations**: Sistem visual mewah dengan fitur smooth scroll, parallax scroll-effects, text-splitting animations, dan custom pointer hover effects yang menyatu dalam layout default.
* **SEO & Metadata Optimization**: Integrasi penuh menggunakan `@nuxtjs/seo` untuk mengontrol sitemap, robots, canonical URL, microdata, dan pembuatan dynamic OG Image untuk kemudahan berbagi link di media sosial.

### Fitur AI/ML (jika ada)
* **Demo Deskripsi Solusi Agentic AI**: Halaman web mendemonstrasikan rancangan/arsitektur Agentic AI untuk klien seperti *Hospitality Concierge AI*, *Sales Follow-Up Agent*, *Employee Insight AI*, dan *HR Assessment AI*.
* Pipeline Konseptual AI: [User Query] → [MAXY Agency-Built LLM Agent (OpenAI/Gemini)] → [Semantic Routing & Function Calling to client tools (CRM/Ticketing)] → [Structured brand-safe action/response].

### Integrasi Eksternal
* **Resend API Service**: Terintegrasi pada backend serverless function untuk mengirim data kontak ke kotak masuk email operasional MAXY (`it.maxy.academy@gmail.com`) dengan andal.
* **Google Apps Script**: Menyediakan integrasi template script (`docs/google-form-portofolio.gs`) untuk mengotomatisasi pembuatan formulir pengumpulan brief kebutuhan desain portfolio dari klien secara langsung ke Google Forms.

---

## 5. KOMPONEN TEKNIS KUNCI

### Database Schema Utama
Aplikasi ini dirancang menggunakan konsep **Static Serverless Data (Jamstack)** tanpa database relasional/NoSQL demi performa kecepatan kilat (sub-second load time) dan meminimalkan celah keamanan SQL injection. Relasi data portofolio diatur dalam format JSON:
* **workstand.json** (`app/l-data/portofolios/`): Menyimpan data proyek portofolio, dengan kolom penting:
  - `title`: Nama proyek / produk.
  - `tag`: Kategori utama ("Agentic AI", "Web & App", "Digital Growth").
  - `filter`: ID filter string untuk pencarian/filtering di frontend (misalnya `agentic-ai`).
  - `desc`: Penjelasan fungsionalitas dan dampak bisnis proyek tersebut.
  - `img`: Path file visual aset/mockup.
  - `link`: URL rute solusi terkait.

### API Endpoints Utama
| Method | Endpoint | Fungsi |
|--------|----------|--------|
| POST | `/api/contact` | Menerima data name, email, subject, dan message. Memverifikasi rate limit IP, memfilter kata kunci spam, merender HTML email premium, dan mengirimkannya via Resend API. |

### Algoritma / Logic Utama
* **In-Memory IP Rate Limiting**:
  ```typescript
  // Menggunakan global Map di memory
  const ipCache = new Map<string, number>()
  const RATE_LIMIT_MS = 24 * 60 * 60 * 1000 // Cooldown 24 jam

  // Di dalam event handler
  if (clientIp !== 'unknown-ip') {
    const lastRequestTime = ipCache.get(clientIp)
    if (lastRequestTime && Date.now() - lastRequestTime < RATE_LIMIT_MS) {
      throw createError({ statusCode: 429, statusMessage: 'You have already submitted a request...' })
    }
  }
  ```
* **Client-Safe Spam Detection**:
  Membandingkan isi pesan dengan array `SPAM_WORDS` yang didefinisikan secara statis. Pencarian dilakukan secara case-insensitive untuk mendeteksi keywords manipulatif bot seperti judi online, obat-obatan terlarang, maupun skema cepat kaya.
* **GSAP Scroll & Transition Synchronization**:
  Menginisialisasi plugin `ScrollTrigger` dan `ScrollSmoother` di file layout `default.vue`. Untuk mencegah crash tinggi halaman saat berpindah rute di Single Page Application (SPA), watcher memantau rute `route.fullPath` dan memicu refresh instan:
  ```typescript
  watch(
    () => route.fullPath,
    async () => {
      await nextTick();
      if (typeof ScrollTrigger !== "undefined") ScrollTrigger.refresh();
      if (smoother) smoother.refresh();
    }
  );
  ```

---

## 6. KONTRIBUSI MAHASISWA

### Bagian yang Dikerjakan
Berdasarkan analisis log Git, kontributor tunggal repository ini adalah **Ghufron Bagaskara**. Bagian yang dikerjakan mencakup:
1. **Arsitektur Frontend Nuxt 4**: Migrasi dan setup boilerplate Nuxt 4, modularisasi components, serta pembuatan layouts dan routing dinamis.
2. **Serverless Form Handler**: Membangun `/api/contact` endpoint, integrasi library `resend`, mendesain layout HTML email template, serta menulis logic proteksi rate-limiter dan spam protection.
3. **Optimalisasi Desain & Copywriting**: Menyempurnakan tipografi, membersihkan referensi PSG/EDG grant yang tidak relevan, menyederhanakan menu, dan merapikan visual layout.
4. **Docs Automation Script**: Menulis script Google Apps Script (`google-form-portofolio.gs`) untuk pembagian katalog referensi dan generator form brief portofolio klien.

### Challenge Teknis yang Diselesaikan
* **Penyelarasan Scroll-Trigger SPA**: Masalah umum pada library GSAP di framework Vue/Nuxt adalah tinggi halaman yang salah hitung saat berpindah halaman secara client-side, menyebabkan animasi tidak berjalan atau blank space. Masalah diselesaikan dengan mengaitkan watcher rute Vue Router ke `nextTick` dan memicu trigger refresh secara teratur.
* **Serverless Node Security**: Mengembangkan logic rate limiting tanpa database menggunakan dynamic memory caching pada runtime Nitro Engine untuk menghemat latensi dan biaya server.

### Keputusan Teknis Penting
* **Resend API Over SMTP**: Memilih Resend untuk delivery email karena memiliki performa pengiriman tinggi, anti-spam rating yang bagus, dan SDK modern TypeScript yang sangat cocok dengan serverless runtime Nuxt.
* **Zero-Database (Jamstack)**: Menyimpan katalog di JSON statis lokal. Menghilangkan kompleksitas deployment database, menekan latensi query ke 0ms, dan memberikan jaminan 100% website tidak akan lumpuh akibat kegagalan database.

---

## 7. BUKTI ARTEFAK (untuk Laporan EAS)

### Yang Tersedia di Repo Ini
- [x] Source code web aplikasi utuh (Nuxt 4)
- [x] README instalasi & panduan server lokal
- [x] Serverless API endpoint (`server/api/contact.post.ts`)
- [x] Dataset portofolio statis (`app/l-data/portofolios/workstand.json`)
- [x] Script Google Apps Script (`docs/google-form-portofolio.gs`)
- [x] Katalog rekomendasi desain (`docs/porto_template_curated.md`)

### Yang Perlu Dibuat/Ditambahkan
- [ ] Screenshot UI/Tampilan web (Homepage, Halaman Solusi, Formulir Kontak)
- [ ] Flowchart alur pengiriman formulir kontak dan penanganan rate limit
- [ ] Diagram arsitektur integrasi sistem (Client Browser → Nuxt Serverless API → Resend API → Admin Gmail)
- [ ] Skema struktur JSON data portofolio
- [ ] Video demo navigasi website dan pengujian form contact

---

## 8. KETERKAITAN DENGAN CPMK

### CPMK 3 Program — Perancangan dan Implementasi Solusi TI
**Bukti dari repo ini:**
* Perancangan arsitektur modern web berbasis SSR dengan performa optimasi visual kelas dunia (GSAP & Nuxt 4).
* Implementasi secure transaction endpoint melalui `/api/contact` yang mengintegrasikan validasi data, IP rate-limiting, kata kunci blacklist spam, dan integrasi Resend API secara andal.

### Tools/Teknologi Industri yang Digunakan (CPMK 2 asal)
* **Nuxt 4 & Vue 3**: Standar industri modern untuk pengembangan aplikasi web berkinerja tinggi, modular, dan ramah SEO.
* **TypeScript**: Standar global industri untuk type safety yang meminimalisir runtime error di produksi.
* **Resend API**: Pilihan utama developer modern untuk pengiriman email transaksional yang cepat.
* **GSAP**: Tool animasi profesional berstandar industri interaktif agensi internasional.

### Penerapan Konsep Perkuliahan (CPMK 1 asal)
* **Interaksi Manusia dan Komputer (IMK)**: Diimplementasikan pada micro-interactions, responsive design layout, custom dynamic cursor tracker, smooth scrolling (GSAP), dan transisi rute halus untuk user experience (UX) premium.
* **Keamanan Informasi (Information Security)**: Diterapkan melalui in-memory rate-limiter untuk menahan serangan form-spamming / brute force, serta input sanitization/keyword blacklisting untuk mencegah eksploitasi konten.
* **Sistem Terdistribusi**: Komunikasi client-server asynchronous via fetch API, pemanfaatan cloud serverless API functions, dan integrasi microservice eksternal (Resend).

---

## 9. CATATAN PENTING

### NDA/Kerahasiaan
* **Data Sensitif**: Terdapat token API `RESEND_API_KEY` di file `.env` lokal. Meskipun `.env` sudah masuk dalam `.gitignore` agar tidak bocor ke publik, mahasiswa wajib berhati-hati saat membuat tangkapan layar (screenshot) kode agar tidak menampilkan token asli. Gunakan placeholder seperti `RESEND_API_KEY=re_***` di laporan.
* **Identitas Agensi**: Data kontak admin diarahkan ke email `it.maxy.academy@gmail.com` dan domain `maxy.asia`. Tampilkan data ini secara proporsional sesuai perizinan dari pihak MAXY Digital.

### Keterbatasan/Hal yang Belum Selesai
* **In-Memory Cache Cache-Miss**: Cache IP rate limit hanya disimpan dalam RAM server web lokal/container. Jika website dideploy ke platform serverless murni dengan model multi-kontainer/ephemeral instance (seperti AWS Lambda / Vercel Serverless tanpa persistensi RAM), cache rate limit ini akan terhapus jika instansinya di-recycle atau bercabang. Solusi ideal adalah menghubungkannya ke Redis.
* **Dynamic Case Study Template**: Halaman rute dinamis `app/pages/case-studies/[slug].vue` sudah siap, namun isinya masih menampilkan template statis dari komponen `Challenge.vue`, `Story.vue`, dll. Belum mengambil konten dinamis dari database/markdown berdasarkan parameter `:slug` secara real-time.

---
*End of REPO_CONTEXT.md*
