"use client";

import { useEffect } from "react";
import FooterComponent from "../footer";
import NavBar from "../navbar";
import { useSearchParams } from "next/navigation";

const LayoutComponent = ({ children }: any) => {
  const searchParams = useSearchParams();

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
      <NavBar></NavBar>
      {children}
      <FooterComponent />
    </main>
  );
};

export default LayoutComponent;
