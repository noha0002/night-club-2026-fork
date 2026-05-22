import { Suspense } from "react";
import EventDetails from "@/components/EventDetails";

export default function EventSingle({ params }) {
  const { slug } = params;

  return (
    <Suspense fallback={<p className="text-center text-lg font-light tracking-wide md:text-xl">Loading...</p>}>
      <EventDetails slug={slug} />
    </Suspense>
  );
}
