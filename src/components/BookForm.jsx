"use client";
import Button from "@/components/Button";

function BookForm() {
  return (
    <div className="md:mt-25">
      <h1 className="uppercase text-3xl font-bold pb-8 md:text-[44px]">Book a table</h1>

      <form className="flex flex-col gap-4 md:grid md:grid-cols-2 md:justify-center md:flex-none">
        <input placeholder="Your Name" name="name" className="border border-text pl-3 pr-3 pt-4.5 pb-4.5 w-full md:max-h-21.25"></input>

        <input placeholder="Your Email" name="email" className="border border-text pl-3 pr-3 pt-4.5 pb-4.5 w-full md:max-h-21.25"></input>

        <input placeholder="Table Number" name="table-num" className="border border-text pl-3 pr-3 pt-4.5 pb-4.5 w-full md:max-h-21.25"></input>

        <input placeholder="Number of Guests" name="num-of-guest" className="border border-text pl-3 pr-3 pt-4.5 pb-4.5 w-full md:max-h-21.25"></input>

        <select name="choose-night" defaultValue="" className=" bg-background-secondary border border-text pl-3 pr-3 pt-4.5 pb-4.5 w-full md:max-h-21.25">
          <option value="" disabled>
            Choose Night
          </option>
          <option value="night1">NO</option>
          <option value="night2">CONTENT</option>
          <option value="night3">YET</option>
        </select>

        <input placeholder="Your Contact Number" name="contact-num" className="border border-text text-lg pl-3 pr-3 pt-4.5 pb-4.5 w-full"></input>

        <textarea placeholder="Your Comment" name="comment" className="border border-text pl-3 pr-3 pt-4.5 pb-4.5 w-full h-8 md:col-span-2 md:h-90.75"></textarea>

        <div className="flex justify-end md:col-span-2">
          <Button>Reserve</Button>
        </div>
      </form>
    </div>
  );
}

export default BookForm;
// md:max-w-[1440px] md:h-[363px]
