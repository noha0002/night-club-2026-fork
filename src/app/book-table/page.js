"use server";
export const dynamic = "force-dynamic";

import Heading from "@/components/Heading";
import BookTableClient from "@/components/BookTableClient";

async function BookTable({ searchParams }) {
  const { eventId } = await searchParams;

  // HUSK At ÆNDRE URL'EN
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events`, { cache: "no-store" });
  const events = await res.json();

  const res2 = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/reservations`, { cache: "no-store" });
  const reservations = await res2.json();

  return (
    <div className="">
      <Heading>Book Table</Heading>

      <main className="p-6 mt-4 mb-10 md:mx-auto md:max-w-360">
        <BookTableClient events={events} eventId={eventId} reservations={reservations} />
      </main>
    </div>
  );
}

export default BookTable;
