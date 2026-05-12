"use client";
import Image from "next/image";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { useState, useRef } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "EVENTS", href: "/events" },
  { name: "BOOK TABLE", href: "/book-table" },
  { name: "CONTACT US", href: "/contact-us" },
];

const Header = () => {
  const pathname = usePathname();
  const ulRef = useRef(null);
  const [lineStyle, setLineStyle] = useState({ left: 0, width: 0, opacity: 0 });

  const handleMouseEnter = (e) => {
    const ul = ulRef.current.getBoundingClientRect();
    const li = e.currentTarget.getBoundingClientRect();
    setLineStyle({
      left: li.left - ul.left,
      width: li.width,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    setLineStyle((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <header className="sticky top-0 z-50 relative bg-background-secondary text-white p-6 flex items-center justify-between outline outline-3 outline-accent outline-offset-[-2px]">
      <div className="absolute top-0 left-0 w-8 h-8 bg-accent [clip-path:polygon(0_0,100%_0,0_100%)]"></div>
      <div className="absolute bottom-0 right-0 w-8 h-8 bg-accent [clip-path:polygon(100%_0,100%_100%,0_100%)]"></div>
      <Image src="/Logo_main.svg" alt="Logo" width={189} height={46} className="md:hidden" />

      <button popoverTarget="menu-open" className="flex flex-col gap-1.5 cursor-pointer md:hidden">
        <span className="w-10 h-1 rounded bg-text block"></span>
        <span className="w-10 h-1 rounded bg-text block"></span>
        <span className="w-10 h-1 rounded bg-text block"></span>
      </button>

      <aside id="menu-open" popover="manual">
        <div className="fixed inset-0 flex items-center justify-center bg-background-secondary w-full h-full z-50">
          <button popoverTarget="menu-open" popoverTargetAction="hide" className="absolute top-5 right-5 text-text cursor-pointer">
            <IoClose size={50} />
          </button>

          <ul className="flex flex-col gap-15 text-text text-center tracking-widest text-2xl font-normal">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
            {/* <li>
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
            </li> */}
          </ul>
        </div>
      </aside>

      <div className="hidden md:flex md:items-center md:justify-around  w-full">
        <Image src="/Logo_main.svg" alt="Logo" width={189} height={46} />
        <ul ref={ulRef} className="relative flex gap-15 font-normal md:text-2xl md:tracking-wider">
          <span className="absolute bottom-0 h-0.5 [background:var(--linear-gradient)] transition-all duration-300" style={{ left: lineStyle.left, width: lineStyle.width, opacity: lineStyle.opacity }} />

          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href} className="overflow-hidden cursor-pointer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <motion.div initial="rest" whileHover="hover" animate="rest">
                  <Link href={link.href} className="relative flex flex-col group">
                    <motion.span
                      className={isActive ? "text-accent" : "text-text"}
                      variants={{
                        rest: { y: "0%" },
                        hover: { y: "-100%" },
                      }}
                      initial="rest"
                      whileHover="hover"
                      animate="rest"
                      transition={{ duration: 0.1 }}
                    >
                      {link.name}
                    </motion.span>

                    <motion.span
                      className="absolute top-full text-accent"
                      variants={{
                        rest: { y: "0%" },
                        hover: { y: "-100%" },
                      }}
                      initial="rest"
                      whileHover="hover"
                      animate="rest"
                      transition={{ duration: 0.3 }}
                    >
                      {link.name}
                    </motion.span>
                  </Link>
                </motion.div>

                {/* <span className={`h-0.5 w-full [background:var(--linear-gradient)] mt-1 transition-all duration-300 ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`} /> */}
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
};

export default Header;

// <aside id="menu-open" popover="manual">
//         <div className="fixed inset-0 flex items-center justify-center bg-background-secondary w-full h-full z-50">
//           <button popoverTarget="menu-open" popoverTargetAction="hide" className="absolute top-5 right-5 text-text cursor-pointer">
//             <IoClose size={50} />
//           </button>

//           <ul className="flex flex-col gap-15 text-text text-center tracking-widest text-2xl font-normal">
//             <li>
//               <Link href={"/"}>HOME</Link>
//             </li>
//             <li>
//               <Link href={"/events"}>EVENTS</Link>
//             </li>
//             <li>
//               <Link href={"/book-table"}>BOOK TABLE</Link>
//             </li>
//             <li>
//               <Link href={"/contact-us"}>CONTACT US</Link>
//             </li>
//           </ul>
//         </div>
//       </aside>

// //{" "}
//         <ul>
//           //{" "}
//           <li className="md:hover:text-accent">
//             // <Link href={"/"}>HOME</Link>
//             // <span className="hover:block hover:mx-auto hover:w-[100px] hover:h-0.5 [background:var(--linear-gradient)] mt-2"></span>
//             //{" "}
//           </li>
//           //{" "}
//           <li className="md:hover:text-accent">
//             // <Link href={"/events"}>EVENTS</Link>
//             //{" "}
//           </li>
//           //{" "}
//           <li className="md:hover:text-accent">
//             // <Link href={"/book-table"}>BOOK TABLE</Link>
//             //{" "}
//           </li>
//           //{" "}
//           <li className="md:hover:text-accent">
//             // <Link href={"/contact-us"}>CONTACT US</Link>
//             //{" "}
//           </li>
//           //{" "}
//         </ul>
