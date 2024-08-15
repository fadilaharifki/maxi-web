"use client";

import { MenuIcon, PhoneIcon, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { twMerge } from "tailwind-merge";
import useScreenSize from "@/hooks/useScreenSize";
import { useState } from "react";

const NavBar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { breakpoint } = useScreenSize();
  const [open, setOpen] = useState(false);

  const menus = [
    {
      name: "Our Company",
      slug: "/",
    },
    {
      name: "Product",
      slug: "/product",
    },
    ...(breakpoint === "sm" || breakpoint === "md"
      ? [
          {
            name: "Contact Us",
            slug: "/contact-us",
          },
        ]
      : []),
  ];

  const activePathName: any = {
    "/": "/",
    "/product": "/product",
    "/contact-us": "/contact-us",
    "/product/category": "/product",
  };

  const handleScrollToContact = () => {
    router.push("/contact-us");
  };

  return (
    <nav>
      {breakpoint === "sm" || breakpoint === "md" ? (
        <>
          <div className="grid grid-cols-6 justify-around items-center py-3 fixed px-5 z-50 w-screen bg-white">
            <div
              onClick={() => {
                setOpen(!open);
              }}
              className="relative w-10 h-10 flex items-center justify-center"
            >
              <div
                className={twMerge(
                  "absolute transition-transform duration-300",
                  open ? "rotate-45 opacity-0" : "rotate-0 opacity-100"
                )}
              >
                <MenuIcon className="w-8 h-8" />
              </div>
              <div
                className={twMerge(
                  "absolute transition-transform duration-300",
                  open ? "rotate-0 opacity-100" : "-rotate-45 opacity-0"
                )}
              >
                <XIcon className="w-8 h-8" />
              </div>
            </div>
            <div className="col-span-4">
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
                  className="h-9 w-10"
                />
                <div className="flex justify-between flex-col">
                  <div className="font-montserrat text-primary-green font-semibold text-xl uppercase">
                    Bimantis
                  </div>
                </div>
              </div>
            </div>
          </div>
          {open && (
            <div
              className={twMerge(
                "bg-white pt-[60px] pb-8 fixed left-0 w-full z-40 transform transition-all duration-500 ease-in-out flex justify-between",
                open
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-full opacity-0 pointer-events-none"
              )}
            >
              <ul className="px-10 py-3 flex flex-col gap-2">
                {menus.map((menu, idx) => {
                  return (
                    <li key={idx}>
                      <Link
                        className={twMerge(
                          "font-poppins text-primary-green font-normal text-base cursor-pointer hover: relative group",
                          activePathName[pathname] === menu.slug
                            ? "pl-5 scale-105 font-semibold"
                            : ""
                        )}
                        href={menu.slug}
                      >
                        {menu.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </>
      ) : (
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
              className="h-13 w-14"
            />
            <div className="flex justify-between flex-col">
              <div className="font-montserrat text-primary-green tracking-widest font-semibold text-3xl uppercase">
                Bimantis
              </div>
            </div>
          </div>
          <ul className="flex justify-center gap-10">
            {menus.map((menu, idx) => {
              return (
                <li key={idx}>
                  <Link
                    className="font-comfortaa text-primary-green font-bold text-sm cursor-pointer relative group"
                    href={menu.slug}
                  >
                    {menu.name}
                    <div
                      className={twMerge(
                        "border-b-4 py-3 border-transparent duration-300 -mx-2 group-hover:border-primary-green absolute inset-0",
                        activePathName[pathname] === menu.slug
                          ? "border-primary-green"
                          : ""
                      )}
                    ></div>
                  </Link>
                </li>
              );
            })}
          </ul>
          <ul className="flex justify-center">
            <li className="font-comfortaa text-white font-bold bg-red-500 rounded-full text-lg px-3 py-1 cursor-pointer hover:scale-125 duration-300">
              <Link href="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </div>
      )}
      <Tooltip>
        <TooltipTrigger asChild>
          <div
            className="fixed z-50 bottom-10 right-10 cursor-pointer hover:scale-125 duration-300"
            onClick={() => window.open("https://wa.me/628118168199", "_blank")}
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
    </nav>
  );
};

export default NavBar;
