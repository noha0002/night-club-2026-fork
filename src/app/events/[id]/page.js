import Heading from "@/components/Heading";
import Image from "next/image";
import Button from "@/components/Button";
import ContactForm from "@/components/ContactForm";

function EventDetails() {
  return (
    <div className="bg-background-secondary">
      <Heading>Neon Nights</Heading>

      <Image src="/footerbg.jpg" alt="Neon Nights Event" width={1440} height={615} className="w-full h-auto md:justify-center" />

      <main className="p-6 mt-4 mb-10 md:max-w-[1440px] md:mx-auto">
        <section className="flex flex-col gap-15 mb-20">
          <div>
            <h2 className="uppercase text-2xl font-medium mb-4 md:text-4xl">Neon Nights Grand Opening</h2>
            <p className="text-accent uppercase text-lg font-medium tracking-wide md:text-xl">
              MAY 9 · 21:00 | <span className="text-text">CENTER STAGE</span>
            </p>

            <h3 className="font-medium pb-1.5 mt-6 md:text-lg">CATEGORY | HOUSE</h3>
            <p className="font-light tracking-wide md:text-lg md:max-w-xl">A major opening night with house, live percussion, visuals, and a countdown show built to launch the new season.</p>
          </div>

          <div>
            <h3 className="uppercase text-xl font-medium tracking-wide pb-1.5 md:text-2xl">
              Doors Open · <span className="text-accent">19:30</span>
            </h3>
            <p className="font-light tracking-wide md:text-lg md:max-w-4xl">
              Night Club opens its doors again with an evening of house, visuals, and live percussion on the main stage. Guests can expect welcome drinks from 21:00, an upgraded lighting setup, and a program that builds toward a big countdown show at
              midnight.
            </p>
            <p className="font-medium mt-8 max-w-2xl tracking-wide md:text-xl">
              LINEUP | <span className="font-light md:text-lg">Mika Vale, Nora Lumen, Live percussion by Elias B</span>
            </p>
          </div>

          <div className="border-b-1 border-t-1 md:ml-40 md:mr-40 md:border-b-2 md:border-t-2">
            <h3 className="uppercase text-xl font-medium tracking-wide pb-1.5 pt-2.5 md:text-2xl md:pb-5 md:pt-5">Schedule</h3>
            <ul className="list-inside font-light tracking-wide md:text-lg">
              <li className="pb-2 md:pb-6">
                <span className="text-accent font-medium md:text-xl">21:00</span>
                <br />
                Doors and welcome drinks
              </li>
              <li className="pb-2 md:pb-6">
                <span className="text-accent font-medium md:text-xl">22:00</span>
                <br /> Warm-up house set
              </li>
              <li className="pb-2 md:pb-6">
                <span className="text-accent font-medium md:text-xl">00:00</span>
                <br /> Neon countdown show
              </li>
            </ul>

            <p className="text-accent text-xl flex justify-end md:text-3xl">18+</p>
            <p className="text-2xl font-medium flex justify-end pb-2 md:text-3xl md:pb-4">150 DKK</p>
          </div>

          <div className="flex justify-center">
            <Button>Book Now</Button>
          </div>
        </section>

        <h1 className="uppercase text-3xl font-bold md:[44px]">3 comments</h1>
        <section className="flex flex-col gap-8 mb-10">
          <div>
            <p className="font-medium tracking-wide mt-6 pb-2 md:text-2xl">
              John Doe · <span className="text-accent md:text-lg"> Posted 03 jan 2018</span>
            </p>
            <p className="font-light tracking-wide md:text-lg">
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in
              Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections.
            </p>
          </div>

          <div>
            <p className="font-medium tracking-wide mt-6 pb-2 md:text-2xl">
              John Doe · <span className="text-accent md:text-lg"> Posted 03 jan 2018</span>
            </p>
            <p className="font-light tracking-wide md:text-lg">
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in
              Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections.
            </p>
          </div>

          <div className="md:max-w-[1231px]">
            <p className="font-medium tracking-wide mt-6 pb-2 md:text-2xl">
              John Doe · <span className="text-accent md:text-lg"> Posted 03 jan 2018</span>
            </p>
            <p className="font-light tracking-wide md:text-lg">
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in
              Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections.
            </p>
          </div>
        </section>

        <h1 className="uppercase text-3xl font-bold pb-8 mt-20">Leave a comment</h1>
        <section className="flex flex-col">
          <ContactForm />
        </section>
      </main>
    </div>
  );
}

export default EventDetails;
