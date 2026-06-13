"use client";
import { useState } from "react";
import TableBooking from "@/components/TableBooking";
import BookForm from "@/components/BookForm";

function BookTableClient({ events, eventId, reservations }) {
  const [selectedTable, setSelectedTable] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(eventId || "");

  const bookedTables = reservations
    ? reservations
        .filter((r) => String(r.eventId) === String(selectedEvent))
        .map((r) => Number(r.table))
    : [];
  /** returnere som string da det er, det der skal bruges  */
  /**? her er en ternary (if/else): "hvis reservations findes, lav filter+map på den, ellers brug et tomt array []". Det forhindrer fejl hvis reservations er null/undefined. */
  return (
    <div>
      <TableBooking
        selectedTable={selectedTable}
        onSelectTable={setSelectedTable}
        bookedTables={bookedTables}
      />
      <BookForm
        selectedTable={selectedTable}
        events={events}
        eventId={selectedEvent}
        onEventChange={setSelectedEvent}
      />
    </div>
  );
}

export default BookTableClient;
