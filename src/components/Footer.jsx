import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="relative bg-background-secondary  text-text text-center py-10 px-6 overflow-hidden tracking-wide md:px-0 md:justify-evenly">
      <Image src="/footerbg.jpg" alt="Footer Background" fill className="absolute top-0 left-0 w-full h-full object-cover -z-10" />

      <div className="flex gap-40 justify-center mt-10">
        <section className="flex flex-col md:items-start gap-15 mb-10 mt-2.5">
          <Image className="dark:invert" src="/Logo_main.svg" alt="Logo" width={228} height={54} />

          <div className="flex flex-col md:items-start">
            <h3 className="text-accent text-2xl font-medium tracking-wide">LOCATION</h3>
            <p className="text-lg font-normal leading-8 tracking-wide md:text-left">
              Kompagnistræde 278 <br /> 1265 Købehavn K
            </p>
          </div>

          <div className="flex flex-col md:items-start">
            <h3 className="text-accent text-2xl font-medium tracking-wide">OPENING HOURS</h3>
            <p className="text-lg font-normal leading-8 tracking-wide md:text-left max-w-64">
              WED - THU 10:30 PM TO 3 AM <br /> SAT - SUN: 11 PM TO 5 AM
            </p>
          </div>
        </section>

        <article className="hidden md:flex md:flex-row md:justify-center md:items-center md:gap-20 font-light">
          <section className="flex flex-col gap-15 mb-10 mt-2.5 items-start md:mt-0">
            <h3 className="text-accent text-2xl font-medium tracking-wide">NEWS</h3>
            <div className="flex gap-8">
              <Image src="/footerbg.jpg" alt="Footer Background" width={120} height={120} className="object-cover w-32 h-32" />

              <div className="flex flex-col gap-2 items-start">
                <p className="text-lg leading-8 tracking-wide max-w-[306px] text-left">Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
                <p className="text-accent tracking-wide font-medium">April 17, 2026</p>
              </div>
            </div>

            <div className="flex gap-8">
              <Image src="/footerbg.jpg" alt="Footer Background" width={120} height={120} className="object-cover w-32 h-32" />

              <div className="flex flex-col gap-2 items-start">
                <p className="text-lg leading-8 tracking-wide max-w-[306px] text-left">Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
                <p className="text-accent tracking-wide font-medium">April 17, 2026</p>
              </div>
            </div>
          </section>

          <section className="flex flex-col gap-15 mb-10 mt-2.5 items-start">
            <h3 className="text-accent text-2xl font-medium tracking-wide">RECENT POSTS</h3>
            <div className="flex gap-8">
              <FaXTwitter size={20} className="text-accent" />

              <div className="flex flex-col gap-2 items-start">
                <p className="text-lg leading-8 tracking-wide max-w-[360px] text-left">It is a long established fact that a reader will be distracted by the readable... </p>
                <p className="text-accent tracking-wide font-medium">5 hours ago</p>
              </div>
            </div>

            <div className="flex gap-8">
              <FaXTwitter size={20} className="text-accent" />

              <div className="flex flex-col gap-2 items-start">
                <p className="text-lg leading-8 tracking-wide max-w-[360px] text-left">It is a long established fact that a reader will be distracted by the readable... </p>
                <p className="text-accent tracking-wide font-medium">5 hours ago</p>
              </div>
            </div>
          </section>
        </article>
      </div>

      <div className="md:grid md:items-center md:justify-around md:mt-20">
        <section className="flex flex-col items-center gap-4 mb-15 mt-6 md:flex md:flex-col md:col-end-2 md:row-end-1">
          <h4 className="text-text text-lg font-medium tracking-wide">Stay Connected With Us</h4>
          <div className="flex gap-6 mt-1 mb-3">
            <Image src="/facebook.svg" alt="Facebook" width={48} height={48} />
            <Image src="/snapchat.svg" alt="Snapchat" width={48} height={48} />
            <Image src="/instagram.svg" alt="Instagram" width={48} height={48} />
          </div>
        </section>

        <div className="flex flex-col gap-2 md:col-end-1 md:row-end-1 md:flex md:flex-row">
          <p className="text-medium text-grey">Night Club</p>
          <span className="hidden md:block">-</span>
          <p className="text-medium text-grey">All Rights Reserved</p>
        </div>

        <p className="text-medium text-grey mt-8 md:col-end-3 md:row-end-1">Copyright © NightClub</p>
      </div>
    </footer>
  );
};

export default Footer;
