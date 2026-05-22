export const dynamic = "force-dynamic";

import Image from "next/image";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import GalleryOne from "@/components/GalleryOne";
import Fetching from "@/components/Fetching";
import VideoSlide from "@/components/VideoSlide";
import MusicPlayer from "@/components/MusicPlayer";
import TestimonialsFetching from "@/components/TestiFetch";
console.log(process.env.NEXT_PUBLIC_API_URL);

export default function Home() {
  return (
    <div>
      <div className="relative w-full h-[800px]">
        <Image src="/assets/bg/header_bg_2.jpg" fill alt="gallery" className="brightness-50 object-cover" unoptimized />
        <div className="relative z-10 top-110 lg:top-80">
          <div className="absolute left-10">
            <h2 className="flex items-center font-medium text-6xl lg:ml-[350px] lg:text-9xl">
              N
              <Image src="/assets/icon/Favicon.svg" alt="Logo" className="invert -mx-2 lg:w-30" width={50} height={30} />
              <span>GHT</span>
              <span className="mx-2">CLUB</span>
            </h2>
            <Image src="/assets/bottom_line.png" alt="logo" width={850} height={130} className="lg:ml-[250px]" />
          </div>
          <div className="absolute top-25 left-8 grid grid-cols-2 gap-4 lg:ml-[560px] lg:mt-30 ">
            <Button ButtonText="VIEW EVENTS" />
            <Button ButtonText="BOOK TABLES" />
          </div>
        </div>
      </div>
      <div>
        <Heading>WELCOME IN NIGHTCLUB</Heading>
        <div className="mx-5 mt-5">
          <GalleryOne />
        </div>
        <Heading>events of the month</Heading>
        <Fetching />
      </div>
      <div>
        <Heading>night club track</Heading>
        <MusicPlayer />
        <Heading>LATEST VIDEO</Heading>
        <VideoSlide />
      </div>

      <TestimonialsFetching />
    </div>
  );
}
