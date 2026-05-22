import EventDetails from "@/components/EventDetails";
import { Suspense } from "react";

async function EventSingle({ params }) {
  const { slug } = await params;

  return (
    <Suspense fallback={<p className="text-center text-lg font-light tracking-wide md:text-xl">Loading...</p>}>
      <EventDetails slug={slug} />
    </Suspense>
  );
}

export default EventSingle;
