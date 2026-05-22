export const dynamic = "force-dynamic";

import EventDetails from "@/components/EventDetails";

async function EventSingle({ params }) {
  const { slug } = await params;

  return <EventDetails slug={slug} />;
}

export default EventSingle;
