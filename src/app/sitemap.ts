import { AllProduct } from "@/contants/product";
import { formatQueryURL } from "@/lib/utils";
import { CategoryOptions } from "@/modules/product/select-options";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteMapCategory = CategoryOptions.map((product) => {
    return {
      url: `https://bimantis-web.vercel.app/product/category?category=${formatQueryURL(
        product?.value
      )}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.5,
    };
  });

  const siteMapProduct = AllProduct.map((product) => {
    return {
      url: `https://bimantis-web.vercel.app/product/category?id=${
        product.id
      }&amp;productName=${formatQueryURL(product.product_name)}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.5,
    };
  });

  return [
    {
      url: "https://bimantis-web.vercel.app",
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 1,
    },
    {
      url: "https://bimantis-web.vercel.app/product",
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: "https://bimantis-web.vercel.app/product/category",
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
    ...siteMapCategory,
    ...siteMapProduct,
    {
      url: "https://bimantis-web.vercel.app/contact-us",
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.5,
    },
  ];
}
