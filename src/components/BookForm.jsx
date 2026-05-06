"use client";
import Button from "@/components/Button";

function BookForm() {
  return (
    <div>
      <h1 className="uppercase text-3xl font-bold pb-8">Book a table</h1>

      <form className="flex flex-col gap-4">
        <input placeholder="Your Name" name="name" className="border border-text pl-3 pr-3 pt-4.5 pb-4.5 w-full"></input>

        <input placeholder="Your Email" name="email" className="border border-text pl-3 pr-3 pt-4.5 pb-4.5 w-full"></input>

        <input placeholder="Table Number" name="table-num" className="border border-text pl-3 pr-3 pt-4.5 pb-4.5 w-full"></input>

        <input placeholder="Number of Guests" name="num-of-guest" className="border border-text pl-3 pr-3 pt-4.5 pb-4.5 w-full"></input>

        <select name="choose-night" className=" bg-background-secondary border border-text pl-3 pr-3 pt-4.5 pb-4.5 w-full">
          <option value="" disabled selected>
            Choose Night
          </option>
          <option value="night1">NO CONTENT YET</option>
        </select>

        <input placeholder="Your Contact Number" name="contact-num" className="border border-text text-lg pl-3 pr-3 pt-4.5 pb-4.5 w-full"></input>

        <textarea placeholder="Your Comment" name="comment" className="border border-text pl-3 pr-3 pt-4.5 pb-4.5 w-full h-85"></textarea>

        <div className="flex justify-end">
          <Button>Reserve</Button>
        </div>
      </form>
    </div>
  );
}

export default BookForm;
