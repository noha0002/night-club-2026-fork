import Gallery from "./Gallery";
import Slideshow from "./Slideshow";
import { cacheLife } from "next/cache";

const Fetching = async () => {
  "use cache";
  cacheLife("hours");

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events`);
  const events = await res.json();
  const res1 = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/gallery`);
  const gallery = await res1.json();

  return (
    <>
      <Slideshow images={events} />
      <Gallery images={gallery} />
    </>
  );
};

export default Fetching;
