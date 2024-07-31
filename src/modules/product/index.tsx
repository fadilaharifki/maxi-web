"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";

import CardComponent from "@/components/card";
import LayoutComponent from "@/components/layout";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { AllProduct } from "./product";
import { PaginationComponnet } from "@/components/pagination";
import { useEffect, useMemo, useState } from "react";
import { SelectComponent } from "@/components/select";
import { Input } from "@/components/ui/input";
import useParamsHook from "@/hooks/useParamsHook";
import {
  CategoryOptions,
  PerPageOptions,
  ProductFormOptions,
} from "./select-options";
import { twMerge } from "tailwind-merge";
import { copyTextToClipboard, toTitleCase } from "@/lib/utils";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../../components/ui/dialog";
import { DialogComponent } from "@/components/dialog";
import Image from "next/image";
import { PhoneIcon, Share2Icon } from "lucide-react";

const ProductModule = () => {
  const { params, updateParams, removeParams, getFullURL } = useParamsHook();
  const [meta, setMeta] = useState<any>({});

  const { keyword, product_form, category, id } = params;

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [totalPages, setTotalPage] = useState(1);

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
      <section id="best-seller" className="pt-32">
        <div className="font-comfortaa text-5xl text-center text-bold text-primary-green pb-10">
          Best Seller
        </div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          slidesPerView={3}
        >
          {AllProduct.filter((product) => product.best_seller).map(
            (product, i) => {
              return (
                <SwiperSlide key={i}>
                  <CardComponent
                    productName={product.product_name}
                    description={product.description}
                    isBestSeller={product.best_seller}
                    category={product.category}
                    isLike
                    onDetail={() => {
                      updateParams({
                        id: product.id,
                        productName: product.product_name,
                      });
                    }}
                  />
                </SwiperSlide>
              );
            }
          )}
        </Swiper>
      </section>
      <section id="new-product" className="py-16 px-20">
        <div className="font-comfortaa text-5xl text-center text-bold text-primary-green pb-10">
          New Product
        </div>
        <Swiper
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          spaceBetween={50}
          slidesPerView={3}
        >
          {AllProduct.filter((product) => product.new_product).map(
            (product, i) => {
              return (
                <SwiperSlide key={i}>
                  <CardComponent
                    productName={product.product_name}
                    description={product.description}
                    category={product.category}
                    classNameImage="rounded-t-full h-96"
                    classNameContainer="my-10"
                    onDetail={() => {
                      updateParams({
                        id: product.id,
                        productName: product.product_name,
                      });
                    }}
                  />
                </SwiperSlide>
              );
            }
          )}
        </Swiper>
      </section>
      <section id="all-products" className="min-h-screen px-20 pb-12">
        <div className="grid grid-cols-5 min-h-80">
          <div className="flex flex-col bg-orange-500 rounded-2xl p-4 text-white">
            {/* <CardComponent
              productName={"Palm Brown"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna."
              }
              isLike
              isBestSeller
            /> */}
            <div className="flex flex-col text-white gap-1 font-comfortaa">
              {ProductFormOptions.map((menu, i) => {
                return (
                  <div
                    className={twMerge(
                      "hover:pl-5 duration-300 cursor-pointer",
                      menu.disabel ? "hover:pl-0 font-bold" : "text-sm",
                      product_form === menu.value ? "pl-5" : ""
                    )}
                    key={i}
                    onClick={() => {
                      updateParams({ product_form: menu.value });
                    }}
                  >
                    {menu.label}
                  </div>
                );
              })}
              {CategoryOptions.map((menu, i) => {
                return (
                  <div
                    className={twMerge(
                      "hover:pl-5 duration-300 cursor-pointer",
                      menu.disabel ? "font-bold hover:pl-0 pt-10" : "text-sm",
                      category === menu.value ? "pl-5" : ""
                    )}
                    key={i}
                    onClick={() => {
                      updateParams({ category: menu.value });
                    }}
                  >
                    {toTitleCase(menu.label)}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-span-4">
            <div className="grid grid-cols-4 rounded-2xl p-5 gap-2">
              <Input
                placeholder="Search Product"
                onChange={(e) => {
                  if (e.target.value) updateParams({ keyword: e.target.value });
                  else removeParams("keyword");
                  setCurrentPage(1);
                }}
              />
              <SelectComponent
                options={ProductFormOptions}
                value={product_form}
                handleChange={(e) => {
                  if (e) updateParams({ product_form: e });
                  else removeParams("product_form");
                  setCurrentPage(1);
                }}
                placholder="Filter By Product Form"
                classNameSelectTrigger="w-full"
              />
              <SelectComponent
                options={CategoryOptions}
                value={category}
                handleChange={(e) => {
                  if (e) updateParams({ category: e });
                  else removeParams("category");
                  setCurrentPage(1);
                }}
                placholder="Filter By Category"
                classNameSelectTrigger="w-full"
              />
            </div>
            <div className=" grid grid-cols-4 gap-5 px-5">
              {currentItems.map((product, i) => {
                return (
                  <CardComponent
                    key={i}
                    productName={product.product_name}
                    description={product.description}
                    isBestSeller={product.best_seller}
                    category={product.category}
                    classNameImage="h-32"
                    isLike
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
            <div className="pt-10 flex ">
              <PaginationComponnet
                totalPages={totalPages}
                currentPage={currentPage}
                handlePageChange={handlePageChange}
              />
              <SelectComponent
                options={PerPageOptions}
                value={itemsPerPage}
                handleChange={(e) => {
                  setItemsPerPage(+e);
                }}
                placholder="Limit Page"
                classNameSelectTrigger="w-22"
                isClean={false}
              />
            </div>
          </div>
        </div>
      </section>
      <DialogComponent
        open={meta.open}
        handleColse={() => {
          setMeta({});
          removeParams(["id", "openDetail"]);
        }}
      >
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className=" font-comfortaa text-2xl">
              {meta?.product_name}
            </DialogTitle>
            <DialogDescription>{meta?.description}</DialogDescription>
          </DialogHeader>
          <div>
            <Image
              src="/assets/image/products/palm-sugar.png"
              alt="Product Image"
              width={400}
              height={300}
              className={twMerge("object-cover w-full h-72 rounded-2xl")}
            />
            <div className="flex gap-3 my-5">
              <div>
                <DialogDescription>Product Form</DialogDescription>
                <DialogDescription>Category</DialogDescription>
                {meta?.source && <DialogDescription>Source</DialogDescription>}
                {meta?.botanical_name && (
                  <DialogDescription>Botanical Name</DialogDescription>
                )}
                {meta?.manufacture && (
                  <DialogDescription>Manufacture</DialogDescription>
                )}
              </div>
              <div>
                <DialogDescription>: {meta?.product_form}</DialogDescription>
                <DialogDescription>: {meta?.category}</DialogDescription>
                {meta?.source && (
                  <DialogDescription>: {meta?.source}</DialogDescription>
                )}
                {meta?.botanical_name && (
                  <DialogDescription>
                    : {meta?.botanical_name}
                  </DialogDescription>
                )}
                {meta?.manufacture && (
                  <DialogDescription>: {meta?.manufacture}</DialogDescription>
                )}
              </div>
            </div>
          </div>
          <DialogFooter>
            <Share2Icon
              onClick={() => {
                copyTextToClipboard(getFullURL());
              }}
              className=" cursor-pointer"
            />
            <PhoneIcon
              className=" cursor-pointer"
              onClick={() => {
                const phoneNumber = "6289505822191";

                const fullURL = getFullURL();

                const message = `Hello, I am interested in your product! ${fullURL}`;
                const encodedMessage = encodeURIComponent(message);

                const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

                window.open(whatsappURL, "_blank");
              }}
            />
          </DialogFooter>
        </DialogContent>
      </DialogComponent>
    </LayoutComponent>
  );
};

export default ProductModule;
