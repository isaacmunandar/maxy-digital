// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  srcDir: "app",
  typescript: {
    shim: false,
  },
  nitro: {},
  modules: ['@nuxtjs/seo'],
  site: {
    url: 'https://maxy.asia',
    name: 'MAXY Digital',
    description: 'MAXY Digital is a premier Agentic AI & Digital Agency offering AI-Native Web, App, and Digital Growth solutions.',
    defaultLocale: 'en'
  },
  app: {
    head: {
      title: "MAXY Digital — Agentic AI & Digital Agency",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { charset: "utf-8" },
        { "http-equiv": "X-UA-Compatible", content: "IE=edge" },
        { name: "theme-color", content: "#000000" }
      ],
      link: [
        { rel: "icon", href: "/light/assets/imgs/favicon.svg", type: "image/svg+xml" },
        { rel: "shortcut icon", href: "/light/assets/imgs/favicon.svg", type: "image/svg+xml" },
        // Google Fonts
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700&display=swap",
        },
        { rel: "stylesheet", href: "/light/assets/css/plugins.css" },
        { rel: "stylesheet", href: "/light/assets/css/transisitions.css" },
        { rel: "stylesheet", href: "/light/assets/css/satoshi.css" },
        { rel: "stylesheet", href: "/light/assets/css/style.css" },
      ],
      script: [
        { src: "/light/assets/js/plugins.js" },
        { src: "/light/assets/js/gsap.min.js" },
        { src: "/light/assets/js/splitting.min.js" },
        { src: "/light/assets/js/ScrollTrigger.min.js" },
        { src: "/light/assets/js/ScrollSmoother.min.js" },
        { src: "/light/assets/js/isotope.pkgd.min.js" },
        // { src: '/showcase/light/assets/js/anime.min.js' },
        { src: "/light/assets/js/scripts.js", defer: true },
      ],
    },
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
  },
  css: ["swiper/css/bundle"],

  webpack: {
    extractCSS: true,
    optimization: {
      splitChunks: {
        layout: true,
      },
    },
  },
});
