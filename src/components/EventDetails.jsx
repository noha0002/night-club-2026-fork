import Heading from "@/components/Heading";
import Image from "next/image";
import Button from "@/components/Button";
import CommentForm from "@/components/CommentForm";
import Link from "next/link";
import { Suspense } from "react";
import Comments from "@/components/Comments";
import { cacheLife } from "next/cache";

async function getEvent(slug) {
  "use cache";
  cacheLife("hours");

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events?slug=${slug}`);
  const events = await res.json();
  return events[0];
}

async function EventDetails({ slug }) {
  const event = await getEvent(slug);

  if (!event) return <p>Event not found</p>;

  const eventId = event.id;

  return (
    <div className="">
      <Heading>{event.title}</Heading>

      <Image src={`${process.env.NEXT_PUBLIC_API_URL}${event.heroAsset.url}`} alt={event.heroAsset.alt} width={event.heroAsset.width} height={event.heroAsset.height} className="w-360 h-auto mt-10 md:justify-center md:mx-auto md:mt-20" />

      <main className="p-6 mt-4 mb-10 md:max-w-360 md:mx-auto">
        <section className="flex flex-col gap-15 mb-20">
          <div>
            <h2 className="uppercase text-2xl font-medium mb-4 md:text-4xl md:mt-10">{event.title}</h2>
            <p className="text-accent uppercase text-lg font-medium tracking-wide md:text-xl">
              {new Date(event.date).toLocaleDateString("en-GB", { month: "long", day: "numeric" })} · {new Date(event.date).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" })} | <span className="text-text">{event.location}</span>
            </p>

            <h3 className="font-medium pb-1.5 mt-6 md:text-lg">CATEGORY | {event.category}</h3>
            <p className="font-light tracking-wide md:text-lg md:max-w-xl">{event.excerpt}</p>

            <div>
              <h2 className="uppercase text-accent text-xl font-medium mb-4 mt-10">Event Content</h2>
              <p className="text-justify font-light tracking-wide md:text-lg">{event.content}</p>
            </div>
          </div>

          <div>
            <h3 className="uppercase text-xl font-medium tracking-wide pb-1.5 md:text-2xl">
              Doors Open · <span className="text-accent">{new Date(event.doorsOpen).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" })}</span>
            </h3>
            <p className="font-light tracking-wide md:text-lg md:max-w-4xl">{event.description}</p>
            <p className="font-medium mt-8 max-w-2xl tracking-wide md:text-xl">
              LINEUP | <span className="font-light md:text-lg">{event.lineup.join(", ")}</span>
            </p>
          </div>

          <div className="border-b border-t mt-5 md:ml-40 md:mr-40 md:border-b-2 md:border-t-2 md:mt-10">
            <h3 className="uppercase text-xl font-medium tracking-wide pb-2.5 pt-3 md:text-2xl md:pb-5 md:pt-6">Schedule</h3>
            <ul className="list-inside font-light tracking-wide md:text-lg">
              {event.schedule.map((item, index) => (
                <li key={index} className="pb-2 md:pb-6">
                  <span className="text-accent font-medium md:text-xl">{item.time}</span>
                  <br /> {item.label}
                </li>
              ))}
            </ul>

            <p className="text-accent text-xl flex justify-end md:text-3xl">{event.ageLimit}</p>
            <p className="text-2xl font-medium flex justify-end pb-2 md:text-3xl md:pb-6">{event.price}</p>
          </div>

          <div className="flex justify-center">
            <Link href={`/book-table?eventId=${event.id}`}>
              <Button>Book Now</Button>
            </Link>
          </div>
        </section>

        <Suspense fallback={<p>Loading comments...</p>}>
          <Comments eventId={eventId} />
        </Suspense>

        <section className="flex flex-col md:flex-none">
          <CommentForm eventId={eventId} />
        </section>
      </main>
    </div>
  );
}

export default EventDetails;
