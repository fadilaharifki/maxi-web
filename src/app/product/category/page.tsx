import CategoryProductModules from "@/modules/product/category";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bimantis - All Product",
  description:
    "We learnt to behonest and helpful in everything we do to support you",
  icons: {
    icon: "/assets/image/favicon.ico",
  },
};

const CategoryPage = () => {
  return <CategoryProductModules />;
};

export default CategoryPage;
