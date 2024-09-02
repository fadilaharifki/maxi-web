"use client";

import { MapPin, Phone } from "lucide-react";
import { InputWithButton } from "../ui/input";
import { useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const FooterComponent = () => {
  const route = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

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
        <div className="grid grid-cols-1 md:grid-cols-2 p-10 gap-10">
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

          <div className="flex justify-start md:justify-end flex-col items-start md:items-end gap-2 md:gap-5">
            <div className="font-montserrat text-white font-semibold text-2xl md:text-3xl uppercase">
              PT. BIMA INTI SELARAS
            </div>
            <div className="flex justify-start md:justify-end  flex-col items-start md:items-end gap-2">
              <div className="font-poppins text-xl text-bold text-white">
                Global Sales Office :
              </div>
              <div className="flex items-center font-poppins text-sm text-bold text-white">
                <MapPin className="w-3 h-3 mr-2" /> Jl. M.H. Thamrin
              </div>
              <div className="flex items-center font-poppins text-sm text-bold text-white">
                <MapPin className=" opacity-0 w-3 h-3 mr-2" /> Mahkota Mas
                Complex, Block J 57-6
              </div>
              <div className="flex items-center font-poppins text-sm text-bold text-white">
                <MapPin className=" opacity-0 w-3 h-3 mr-2" /> Tangerang -
                Indonesia 15117
              </div>
              <div className="flex items-center font-poppins text-sm text-bold text-white">
                <Phone className="w-3 h-3 mr-2" /> +62 21 5577 5024
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
