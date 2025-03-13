"use client";

import LayoutComponent from "@/components/layout";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { productsKnowledge } from "@/contants/product";

const ProductModule = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const scrollToSection = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 100);
      }
    };

    scrollToSection();
    window.addEventListener("hashchange", scrollToSection);

    return () => {
      window.removeEventListener("hashchange", scrollToSection);
    };
  }, [pathname, searchParams]);
  return (
    <LayoutComponent>
      <div className="bg-primary-blue">
        <motion.section
          className="md:h-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="relative flex flex-col h-full bg-green-white">
            <Image
              src="/assets/image/banner/BANNER-01.webp"
              width={1000}
              height={1000}
              alt="Logo"
              className="w-screen md:h-screen"
            />
          </div>
        </motion.section>
        {productsKnowledge.map((product) => (
          <motion.section
            key={product.id}
            id={product.name}
            className="h-auto md:h-screen grid grid-cols-1 md:grid-cols-2 pb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="flex flex-col w-full justify-center items-center p-5 md:p-20"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div>
                <h2 className="text-4xl font-semibold text-white mb-12">
                  {product.name}
                </h2>
                <p className="mb-4 text-white">{product.description}</p>
                <ul className="list-disc pl-5 text-gray-700">
                  {product.benefits.map((benefit, index) => (
                    <motion.li
                      className="text-white"
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                      {benefit}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
            <motion.div
              className="w-full flex justify-center items-center"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="w-[200px] h-[300px] md:w-2/3 md:h-2/3 relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="rounded-xl object-contain"
                />
              </div>
            </motion.div>
          </motion.section>
        ))}
      </div>
    </LayoutComponent>
  );
};

export default ProductModule;
