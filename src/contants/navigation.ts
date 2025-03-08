import { Home, Info, Package } from "lucide-react";

export const menus = [
  {
    name: "Our Company",
    label: "Home",
    slug: "/",
    id: "our-company",
    icon: Home,
  },
  {
    name: "Product",
    slug: "/product",
    id: "product",
    icon: Package,
  },
  {
    name: "About Us",
    slug: "/about-us",
    id: "about-us",
    icon: Info,
  },
];

export const activePathName: any = {
  "/": "/",
  "/product": "/product",
  "/product/category": "/product",
};
