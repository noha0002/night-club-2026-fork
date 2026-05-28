import Event from "@/components/EventImg";
import Heading from "@/components/Heading";
import Button from "@/components/Button";
import EvenTekst from "@/components/EventTekst";

async function getEvents() {
  "use cache";

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events`);
  return res.json();
}

export default async function EventsPage() {
  const events = await getEvents();
  console.log(events.map((e) => e.slug));

  return (
    <div>
      <Heading>Events</Heading>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:text-center mx-auto">
        <div className="order-1">
          <Event Img="/assets/content-img/blog_full1.jpg" alt="" />
        </div>
        <div className="order-2">
          <EvenTekst
            Title="Neon Nights Grand Opening"
            RedTekst="MAY 9 · 21:00  |  CENTER STAGE"
            Content="Night Club opens its doors again with an evening of house, visuals, and live percussion on the main stage. Guests can expect welcome drinks from 21:00, an upgraded lighting setup, and a program that builds toward a big countdown show at midnight."
          />
          <div className="flex justify-center">
            <a href={`/events/${events[0]?.slug}`}>
              <Button>Read more</Button>
            </a>
          </div>
        </div>
        <div className="order-4 lg:order-3">
          <EvenTekst
            Title="Retro Rewind: 80s & 90s"
            RedTekst="MAY 15 · 21:00  |  CENTER STAGE"
            Content="A full evening dedicated to classic floorfillers from the 80s and 90s. The DJ team mixes pop, disco, and old school R&B while the bar serves signature cocktails inspired by the biggest club hits of the era."
          />
          <div className="flex justify-center">
            <a href={`/events/${events[1]?.slug}`}>
              <Button>Read more</Button>
            </a>
          </div>
        </div>
        <div className="order-3 lg:order-4">
          <Event Img="/assets/content-img/blog_full2.jpg" alt="" />
        </div>
        <div className="order-5">
          <Event Img="/assets/content-img/blog_full3.jpg" alt="" />
        </div>
        <div className="order-6">
          <EvenTekst
            Title="More than 20 years of night club"
            RedTekst="MAY 22 · 21:00  |  CENTER STAGE"
            Content="Friday's program pushes tempo and sub-bass all the way up with guest DJs, an MC host, and a crowd that comes for heavy drops and a dark club atmosphere. The night is aimed at guests who want to get close to the stage and feel the sound physically."
          />
          <div className="flex justify-center">
            <a href={`/events/${events[2]?.slug}`}>
              <Button>Read more</Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
