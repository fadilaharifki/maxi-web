"use client";

import LayoutComponent from "@/components/layout";
import Image from "next/image";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "220 ML",
    description:
      "Ukuran kecil yang praktis dan mudah dibawa. Cocok untuk konsumsi satu kali minum, acara pertemuan, seminar, atau perjalanan singkat.",
    image: "/assets/image/products/product4-removebg-preview.png",
    benefits: [
      "Kemasan ringkas, mudah dibawa",
      "Ideal untuk konsumsi sekali minum",
      "Aman dan higienis",
    ],
  },
  {
    id: 2,
    name: "330 ML, 600 ML, 750 ML",
    description:
      "Ukuran yang pas untuk aktivitas sehari-hari. Cocok bagi yang aktif dan membutuhkan hidrasi lebih lama saat bekerja, olahraga, atau bepergian.",
    image: "/assets/image/products/product5-removebg-preview.png",
    benefits: [
      "Ukuran ideal untuk dibawa ke kantor, sekolah, atau olahraga",
      "Botol ergonomis yang nyaman digenggam",
      "Menyediakan hidrasi yang cukup untuk waktu lebih lama",
    ],
  },
  {
    id: 3,
    name: "Galon (19L)",
    description:
      "Pilihan ekonomis untuk kebutuhan rumah tangga, kantor, dan usaha. Dilengkapi tutup segel untuk menjaga kebersihan dan kualitas air.",
    image: "/assets/image/products/product10-removebg-preview.png",
    benefits: [
      "Kapasitas besar untuk penggunaan jangka panjang",
      "Hemat dan lebih ramah lingkungan",
      "Cocok untuk dispenser di rumah dan kantor",
    ],
  },
];

const ProductModule = () => {
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
        {products.map((product) => (
          <motion.section
            key={product.id}
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
