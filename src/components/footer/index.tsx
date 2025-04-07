"use client";

import { MapPin, Phone } from "lucide-react";
import { InputWithButton } from "../ui/input";
import { useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { menus } from "@/contants/navigation";

const FooterComponent = () => {
  const route = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const yerasNow = new Date().getFullYear();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const targetElement = document.querySelector(hash);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  }, [searchParams]);

  const handleScroll = (id: string) => {
    const contactElement = document.getElementById(id);
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const flag = false;

  return (
    <div>
      {flag && (
        <div
          id="contact-us"
          className="grid grid-cols-1 md:grid-cols-2 gap-5 px-10 bg-gradient-to-tr from-white to-primary-blue py-5 gap-x-32"
        >
          <div className=" text-primary-green text-xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry?
          </div>
          <div className="">
            <InputWithButton placeholder="Enter your email" />
          </div>
        </div>
      )}
      <div className="w-screen bg-primary-blue py-2">
        <div className="grid grid-cols-1 md:grid-cols-4 px-10 py-4 gap-10 justify-center items-center">
          <div className="flex flex-col gap-10">
            <Image
              src="/assets/image/logo1.png"
              width={1000}
              height={1000}
              alt="Logo"
              className="w-64 h-40 rounded-lg"
            />
          </div>
          <div className="flex flex-col text-white gap-3">
            {menus.map((menu, i) => {
              return (
                <div
                  className="hover:pl-5 duration-300 cursor-pointer"
                  key={i}
                  onClick={() => {
                    if (pathname === menu.slug) handleScroll(menu.id);
                    else route.push(menu.slug);
                  }}
                >
                  {menu.name}
                </div>
              );
            })}
          </div>
          <div></div>
          <div className="flex justify-start md:justify-end flex-col items-start md:items-end gap-2 md:gap-5">
            <div className="text-white font-semibold text-2xl md:text-3xl uppercase">
            CV MITRA INTI JAYA
            </div>
            <div className="flex justify-start md:justify-end  flex-col items-start md:items-end gap-2">
              <div className="font-poppins text-xl text-bold text-white">
              Head office :
              </div>
              <div className="flex items-center font-poppins text-sm text-bold text-white">
                <MapPin className="w-3 h-3 mr-2" /> Jalan Jendral Ahmad Yani 251
              </div>
              <div className="flex items-center font-poppins text-sm text-bold text-white">
                <MapPin className=" opacity-0 w-3 h-3 mr-2" /> Kendari, Sulawesi Tenggara.
              </div>
              <div className="flex items-center font-poppins text-sm text-bold text-white">
                <Phone className="w-3 h-3 mr-2" /> 0401 3196158
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen bg-secondary-blue min-h-10 flex items-center">
        <div className="text-white px-4 md:px-10 py-2">
          © 2025 MAXI All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
