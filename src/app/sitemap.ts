import { productsKnowledge } from "@/contants/product";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteMapProductKnowledge = productsKnowledge.map((product) => {
    return {
      url: `https://maxi.com/product-knowledge#${product.name}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.5,
    };
  });

  return [
    {
      url: "https://maxi.com",
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 1,
    },
    {
      url: "https://maxi.com/product-knowledge",
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
    ...siteMapProductKnowledge,
  ];
}
