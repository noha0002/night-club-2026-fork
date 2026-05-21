"use client";
import React, { useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Image from "next/image";

const Slideshow = ({ images }) => {
  const [current, setCurrent] = useState(0);

  const getColor = (index) => {
    if (current === index) return "#FF2A70";
    return "white";
  };

  const slideProps = (slidesToShow) => ({
    arrows: false,
    autoplay: false,
    slidesToShow,
    slidesToScroll: 1,
    infinite: false,
    onChange: (from, to) => setCurrent(to),
    indicators: (index) => (
      <div
        style={{ backgroundColor: getColor(index) }}
        className="w-4 h-5 mx-1 inline-block cursor-pointer"
      />
    ),
  });

  const slides = images.map((slideImage, index) => (
    <div key={index} className="mx-2 group">
      <div className="relative h-[400px]">
        <Image
          src={`http://localhost:4000${slideImage.asset.url}`}
          alt={slideImage.asset.alt}
          fill
          className="object-cover brightness-50"
          unoptimized
        />
        <div className="absolute top-0 left-0 w-15 h-15 bg-pink-500 [clip-path:polygon(0_0,100%_0,0_100%)] z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute bottom-0 right-0 w-15 h-20 bg-pink-500 [clip-path:polygon(100%_0,100%_100%,0_100%)] z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-[#FF2A70] text-white px-6 py-2 font-bold uppercase">
            Book Now
          </button>
        </div>
        <div className="absolute bottom-5 left-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h2>{slideImage.title}</h2>
          <p>{slideImage.description}</p>
        </div>
        <div className="absolute bottom-0 w-full bg-pink-500 px-4 py-2 text-white lg:z-20">
          <h2>25 Dec 10:30 PM City Plaza, New York</h2>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="mb-5">
      <div className="lg:hidden slide-container">
        <Slide {...slideProps(1)}>{slides}</Slide>
      </div>
      <div className="hidden lg:block slide-container">
        <Slide {...slideProps(2)}>{slides}</Slide>
      </div>
    </div>
  );
};

export default Slideshow;
