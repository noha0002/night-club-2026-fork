import Gallery from "./Gallery";
import Slideshow from "./Slideshow";
import { cacheLife } from "next/cache";

const Fetching = async () => {
  "use cache";
  cacheLife("hours");

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events`);
    if (!res.ok) return null;
    const events = await res.json();

    const res1 = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/gallery`);
    if (!res1.ok) return null;
    const gallery = await res1.json();

    return (
      <>
        <Slideshow images={events} />
        <Gallery images={gallery} />
      </>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export default Fetching;
