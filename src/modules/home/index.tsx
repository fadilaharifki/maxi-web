"use client";

import { CoffeeIcon, PhoneIcon, Share2Icon } from "lucide-react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import CardComponent from "@/components/card";
import useParamsHook from "@/hooks/useParamsHook";

import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../../components/ui/dialog";
import { DialogComponent } from "@/components/dialog";
import { useEffect, useState } from "react";
import { copyTextToClipboard } from "@/lib/utils";
import { AllProduct } from "@/contants/product";
import { logoCustomers } from "@/contants/cloboration";
import { useSearchParams } from "next/navigation";

const ModuleHome = () => {
  const { params, updateParams, removeParams, getFullURL } = useParamsHook();

  const { keyword, product_form, category, unix, id } = params;

  const [meta, setMeta] = useState<any>({});

  useEffect(() => {
    if (unix) {
      setMeta({
        open: true,
        ...AllProduct.find((e) => e.id.toString() === unix),
      });
    }
  }, [unix]);

  useEffect(() => {
    handleScroll(id);
  }, [id]);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -500;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="h-screen" id="our-company">
        <div className="relative flex flex-col h-full bg-green-white">
          <Image
            src="/assets/image/background1.jpg"
            width={1000}
            height={1000}
            alt="Logo"
            className="w-screen h-screen object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="absolute inset-0 flex flex-col justify-center gap-5 px-10">
            <div>
              <div className="font-comfortaa text-7xl font-bold text-white uppercase">
                Bimantis
              </div>
            </div>
            <div className="font-comfortaa text-3xl font-bold text-white w-96 flex-wrap">
              We learnt to be honest and helpful in everything we do to support
              you
            </div>
          </div>
        </div>
      </section>
      <section className="py-32">
        <div className="grid grid-cols-3 px-10  gap-x-10">
          <div className="flex flex-col gap-5 justify-center">
            <div className="font-comfortaa text-5xl text-bold text-primary-green">
              About Us
            </div>
            <div className="font-comfortaa text-bold text-primary-green">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              {/*  eslint-disable-next-line react/no-unescaped-entities */}
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
          </div>
          <div className="col-span-2">
            <iframe
              className="w-full h-[600px] rounded-xl"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/RzVvThhjAKw?si=G0mQi0Sy3abuvUvT"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
      <section>
        <div className="relative flex flex-col h-full bg-green-white">
          <Image
            src="/assets/image/background2.jpg"
            width={1000}
            height={1000}
            alt="Logo"
            className="w-screen h-screen object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex flex-row justify-center items-center gap-20 px-10">
            <div className="flex flex-col text-center gap-3">
              <div className="font-comfortaa text-2xl font-bold text-white">
                Our To My Started
              </div>
              <div className="font-comfortaa text-base font-bold text-white w-72">
                On our passion and love Indonesian Nature.
              </div>
            </div>
            <div className="flex flex-col text-center gap-3">
              <div className="font-comfortaa text-2xl font-bold text-white">
                Our Vision
              </div>
              <div className="font-comfortaa text-base font-bold text-white w-72">
                The best National Ingradient in the World.
              </div>
            </div>
            <div className="flex flex-col text-center gap-3">
              <div className="font-comfortaa text-2xl font-bold text-white">
                Our Technology
              </div>
              <div className="font-comfortaa text-base font-bold text-white w-72">
                Nature is our soul. We aim to use technology that is friendly to
                nature.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-green-white">
        <div className="flex flex-col justify-center items-center py-32 gap-20">
          <div className="font-comfortaa text-5xl text-bold text-primary-green">
            We begin our stories on 2018
          </div>
          <div className="font-comfortaa text-primary-green px-10 ">
            <div className="grid grid-cols-11">
              <div className="col-span-5 flex flex-col justify-center items-center">
                <CoffeeIcon className="h-28 w-28" />
                <div className="flex flex-col gap-4">
                  <div>
                    Our journey started on our passion and love for Indonesia
                    Nature.
                  </div>
                  <div>The best ingredients in the world</div>
                </div>
              </div>
              <div className="relative flex justify-center">
                <div className="h-full w-[2px] bg-primary-green"></div>
                <div className="absolute top-1/2 transform -translate-y-1/2 h-5 w-5 bg-primary-green rounded-full"></div>
              </div>
              <div className="col-span-5"></div>
            </div>
            <div className="grid grid-cols-11">
              <div className="col-span-5"></div>
              <div className="relative flex justify-center">
                <div className="h-full w-[2px] bg-primary-green"></div>
                <div className="absolute top-1/2 transform -translate-y-1/2 h-5 w-5 bg-primary-green rounded-full"></div>
              </div>
              <div className="col-span-5 flex flex-col justify-center items-center">
                <CoffeeIcon className="h-28 w-28" />
                <div className="flex flex-col gap-4">
                  <div>We provide bespoke solutions for customers from</div>
                  <div>
                    Food & Beverages Industries, Hotel – Restaurant – Café,
                    Cosmetic Personal Care Industries
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-11">
              <div className="col-span-5 flex flex-col justify-center items-center">
                <CoffeeIcon className="h-28 w-28" />
                <div className="flex flex-col gap-4">
                  <div>Adding Value. Being Innovated.</div>
                  <div>That’s What We Do</div>
                </div>
              </div>
              <div className="relative flex justify-center">
                <div className="h-full w-[2px] bg-primary-green"></div>
                <div className="absolute top-1/2 transform -translate-y-1/2 h-5 w-5 bg-primary-green rounded-full"></div>
              </div>
              <div className="col-span-5"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="grid grid-cols-2 p-10 pb-32">
          <div>
            <Image
              src="/assets/image/background3.jpg"
              width={1000}
              height={1000}
              alt="Logo"
              className="w-screen h-42 object-cover rounded-xl"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="font-comfortaa font-bold text-3xl text-primary-green">
              From the Java
            </div>
            <div className="font-comfortaa font-bold text-3xl text-primary-green">
              with Natural Teste
            </div>
          </div>
        </div>
      </section>
      <section id="best-seller">
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
                        unix: product.id,
                        productName: product.product_name,
                        id: "best-seller",
                      });
                    }}
                  />
                </SwiperSlide>
              );
            }
          )}
        </Swiper>
      </section>
      <section>
        <div className="flex flex-col justify-center items-center py-32 gap-20">
          <div className="font-comfortaa text-5xl text-bold text-primary-green">
            Our active customers..
          </div>
          <div className="grid grid-cols-5 gap-3 justify-center items-center">
            {logoCustomers.map((logo, index) => {
              return (
                <div key={index}>
                  <Image
                    src={logo.url}
                    width={1000}
                    height={1000}
                    alt="Logo"
                    className="w-44"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <DialogComponent
        open={meta.open}
        handleColse={() => {
          setMeta({});
          removeParams(["unix", "id", "openDetail", "productName"]);
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
              className="object-cover w-full h-72 rounded-2xl"
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
    </>
  );
};

export default ModuleHome;
