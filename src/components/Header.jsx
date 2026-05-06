"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 relative bg-background-secondary text-white p-6 flex items-center justify-between outline outline-3 outline-accent outline-offset-[-2px]">
      <div className="absolute top-0 left-0 w-8 h-8 bg-accent [clip-path:polygon(0_0,100%_0,0_100%)]"></div>
      <div className="absolute bottom-0 right-0 w-8 h-8 bg-accent [clip-path:polygon(100%_0,100%_100%,0_100%)]"></div>

      <Image src="/Logo_main.svg" alt="Logo" width={189} height={46} />

      {/* BURGER-MENU */}
      <button onClick={() => setIsOpen(true)} className="flex flex-col gap-1.5 cursor-pointer md:hidden">
        <span className="w-10 h-1 rounded bg-text block"></span>
        <span className="w-10 h-1 rounded bg-text block"></span>
        <span className="w-10 h-1 rounded bg-text block"></span>
      </button>

      {/* POPOVER */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-background-secondary w-full h-full z-50">
          {/* CLOSE */}
          <button onClick={() => setIsOpen(false)} className="absolute top-5 right-5 text-text cursor-pointer">
            <IoClose size={50} />
          </button>

          <ul className="flex flex-col gap-15 text-text text-center tracking-widest text-2xl font-normal">
            <li onClick={() => setIsOpen(false)}>
              <Link href={"/"}>HOME</Link>
            </li>
            <li onClick={() => setIsOpen(false)}>
              <Link href={"/events"}>EVENTS</Link>
            </li>
            <li onClick={() => setIsOpen(false)}>
              <Link href={"/book-table"}>BOOK TABLE</Link>
            </li>
            <li onClick={() => setIsOpen(false)}>
              <Link href={"/contact-us"}>CONTACT US</Link>
            </li>
          </ul>
        </div>
      )}

      <nav className="hidden md:flex">
        <ul className="flex gap-8 tracking-widest text-sm font-medium">
          <li>
            <Link href={"/"}>HOME</Link>
          </li>
          <li>
            <Link href={"/events"}>EVENTS</Link>
          </li>
          <li>
            <Link href={"/book-table"}>BOOK TABLE</Link>
          </li>
          <li>
            <Link href={"/contact-us"}>CONTACT US</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

// outline outline-2 outline-accent outline-offset-[-2px]
// border-t-2 border-b-2 border-accent

// POPOVER VERSION
// {
//   /* BURGER-MENU */
// }
// <button popovertarget="menu-open" className="flex flex-col gap-1.5 cursor-pointer md:hidden">
//   <span className="w-10 h-1 rounded bg-text block"></span>
//   <span className="w-10 h-1 rounded bg-text block"></span>
//   <span className="w-10 h-1 rounded bg-text block"></span>
// </button>;

// {
//   /* POPOVER */
// }
// <div id="menu-open" popover="auto" className="fixed inset-0 flex items-center justify-center bg-background-secondary w-full h-full z-50">
//   {/* CLOSE */}
//   <button popovertarget="menu-open" popovertargetaction="hide" className="absolute top-5 right-5 text-text cursor-pointer">
//     <IoClose size={50} />
//   </button>

//   <ul className="flex flex-col gap-15 text-text text-center tracking-widest text-2xl font-normal">
//     <li>
//       <Link href={"/"}>HOME</Link>
//     </li>
//     <li>
//       <Link href={"/events"}>EVENTS</Link>
//     </li>
//     <li>
//       <Link href={"/book-table"}>BOOK TABLE</Link>
//     </li>
//     <li>
//       <Link href={"/contact-us"}>CONTACT US</Link>
//     </li>
//   </ul>
// </div>;
