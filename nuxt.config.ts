// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  srcDir: "app",
  typescript: {
    shim: false,
  },
  nitro: {},
  app: {
    head: {
      title: "infolio",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          charset: "utf-8",
        },
        {
          "http-equiv": "X-UA-Compatible",
          content: "IE=edge",
        },
        {
          name: "keywords",
          content: "Vue Nuxtjs Template webfolio Multi-Purpose themeforest",
        },
        {
          name: "description",
          content: "webfolio - Multi-Purpose Vue Nuxtjs Template",
        },
        {
          name: "author",
          content: "Uicamp",
        },
      ],
      link: [
        { rel: "shortcut icon", href: "/light/assets/imgs/favicon.ico" },
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
  },
  css: ["swiper/css/bundle"],

  webpack: {
    extractCSS: true,
    optimization: {
      splitChunks: {
        layout: true,
      }
    }
  }
});
