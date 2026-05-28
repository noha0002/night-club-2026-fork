"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Socials from "./Socials";

const customNames = ["DAN", "VICTORIA", "ALEX"];

const Testimonials = ({ images = [] }) => {
  const [current, setCurrent] = useState(0);

  const getColor = (index) => {
    if (current === index) return "#FF2A70";
    return "white";
  };

  return (
    <div>
      <Slide
        arrows={false}
        autoplay={false}
        onChange={(from, to) => setCurrent(to)}
        indicators={(index) => (
          <div
            style={{ backgroundColor: getColor(index) }}
            className="w-4 h-5 mx-1 inline-block cursor-pointer"
          />
        )}
      >
        {images.map((image, index) => (
          <div key={image.id} className="mt-10">
            <div className="relative h-[210px] w-[210px] mx-auto ">
              <Image
                src={`${process.env.NEXT_PUBLIC_API_URL}${image.asset.url}`}
                alt={image.asset.alt}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="flex flex-col items-center text-center">
              <br />
              <h2 className="font-bold ">{customNames[index]}</h2>
              <br />
              <p className="lg:w-200">{image.content}</p>
            </div>
            <Socials />
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Testimonials;
