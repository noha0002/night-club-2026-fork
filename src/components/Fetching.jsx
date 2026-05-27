"use server";
import Gallery from "./Gallery";
import { GalleryOne } from "./GalleryOne";
import Slideshow from "./Slideshow";
import Heading from "./Heading";
import { cacheLife } from "next/cache";

export async function getEvents() {
  "use cache";
  cacheLife("hours");
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events`);
  return res.json();
}

async function getEvents2() {
  "use cache";
  cacheLife("hours");
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events2`);
  return res.json();
}

async function getGallery() {
  "use cache";
  cacheLife("hours");
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/gallery`);
  return res.json();
}

const Fetching = async () => {
  const events = await getEvents();
  const gallery = await getGallery();
  console.log("test", events);
  return (
    <>
      <Heading>WELCOME IN NIGHTCLUB</Heading>
      <GalleryOne images={events} description={events[0]?.description} />
      <Heading>events of the month</Heading>
      <Slideshow images={events} />
      <Heading>night club gallery</Heading>
      <Gallery images={gallery} />
    </>
  );
};

export default Fetching;
