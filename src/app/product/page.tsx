import ProductModule from "@/modules/product";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maxi - Product",
  description:
    "We learnt to be honest and helpful in everything we do to support you",
  keywords: "maxi, water",
  icons: {
    icon: "https://maxi.com/favicon.ico",
  },
  openGraph: {
    title: "Maxi",
    description:
      "We learnt to be honest and helpful in everything we do to support you",
    url: "https://www.maxi.com",
    images: [
      {
        url: "https://maxi.com/favicon.ico",
        width: 800,
        height: 600,
        alt: "Maxi",
      },
    ],
    siteName: "Maxi",
  },
};

const ProductPage = () => {
  return <ProductModule />;
};

export default ProductPage;
