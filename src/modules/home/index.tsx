"use client";

import Autoplay from "embla-carousel-autoplay";
import CardComponent from "@/components/card";
import useParamsHook from "@/hooks/useParamsHook";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useEffect, useRef } from "react";
import { products } from "@/contants/product";
import { motion, useInView } from "framer-motion";
import LayoutComponent from "@/components/layout";
import { banners, bannersHome } from "@/contants/banner";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import useScreenSize from "@/hooks/useScreenSize";
import { Button } from "@/components/ui/button";

interface CSRCardProps {
  image: string;
  title: string;
}
const CSRCard = ({ image, title }: CSRCardProps) => {
  return (
    <div className="flex flex-col">
      <div className="overflow-hidden rounded-lg">
        <Image
          src={image || "/assets/image/products/placeholder.png"}
          alt={title}
          width={400}
          height={300}
          className="h-[250px] w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="mt-4 space-y-2">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
    </div>
  );
};

const ModuleHome = () => {
  const { breakpoint } = useScreenSize();
  const { params, updateParams } = useParamsHook();
  const { id } = params;

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

  const ref = useRef(null);
  const bestSellerRef = useRef(null);
  const csrRef = useRef(null);
  const bestSellerInView = useInView(bestSellerRef, {
    margin: "-100px",
  });
  const csrInView = useInView(csrRef, {
    margin: "-100px",
  });
  const inView = useInView(ref, {
    margin: "-100px",
  });

  const csrActivities = [
    {
      image: "/assets/image/products/placeholder.png",
      title: "Bantu Korban Banjir Bandang dan Longsor Nusa Tenggara Timur",
    },
    {
      image: "/assets/image/products/placeholder.png",
      title: "Bantu Korban Banjir Bandang dan Longsor Nusa Tenggara Timur",
    },
    {
      image: "/assets/image/products/placeholder.png",
      title: "Bantu Korban Banjir Bandang dan Longsor Nusa Tenggara Timur",
    },
    {
      image: "/assets/image/products/placeholder.png",
      date: "FEBRUARY 2021",
      title: " Air Bersih Untuk Warga Desa Di Sukabumi",
    },
    {
      image: "/assets/image/products/placeholder.png",
      date: "DECEMBER 2021",
      title: "Serahkan Bantuan Korban Erupsi Gunung Semeru",
    },
  ];

  const isCareerActive = process.env.NEXT_PUBLIC_ACTIVE_CAREER === "true";

  return (
    <LayoutComponent>
      <section id="our-company">
        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[Autoplay({ delay: 3000 })]}
          className="w-screen"
        >
          <CarouselContent>
            {bannersHome.map((banner, index) => (
              <CarouselItem key={index} className="w-screen">
                <motion.img
                  src={banner}
                  width={1000}
                  height={1000}
                  alt="Logo"
                  className="md:h-[90vh] w-screen object-cover"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>

      <section className="bg-blue-50">
        {(breakpoint === "sm" || breakpoint === "md") && (
          <div className="flex flex-col justify-center items-center pt-10 px-10">
            <div className="text-center font-bold text-xl text-secondary-blue">
              From the Glorious Land of Indonesia to the world.
            </div>
            <div className="text-center text-base text-gray-500">
              we create the best natural product to improving the quality of
              life.
            </div>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 p-10 md:pt-20 pb-10 md:pb-32 gap-y-10">
          <div className="flex justify-center">
            <motion.img
              ref={ref}
              src="/assets/image/products/sotol-drink-still-life.jpg"
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
                className="text-center font-bold text-3xl text-secondary-blue"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
              >
                From the Glorious Land of Indonesia to the world.
              </motion.div>
              <motion.div
                className="text-center text-xl text-gray-500"
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
        ref={bestSellerRef}
        initial={{ opacity: 0, y: 50 }}
        animate={bestSellerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="py-10 px-5 md:px-20"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={bestSellerInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 py-10"
        >
          {products.map((product, i) => (
            <CardComponent
              key={i}
              productName={product.product_name}
              description={product.description}
              isBestSeller={product.best_seller}
              category={product.category}
              images={product.images}
              onDetail={() => {
                updateParams({
                  unix: product.id,
                  productName: product.product_name,
                  id: "best-seller",
                });
              }}
            />
          ))}
        </motion.div>
      </motion.section>
      {
        isCareerActive &&    <motion.section
        ref={csrRef}
        initial={{ opacity: 0, y: 50 }}
        animate={csrInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="w-full bg-white md:px-20"
      >
        <div className="mx-auto mb-2">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr]">
            {/* Left sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={csrInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-primary-blue p-8 lg:p-12"
            >
              <div className="mb-8">
                <Image
                  src="/assets/image/logo1.png"
                  alt="CSR Logo"
                  width={100}
                  height={100}
                  className="mb-6"
                />
                {/* <p className="mb-2 text-sm font-medium uppercase tracking-wider text-white">
                  C S R
                </p> */}
                <h2 className="mb-6 text-4xl font-bold text-white">
                  Career
                </h2>
                
              </div>
            </motion.div>

            {/* <motion.div className="p-8 lg:p-12"> */}
              {/* <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                plugins={[Autoplay({ delay: 3000 })]}
                className="w-full"
              >
                <CarouselContent className="flex flex-nowrap w-full">
                  {csrActivities.map((activity, index) => (
                    <CarouselItem
                      key={index}
                      className="w-full md:w-1/3 md:basis-1/3"
                    >
                      <CSRCard image={activity.image} title={activity.title} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel> */}

            {/* </motion.div> */}
             <motion.div className="flex justify-center items-center flex-col px-10 md:px-20 gap-10 py-10">
              <div className="flex flex-col gap-2">
              <p className="text-primary-blue text-center font-semibold">
                 We are Hiring!
               </p>
               <p className="text-primary-blue text-center">
                 Join our team and grow with us. We are looking for passionate, driven individuals to be part of our journey. Let’s build something amazing together.
               </p>
              </div>
             <Button
               onClick={() => window.location.href = `mailto:${process.env.NEXT_PUBLIC_HIRING_EMAIL}`}
               className="h-14 w-52 text-2xl rounded-lg bg-primary-blue hover:bg-tertiary-blue">Apply Now</Button>
           </motion.div>
          </div>
        </div>
      </motion.section>
      }
    </LayoutComponent>
  );
};

export default ModuleHome;
