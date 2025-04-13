"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({
  data,
  title,
  description,
  footerDesc,
  tag,
}: {
  data: TimelineEntry[];
  title: string;
  description?: string;
  footerDesc?: string;
  tag?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full bg-white font-sans md:px-10" ref={containerRef}>
      <div className="max-w-7xl pt-10 md:pt-20 pb-2 md:pb-10 mx-auto px-4 md:px-8 lg:px-1">
        <h2 className="text-lg md:text-4xl mb-4 text-primary-blue font-bold max-w-4xl">
          {title}
        </h2>
        {description && (
          <p className="text-primary-blue  text-sm md:text-base max-w-sm">
            {description}
          </p>
        )}
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto">
        {data.map((item, index) => (
          <div
            key={index}
            className={twMerge(
              "flex justify-start md:gap-10",
              index === data.length - 1 ? "pb-10 md:pb-10" : "pb-10 md:pb-20"
            )}
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200  border border-neutral-300  p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-secondary-blue">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full ">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-secondary-blue">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200  to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
      {(footerDesc || tag) && (
        <div className="max-w-7xl pb-10 md:pb-20 mx-auto px-4 md:px-8 lg:px-1">
          {footerDesc && (
            <p className="text-primary-blue  text-sm md:text-base max-w-5xl">
              {footerDesc}
            </p>
          )}
          {tag && (
            <p className="text-primary-blue font-bold text-sm md:text-base max-w-5xl">
              {tag}
            </p>
          )}
        </div>
      )}
    </div>
  );
};
