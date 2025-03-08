"use client";

import LayoutComponent from "@/components/layout";

import useParamsHook from "@/hooks/useParamsHook";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ProductModule = () => {
  const router = useRouter();

  return (
    <LayoutComponent>
      <section
        className="hover:scale-105 duration-300 cursor-pointer h-screen"
        onClick={() => {
          router.push("product/category?category=beans+%26+grains");
        }}
      >
        <div className="relative flex flex-col h-full bg-green-white">
          <Image
            src="/assets/image/dummy.png"
            width={1000}
            height={1000}
            alt="Logo"
            className="w-screen h-screen object-cover rounded-xl"
          />
          <div className="absolute inset-0 bg-black opacity-30"></div>

          <div className="absolute inset-0 flex flex-col justify-center gap-5 px-10 md:px-20">
            <div>
              <div className=" text-2xl md:text-5xl font-bold text-white uppercase">
                Lorem Ipsum
              </div>
            </div>
            <div className="flex flex-col justify-start items-start gap-10">
              <div className="text-base md:text-xl text-white w-5/6 md:w-3/6 flex-wrap">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        onClick={() => {
          router.push("product/category?category=fruit+%26+vegetables");
        }}
        className="hover:scale-105 duration-300 cursor-pointer h-screen"
      >
        <div className="relative flex flex-col bg-green-white">
          <div className="grid grid-cols-2 grid-rows-2 h-screen">
            <Image
              src="/assets/image/dummy.png"
              width={1000}
              height={1000}
              alt="Logo"
              className="w-full h-full object-cover aspect-square"
            />
            <Image
              src="/assets/image/dummy.png"
              width={1000}
              height={1000}
              alt="Logo"
              className="w-full h-full object-cover aspect-square"
            />
            <Image
              src="/assets/image/dummy.png"
              width={1000}
              height={1000}
              alt="Logo"
              className="w-full h-full object-cover aspect-square"
            />
            <Image
              src="/assets/image/dummy.png"
              width={1000}
              height={1000}
              alt="Logo"
              className="w-full h-full object-cover aspect-square"
            />
          </div>

          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="absolute inset-0 flex flex-col justify-center gap-5 px-10 md:px-20">
            <div>
              <div className=" text-2xl md:text-5xl font-bold text-white uppercase">
                Lorem ipsum dolor
              </div>
            </div>
            <div className="flex flex-col justify-start items-start gap-10">
              <div className="w-5/6 md:w-3/6 ">
                <div className=" text-base md:text-xl text-white  flex-wrap">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
              </div>
              <div>
                <div className="bg-red-500 hover:bg-red-700 min-w-10 rounded-lg px-10 py-1">
                  <div className=" font-bold text-lg text-white">
                    Explore our finest
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        onClick={() => {
          router.push("product/category?category=natural+sweeteners");
        }}
        className="hover:scale-105 duration-300 cursor-pointer min-h-screen"
      >
        <div className="relative flex flex-col h-full bg-green-white">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <Image
              src="/assets/image/dummy.png"
              width={1000}
              height={1000}
              alt="Logo"
              className="w-screen h-6/12 md:h-screen object-cover"
            />
            <Image
              src="/assets/image/dummy.png"
              width={1000}
              height={1000}
              alt="Logo"
              className="w-screen h-6/12 md:h-screen object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="absolute inset-0 flex flex-col justify-center gap-5 px-10 md:px-20">
            <div>
              <div className=" text-2xl md:text-5xl font-bold text-white uppercase">
                Lorem ipsum dolor
              </div>
            </div>
            <div className="flex flex-col justify-start items-start gap-10">
              <div className="w-5/6 md:w-3/6 ">
                <div className=" text-base md:text-xl text-white flex-wrap">
                  Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem
                  ipsum dolor
                </div>
                <div className=" text-base md:text-xl text-white flex-wrap">
                  Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem
                  ipsum dolor
                </div>
              </div>
              <div>
                <div className="bg-red-500 hover:bg-red-700 min-w-10 rounded-lg px-10 py-1">
                  <div className=" font-bold text-lg text-white">
                    Go, Discover
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LayoutComponent>
  );
};

export default ProductModule;
