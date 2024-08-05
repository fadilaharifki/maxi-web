"use client";

import { PhoneIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { twMerge } from "tailwind-merge";

const NavBar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const menus = [
    {
      name: "Our Company",
      slug: "/",
    },
    {
      name: "Product",
      slug: "/product",
    },
  ];

  const handleScrollToContact = () => {
    const contactElement = document.getElementById("contact-us");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="grid grid-cols-3 justify-around items-center py-3 fixed z-50 w-screen bg-white">
        <div
          className="flex justify-center items-center gap-3 cursor-pointer hover:scale-125 duration-300"
          onClick={() => {
            router.push("/");
          }}
        >
          <Image
            src="/assets/image/logo.png"
            width={1000}
            height={1000}
            alt="Logo"
            className="h-15 w-16"
          />
          <div className="flex justify-between flex-col">
            <div className="font-comfortaa text-primary-green font-bold text-2xl uppercase">
              Bimantis
            </div>
            <div className="font-comfortaa text-primary-green font-bold text-lg uppercase">
              PT. Bima Inti Selaras
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-10">
          {menus.map((menu, idx) => {
            return (
              <Link
                className="font-comfortaa text-primary-green font-bold text-sm cursor-pointer relative group"
                key={idx}
                href={menu.slug}
              >
                {menu.name}
                <div
                  className={twMerge(
                    "border-b-4 py-3 border-transparent duration-300 -mx-2 group-hover:border-primary-green absolute inset-0",
                    pathname === menu.slug ? "border-primary-green" : ""
                  )}
                ></div>
              </Link>
            );
          })}
        </div>
        <div className="flex justify-center">
          <div
            onClick={handleScrollToContact}
            className="font-comfortaa text-white font-bold bg-orange-500 rounded-full text-sm px-3 py-1 cursor-pointer hover:scale-125 duration-300"
          >
            Contact Us
          </div>
        </div>
      </div>
      <Tooltip>
        <TooltipTrigger asChild>
          <div
            className="fixed z-50 bottom-10 right-10 cursor-pointer hover:scale-125 duration-300"
            onClick={() => window.open("https://wa.me/62895488123", "_blank")}
          >
            <div className="bg-primary-green rounded-full p-2">
              <div className="p-3 border-2 border-white rounded-full">
                <PhoneIcon className="text-white" />
              </div>
            </div>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>Contact us</p>
        </TooltipContent>
      </Tooltip>
    </>
  );
};

export default NavBar;
