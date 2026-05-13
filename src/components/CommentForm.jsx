"use client";
import Button from "@/components/Button";

function CommentForm() {
  return (
    <form className="flex flex-col gap-4 md:grid md:col-end-2">
      <input placeholder="Your Name" name="name" className="border border-text pl-3 pr-3 pt-4.5 pb-4.5 w-full md:col-span-1 md:h-21.25"></input>

      <input placeholder="Your Email" name="email" className="border border-text pl-3 pr-3 pt-4.5 pb-4.5 w-full md:col-span-1 md:h-21.25"></input>

      <textarea placeholder="Your Comment" name="comment" className="border border-text pl-3 pr-3 pt-4.5 pb-4.5 w-full h-85 md:col-span-2 md:91.5"></textarea>

      <div className="flex justify-end md:col-span-2">
        <Button>Submit</Button>
      </div>
    </form>
  );
}

export default CommentForm;
