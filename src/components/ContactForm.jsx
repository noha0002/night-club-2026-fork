"use client";
import Button from "@/components/Button";

function ContactForm() {
  return (
    <form className="flex flex-col gap-4 md:max-w-176 md:justify-center md:mx-auto">
      <input placeholder="Your Name" name="name" className="border border-text pl-3 pr-3 pt-4.5 pb-4.5  w-full"></input>

      <input placeholder="Your Email" name="email" className="border border-text pl-3 pr-3 pt-4.5 pb-4.5  w-full"></input>

      <textarea placeholder="Your Comment" name="comment" className="border border-text pl-3 pr-3 pt-4.5 pb-4.5  w-full h-85"></textarea>

      <div className="flex justify-end">
        <Button>Send</Button>
      </div>
    </form>
  );
}

export default ContactForm;
