import Testimonials from "./Testimonials";
import { cacheLife } from "next/cache";

const TestimonialsFetching = async () => {
  "use cache";
  cacheLife("hours");

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/testimonials`);
  if (!res.ok) return null;
  const testimonials = await res.json();

  return <Testimonials images={testimonials} />;
};

export default TestimonialsFetching;
