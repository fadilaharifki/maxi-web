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
import { banners } from "@/contants/banner";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
  const aboutRef = useRef(null);
  const bestSellerRef = useRef(null);
  const csrRef = useRef(null);
  const aboutInView = useInView(aboutRef, {
    margin: "-100px",
  });
  const bestSellerInView = useInView(bestSellerRef, {
    margin: "-100px",
  });
  const csrInView = useInView(csrRef, {
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

  return (
    <LayoutComponent>
      <section className="md:min-h-screen" id="our-company">
        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[Autoplay({ delay: 3000 })]}
          className="w-screen md:h-screen"
        >
          <CarouselContent>
            {banners.map((banner, index) => (
              <CarouselItem key={index} className="w-screen md:h-screen">
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

      <motion.section
        ref={aboutRef}
        initial={{ opacity: 0, y: 50 }}
        animate={aboutInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 p-5 md:px-20 gap-5"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={aboutInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col gap-3 justify-center"
        >
          <div className="flex flex-col gap-1">
            <div className="uppercase text-xl font-semibold">Tentang Kami</div>
            <div className="uppercase text-3xl font-semibold">
              Membantu orang sehat menjadi lebih sehat
            </div>
          </div>
          <div>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={aboutInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col gap-3 justify-end items-end"
        >
          <motion.img
            src="/assets/image/products/office-harus-ganti.png"
            width={1000}
            height={1000}
            alt="Logo"
            className="h-96 w-screen md:w-2/3 object-cover rounded-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
      </motion.section>

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
        >
          <motion.img
            src="/assets/image/products/beverage-factory-conveyor-belt-with-juice-bottles.jpg"
            width={1000}
            height={1000}
            alt="Logo"
            className="h-80 w-screen object-cover rounded-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
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
      <motion.section
        ref={csrRef}
        initial={{ opacity: 0, y: 50 }}
        animate={csrInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="w-full bg-white md:px-20"
      >
        <div className="mx-auto">
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
                <p className="mb-2 text-sm font-medium uppercase tracking-wider text-white">
                  C S R
                </p>
                <h2 className="mb-6 text-4xl font-bold text-white">
                  Corporate Social Responsibility
                </h2>
                <p className="text-white">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries
                </p>
              </div>
            </motion.div>

            <motion.div className="p-8 lg:p-12">
              <Carousel
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
              </Carousel>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </LayoutComponent>
  );
};

export default ModuleHome;
