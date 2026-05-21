"use client";
import { useState } from "react";
import TableBooking from "@/components/TableBooking";
import BookForm from "@/components/BookForm";

function BookTableClient({ events, eventId }) {
  const [selectedTable, setSelectedTable] = useState(null);

  return (
    <div>
      <TableBooking selectedTable={selectedTable} onSelectTable={setSelectedTable} />
      <BookForm selectedTable={selectedTable} events={events} eventId={eventId} />
    </div>
  );
}

export default BookTableClient;
