export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const gaMeasurementId = config.public.gaMeasurementId;

  if (!gaMeasurementId) {
    return;
  }

  useHead({
    script: [
      {
        key: 'gtag-script',
        src: `https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`,
        async: true,
      },
      {
        key: 'gtag-init',
        innerHTML: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaMeasurementId}');
        `,
        type: 'text/javascript',
      }
    ]
  });
});
