"use client";

import { ChevronLeftCircle, ChevronRightCircle } from "lucide-react";
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
import { useEffect } from "react";
import { products } from "@/contants/product";
import { logoCustomers } from "@/contants/cloboration";
import useScreenSize from "@/hooks/useScreenSize";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import LayoutComponent from "@/components/layout";
import { Timeline } from "@/components/ui/timeline";

const ModuleOurCompany = () => {
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

  const { ref: aboutRef, inView: aboutInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const { breakpoint } = useScreenSize();
  const { params, updateParams } = useParamsHook();

  const { id } = params;
  const flag = false;

  const data = [
    {
      title: "2022",
      content: (
        <div>
          <p className="text-primary-blue text-xs md:text-sm font-normal mb-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/assets/image/products/placeholder.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/assets/image/products/placeholder.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/assets/image/products/placeholder.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/assets/image/products/placeholder.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <p className="text-primary-blue text-xs md:text-sm font-normal mb-8">
            I usually run out of copy, but when I see content this big, I try to
            integrate lorem ipsum.
          </p>
          <p className="text-primary-blue text-xs md:text-sm font-normal mb-8">
            Lorem ipsum is for people who are too lazy to write copy. But we are
            not. Here are some more example of beautiful designs I built.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/assets/image/products/placeholder.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/assets/image/products/placeholder.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/assets/image/products/placeholder.png"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/assets/image/products/placeholder.png"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <p className="text-primary-blue text-xs md:text-sm font-normal mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/assets/image/products/placeholder.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/assets/image/products/placeholder.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/assets/image/products/placeholder.png"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/assets/image/products/placeholder.png"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];

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
      title: "Visi",
      text: "Menjadi produsen AMDK terpercaya yang mengedepankan kualitas, higienitas, dan standar mutu tinggi demi kesehatan dan kepuasan pelanggan.",
    },
    {
      title: "Misi",
      text: "Menghasilkan produk air minum berkualitas tinggi dengan pelayanan terbaik untuk memenuhi kepuasan pelanggan.",
    },
    {
      title: "Nilai-Nilai Perusahaan",
      text: "Kualitas, integritas, inovasi, kepedulian, dan profesionalisme dalam setiap proses dan pelayanan.",
    },
  ];

  return (
    <LayoutComponent>
      {flag && (
        <section className="h-screen" id="our-company">
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
      )}
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
                industry. Lorem Ipsum has been the industrys standard dummy text
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

      <section>
        <div className="relative flex flex-col h-full">
          <motion.img
            ref={refVision}
            src="/assets/image/products/water-surface-with-ripples-drop-falling.jpg"
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

      <motion.section
        ref={aboutRef}
        initial={{ opacity: 0, y: 50 }}
        animate={aboutInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 p-5 md:px-20 gap-5 bg-primary-blue"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={aboutInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col gap-3 justify-center"
        >
          <div className="flex flex-col gap-1">
            <div className="text-xl font-semibold text-white">Tentang Kami</div>
            <div className="text-3xl font-semibold text-white">
              Membantu orang sehat menjadi lebih sehat
            </div>
          </div>
          <div className="text-white">
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
      {flag && (
        <motion.section
          ref={refProduct}
          id="best-seller"
          className="px-5 rounded-lg py-10 md:py-20 bg-primary-blue"
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
            {products
              .filter((product) => product.best_seller)
              .map((product, i) => (
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
              ))}
            {/* Custom Next and Previous buttons with Lucide React icons */}
            <div className="custom-next absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full mr-5">
              <ChevronRightCircle className="w-10 h-10 cursor-pointer text-primary-blue" />
            </div>
            <div className="custom-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full ml-5">
              <ChevronLeftCircle className="w-10 h-10 cursor-pointer text-primary-blue" />
            </div>
          </Swiper>
        </motion.section>
      )}
      {flag && (
        <section ref={refCust}>
          <motion.div
            className="flex flex-col justify-center items-center py-10 gap-20 bg-white"
            initial={{ opacity: 0, y: 50 }}
            animate={inCust ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="text-center text-3xl md:text-5xl text-bold text-secondary-blue">
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
      )}

      <section>
        <Timeline data={data} title="Milestones" />
      </section>
    </LayoutComponent>
  );
};

export default ModuleOurCompany;
