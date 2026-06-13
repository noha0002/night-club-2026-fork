"use client";
import Image from "next/image";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

// AI genereret kode (specifikt animationerne) med ellers manuelle justeringer.

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "EVENTS", href: "/events" },
  { name: "BOOK TABLE", href: "/book-table" },
  { name: "CONTACT US", href: "/contact-us" },
];



const WaveText = ({ text, color, variants }) => {
  /**
   * text → fx "EVENTS"
   * kommer fra props: <WaveText text={link.name} />
   * link.name kommer fra navLinks arrayet
   *
   * color → CSS klasse (fx "text-accent" eller "text-text") js-værdi derfor dollar tegn. 
   * variants → Framer Motion animation regler (rest / hover)
   */

  return (
    <motion.span
      className={`flex ${color}`}
      /**
       * flex → gør at bogstaver ligger på række
       * color → bestemmer farven på teksten
       */
    >
      {text.split("").map((char, i) => (
        /**
         * text.split("") → splitter ordet op i bogstaver
         * fx "EVENTS" → ["E", "V", "E", "N", "T", "S"]
         *
         * .map((char, i)) → går igennem hvert bogstav
         *
         * char = det nuværende bogstav (E, V, E, ...)
         * i = index (0, 1, 2, 3...)
         */

        <motion.span
          key={i}
          variants={variants}
          transition={{
            duration: 0.3,
            delay: i * 0.04,
            /**
             * delay gør at bogstaver animeres én efter én
             * så du får en "wave effect"
             */
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
          /** * Hvis tegnet er et mellemrum: * brug "non-breaking space"
          (\u00A0) * så det ikke forsvinder i layout */
        </motion.span>
      ))}
    </motion.span>
  );
}; /** Den får teksten til at animere bogstav for bogstav, når du hover over navigationens links.  */

const Header = () => {
  const pathname = usePathname(); // viser hvor brugeren er på hjemmesiden
  const ulRef =
    useRef(
      null,
    ); /** vores current state. så ref hjælper mig med at finde dom elementet så vi kan måle dets størrelse ved brug af getbounding */
  const [lineStyle, setLineStyle] = useState({ left: 0, width: 0, opacity: 0 });
  // const linestyle - bruges til at styre den animerede streg under navigationen./
  useEffect(() => {
    const popover = document.getElementById("menu-open");
    if (popover) {
      popover.hidePopover(); /** vil ikke have at burgermenu åbner i mobilsite, så vi skal lukke popover. */
    }
  }, [pathname]);

  const handleMouseEnter = (e) => {
    const ul = ulRef.current.getBoundingClientRect();

    /* ulRef.current → giver selve <ul> elementet (ikke data, bare elementet)

   * getBoundingClientRect() → måler position og størrelse på skærmen

   * (left, width, top osv.)

   */

    const li = e.currentTarget.getBoundingClientRect();
    /**

   * e.currentTarget → det <li> du hover over

   * getBoundingClientRect() → måler det links position og størrelse

   */
    setLineStyle({
      left: li.left - ul.left + 12,
      width: li.width - 24,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    if (ulRef.current) {
      const activeLink = ulRef.current.querySelector("[data-active='true']");
      /**

     * querySelector("[data-active='true']")

     * → finder det <li> som er markeret som aktivt (den side du er på)

     */

      if (activeLink) {
        const ul = ulRef.current.getBoundingClientRect(); /**

       * ulRef.current → selve <ul> elementet

       * getBoundingClientRect() → måler dets position og størrelse

       */

        const li = activeLink.getBoundingClientRect();
        /**

       * måler det aktive <li> (fx EVENTS)

       */
        setLineStyle({
          left: li.left - ul.left + 12,
          width: li.width - 24,
          opacity: 1,
        });
      } else {
        setLineStyle((prev) => ({ ...prev, opacity: 0 }));
        /**

       * hvis der ikke findes et aktivt link → skjul stregen

       */
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-background-secondary text-white p-6 flex items-center justify-between outline-2 outline-accent -outline-offset-2 md:h-31">
      <div className="absolute top-0 left-0 w-8 h-8 bg-accent [clip-path:polygon(0_0,100%_0,0_100%)]"></div>
      <div className="absolute bottom-0 right-0 w-8 h-8 bg-accent [clip-path:polygon(100%_0,100%_100%,0_100%)]"></div>

      <Image
        src="/assets/icon/Logo_main.svg"
        alt="Logo"
        width={189}
        height={46}
        className="md:hidden"
      />

      <button
        popoverTarget="menu-open" /** connected med asie, når man manuelt trykker på menu, åbner id. */
        className="flex flex-col gap-1.5 cursor-pointer md:hidden"
      >
        <span className="w-10 h-1 rounded bg-text block"></span>
        <span className="w-10 h-1 rounded bg-text block"></span>
        <span className="w-10 h-1 rounded bg-text block"></span>
      </button>

      <aside id="menu-open" popover="manual" /** manuelt trykker på den  */>
        <div className="fixed inset-0 flex items-center justify-center bg-background-secondary w-full h-full z-50">
          <button
            popoverTarget="menu-open"
            popoverTargetAction="hide"
            className="absolute top-5 right-5 text-text cursor-pointer"
          >
            <IoClose size={50} />
          </button>

          <ul className="flex flex-col gap-15 text-text text-center tracking-widest text-2xl font-normal">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      <div className="hidden md:flex md:items-center md:justify-around  w-full">
        <Image
          src="/assets/icon/Logo_main.svg"
          alt="Logo"
          width={189}
          height={46}
        />

        <ul
          ref={
            ulRef
          } /** Når React har lavet dette <ul>, så gemmes det i ulRef. useRef giver mig adgang til <ul>-elementet, så jeg kan bruge det senere til at måle og styre animationen. useState er til data (tal, strings, objekter, arrays. den bliver gemt i vores ulref.current */
          className="relative flex gap-15 font-normal md:text-2xl md:tracking-wider md:pb-4"
        >
          <span
            className="absolute bottom-0 h-0.5 [background:var(--linear-gradient)] transition-all duration-500"
            style={{
              left: lineStyle.left,
              width: lineStyle.width,
              opacity: lineStyle.opacity,
            }}
          />

          {navLinks.map(
            (
              link,
            ) => /** Gå igennem hvert link i arrayet og lav et <li> for hvert af dem  */ {
              const isActive = pathname === link.href; // tjekker om pathname matcher link adressen. Hvis jeg er på home (true) så er alle de andre links false viec verca
              return (
                <li
                  key={
                    link.href
                  } /** key er noget react bruger til at holde styr på elementer i en liste  */
                  data-active={isActive}
                  className="cursor-pointer"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <motion.div
                    initial="rest"
                    whileHover={isActive ? "rest" : "hover"}
                    animate="rest"
                  >
                    <Link
                      href={link.href}
                      className="relative flex flex-col  overflow-hidden h-[1.2em]"
                    >
                      <WaveText
                        text={link.name}
                        color={isActive ? "text-accent" : "text-text"}
                        variants={{
                          rest: { y: "0%" },
                          hover: { y: "-100%" },
                        }}
                      />

                      <WaveText
                        text={link.name}
                        color="text-accent absolute top-full left-0"
                        variants={{
                          rest: { y: "0%" },
                          hover: { y: "-100%" },
                        }}
                      />
                    </Link>
                  </motion.div>
                </li>
              );
            },
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;
