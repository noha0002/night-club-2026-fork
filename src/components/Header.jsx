import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="relative bg-background-secondary text-white p-6 flex items-center justify-between border-t-4 border-b-4 border-accent">
      <div className="absolute top-0 left-0 w-8 h-8 bg-accent [clip-path:polygon(0_0,100%_0,0_100%)]"></div>
      <div className="absolute bottom-0 right-0 w-8 h-8 bg-accent [clip-path:polygon(100%_0,100%_100%,0_100%)]"></div>

      <Image src="/Logo_main.svg" alt="Logo" width={189} height={46} />

      <button className="flex flex-col gap-1.5 cursor-pointer md:hidden">
        <span className="w-10 h-1 rounded bg-text block"></span>
        <span className="w-10 h-1 rounded bg-text block"></span>
        <span className="w-10 h-1 rounded bg-text block"></span>
      </button>

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

// outline outline-2 outline-accent outline-offset-[-8px]
// border-t-4 border-b-4 border-accent
