"use client";

import { useEffect } from "react";
import FooterComponent from "../footer";
import NavBar from "../navbar";
import { useSearchParams } from "next/navigation";
import BottomNavigation from "../bottom-navigation";
import useScreenSize from "@/hooks/useScreenSize";
import { cn } from "@/lib/utils";

const LayoutComponent = ({ children }: any) => {
  const searchParams = useSearchParams();
  const { breakpoint } = useScreenSize();
  const isBottomNavgation = true;

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash;
      if (hash) {
        const targetElement = document.querySelector(hash);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
          });
        }
      }
    }
  }, [searchParams]);

  return (
    <main>
      <NavBar isBottomNavgation={isBottomNavgation}></NavBar>
      {children}
      <div className={cn(isBottomNavgation ? "mb-16" : "m-0")}>
        <FooterComponent />
      </div>
      {isBottomNavgation && breakpoint === "sm" && <BottomNavigation />}
    </main>
  );
};

export default LayoutComponent;
