import ProductModule from "@/modules/product";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bimantis - Product",
  description:
    "We learnt to be honest and helpful in everything we do to support you",
  keywords: "bimantis, fruits",
  icons: {
    icon: "/assets/image/favicon.ico",
  },
  openGraph: {
    title: "Bimantis",
    description:
      "We learnt to be honest and helpful in everything we do to support you",
    url: "https://www.bimantis.com",
    images: [
      {
        url: "/assets/image/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Bimantis",
      },
    ],
    siteName: "Bimantis",
  },
};

const ProductPage = () => {
  return <ProductModule />;
};

export default ProductPage;
