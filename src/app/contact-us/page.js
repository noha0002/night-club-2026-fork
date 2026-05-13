import Heading from "@/components/Heading";
import ContactForm from "@/components/ContactForm";

function Contact() {
  return (
    <div className="">
      <Heading>Contact us</Heading>

      <main className=" p-6 mt-4 mb-10 md:mt-15">
        <ContactForm />
      </main>
    </div>
  );
}

export default Contact;
