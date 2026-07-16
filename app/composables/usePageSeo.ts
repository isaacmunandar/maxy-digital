import type { FaqItem } from "@/l-data/seo";

type BreadcrumbItem = {
  name: string;
  item: string;
};

type ServiceSchema = {
  name: string;
  serviceType: string;
  description: string;
  audience: string;
};

type PageSeoOptions = {
  title: string;
  description: string;
  breadcrumbs?: BreadcrumbItem[];
  service?: ServiceSchema;
  faq?: FaqItem[];
};

const ogImage =
  "https://www.maxy.asia/light/assets/imgs/logo-maxy-light.png";

export function usePageSeo(options: PageSeoOptions) {
  const socialTitle = `${options.title} | MAXY AI`;

  useSeoMeta({
    title: options.title,
    description: options.description,
    ogTitle: socialTitle,
    ogDescription: options.description,
    ogType: "website",
    ogImage,
    ogImageAlt: "MAXY AI - Agentic AI and software company in Singapore",
    twitterCard: "summary_large_image",
    twitterTitle: socialTitle,
    twitterDescription: options.description,
    twitterImage: ogImage,
  });

  const schemaNodes = [];

  if (options.breadcrumbs) {
    schemaNodes.push(
      defineBreadcrumb({
        itemListElement: options.breadcrumbs,
      }),
    );
  }

  if (options.service) {
    schemaNodes.push({
      "@type": "Service",
      "@id": "#service",
      name: options.service.name,
      serviceType: options.service.serviceType,
      description: options.service.description,
      provider: { "@id": "#identity" },
      areaServed: ["Singapore", "Southeast Asia", "United States"],
      audience: {
        "@type": "BusinessAudience",
        audienceType: options.service.audience,
      },
    });
  }

  if (options.faq?.length) {
    schemaNodes.push(defineWebPage({ "@type": "FAQPage" }));
    schemaNodes.push(
      ...options.faq.map((item) =>
        defineQuestion({
          name: item.q,
          acceptedAnswer: item.a,
        }),
      ),
    );
  }

  if (schemaNodes.length) {
    useSchemaOrg(schemaNodes);
  }
}
