import { defineOrganization } from "nuxt-schema-org/schema";

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
    name: "MAXY Digital",
    description:
      "MAXY Digital is a Singapore agentic AI and software company building custom AI agents, web and mobile apps, and digital growth systems for SMEs.",
    defaultLocale: "en",
  },
  schemaOrg: {
    identity: defineOrganization({
      name: "MAXY Digital",
      alternateName: "MAXY",
      url: "https://www.maxy.asia",
      logo: "https://www.maxy.asia/light/assets/imgs/logo-maxy-dark.png",
      description:
        "Singapore agentic AI and software company building custom AI agents, AI-native web and mobile applications, and digital growth systems for SMEs.",
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
        { src: "/light/assets/js/plugins.js", defer: true },
        { src: "/light/assets/js/gsap.min.js", defer: true },
        { src: "/light/assets/js/splitting.min.js", defer: true },
        { src: "/light/assets/js/ScrollTrigger.min.js", defer: true },
        { src: "/light/assets/js/ScrollSmoother.min.js", defer: true },
        { src: "/light/assets/js/isotope.pkgd.min.js", defer: true },
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
