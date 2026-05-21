"use server";
import Gallery from "./Gallery";
import Slideshow from "./Slideshow";

const Fetching = async () => {
  const res = await fetch("http://localhost:4000/events");
  const events = await res.json();

  const res1 = await fetch("http://localhost:4000/gallery");
  const gallery = await res1.json();

  return (
    <>
      <Slideshow images={events} />
      <Gallery images={gallery} />
    </>
  );
};

export default Fetching;
