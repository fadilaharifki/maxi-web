"use client";

import {
  ChevronLeft,
  ChevronLeftCircle,
  ChevronRight,
  ChevronRightCircle,
  CoffeeIcon,
  EyeIcon,
  ListStartIcon,
  PhoneIcon,
  Share2Icon,
} from "lucide-react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import Autoplay from "embla-carousel-autoplay";
import CardComponent from "@/components/card";
import useParamsHook from "@/hooks/useParamsHook";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../../components/ui/dialog";
import { DialogComponent } from "@/components/dialog";
import { useEffect, useRef, useState } from "react";
import { copyTextToClipboard } from "@/lib/utils";
import { AllProduct } from "@/contants/product";
import { logoCustomers } from "@/contants/cloboration";
import { useSearchParams } from "next/navigation";
import useScreenSize from "@/hooks/useScreenSize";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ModuleHome = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const { ref: refVision, inView: inViewVision } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const { ref: refProduct, inView: inProduct } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const { ref: refCust, inView: inCust } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const { width, breakpoint } = useScreenSize();
  const { params, updateParams, removeParams, getFullURL } = useParamsHook();

  const { keyword, product_form, category, unix, id } = params;
  const flag = false;

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
      let yOffset = 0;
      switch (id) {
        case "best-seller":
          yOffset = -300;
          break;
        default:
          yOffset = -100;
          break;
      }
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const visionDescription = [
    {
      title: "Our Main Values",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    },
    {
      title: "Our Vision",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    },
    {
      title: "Our Technology",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    },
  ];

  return (
    <section>
      <section className="fixed h-screen w-screen bg-gradient-to-tr from-blue-500 to-orange-500 -z-50"></section>
      <section className="min-h-screen" id="our-company">
        <div className="relative flex flex-col h-full">
          {breakpoint !== "sm" && (
            <div className="flex justify-end">
              <motion.img
                src="/assets/image/products/product3.jpeg"
                width={1000}
                height={1000}
                alt="Logo"
                className="w-1/2 h-[90vh] object-cover mt-24 rounded-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />
            </div>
          )}
          <div className="absolute mt-[500px] md:mt-0 inset-0 flex flex-col justify-center gap-5 px-10 ">
            <motion.img
              src="/assets/image/logo1.png"
              width={1000}
              height={1000}
              alt="Logo"
              className="w-64 h-40 rounded-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />

            <motion.div
              className="text-base text-white w-22 sm:w-[500px]"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </motion.div>

            {breakpoint === "sm" && (
              <motion.img
                src="/assets/image/products/product3.jpeg"
                width={1000}
                height={1000}
                alt="Logo"
                className="h-[90vh] object-cover rounded-lg mb-10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />
            )}
          </div>
        </div>
      </section>
      {flag && (
        <section className="py-10 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-3 px-10 gap-10">
            <div className="flex flex-col gap-5 justify-center">
              <div className="text-center md:text-start  text-3xl md:text-5xl text-bold text-primary-green">
                About Us
              </div>
              <div className=" text-bold text-primary-green">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                {/*  eslint-disable-next-line react/no-unescaped-entities */}
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </div>
            </div>
            <div className="md:col-span-2">
              <iframe
                className="w-full h-[600px] rounded-xl"
                width={"560"}
                height={"315"}
                src="https://www.youtube.com/embed/RzVvThhjAKw?si=G0mQi0Sy3abuvUvT"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>
      )}
      <section className="my-10">
        <div className="relative flex flex-col h-full ">
          <motion.img
            ref={refVision}
            src="/assets/image/products/montain.jpeg"
            width={1000}
            height={1000}
            alt="Logo"
            className="w-screen h-screen object-cover"
            initial={{ opacity: 0, y: 50 }}
            animate={inViewVision ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          />
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="absolute w-screen h-screen flex justify-center items-center ">
            <div
              ref={refVision}
              className="inset-0 flex flex-col md:flex-row justify-center items-start gap-20 px-10"
            >
              {visionDescription.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col text-center gap-3"
                  initial={{ opacity: 0, y: 50 }}
                  animate={inViewVision ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.3 }}
                >
                  <div className="text-2xl font-bold text-white">
                    {item.title}
                  </div>
                  <div className="text-base text-white w-72">{item.text}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="">
        {(breakpoint === "sm" || breakpoint === "md") && (
          <div className="flex flex-col justify-center items-center pt-10 px-10">
            <div className=" text-center font-bold text-xl text-primary-green">
              From the Glorious Land of Indonesia to the world.
            </div>
            <div className=" text-center font-bold text-xl text-primary-green">
              we create the best natural product to improving the quality of
              life.
            </div>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 p-10 pb-10 md:pb-32 gap-y-10">
          <div className="flex justify-center">
            <motion.img
              ref={ref}
              src="/assets/image/products/product6.jpeg"
              width={1000}
              height={1000}
              alt="Logo"
              className="w-[50vh] h-[70vh] rounded-xl"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            />
          </div>
          {breakpoint !== "sm" && breakpoint !== "md" && (
            <div
              ref={ref}
              className="flex flex-col justify-center items-center px-10"
            >
              <motion.div
                className="text-center font-bold text-3xl text-white"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
              >
                From the Glorious Land of Indonesia to the world.
              </motion.div>
              <motion.div
                className="text-center text-xl text-white"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                We create the best natural product to improving the quality of
                life.
              </motion.div>
            </div>
          )}
        </div>
      </section>
      <motion.section
        ref={refProduct}
        id="best-seller"
        className="px-5 rounded-lg py-10 md:py-20"
        initial={{ opacity: 0, y: 50 }}
        animate={inProduct ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 2 }}
      >
        <div className=" text-3xl md:text-5xl text-center text-bold text-white pb-10">
          We Provide the Purest Mineral Water
        </div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          slidesPerView={breakpoint === "sm" || breakpoint === "md" ? 2 : 3}
        >
          {AllProduct.filter((product) => product.best_seller).map(
            (product, i) => (
              <SwiperSlide key={i}>
                <CardComponent
                  productName={product.product_name}
                  description={product.description}
                  isBestSeller={product.best_seller}
                  category={product.category}
                  images={product.images}
                  classNameImage="md:h-[500px]"
                  onDetail={() => {
                    updateParams({
                      unix: product.id,
                      productName: product.product_name,
                      id: "best-seller",
                    });
                  }}
                />
              </SwiperSlide>
            )
          )}
          {/* Custom Next and Previous buttons with Lucide React icons */}
          <div className="custom-next absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full mr-5">
            <ChevronRightCircle className="w-10 h-10 cursor-pointer text-primary-blue" />
          </div>
          <div className="custom-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full ml-5">
            <ChevronLeftCircle className="w-10 h-10 cursor-pointer text-primary-blue" />
          </div>
        </Swiper>
      </motion.section>
      <section ref={refCust}>
        <motion.div
          className="flex flex-col justify-center items-center py-10 gap-20 bg-white"
          initial={{ opacity: 0, y: 50 }}
          animate={inCust ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="text-center  text-3xl md:text-5xl text-bold text-primary-green">
            Our active customers..
          </div>
          <Carousel
            className=" w-9/12 md:w-5/6"
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
          >
            <CarouselContent className="flex gap-x-2">
              {logoCustomers.map((logo, index) => {
                return (
                  <CarouselItem
                    key={index}
                    className="pl-1 basis-1/4 md:basis-1/5 flex justify-center items-center"
                  >
                    <Image
                      src={logo.url}
                      width={1000}
                      height={1000}
                      alt="Logo"
                      className="w-44 grayscale"
                    />
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </motion.div>
      </section>
      <DialogComponent
        open={meta.open}
        handleColse={() => {
          removeParams(["unix", "openDetail", "productName"]);
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
        </DialogContent>
      </DialogComponent>
    </section>
  );
};

export default ModuleHome;
