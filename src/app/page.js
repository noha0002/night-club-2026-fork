import Image from "next/image";
import Link from "next/link";
import Heading from "@/components/Heading";
import Fetching from "@/components/Fetching";
import VideoSlide from "@/components/VideoSlide";
import MusicPlayer from "@/components/MusicPlayer";
import TestimonialsFetching from "@/components/TestiFetch";

import EmailForm from "@/components/EmailForm";
import { Suspense } from "react";

import ButtonHero from "@/components/ButtonHero";

export default function Home() {
  return (
    <div>
      <div className="relative w-full h-[800px]">
        <Image
          src="/assets/bg/header_bg_2.jpg"
          fill
          alt="gallery"
          className="brightness-50 object-cover"
          unoptimized
        />

        <div className="relative z-10 top-110 lg:top-80">
          <div className="absolute left-10">
            <h2 className="flex items-center font-medium text-6xl lg:ml-[350px] lg:text-9xl">
              N
              <Image
                src="/assets/icon/Favicon.svg"
                alt="Logo"
                className="invert -mx-2 lg:w-30"
                width={50}
                height={30}
              />
              <span>GHT</span>
              <span className="mx-2">CLUB</span>
            </h2>

            <Image
              src="/assets/bottom_line.png"
              alt="logo"
              width={850}
              height={130}
              className="lg:ml-[250px]"
            />
          </div>

          <div className="absolute top-25 left-20 grid grid-cols-2 gap-4 lg:ml-[530px] lg:mt-30">
            <Link href="/events">
              <ButtonHero
                style={{
                  borderImage: "linear-gradient(to left, #ffffffa1, #FFFFFF) 1",
                }}
                ButtonText="VIEW EVENTS"
              />
            </Link>
            <Link href="/book-table">
              <ButtonHero
                style={{
                  background: "linear-gradient(to right, #FF2A70, #9B3FBF)",
                  borderImage: "linear-gradient(to left, #ffffffba, #FFFFFF) 1",
                }}
                ButtonText="BOOK TABLES"
              />
            </Link>
          </div>
        </div>
      </div>

      <Suspense fallback={<p>Loading events...</p>}>
        <Fetching />
      </Suspense>

      <div>
        <Heading>night club track</Heading>
        <MusicPlayer />
        <Heading>LATEST VIDEO</Heading>
        <VideoSlide />
      </div>

      <Suspense fallback={<p>Loading testimonials...</p>}>
        <TestimonialsFetching />
      </Suspense>

      <div className="lg:ml-110 mt-15 mb-15">
        <div className="lg:mr-100 text-center">
          <h2 className="text-3xl font-bold uppercase">
            Want The Latest Night Club News
          </h2>
          <br />
          <p className="text-lg font-semibold">
            Subscribe to our newsletter <br /> and never miss an{" "}
            <span className="text-[#FF2A70]">Event</span>
          </p>
        </div>
        <EmailForm />
      </div>
    </div>
  );
}
