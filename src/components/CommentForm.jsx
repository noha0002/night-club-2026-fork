"use client";
import Button from "@/components/Button";
import action3 from "@/app/action3";
import Form from "next/form";
import { useActionState } from "react";

function CommentForm({ eventId }) {
  const boundAction = action3.bind(null, eventId);
  const [state, resAction, isPending] = useActionState(boundAction, { message: "" });

  return (
    <div>
      <h1 className="uppercase text-3xl font-bold pb-8 mt-20">Leave a comment</h1>

      {state && state.message && <div className={`p-4 mb-4 text-sm ${state.success ? "text-green-700 bg-green-100" : "text-red-700 bg-red-100"} rounded-lg md:justify-center md:mx-auto`}>{state.message}</div>}

      <Form action={resAction} className="flex flex-col gap-4 md:grid md:col-end-2">
        <input placeholder="Your Name" name="name" className="border border-text pl-3 pr-3 pt-4.5 pb-4.5 w-full md:col-span-1 md:h-21.25" />

        <input placeholder="Your Email" name="email" className="border border-text pl-3 pr-3 pt-4.5 pb-4.5 w-full md:col-span-1 md:h-21.25" />

        <textarea placeholder="Your Comment" name="comment" className="border border-text pl-3 pr-3 pt-4.5 pb-4.5 w-full h-85 md:col-span-2 md:91.5"></textarea>

        <div className="flex justify-end md:col-span-2">
          <Button>{isPending ? "Submitting..." : "Submit"}</Button>
        </div>
      </Form>
    </div>
  );
}

export default CommentForm;
