"use client";

import CardComponent from "@/components/card";
import LayoutComponent from "@/components/layout";

import { PaginationComponnet } from "@/components/pagination";
import { useEffect, useMemo, useState } from "react";
import { SelectComponent } from "@/components/select";
import { Input } from "@/components/ui/input";
import useParamsHook from "@/hooks/useParamsHook";

import { twMerge } from "tailwind-merge";
import { copyTextToClipboard } from "@/lib/utils";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { DialogComponent } from "@/components/dialog";
import Image from "next/image";
import { MoveLeftIcon, PhoneIcon, Share2Icon } from "lucide-react";
import {
  CategoryOptions,
  PerPageOptions,
  ProductFormOptions,
} from "../select-options";
import { AllProduct } from "@/contants/product";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useRouter } from "next/navigation";

const CategoryProductModules = (params: any) => {
  const { updateParams, removeParams, getFullURL } = useParamsHook();
  const router = useRouter();
  const [meta, setMeta] = useState<any>({});

  const {
    keyword: keywordParams,
    product_form: product_formParams,
    category: categoryParams,
    id,
  } = params.queryParams;

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [totalPages, setTotalPage] = useState(1);
  const [keyword, setKeyword] = useState(keywordParams as string);
  const [product_form, setProduct_form] = useState(
    product_formParams as string
  );
  const [category, setCategory] = useState(categoryParams as string);

  const currentItems = useMemo(() => {
    const filteredProducts = AllProduct.filter((product) => {
      const matchesKeyword = keyword
        ? product.product_name.toLowerCase().includes(keyword.toLowerCase())
        : true;

      const matchesProductForm = product_form
        ? product.product_form.toLowerCase() === product_form
        : true;

      const matchesCategory = category
        ? product.category.toLowerCase() === category
        : true;

      return matchesKeyword && matchesProductForm && matchesCategory;
    });

    if (filteredProducts.length)
      setTotalPage(Math.ceil(filteredProducts.length / itemsPerPage));
    else setTotalPage(1);

    return filteredProducts.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  }, [currentPage, itemsPerPage, keyword, product_form, category]);

  // Change the current page
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    if (id) {
      setMeta({
        open: true,
        ...AllProduct.find((e) => e.id.toString() === id),
      });
    }
  }, [id]);

  return (
    <LayoutComponent>
      <section
        id="all-products"
        className="min-h-screen px-5 md:mx-20 pt-20 md:pt-32 pb-12"
      >
        <div className="flex min-h-80">
          <div className="col-span-4">
            <div
              className="flex gap-2 pb-5 cursor-pointer"
              onClick={() => router.replace("/product")}
            >
              <div className="hover:scale-110">
                <MoveLeftIcon />
              </div>
              <div className=" hover:scale-110">Back</div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 rounded-2xl mb-5 gap-2">
              <Input
                value={keyword ?? ""}
                className="col-span-2 md:col-span-1"
                placeholder="Search Product"
                onChange={(e) => {
                  if (e.target.value) {
                    setKeyword(e.target.value);
                    updateParams({ keyword: e.target.value });
                  } else {
                    setKeyword(e.target.value);
                    removeParams("keyword");
                  }
                  setCurrentPage(1);
                }}
              />
              <SelectComponent
                options={ProductFormOptions}
                value={product_form}
                handleChange={(e) => {
                  if (e) {
                    setProduct_form(e);
                    updateParams({ product_form: e });
                  } else {
                    removeParams("product_form");
                    setProduct_form("");
                  }
                  setCurrentPage(1);
                }}
                placeholder="Filter By Product Form"
                classNameSelectTrigger="w-full"
              />
              <SelectComponent
                options={CategoryOptions}
                value={category}
                handleChange={(e) => {
                  if (e) {
                    setCategory(e);
                    updateParams({ category: e });
                  } else {
                    removeParams("category");
                    setCategory("");
                  }
                  setCurrentPage(1);
                }}
                placeholder="Filter By Category"
                classNameSelectTrigger="w-full"
              />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
              {currentItems.map((product, i) => {
                return (
                  <CardComponent
                    key={i}
                    images={product.images}
                    productName={product.product_name}
                    description={product.description}
                    isBestSeller={product.best_seller}
                    category={product.category}
                    classNameImage="h-52"
                    onDetail={() => {
                      updateParams({
                        id: product.id,
                        productName: product.product_name,
                      });
                    }}
                  />
                );
              })}
            </div>
            <div className="pt-10 flex flex-col md:flex-row gap-5">
              <PaginationComponnet
                totalPages={totalPages}
                currentPage={currentPage}
                handlePageChange={handlePageChange}
              />
              <div className="flex gap-2 justify-center items-center md:w-56">
                <span className=" text-sm">Per Page</span>
                <SelectComponent
                  options={PerPageOptions}
                  value={itemsPerPage}
                  handleChange={(e) => {
                    setItemsPerPage(+e);
                    setCurrentPage(1);
                  }}
                  placeholder="Limit Page"
                  classNameSelectTrigger="w-22"
                  isClean={false}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <DialogComponent
        open={meta.open}
        handleColse={() => {
          removeParams(["id", "openDetail", "productName"]);
          setMeta({ ...meta, open: false });

          setTimeout(() => {
            setMeta({});
          }, 200);
        }}
      >
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="  text-2xl">
              {meta?.product_name}
            </DialogTitle>
            <DialogDescription>{meta?.description}</DialogDescription>
          </DialogHeader>
          <div>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {(meta.images ?? ["/assets/image/not-found.jpg"]).map(
                  (url: string, index: number) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <Image
                          src={url}
                          alt="Product Image"
                          width={400}
                          height={300}
                          className={twMerge(
                            "object-cover w-full h-72 rounded-2xl"
                          )}
                        />
                      </div>
                    </CarouselItem>
                  )
                )}
              </CarouselContent>
              {meta?.images?.length > 1 && (
                <>
                  <CarouselPrevious className="ml-16" />
                  <CarouselNext className="mr-16" />
                </>
              )}
            </Carousel>

            <div className="flex gap-3 my-5">
              <table>
                <tbody>
                  <tr>
                    <td className="w-32 pb-1">Product Form</td>
                    <td className="pb-1">:</td>
                    <td className="pl-2 pb-1">{meta?.product_form}</td>
                  </tr>
                  <tr>
                    <td className="w-32 pb-1">Category</td>
                    <td className="pb-1">:</td>
                    <td className="pl-2 pb-1">{meta?.category}</td>
                  </tr>
                  {meta?.source && (
                    <tr>
                      <td className="w-32 pb-1">Source</td>
                      <td className="pb-1">:</td>
                      <td className="pl-2 pb-1">{meta?.source}</td>
                    </tr>
                  )}
                  {meta?.botanical_name && (
                    <tr>
                      <td className="w-32 pb-1">Botanical Name</td>
                      <td className="pb-1">:</td>
                      <td className="pl-2 pb-1">{meta?.botanical_name}</td>
                    </tr>
                  )}
                  {meta?.manufacture && (
                    <tr>
                      <td className="w-32 pb-1">Manufacture</td>
                      <td className="pb-1">:</td>
                      <td className="pl-2 pb-1">{meta?.manufacture}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <div className="flex gap-3 justify-end">
              <Share2Icon
                onClick={() => {
                  copyTextToClipboard(getFullURL());
                }}
                className=" cursor-pointer"
              />
              <PhoneIcon
                className=" cursor-pointer"
                onClick={() => {
                  const phoneNumber = "62811432844";

                  const fullURL = getFullURL();

                  const message = `Hello, I am interested in your product! ${fullURL}`;
                  const encodedMessage = encodeURIComponent(message);

                  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

                  window.open(whatsappURL, "_blank");
                }}
              />
            </div>
          </div>
        </DialogContent>
      </DialogComponent>
    </LayoutComponent>
  );
};

export default CategoryProductModules;
