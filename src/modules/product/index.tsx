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
            src="/assets/image/products/white-sesame-seeds/2.jpg"
            width={1000}
            height={1000}
            alt="Logo"
            className="w-screen h-screen object-cover rounded-xl"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>

          <div className="absolute inset-0 flex flex-col justify-center gap-5 px-10 md:px-20">
            <div>
              <div className=" text-2xl md:text-5xl font-bold text-white uppercase">
                Grains & Seeds
              </div>
            </div>
            <div className="flex flex-col justify-start items-start gap-10">
              <div className=" text-base md:text-xl font-bold text-white w-5/6 md:w-3/6 flex-wrap">
                Discover our latest innovation by empowering Indonesian source
                grains and seeds, to shape a better generation
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
      <section
        onClick={() => {
          router.push("product/category?category=fruit+%26+vegetables");
        }}
        className="hover:scale-105 duration-300 cursor-pointer h-screen"
      >
        <div className="relative flex flex-col bg-green-white">
          <div className="grid grid-cols-2 grid-rows-2 h-screen">
            <Image
              src="/assets/image/products/fruit-vegie/11.jpg"
              width={1000}
              height={1000}
              alt="Logo"
              className="w-full h-full object-cover aspect-square"
            />
            <Image
              src="/assets/image/products/fruit-vegie/24.jpg"
              width={1000}
              height={1000}
              alt="Logo"
              className="w-full h-full object-cover aspect-square"
            />
            <Image
              src="/assets/image/products/fruit-vegie/13.jpg"
              width={1000}
              height={1000}
              alt="Logo"
              className="w-full h-full object-cover aspect-square"
            />
            <Image
              src="/assets/image/products/fruit-vegie/2.jpg"
              width={1000}
              height={1000}
              alt="Logo"
              className="w-full h-full object-cover aspect-square"
            />
          </div>

          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex flex-col justify-center gap-5 px-10 md:px-20">
            <div>
              <div className=" text-2xl md:text-5xl font-bold text-white uppercase">
                Fruit & Vegetables
              </div>
            </div>
            <div className="flex flex-col justify-start items-start gap-10">
              <div className="w-5/6 md:w-3/6 ">
                <div className=" text-base md:text-xl font-bold text-white  flex-wrap">
                  We explore the finest from North Asia to Indonesia,
                </div>
                <div className=" text-base md:text-xl font-bold text-white  flex-wrap">
                  As our plan to creating healthier generations
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
              src="/assets/image/products/brown-sugar/1.jpg"
              width={1000}
              height={1000}
              alt="Logo"
              className="w-screen h-6/12 md:h-screen object-cover"
            />
            <Image
              src="/assets/image/products/honey/4.jpg"
              width={1000}
              height={1000}
              alt="Logo"
              className="w-screen h-6/12 md:h-screen object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex flex-col justify-center gap-5 px-10 md:px-20">
            <div>
              <div className=" text-2xl md:text-5xl font-bold text-white uppercase">
                Natural Sweeteners
              </div>
            </div>
            <div className="flex flex-col justify-start items-start gap-10">
              <div className="w-5/6 md:w-3/6 ">
                <div className=" text-base md:text-xl font-bold text-white flex-wrap">
                  Take a look on our widest collection of indonesia’s best
                </div>
                <div className=" text-base md:text-xl font-bold text-white flex-wrap">
                  Natural sweeteners that you never seen before
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
            src="/assets/image/products/anti-microbes/13.jpg"
            width={1000}
            height={1000}
            alt="Logo"
            className="w-screen h-screen object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>

          <div className="absolute inset-0 flex flex-col justify-center gap-5 px-10 md:px-20">
            <div className="flex justify-start items-start">
              <div className="bg-white rounded-3xl px-10">
                <Image
                  src="/assets/image/products/anti-microbes/12.png"
                  width={1000}
                  height={1000}
                  alt="Logo"
                  className="w-32 rounded-full object-cover "
                />
              </div>
            </div>
            <div>
              <div className=" text-2xl md:text-5xl font-bold text-white uppercase">
                Galactic
              </div>
            </div>
            <div className="flex flex-col justify-start items-start gap-10">
              <div className=" text-base md:text-xl font-bold text-white w-5/6 md:w-3/6 flex-wrap">
                Discover our collaboration with Galactic, S.A (Belgium & China)
                to improving your product quality, shelf life, and better taste
                experience
              </div>
              <div>
                <div className="bg-red-500 hover:bg-red-700 min-w-10 rounded-lg px-10 py-1">
                  <div className=" font-bold text-lg text-white">
                    Go Discover Now
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        onClick={() => {
          router.push("product/category?category=natural+additives");
        }}
        className="hover:scale-105 duration-300 cursor-pointer min-h-screen"
      >
        <div className="relative flex flex-col h-full bg-green-white">
          <Image
            src="/assets/image/products/natural-add/5.jpg"
            width={1000}
            height={1000}
            alt="Logo"
            className="w-screen h-screen object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>

          <div className="absolute inset-0 flex flex-col justify-center gap-5 px-10 md:px-20">
            <div>
              <div className=" text-2xl md:text-5xl font-bold text-white uppercase">
                Natural Additives
              </div>
            </div>
            <div className="flex flex-col justify-start items-start gap-10">
              <div className=" text-base md:text-xl font-bold text-white w-5/6 md:w-3/6 flex-wrap">
                Take a look on our collection to support your product even
                better
              </div>
              <div>
                <div className="bg-red-500 hover:bg-red-700 min-w-10 rounded-lg px-10 py-1">
                  <div className=" font-bold text-lg text-white">
                    Go Discover Now
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        onClick={() => {
          router.push("product/category?category=dairy+products");
        }}
        className="hover:scale-105 duration-300 cursor-pointer min-h-screen"
      >
        <div className="relative flex flex-col h-full bg-green-white">
          <Image
            src="/assets/image/products/dairy/6.jpg"
            width={1000}
            height={1000}
            alt="Logo"
            className="w-screen h-screen object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>

          <div className="absolute inset-0 flex flex-col justify-center gap-5 px-10 md:px-20">
            <div>
              <div className=" text-2xl md:text-5xl font-bold text-white uppercase">
                Dairy Products
              </div>
            </div>
            <div className="flex flex-col justify-start items-start gap-10">
              <div className=" text-base md:text-xl font-bold text-white w-5/6 md:w-3/6 flex-wrap">
                Not just for creamy taste but we can help to lowering your
                production cost
              </div>
              <div>
                <div className="bg-red-500 hover:bg-red-700 min-w-10 rounded-lg px-10 py-1">
                  <div className=" font-bold text-lg text-white">
                    Go Discover More
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
