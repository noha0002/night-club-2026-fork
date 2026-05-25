import Heading from "@/components/Heading";
import { Suspense } from "react";
import BookTableFetch from "@/components/BookTableFetch";

async function BookTable({ searchParams }) {
  return (
    <div className="">
      <Heading>Book Table</Heading>

      <main className="p-6 mt-4 mb-10 md:mx-auto md:max-w-360">
        <Suspense fallback={<p className="text-center text-lg font-light tracking-wide md:text-xl">Loading...</p>}>
          <BookTableFetch searchParams={searchParams} />
        </Suspense>
      </main>
    </div>
  );
}

export default BookTable;
