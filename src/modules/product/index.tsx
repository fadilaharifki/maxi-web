"use client";

import LayoutComponent from "@/components/layout";

import useParamsHook from "@/hooks/useParamsHook";

const ProductModule = () => {
  const { params, updateParams, removeParams, getFullURL } = useParamsHook();

  return <LayoutComponent></LayoutComponent>;
};

export default ProductModule;
