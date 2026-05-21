"use client";
import Image from "next/image";

const GalleryImg = [
  {
    id: 1,
    img: "/assets/content-img/thumb1.jpg",
  },
  {
    id: 2,
    img: "/assets/content-img/reastaurant_1.jpg",
  },
  {
    id: 3,
    img: "/assets/content-img/thumb2.jpg",
  },
];

const GalleryOne = () => {
  return (
    <div className="lg:grid lg:grid-cols-3 lg:w-300 lg:mx-auto">
      {GalleryImg.map((Gallery) => (
        <div key={Gallery.id} className="relative h-[400px] mb-5 w-full h-[500px] lg:w-90 lg:h-96">
          <Image src={Gallery.img} alt="" fill className="object-cover " />
        </div>
      ))}
    </div>
  );
};

export default GalleryOne;
