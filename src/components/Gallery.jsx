"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Gallery = ({ images = [] }) => {
  return (
    <div className="lg:grid lg:grid-cols-4">
      {images.map((image) => (
        <motion.div
          key={image.id}
          className="relative h-[200px] lg:w-[400px]"
          initial={{ opacity: 0, x: -90 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "linear" }}
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_API_URL}${image.asset.url}`}
            alt={image.asset.alt}
            fill
            className="object-cover"
            unoptimized
          />
        </motion.div>
      ))}
    </div>
  );
};

export default Gallery;
