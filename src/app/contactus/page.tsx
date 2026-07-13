"use client";
import { sendData } from "@/server/action";
import { error } from "console";
import { useActionState } from "react";

export default function contact() {
  
  const [state, formAction, isPending] = useActionState(sendData, null);
  console.log(state?.status)
  return (
    <div>
      <div className="max-w-150 w-full m-auto py-20">
        <form action={formAction} method="post">
          <div className="flex flex-col mb-3">
            <label htmlFor="text">Enter Your Name</label>
            <input
              className="border-b border-blue-400 focus-visible: outline-none"
              type="text"
              name="your-name"
              placeholder="Enter your name"
              defaultValue={state?.status === 'mail_sent' || state?.errors?.['your-name'] ? "" : state?.field?.['your-name'] as string}
            />

            <p className="">{state?.errors?.["your-name"]}</p>
          </div>
          <div className="flex flex-col mb-3">
            <label htmlFor="text">Enter Your Email</label>
            <input
              className="border-b border-blue-400 focus-visible: outline-none"
              type="email"
              name="your-email"
              placeholder="Enter your email"
              defaultValue={state?.status === "mail_sent" || state?.errors?.['your-email'] ? "" : state?.field?.["your-email"] as string}
            />
            <p className="">{state?.errors?.["your-email"]}</p>
          </div>
          <div className="flex flex-col mb-3">
            <label htmlFor="text">Enter Your Phone</label>
            <input
              className="border-b border-blue-400 focus-visible:outline-none"
              type="phone"
              name="your-tel"
              placeholder="Enter your phone"
              defaultValue={state?.status === "mail_sent" || state?.errors?.['your-tel'] ? "" : state?.field?.["your-tel"] as string}
            />
            <p className="">{state?.errors?.["your-tel"]}</p>
            <input type="hidden" name="_wpcf7_unit_tag" value={"48652ef"} />
          </div>
          <div>
            <button
              className="p-2 bg-blue-200 w-fit cursor-pointer"
              defaultValue="send"
              type="submit"
            >
              {isPending ? <p>Sending....</p> : <p>Send</p>}
            </button>
          </div>
        </form>
        <div className="">
          <p className="">{state?.message}</p>
        </div>
      </div>
    </div>
  );
}
