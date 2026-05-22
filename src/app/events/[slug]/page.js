// AI FORSLAG

import { Suspense } from "react";
import EventDetails from "@/components/EventDetails";

async function EventContent({ params }) {
  const { slug } = await params;
  return <EventDetails slug={slug} />;
}

export default async function EventSingle({ params }) {
  // const { slug } = await params;

  return (
    <Suspense fallback={<p className="text-center text-lg font-light tracking-wide md:text-xl">Loading...</p>}>
      <EventContent params={params} />
    </Suspense>
  );
}
