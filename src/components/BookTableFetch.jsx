import BookTableClient from "./BookTableClient";

async function BookTableFetch({ searchParams }) {
  const {
    eventId /**Det kommer fra URL'ens query string, fx /book-table?eventId=123. Det er searchParams der læser denne værdi fra URL'en */,
  } = await searchParams; /**await skal få adgang til de faktiske værdier (fx eventId). */

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/events`,
  ); /** sendes videre til booking */
  const events = await res.json();

  const res2 = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/reservations`,
  ); /** sendes videre til booking opdateres i formularen */
  const reservations = await res2.json();

  return (
    <BookTableClient
      events={events}
      eventId={eventId}
      reservations={reservations}
    />
  );
}

export default BookTableFetch;
