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
        className="pt-32 hover:scale-105 duration-300 cursor-pointer bg-rose-gold"
        onClick={() => {
          router.push("product/category?category=beans+%26+grains");
        }}
      >
        <div className="grid grid-cols-2 gap-10 p-10">
          <div className="flex flex-col justify-center items-center">
            <div className="font-comfortaa font-bold text-3xl text-primary-green">
              Sesame Seed
            </div>
            <div className="font-comfortaa font-bold text-xl text-primary-green text-center">
              Natur Roasted Character
            </div>
          </div>
          <div>
            <Image
              src="/assets/image/background3.jpg"
              width={1000}
              height={1000}
              alt="Logo"
              className="w-screen h-96 object-cover rounded-xl"
            />
          </div>
        </div>
      </section>
      <section
        onClick={() => {
          router.push("product/category?category=fruit+%26+vegetables");
        }}
        className="bg-green-white hover:scale-105 duration-300 cursor-pointer"
      >
        <div className="grid grid-cols-2 gap-10 p-10 pb-32">
          <div>
            <Image
              src="/assets/image/background3.jpg"
              width={1000}
              height={1000}
              alt="Logo"
              className="w-screen h-96 object-cover rounded-xl"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="font-comfortaa font-bold text-3xl text-primary-green">
              Purple Sweet Potato
            </div>
            <div className="font-comfortaa font-bold text-xl text-primary-green text-center">
              A uniq taste natural color for all aprication in food & drink
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
            src="/assets/image/background2.jpg"
            width={1000}
            height={1000}
            alt="Logo"
            className="w-screen h-[550px] object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex flex-col justify-center gap-5 px-20">
            <div>
              <div className="font-comfortaa text-5xl font-bold text-white uppercase">
                Palm Sugar
              </div>
            </div>
            <div className="font-comfortaa text-xl font-bold text-white w-96 flex-wrap">
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
            src="/assets/image/background2.jpg"
            width={1000}
            height={1000}
            alt="Logo"
            className="w-screen h-[550px] object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex flex-col justify-center gap-5 px-20">
            <div>
              <div className="font-comfortaa text-5xl font-bold text-white uppercase">
                Galatic
              </div>
            </div>
            <div className="font-comfortaa text-xl font-bold text-white w-96 flex-wrap">
              We learnt to be honest and helpful in everything we do to support
              you
            </div>
          </div>
        </div>
      </section>
      <section className="hover:scale-105 duration-300 cursor-pointer">
        <div className="relative flex flex-col h-full bg-green-white">
          <Image
            src="/assets/image/background2.jpg"
            width={1000}
            height={1000}
            alt="Logo"
            className="w-screen h-[550px] object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>

          <div className="grid grid-cols-2 absolute inset-0 justify-center gap-5 px-20">
            <div className="flex flex-col justify-center">
              <div className="font-comfortaa text-5xl font-bold text-white uppercase">
                Our Origin
              </div>
              <div className="font-comfortaa text-xl font-bold text-white w-96 flex-wrap">
                We colaborate with the agricultur community for development
                process and responsible sourcing base on good agricultural
                practice to producting the final Nature Products.
              </div>
            </div>
            <div className="flex flex-col justify-end items-end p-20">
              <div className="font-comfortaa text-xl font-bold text-white w-96 flex-wrap">
                Natural / foney liquid for various industries
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="hover:scale-105 duration-300 cursor-pointer">
        <div className="grid grid-cols-2 gap-10 p-10">
          <div className="flex flex-col justify-center items-center">
            <div className="font-comfortaa font-bold text-3xl text-primary-green">
              Our unique Fruit & Vegetables
            </div>
            <div className="font-comfortaa font-bold text-xl text-primary-green text-center">
              Fruit & Vegetables to improves quality of life
            </div>
          </div>
          <div>
            <Image
              src="/assets/image/background3.jpg"
              width={1000}
              height={1000}
              alt="Logo"
              className="w-screen h-96 object-cover rounded-xl"
            />
          </div>
        </div>
      </section>
    </LayoutComponent>
  );
};

export default ProductModule;
