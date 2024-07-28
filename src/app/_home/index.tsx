import { CoffeeIcon, LampCeiling, LampDesk, LampIcon } from "lucide-react";
import Image from "next/image";

const HomePage = () => {
  const logoCustomers = [
    {
      url: "/assets/image/sidomuncul.png",
    },
    {
      url: "/assets/image/wings.png",
    },
    {
      url: "/assets/image/aice.png",
    },
    {
      url: "/assets/image/mayora.png",
    },
    {
      url: "/assets/image/daesang.png",
    },
    {
      url: "/assets/image/ichitan.png",
    },
    {
      url: "/assets/image/indofood.png",
    },
    {
      url: "/assets/image/kino.png",
    },
    {
      url: "/assets/image/abc.png",
    },
    {
      url: "/assets/image/boga.png",
    },
    {
      url: "/assets/image/chateraise.jpg",
    },
  ];

  return (
    <>
      <section className="h-screen" id="our-company">
        <div className="grid grid-cols-2 h-full bg-green-white">
          <div className="flex flex-col gap-5 justify-center px-10">
            <div>
              <div className="font-comfortaa text-5xl text-bold text-primary-green">
                Benefit Of
              </div>
              <div className="font-comfortaa text-5xl text-bold text-primary-green">
                Bimantis
              </div>
            </div>
            <div className="font-comfortaa text-xl text-bold  text-primary-green">
              {/*  eslint-disable-next-line react/no-unescaped-entities */}
              We're growing ecosystem, economies, and better future
            </div>
          </div>
          <div className="flex flex-col gap-5 justify-center items-end">
            <div className="rounded-s-full bg-primary-green w-[600px] h-[600px] flex justify-center items-center shadow-[0_20px_50px_rgba(16,_73,_46)]">
              <Image
                src="/assets/image/home.png"
                width={1000}
                height={1000}
                alt="Logo"
                className=""
              />
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
      <section>
        <div className="flex flex-col justify-center items-center py-32 gap-20">
          <div className="font-comfortaa text-5xl text-bold text-primary-green">
            Our active customers..
          </div>
          <div className="grid grid-cols-6">
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
    </>
  );
};

export default HomePage;
