"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export const GalleryCard = ({ img, description }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="relative w-[390px] h-[400px] ml-5 lg:h-[500px] overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image
        src={`${process.env.NEXT_PUBLIC_API_URL}${img.asset.url}`}
        alt={img.asset.alt}
        fill
        className="object-cover brightness-50"
        unoptimized
      />

      <motion.div
        className="hidden lg:block absolute top-0 left-0 w-15 h-15 bg-pink-500 [clip-path:polygon(0_0,100%_0,0_100%)] z-10"
        initial={{ opacity: 0, x: -10, y: -10 }}
        animate={{
          opacity: hovered ? 1 : 0,
          x: hovered ? 0 : -10,
          y: hovered ? 0 : -10,
        }}
        transition={{ duration: 0.3 }}
      />

      <motion.div
        className="hidden lg:block absolute bottom-0 right-0 w-15 h-20 bg-pink-500 [clip-path:polygon(100%_0,100%_100%,0_100%)] z-10"
        initial={{ opacity: 0, x: 10, y: 10 }}
        animate={{
          opacity: hovered ? 1 : 0,
          x: hovered ? 0 : 10,
          y: hovered ? 0 : 10,
        }}
        transition={{ duration: 0.3 }}
      />

      <motion.div
        className="hidden lg:flex absolute inset-0 items-end p-4 z-10"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <p className="text-white text-lg mb-6 ml-4 w-90 text-sm text-justify">
          {description}
        </p>
      </motion.div>
    </div>
  );
};

export const GalleryOne = ({ images, description = "" }) => {
  return (
    <div className="lg:ml-40 lg:mt-20 lg:mb-30">
      <div className="flex flex-col gap-5 w-[250px] lg:grid lg:grid-cols-3 lg:w-[1200px]">
        {images.slice(0, 3).map((img) => (
          <GalleryCard key={img.id} img={img} description={description} />
        ))}
      </div>
    </div>
  );
};
