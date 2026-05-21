"use client";
import Image from "next/image";

const Gallery = ({ images = [] }) => {
  return (
    <div className="lg:grid lg:grid-cols-4">
      {images.map((image) => (
        <div key={image.id} className="relative h-[200px] lg:w-[400px]">
          <Image src={`http://localhost:4000${image.asset.url}`} alt={image.asset.alt} fill className="object-cover" unoptimized />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
