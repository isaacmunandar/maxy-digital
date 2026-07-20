import { defineOrganization } from "nuxt-schema-org/schema";

const gtmId = process.env.NUXT_PUBLIC_GTM_ID || "";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  buildDir: process.env.NUXT_BUILD_DIR || ".nuxt",
  devtools: { enabled: true },
  ssr: true,
  srcDir: "app",
  typescript: {
    shim: false,
  },
  nitro: {
    prerender: {
      routes: ["/robots.txt", "/sitemap.xml"],
    },
  },
  compatibilityDate: "2026-06-04",
  modules: ["@nuxtjs/seo"],
  site: {
    url: "https://www.maxy.asia",
    name: "MAXY AI",
    description:
      "MAXY AI is a Singapore agentic AI and software company building custom AI agents, web and mobile apps, and digital growth systems for SMEs.",
    defaultLocale: "en",
  },
  schemaOrg: {
    identity: defineOrganization({
      name: "MAXY AI",
      alternateName: ["MAXY", "MAXY Digital"],
      url: "https://www.maxy.asia",
      logo: "https://www.maxy.asia/light/assets/imgs/logo-maxy-dark.png",
      description:
        "MAXY AI is a Singapore agentic AI and software company building custom AI agents, AI-native web and mobile applications, and digital growth systems for SMEs.",
      email: "hello@maxy.asia",
      address: {
        streetAddress: "21B Bukit Pasoh Road",
        addressLocality: "Singapore",
        postalCode: "089835",
        addressCountry: "SG",
      },
    }),
  },
  robots: {
    groups: [
      {
        userAgent: ["*"],
        allow: ["/"],
        disallow: ["/case-studies/"],
      },
    ],
  },
  sitemap: {
    zeroRuntime: true,
    exclude: ["/case-studies/**", "/api/**"],
    urls: [
      { loc: "/", changefreq: "monthly", priority: 1 },
      { loc: "/solutions", changefreq: "monthly", priority: 0.9 },
      { loc: "/solutions/agentic-ai", changefreq: "monthly", priority: 0.9 },
      { loc: "/solutions/web-app", changefreq: "monthly", priority: 0.8 },
      { loc: "/solutions/digital-growth", changefreq: "monthly", priority: 0.8 },
      { loc: "/roadmap", changefreq: "monthly", priority: 0.8 },
      { loc: "/contact", changefreq: "yearly", priority: 0.6 },
    ],
  },
  routeRules: {
    "/case-studies/**": { robots: false, sitemap: false },
    "/api/**": { robots: false, sitemap: false },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { charset: "utf-8" },
        { "http-equiv": "X-UA-Compatible", content: "IE=edge" },
        { name: "theme-color", content: "#000000" },
      ],
      link: [
        {
          rel: "icon",
          href: "/light/assets/imgs/favicon.ico",
          type: "image/x-icon",
        },
        {
          rel: "shortcut icon",
          href: "/light/assets/imgs/favicon.ico",
          type: "image/x-icon",
        },
        // Preload critical background images to prevent flash on load
        {
          rel: "preload",
          as: "image",
          href: "/light/assets/imgs/header/bg1.jpg",
          fetchpriority: "high",
        },
        // Google Fonts
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "anonymous" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap",
        },
        { rel: "stylesheet", href: "/light/assets/css/plugins.css" },
        { rel: "stylesheet", href: "/light/assets/css/transisitions.css" },
        { rel: "stylesheet", href: "/light/assets/css/satoshi.css" },
        { rel: "stylesheet", href: "/light/assets/css/style.css" },
      ],
      script: gtmId
        ? [
            {
              key: "gtm-script",
              innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`,
              type: "text/javascript",
            },
          ]
        : [],
      noscript: gtmId
        ? [
            {
              key: "gtm-noscript",
              innerHTML: `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
              body: true,
            },
          ]
        : [],
    },
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
  },
  css: ["swiper/css", "swiper/css/navigation", "@/assets/css/reveal.css"],

  webpack: {
    extractCSS: true,
    optimization: {
      splitChunks: {
        layout: true,
      },
    },
  },
});
