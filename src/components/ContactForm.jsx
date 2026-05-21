"use client";
import Button from "@/components/Button";
import action from "@/app/action";
import Form from "next/form";
import { useActionState } from "react";

function ContactForm() {
  const [state, resAction, isPending] = useActionState(action, {
    message: "",
  });

  return (
    <div>
      {state && state.message && <div className={`p-4 mb-4 text-sm ${state.success ? "text-green-700 bg-green-100" : "text-red-700 bg-red-100"} rounded-lg md:max-w-176 md:justify-center md:mx-auto`}>{state.message}</div>}

      <Form action={resAction} className="flex flex-col gap-4 md:max-w-176 md:justify-center md:mx-auto">
        <input name="resname" type="text" placeholder="Your Name" className="border border-text pl-3 pr-3 pt-4.5 pb-4.5  w-full"></input>
        <input name="email" type="email" placeholder="Your Email" className="border border-text pl-3 pr-3 pt-4.5 pb-4.5  w-full"></input>
        <textarea name="content" type="text" placeholder="Your Comment" className="border border-text pl-3 pr-3 pt-4.5 pb-4.5  w-full h-85"></textarea>
        <div className="flex justify-end">
          <Button>{isPending ? "Sending..." : "Send"}</Button>
        </div>
      </Form>
    </div>
  );
}

export default ContactForm;
