"use client";
import React, { useState, useRef } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Image from "next/image";
import ButtonForside from "@/components/ButtonForside";

const Videos = [
  {
    id: 1,
    title: "Video 1",
    src: "/assets/media/video-crowd.mp4",
    cover: "/assets/content-img/video_poster.jpg",
  },
  {
    id: 2,
    title: "Video 2",
    src: "/assets/media/video-dj-crowd-2.mp4",
    cover: "/assets/content-img/video_poster.jpg",
  },
  {
    id: 3,
    title: "Video 3",
    src: "/assets/media/video-dj-crowd1.mp4",
    cover: "/assets/content-img/video_poster.jpg",
  },
];

const VideoSlide = () => {
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(null);
  const slideRef = useRef(null);

  return (
    <div className="slide-container lg:w-[950px] lg:mx-auto">
      <Slide ref={slideRef} arrows={false} autoplay={false} onChange={(from, to) => setCurrent(to)}>
        {Videos.map((video) => (
          <div key={video.id} className="relative h-[250px] w-full lg:h-[350px]">
            {(() => {
              if (playing === video.id) {
                return <video src={video.src} autoPlay controls className="w-full h-full object-cover" />;
              } else {
                return (
                  <>
                    <div className="absolute top-0 left-0 w-15 h-15 bg-accent [clip-path:polygon(0_0,100%_0,0_100%)] z-10"></div>
                    <div className="absolute bottom-0 right-0 w-15 h-15 bg-accent [clip-path:polygon(100%_0,100%_100%,0_100%)] z-10"></div>
                    <Image src={video.cover} alt={video.title} fill className="object-cover " />
                    <button onClick={() => setPlaying(video.id)} className="absolute inset-0 flex items-center justify-center text-white text-6xl">
                      ▶
                    </button>
                  </>
                );
              }
            })()}
          </div>
        ))}
      </Slide>

      {Videos.length > 1 && (
        <div className="flex justify-center gap-4 mt-4">
          <ButtonForside onClick={() => slideRef.current.goBack()}>◀</ButtonForside>
          <ButtonForside onClick={() => slideRef.current.goNext()}>▶</ButtonForside>
        </div>
      )}
    </div>
  );
};

export default VideoSlide;
