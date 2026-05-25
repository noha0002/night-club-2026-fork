"use client";
import Image from "next/image";

const tables = [
  { id: 1, img: "/assets/table/table_1.png" },
  { id: 2, img: "/assets/table/table_1.png" },
  { id: 3, img: "/assets/table/table_2.png" },
  { id: 4, img: "/assets/table/table_1.png" },
  { id: 5, img: "/assets/table/table_3.png" },
  { id: 6, img: "/assets/table/table_1.png" },
  { id: 7, img: "/assets/table/table_1.png" },
  { id: 8, img: "/assets/table/table_2.png" },
  { id: 9, img: "/assets/table/table_1.png" },
  { id: 10, img: "/assets/table/table_3.png" },
  { id: 11, img: "/assets/table/table_1.png" },
  { id: 12, img: "/assets/table/table_1.png" },
  { id: 13, img: "/assets/table/table_2.png" },
  { id: 14, img: "/assets/table/table_1.png" },
  { id: 15, img: "/assets/table/table_3.png" },
];

const TableBooking = ({ selectedTable, onSelectTable, bookedTables = [] }) => {
  return (
    <section className="flex flex-col gap-2 items-center justify-center mt-10 mb-15 md:grid md:grid-cols-5 md:gap-10">
      {tables.map((table) => {
        const isBooked = bookedTables.includes(table.id);

        return (
          <div
            key={table.id}
            className={`relative cursor-pointer transition-all duration-200 ${isBooked ? "opacity-50 cursor-not-allowed text-gray-700" : "cursor-pointer hover:opacity-70"} 
        
        ${selectedTable === table.id ? "opacity-70 outline-2 outline-accent" : ""}`}
            onClick={() => !isBooked && onSelectTable(table.id)}
          >
            <Image src={table.img} alt={`Table ${table.id}`} width={285} height={186} />
            <h2 className="absolute inset-0 flex items-center justify-center text-3xl">{table.id}</h2>
            {isBooked && <span className="absolute inset-0 flex items-center justify-center uppercase text-3xl font-black text-accent">Reserved</span>}
          </div>
        );
      })}
    </section>
  );
};

export default TableBooking;
