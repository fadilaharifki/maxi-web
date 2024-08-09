import { toTitleCase } from "@/lib/utils";
import { HeartIcon } from "lucide-react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { DialogComponent } from "../dialog";
import { useEffect, useState } from "react";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Button } from "../ui/button";
import useParamsHook from "@/hooks/useParamsHook";
import { AllProduct } from "@/contants/product";

interface CardComponentInterface {
  classNameImage?: string;
  isBestSeller?: boolean;
  isLike?: boolean;
  classNameContainer?: string;
  productName?: string;
  price?: string;
  codeCurrency?: string;
  description?: string;
  category?: string;
  onDetail?: () => void;
  images?: string[];
}

const CardComponent = ({
  classNameImage,
  classNameContainer,
  isBestSeller,
  isLike,
  productName,
  price,
  codeCurrency,
  description,
  category,
  images,
  onDetail = () => {},
}: CardComponentInterface) => {
  return (
    <div
      className={twMerge(
        "bg-white rounded-2xl shadow-lg overflow-hidden mx-auto cursor-pointer",
        classNameContainer
      )}
      onClick={() => {
        onDetail();
      }}
    >
      <div className="relative">
        <Image
          src={images?.[0] ?? "/assets/image/products/palm-sugar.png"}
          alt="Product Image"
          width={400}
          height={300}
          className={twMerge(
            "object-cover w-full h-72 rounded-t-2xl",
            classNameImage
          )}
        />
        {isLike && (
          <div className="absolute top-4 left-4 bg-white rounded-full p-2">
            <HeartIcon className="w-5 h-5 text-pink-500" />
          </div>
        )}

        {isBestSeller && (
          <div className="absolute top-4 right-4 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            Finest Product
          </div>
        )}
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold leading-none text-gray-800 font-comfortaa">
          {productName}
        </h2>

        {category && (
          <span className="text-xs font-comfortaa">
            {toTitleCase(category)}
          </span>
        )}

        {price && (
          <div className="flex items-center mt-2">
            <div className="bg-black rounded-full px-2">
              <span className="text-xl font-bold text-white">{price}</span>
              <span className="text-sm text-gray-200 ml-1">{codeCurrency}</span>
            </div>
          </div>
        )}

        {description && (
          <p className="text-gray-500 mt-4 text-sm font-comfortaa line-clamp-3">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default CardComponent;
