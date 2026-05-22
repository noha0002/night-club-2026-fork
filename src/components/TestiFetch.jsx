"use server";
import Testimonials from "./Testimonials";
import { cacheLife } from "next/cache";

const TestimonialsFetching = async () => {
  "use cache";
  cacheLife("hours");

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/testimonials`);
  const testimonials = await res.json();
  return <Testimonials images={testimonials} />;
};

export default TestimonialsFetching;
