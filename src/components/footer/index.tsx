"use client";

import {
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  MapPin,
  Phone,
} from "lucide-react";
import { InputWithButton } from "../ui/input";
import { useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const FooterComponent = () => {
  const route = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const mediaSocial = [
    {
      icon: <Twitter className="text-primary-green" />,
    },
    {
      icon: <Facebook className="text-primary-green" />,
    },
    {
      icon: <Instagram className="text-primary-green" />,
    },
    {
      icon: <Youtube className="text-primary-green" />,
    },
  ];

  const menus = [
    {
      name: "Our Company",
      id: "our-company",
      slug: "/",
    },
    {
      name: "Product",
      id: "product",
      slug: "/product",
    },
  ];

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
          className="grid grid-cols-2 px-10 bg-green-white py-5 gap-x-32"
        >
          <div className="font-comfortaa text-primary-green">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry?
          </div>
          <div className="font-comfortaa">
            <InputWithButton placeholder="Enter your email" />
          </div>
        </div>
      )}
      <div className="w-screen bg-primary-green">
        <div className="grid grid-cols-3 p-10 ">
          <div className="flex flex-col gap-10">
            <div className="font-comfortaa text-xl text-bold text-white">
              Bimantis
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
          </div>
          <div className="flex flex-col gap-10">
            <div className="font-comfortaa text-xl text-bold text-white">
              Media Sosial
            </div>
            <div className="flex gap-5">
              {mediaSocial.map((e, index) => {
                return (
                  <div
                    className="flex rounded-full p-2 bg-white cursor-pointer hover:scale-125 duration-300"
                    key={index}
                  >
                    {e.icon}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex justify-end flex-col items-end gap-10">
            <div className="font-poppins text-3xl text-bold text-white">
              PT. BIMA INTI SELARAS
            </div>
            <div className="flex justify-end flex-col items-end">
              <div className="font-poppins text-xl text-bold text-white">
                Global Sales Office :
              </div>
              <div className="flex items-center font-poppins text-sm text-bold text-white">
                <MapPin className="w-3 h-3 mr-2" /> Ruko Mahkota Mas Blok J
                57-60 Jl. M.H. Thamrin
              </div>
              <div className="flex items-center font-poppins text-sm text-bold text-white">
                Kota Tangerang - Indonesia 15117
              </div>
              <div className="flex items-center font-poppins text-sm text-bold text-white">
                <Phone className="w-3 h-3 mr-2" /> : +62 21 5577 5024
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
