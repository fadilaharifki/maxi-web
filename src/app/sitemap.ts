import { AllProduct } from "@/contants/product";
import { formatQueryURL } from "@/lib/utils";
import { CategoryOptions } from "@/modules/product/select-options";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteMapCategory = CategoryOptions.map((product) => {
    return {
      url: `https://maxi.com/product/category?category=${formatQueryURL(
        product?.value
      )}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.5,
    };
  });

  const siteMapProduct = AllProduct.map((product) => {
    return {
      url: `https://maxi.com/product/category?id=${
        product.id
      }&amp;productName=${formatQueryURL(product.product_name)}`,
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
      url: "https://maxi.com/product",
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: "https://maxi.com/product/category",
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
    ...siteMapCategory,
    ...siteMapProduct,
    {
      url: "https://maxi.com/contact-us",
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.5,
    },
  ];
}
