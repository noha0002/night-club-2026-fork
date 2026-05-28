"use client";
import React, { useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Slideshow = ({ images }) => {
  const [current, setCurrent] = useState(0);

  const getColor = (Index) => {
    if (current === Index) return "#FF2A70";
    return "white";
  };

  const slideProps = (slidesToShow) => ({
    arrows: false,
    autoplay: false,
    slidesToShow,
    slidesToScroll: 1,
    infinite: false,
    onChange: (from, to) => setCurrent(to),
    indicators: (Index) => (
      <div
        style={{ backgroundColor: getColor(Index) }}
        className="w-4 h-5 mx-1 inline-block cursor-pointer"
      />
    ),
  });

  const SlideCard = ({ slideImage }) => {
    const [hovered, setHovered] = useState(false);

    return (
      <div
        className="relative h-[400px]"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Image
          src={`${process.env.NEXT_PUBLIC_API_URL}${slideImage.asset.url}`}
          alt={slideImage.asset.alt}
          fill
          className="object-cover brightness-50"
          unoptimized
        />
        <motion.div
          className="absolute top-0 left-0 w-15 h-15 bg-pink-500 [clip-path:polygon(0_0,100%_0,0_100%)] z-10"
          initial={{ opacity: 0, x: -10, y: -10 }}
          animate={{
            opacity: hovered ? 1 : 0,
            x: hovered ? 0 : -10,
            y: hovered ? 0 : -10,
          }}
          transition={{ duration: 0.3, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-15 h-20 bg-pink-500 [clip-path:polygon(100%_0,100%_100%,0_100%)] z-10"
          initial={{ opacity: 0, x: 10, y: 10 }}
          animate={{
            opacity: hovered ? 1 : 0,
            x: hovered ? 0 : 10,
            y: hovered ? 0 : 10,
          }}
          transition={{ duration: 0.3, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-0 flex items-center justify-center z-10"
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <Link href="book-table">
            <button className="bg-[#FF2A70] text-white px-6 py-2 font-bold uppercase cursor-pointer">
              Book Now
            </button>
          </Link>
        </motion.div>
        <motion.div
          className="absolute bottom-5 left-5 text-white z-1 bg-black"
          initial={{ opacity: 0, x: 0, y: 50 }}
          animate={{
            opacity: hovered ? 1 : 0,
            x: hovered ? 0 : 0,
            y: hovered ? 0 : 50,
          }}
          transition={{ duration: 0.2, ease: "easeIn" }}
        >
          <h2>{slideImage.title}</h2>
          <p>{slideImage.description}</p>
        </motion.div>
        <div className="absolute bottom-0 w-full bg-pink-500 px-4 py-2 text-white lg:z-20">
          <h2>25 Dec 10:30 PM City Plaza, New York</h2>
        </div>
      </div>
    );
  };

  const slides = images.map((slideImage, index) => (
    <div key={index} className="mx-2">
      <SlideCard slideImage={slideImage} />
    </div>
  ));

  return (
    <div className="mb-15 relative min-h-[480px] py-10">
      <Image
        src="/assets/bg/slider_bg_overlay.png"
        alt=""
        fill
        className="object-cover z-0"
      />
      <div className="lg:mx-20">
        <div className="lg:hidden slide-container z-10 relative">
          <Slide {...slideProps(1)}>{slides}</Slide>
        </div>
        <div className="hidden lg:block slide-container lg:mx-20 z-10 relative">
          <Slide {...slideProps(2)}>{slides}</Slide>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
