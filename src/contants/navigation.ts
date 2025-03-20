import { Component, Home, Info, Package } from "lucide-react";

export const menus = [
  {
    name: "Home",
    label: "Home",
    slug: "/",
    id: "our-company",
    icon: Component,
  },
  {
    name: "Our Company",
    label: "Our Company",
    slug: "/our-company",
    id: "our-company",
    icon: Component,
  },
  {
    name: "Product",
    slug: "/product-knowledge",
    id: "product",
    icon: Package,
  },
  // {
  //   name: "About Us",
  //   slug: "/about-us",
  //   id: "about-us",
  //   icon: Info,
  // },
];

export const activePathName: any = {
  "/": "/",
  "/our-company": "/our-company",
  "/product-knowledge": "/product-knowledge",
  "/product/category": "/product-knowledge",
};
