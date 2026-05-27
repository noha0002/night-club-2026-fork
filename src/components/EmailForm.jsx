"use client";
import Form from "next/form";
import action4 from "@/app/action4";
import { useActionState } from "react";
import Button from "./Button";

const EmailForm = () => {
  const [state, resAction, isPending] = useActionState(action4, {
    message: "",
  });

  return (
    <div>
      {state && state.message && (
        <div
          className={`p-4 mb-4 text-sm ${state.success ? "text-green-700 bg-green-100" : "text-red-700 bg-red-100"} rounded-lg`}
        >
          {state.message}
        </div>
      )}
      <Form
        action={resAction}
        className="mx-8 mt-8 flex flex-col lg:flex-row items-center gap-8"
      >
        <input
          name="email"
          type="email"
          placeholder="Enter Your Email"
          className="bg-transparent border-b border-white text-white placeholder-white w-80 py-2 outline-none"
        />

        <Button>{isPending ? "Subscribing..." : "SUBSCRIBE"}</Button>
      </Form>
    </div>
  );
};

export default EmailForm;
