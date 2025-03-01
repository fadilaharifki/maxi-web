"use client";

import { MenuIcon, PhoneIcon, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { twMerge } from "tailwind-merge";
import useScreenSize from "@/hooks/useScreenSize";
import { useState } from "react";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from "../ui/drawer";
import { Button } from "../ui/button";
import clsx from "clsx";

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
    {
      name: "About Us",
      slug: "/about-us",
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
          <div className="grid grid-cols-6 justify-around items-center py-3 fixed px-5 z-50 w-screen bg-white/70 backdrop-blur-md">
            <div
              onClick={() => {
                setOpen(!open);
              }}
              className="relative w-5 h-5 flex items-center justify-center"
            >
              <div
                className={twMerge(
                  "absolute transition-transform duration-300",
                  open ? "rotate-45 opacity-0" : "rotate-0 opacity-100"
                )}
              >
                <MenuIcon className="w-6 h-6" />
              </div>
              <div
                className={twMerge(
                  "absolute transition-transform duration-300",
                  open ? "rotate-0 opacity-100" : "-rotate-45 opacity-0"
                )}
              >
                <XIcon className="w-6 h-6" />
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
                  className="h-14 w-24"
                />
              </div>
            </div>
          </div>
          {open && (
            <Drawer direction="left" open={open} onOpenChange={setOpen}>
              <DrawerContent className="left-0 w-[80%] h-full rounded-none bg-white shadow-lg">
                <div className="mx-auto w-full max-w-sm">
                  <DrawerHeader>
                    <DrawerTitle className="flex justify-center">
                      <Image
                        src="/assets/image/logo.png"
                        width={1000}
                        height={1000}
                        alt="Logo"
                        className="h-20 w-36"
                      />
                    </DrawerTitle>
                  </DrawerHeader>
                  <nav className="px-4 space-y-1">
                    {menus.map((menu, index) => (
                      <Link key={index} href={menu.slug}>
                        <Button
                          variant="ghost"
                          className={clsx(
                            "w-full justify-start text-sm",
                            activePathName[pathname] === menu.slug
                              ? "text-primary-blue"
                              : "text-gray-900"
                          )}
                          onClick={() => setOpen(false)}
                        >
                          {menu.name}
                        </Button>
                      </Link>
                    ))}
                  </nav>
                </div>
              </DrawerContent>
            </Drawer>
          )}
        </>
      ) : (
        <div className="grid grid-cols-3 justify-around items-center py-3 fixed z-50 w-screen bg-white/70 backdrop-blur-md shadow-md">
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
              className="h-14 w-28"
            />
          </div>
          <ul className="flex justify-center gap-10">
            {menus.map((menu, idx) => {
              return (
                <li key={idx}>
                  <Link
                    className={twMerge(
                      "text-white cursor-pointer relative group",
                      activePathName[pathname] === menu.slug
                        ? "text-primary-blue"
                        : "text-gray-900"
                    )}
                    href={menu.slug}
                  >
                    {menu.name}
                    <div
                      className={twMerge(
                        "border-b-2 py-3 border-transparent duration-300 -mx-2 group-hover:border-primary-blue absolute inset-0",
                        activePathName[pathname] === menu.slug
                          ? "text-primary-blue border-b-2 py-3 border-primary-blue"
                          : "text-gray-900"
                      )}
                    ></div>
                  </Link>
                </li>
              );
            })}
          </ul>
          <ul className="flex justify-center">
            <li className=" text-white bg-primary-blue rounded-lg text-base px-3 py-1 cursor-pointer hover:scale-125 duration-300">
              <Link href="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </div>
      )}
      <Tooltip>
        <TooltipTrigger asChild>
          <div
            className="fixed z-50 bottom-10 right-10 cursor-pointer hover:scale-125 duration-300"
            onClick={() => window.open("https://wa.me/62811432844", "_blank")}
          >
            <div className="bg-gradient-to-tr from-blue-500 to-orange-500 rounded-full p-2">
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
