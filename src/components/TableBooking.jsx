"use client";
import Image from "next/image";

const tables = [
  { id: 1, img: "/table_1.png" },
  { id: 2, img: "/table_1.png" },
  { id: 3, img: "/table_2.png" },
  { id: 4, img: "/table_1.png" },
  { id: 5, img: "/table_3.png" },
  { id: 6, img: "/table_1.png" },
  { id: 7, img: "/table_1.png" },
  { id: 8, img: "/table_2.png" },
  { id: 9, img: "/table_1.png" },
  { id: 10, img: "/table_3.png" },
  { id: 11, img: "/table_1.png" },
  { id: 12, img: "/table_1.png" },
  { id: 13, img: "/table_2.png" },
  { id: 14, img: "/table_1.png" },
  { id: 15, img: "/table_3.png" },
];

const TableBooking = ({ selectedTable, onSelectTable }) => {
  return (
    <section className="flex flex-col gap-2 items-center justify-center mt-10 mb-15 md:grid md:grid-cols-5 md:gap-10">
      {tables.map((table) => (
        <div key={table.id} className={`relative cursor-pointer transition-all duration-200 ${selectedTable === table.id ? "opacity-70 outline-2 outline-accent" : "hover:opacity-70"}`} onClick={() => onSelectTable(table.id)}>
          <Image src={table.img} alt={`Table ${table.id}`} width={285} height={186} />
          <h2 className="absolute inset-0 flex items-center justify-center text-4xl">{table.id}</h2>
        </div>
      ))}
    </section>
  );
};

export default TableBooking;
