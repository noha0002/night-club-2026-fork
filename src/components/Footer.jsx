import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative bg-background-secondary  text-text text-center py-10 px-6 overflow-hidden tracking-wide">
      <Image src="/footerbg.jpg" alt="Footer Background" fill className="absolute top-0 left-0 w-full h-full object-cover -z-10" />

      <section className="flex flex-col items-center gap-10 mb-10">
        <Image className="dark:invert" src="/Logo_main.svg" alt="Logo" width={228} height={54} />

        <div>
          <h3 className="text-accent text-2xl font-medium tracking-widest mb-2 pt-10">LOCATION</h3>
          <p className="text-lg leading-8 tracking-wide">
            Kompagnistræde 278 <br /> 1265 Købehavn K
          </p>
        </div>

        <div>
          <h3 className="text-accent text-2xl font-medium tracking-widest mb-2 pt-3">OPENING HOURS</h3>
          <p className="text-lg leading-8 tracking-wide">
            WED - THU 10:30 PM TO 3 AM <br /> SAT - SUN: 11 PM TO 5 AM
          </p>
        </div>
      </section>

      <section className="flex flex-col items-center gap-4 mb-10 mt-2.5">
        <h4 className="text-text text-lg font-medium tracking-wide pt-2.5 pb-2.5">Stay Connected With Us</h4>
        <div className="flex gap-4">
          <Image src="/facebook.svg" alt="Facebook" width={48} height={48} />
          <Image src="/snapchat.svg" alt="Snapchat" width={48} height={48} />
          <Image src="/instagram.svg" alt="Instagram" width={48} height={48} />
        </div>
      </section>

      <div className="text-medium text-grey flex flex-col gap-5 pb-1.5 pt-0.5">
        <p>Night Club • All Rights Reserved</p>
        <p>Copyright © NightClub</p>
      </div>
    </footer>
  );
};

export default Footer;
