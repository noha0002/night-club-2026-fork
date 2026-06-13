"use client";
import React, { useState, useRef } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Image from "next/image";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import ButtonForside from "./ButtonForside";

const songs = [
  {
    id: 1,
    title: "Black Box Funky",
    src: "/assets/media/black-box-funky.mp3",
    cover: "/assets/content-img/thumb1.jpg",
  },
  {
    id: 2,
    title: "Euphoria",
    src: "/assets/media/euphoria.mp3",
    cover: "/assets/content-img/thumb2.jpg",
  },
  {
    id: 3,
    title: "YOU BELONG WITH ME 2",
    src: "/assets/media/fashion-red-tape.mp3",
    cover: "/assets/content-img/reastaurant_1.jpg",
  },
];

const MusicPlayer = () => {
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(false);
  const slideRefMobile = useRef(null);
  const slideRefDesktop = useRef(null);
  const playerRefMobile = useRef(null);
  const playerRefDesktop = useRef(null);

  // const handlePlay = (playerRef) => {
  //   const audio = playerRef.current?.audio?.current;
  //   if (!audio) return;
  //   if (playing) {
  //     audio.pause();
  //     setPlaying(false);
  //   } else {
  //     audio.play();
  //     setPlaying(true);
  //   }
  // };

  const handleSelectAndPlay = (index, playerRef) => {
    /** index position i songs-array'et (0, 1, 2...) for den sang du klikkede på */
    setCurrent(
      index,
    ); /** setCurrent(index) gemmer den som den aktuelt valgte sang i state */
    setPlaying(false);
    setTimeout(() => {
      const audio =
        playerRef.current?.audio
          ?.current; /** Det betyder: "tag playerRef.current.audio.current, men hvis playerRef.current eller .audio er null/undefined, returner undefined i stedet for at give fejl" (optional chaining) */
      if (audio) {
        audio.play();
        setPlaying(true);
      }
    }, 100);
  };

  return (
    <div className="bg-black text-white lg:mx-20">
      {/* Mobil */}
      <div className="lg:hidden">
        <h2 className="text-white text-2xl font-bold text-center">
          {songs[current].title}
        </h2>
        <AudioPlayer
          ref={playerRefMobile}
          src={songs[current].src}
          autoPlay={false}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        />
        <div className="slide-container relative">
          <Slide
            ref={slideRefMobile}
            arrows={false}
            autoplay={false}
            onChange={(from, to) => {
              setCurrent(to);
              setPlaying(false);
            }}
          >
            {songs.map((song, index) => (
              <div
                key={song.id}
                className="relative h-[250px] w-full"
                onClick={() => handleSelectAndPlay(index, playerRefMobile)}
              >
                <Image
                  src={song.cover}
                  alt={song.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-0 left-0 w-15 h-15 bg-[#FF2A70] [clip-path:polygon(0_0,100%_0,0_100%)] z-10"></div>
                <div className="absolute bottom-0 right-0 w-15 h-15 bg-[#FF2A70] [clip-path:polygon(100%_0,100%_100%,0_100%)] z-10"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white text-6xl z-10 pointer-events-none">
                  {playing && current === index ? "⏸" : "▶"}
                </div>
              </div>
            ))}
          </Slide>
          <div className="flex justify-center gap-4 mt-4">
            <ButtonForside onClick={() => slideRefMobile.current.goBack()}>
              ◀
            </ButtonForside>
            <ButtonForside onClick={() => slideRefMobile.current.goNext()}>
              ▶
            </ButtonForside>
          </div>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden lg:block">
        <div className="flex">
          <div className="relative w-[300px] h-[200px]">
            <Image
              src={songs[current].cover}
              alt={songs[current].title}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center px-6">
            <h2 className="text-white text-2xl font-bold mb-4">
              {songs[current].title}
            </h2>
            <AudioPlayer
              ref={playerRefDesktop}
              src={songs[current].src}
              autoPlay={false}
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
            />
          </div>
        </div>

        <div className="slide-container relative mt-2">
          <Slide
            ref={slideRefDesktop}
            arrows={false}
            autoplay={false}
            slidesToShow={3}
            slidesToScroll={1}
            onChange={(from, to) => {
              setCurrent(to);
              setPlaying(false);
            }}
          >
            {songs.map((song, index) => (
              <div
                key={song.id}
                className="relative h-[180px] mx-1 cursor-pointer group"
                onClick={() => handleSelectAndPlay(index, playerRefDesktop)}
              >
                <Image
                  src={song.cover}
                  alt={song.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-0 left-0 w-15 h-15 bg-[#FF2A70] [clip-path:polygon(0_0,100%_0,0_100%)] z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 right-0 w-15 h-15 bg-[#FF2A70] [clip-path:polygon(100%_0,100%_100%,0_100%)] z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <span className="text-[#FF2A70] text-5xl border-2 border-[#FF2A70] rounded-full w-16 h-16 flex items-center justify-center">
                    {playing && current === index ? "⏸" : "▶"}
                  </span>
                </div>
                <p className="absolute bottom-2 left-2 text-white text-xs z-10">
                  {song.title.substring(0, 10)}...
                </p>
              </div>
            ))}
          </Slide>
          <div className="absolute z-20 lg:top-1/2 lg:right-[101%]">
            <ButtonForside onClick={() => slideRefDesktop.current.goBack()}>
              ◀
            </ButtonForside>
          </div>
          <div className="absolute z-20 lg:top-1/2 lg:left-[101%]">
            <ButtonForside onClick={() => slideRefDesktop.current.goNext()}>
              ▶
            </ButtonForside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
