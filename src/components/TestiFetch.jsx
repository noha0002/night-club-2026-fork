"use server";
import Testimonials from "./Testimonials";

const TestimonialsFetching = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/testimonials`);
  const testimonials = await res.json();
  return <Testimonials images={testimonials} />;
};

export default TestimonialsFetching;
