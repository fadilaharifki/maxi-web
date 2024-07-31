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
import { useMemo, useState } from "react";
import { SelectComponent } from "@/components/select";

const ProductModule = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  const totalPages = Math.ceil(AllProduct.length / itemsPerPage);

  const currentItems = useMemo(() => {
    return AllProduct.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  }, [currentPage, itemsPerPage]);

  console.log(currentItems, "currentItems");

  // Change the current page
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

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
          // spaceBetween={50}
          slidesPerView={3}
          // navigation
          // pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {AllProduct.filter((product) => product.best_seller).map(
            (product, i) => {
              return (
                <SwiperSlide key={i}>
                  <CardComponent
                    productName={product.product_name}
                    description={product.description}
                    isBestSeller={product.best_seller}
                    isLike
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
          // navigation
          // pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {AllProduct.filter((product) => product.new_product).map(
            (product, i) => {
              return (
                <SwiperSlide key={i}>
                  <CardComponent
                    productName={product.product_name}
                    description={product.description}
                    classNameImage="rounded-t-full h-96"
                    classNameContainer="my-10"
                  />
                </SwiperSlide>
              );
            }
          )}
        </Swiper>
      </section>
      <section id="all-products" className="min-h-screen px-20">
        <div className="grid grid-cols-5">
          <div className="bg-red-500"></div>
          <div className="col-span-4">
            <div className=" grid grid-cols-4 gap-5 px-5">
              {currentItems.map((product, i) => {
                return (
                  <CardComponent
                    key={i}
                    productName={product.product_name}
                    description={product.description}
                    isBestSeller={product.best_seller}
                    classNameImage="h-32"
                    isLike
                  />
                );
              })}
            </div>
            <div className="py-10 flex">
              <PaginationComponnet
                totalPages={totalPages}
                currentPage={currentPage}
                handlePageChange={handlePageChange}
              />
              <SelectComponent
                options={[
                  {
                    label: "4",
                    value: "4",
                  },
                  {
                    label: "8",
                    value: "8",
                  },
                  {
                    label: "12",
                    value: "12",
                  },
                  {
                    label: "16",
                    value: "16",
                  },
                ]}
                perPage={itemsPerPage}
                handleChange={(e) => {
                  setItemsPerPage(+e);
                  console.log(e);
                }}
                placholder="Limit Page"
                classNameSelectTrigger="w-22"
              />
            </div>
          </div>
        </div>
      </section>
    </LayoutComponent>
  );
};

export default ProductModule;
