import Heading from "@/components/Heading";
import TableBooking from "@/components/TableBooking";
import BookForm from "@/components/BookForm";

function BookTable() {
  return (
    <div className="bg-background-tertiary">
      <Heading>Book a Table</Heading>

      <main className="p-6 mt-4 mb-10 md:mx-auto md:max-w-[1440px]">
        <TableBooking />
        <BookForm />
      </main>
    </div>
  );
}

export default BookTable;
