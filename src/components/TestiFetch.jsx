"use server";
import Testimonials from "./Testimonials";

const TestimonialsFetching = async () => {
  const res = await fetch("http://localhost:4000/testimonials");
  const testimonials = await res.json();
  return <Testimonials images={testimonials} />;
};

export default TestimonialsFetching;
