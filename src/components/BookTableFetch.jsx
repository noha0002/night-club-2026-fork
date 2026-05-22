import BookTableClient from "./BookTableClient";

async function BookTableFetch({ searchParams }) {
  const { eventId } = await searchParams;

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events`);
  const events = await res.json();

  const res2 = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/reservations`);
  const reservations = await res2.json();

  return <BookTableClient events={events} eventId={eventId} reservations={reservations} />;
}

export default BookTableFetch;
