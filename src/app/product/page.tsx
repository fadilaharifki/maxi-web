import ProductModule from "@/modules/product";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bimantis - Product",
  description:
    "We learnt to behonest and helpful in everything we do to support you",
  icons: {
    icon: "/assets/image/favicon.ico",
  },
};

const ProductPage = () => {
  return <ProductModule />;
};

export default ProductPage;
