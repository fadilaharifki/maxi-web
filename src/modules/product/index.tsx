"use client";

import LayoutComponent from "@/components/layout";

import useParamsHook from "@/hooks/useParamsHook";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ProductModule = () => {
  const router = useRouter();
  const { params, updateParams, removeParams, getFullURL } = useParamsHook();

  return (
    <LayoutComponent>
      <section
        className="pt-16 md:pt-32 hover:scale-105 duration-300 cursor-pointer bg-rose-gold"
        onClick={() => {
          router.push("product/category?category=beans+%26+grains");
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-10">
          <div className="flex flex-col justify-center items-center gap-10">
            <div>
              <div className="font-comfortaa font-bold text-2xl md:text-3xl text-primary-green text-center">
                Grains & Seeds
              </div>
              <div className="font-comfortaa font-bold text-lg md:text-xl text-primary-green text-center">
                Discover our latest innovation by empowering Indonesian source
                grains and seeds, to shape a better generation
              </div>
            </div>
            <div className="bg-red-500 hover:bg-red-700 rounded-lg px-10 py-1">
              <div className="font-comfortaa font-bold text-lg text-white">
                Go, Discover
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/assets/image/products/white-sesame-seeds/2.jpg"
              width={1000}
              height={1000}
              alt="Logo"
              className="w-screen h-44 md:h-96 object-cover rounded-xl"
            />
          </div>
        </div>
      </section>
      <section
        onClick={() => {
          router.push(
            "product/category?category=fruit+%26+vegetables&id=21&productName=Sweet+Potato"
          );
        }}
        className="bg-green-white hover:scale-105 duration-300 cursor-pointer"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-10 pb-32">
          <div className="grid grid-cols-2">
            <Image
              src="/assets/image/products/category/14.jpg"
              width={1000}
              height={1000}
              alt="Logo"
              className="w-screen h-44 md:h-52 object-cover rounded-xl"
            />
            <Image
              src="/assets/image/products/category/14.jpg"
              width={1000}
              height={1000}
              alt="Logo"
              className="w-screen h-44 md:h-52 object-cover rounded-xl"
            />
            <Image
              src="/assets/image/products/category/14.jpg"
              width={1000}
              height={1000}
              alt="Logo"
              className="w-screen h-44 md:h-52 object-cover rounded-xl"
            />
            <Image
              src="/assets/image/products/category/14.jpg"
              width={1000}
              height={1000}
              alt="Logo"
              className="w-screen h-44 md:h-52 object-cover rounded-xl"
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-10">
            <div>
              <div className="font-comfortaa font-bold text-2xl md:text-3xl text-primary-green text-center">
                Fruit & Vegetables
              </div>
              <div className="font-comfortaa font-bold text-lg md:text-xl text-primary-green text-center">
                We explore the finest from North Asia to Indonesia, as our plan
                to creating healthier generations
              </div>
            </div>
            <div className="bg-red-500 hover:bg-red-700 rounded-lg px-10 py-1">
              <div className="font-comfortaa font-bold text-lg text-white">
                Explore our finest
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        onClick={() => {
          router.push(
            "product/category?category=natural+sweeteners&id=3&productName=Palm+Sugar"
          );
        }}
        className="hover:scale-105 duration-300 cursor-pointer"
      >
        <div className="relative flex flex-col h-full bg-green-white">
          <Image
            src="/assets/image/products/brown-sugar/1.jpg"
            width={1000}
            height={1000}
            alt="Logo"
            className="w-screen h-96 md:h-[550px] object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex flex-col justify-center gap-5 px-10 md:px-20">
            <div>
              <div className="font-comfortaa text-2xl md:text-5xl font-bold text-white uppercase">
                Palm Sugar
              </div>
            </div>
            <div className="font-comfortaa text-base md:text-xl font-bold text-white w-5/6 md:w-96 flex-wrap">
              We learnt to be honest and helpful in everything we do to support
              you
            </div>
          </div>
        </div>
      </section>
      <section
        onClick={() => {
          router.push(
            "product/category?category=natural+preservatives+%2F+anti+microbes"
          );
        }}
        className="hover:scale-105 duration-300 cursor-pointer"
      >
        <div className="relative flex flex-col h-full bg-green-white">
          <Image
            src="/assets/image/products/category/1.jpg"
            width={1000}
            height={1000}
            alt="Logo"
            className="w-screen h-96 md:h-[550px] object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex flex-col justify-center gap-5 px-10 md:px-20">
            <div>
              <div className="font-comfortaa text-2xl md:text-5xl font-bold text-white uppercase">
                Galatic
              </div>
            </div>
            <div className="font-comfortaa text-base md:text-xl font-bold text-white w-5/6 md:w-96 flex-wrap">
              We learnt to be honest and helpful in everything we do to support
              you
            </div>
          </div>
        </div>
      </section>
      <section
        onClick={() => {
          router.push("product/category?category=natural+sweeteners");
        }}
        className="hover:scale-105 duration-300 cursor-pointer"
      >
        <div className="relative flex flex-col h-full bg-green-white">
          <Image
            src="/assets/image/products/honey/2.jpg"
            width={1000}
            height={1000}
            alt="Logo"
            className="w-screen h-96 md:h-[550px] object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>

          <div className="absolute inset-0 flex flex-col justify-center gap-5 px-10 md:px-20">
            <div className="flex flex-col justify-center">
              <div className="font-comfortaa text-2xl md:text-5xl font-bold text-white uppercase">
                Our Origin
              </div>
              <div className="font-comfortaa text-base md:text-xl font-bold text-white w-5/6 md:w-96 flex-wrap">
                We colaborate with the agricultur community for development
                process and responsible sourcing base on good agricultural
                practice to producting the final Nature Products.
              </div>
            </div>
            <div className="flex flex-col justify-end items-end md:p-20">
              <div className="font-comfortaa text-base md:text-xl text-end font-bold text-white w-5/6 md:w-96 flex-wrap">
                Natural / foney liquid for various industries
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        onClick={() => {
          router.push("product/category?category=fruit+%26+vegetables");
        }}
        className="hover:scale-105 duration-300 cursor-pointer"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-10">
          <div className="flex flex-col justify-center items-center">
            <div className="font-comfortaa font-bold text-2xl md:text-3xl text-primary-green text-center">
              Our unique Fruit & Vegetables
            </div>
            <div className="font-comfortaa font-bold text-lg md:text-xl text-primary-green text-center">
              Fruit & Vegetables to improves quality of life
            </div>
          </div>
          <div>
            <Image
              src="/assets/image/products/category/11.jpg"
              width={1000}
              height={1000}
              alt="Logo"
              className="w-screen h-44 md:h-96 object-cover rounded-xl"
            />
          </div>
        </div>
      </section>
    </LayoutComponent>
  );
};

export default ProductModule;
