import { AllProduct } from "@/contants/product";
import CategoryProductModules from "@/modules/product/category";
import { Metadata } from "next";

export async function generateMetadata({
  searchParams,
}: any): Promise<Metadata> {
  const categoryName =
    searchParams.productName ||
    searchParams.keyword ||
    searchParams.category ||
    searchParams.product_form
      ? `${searchParams.productName ?? ""} ${searchParams.keyword ?? ""} ${
          searchParams.category ?? ""
        } ${searchParams.product_form ?? ""}`
      : "All Products";

  const findProduct = AllProduct.find((e) => {
    if (+searchParams.id === e.id) {
      return e;
    }
  });

  return {
    title: `Bimantis - ${categoryName}`,
    description:
      findProduct?.description ??
      "We learnt to be honest and helpful in everything we do to support you",
    keywords: "bimantis, fruits",
    icons: {
      icon: "https://bimantis.com/favicon.ico",
    },
    openGraph: {
      title: `Bimantis - ${categoryName}`,
      description:
        findProduct?.description ??
        "We learnt to be honest and helpful in everything we do to support you",
      url: `https://www.bimantis.com/category?${categoryName}`,
      images: [
        {
          url:
            findProduct?.images[0] ??
            "/assets/image/products/adzuki-bean/3.jpg",
          width: 800,
          height: 600,
          alt: `Bimantis - ${categoryName}`,
        },
      ],
      siteName: "Bimantis",
    },
  };
}

const CategoryPage = (params: any) => {
  return <CategoryProductModules queryParams={params.searchParams} />;
};

export default CategoryPage;
