import Image from "next/image";
import ContactForm from "@/components/ContactForm";

function Contact() {
  return (
    <div className="bg-background-tertiary">
      <div className="relative flex items-center justify-center h-20 ">
        <Image src="/footerbg.jpg" alt="Footer Background" fill className="absolute w-full h-full object-cover -z-10" />

        <div>
          <h1 className="uppercase text-3xl font-medium tracking-widest text-center">contact us</h1>

          <span className="mx-auto w-[100px] h-0.5 block [background:var(--linear-gradient)]"></span>
        </div>
      </div>

      <main className=" p-6 mt-4 mb-10">
        <ContactForm />
      </main>
    </div>
  );
}

export default Contact;
