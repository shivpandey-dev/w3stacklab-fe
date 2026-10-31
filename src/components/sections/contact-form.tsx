"use client";

import { useState, type FormEvent } from "react";
import { serviceOptions } from "@/lib/content";

const field =
  "h-12 rounded-md border border-[#d6d6c4] bg-white px-3.5 font-normal";
const label = "flex flex-col gap-1.5 text-sm font-semibold";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO: send to the backend enquiry endpoint once it exists.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p
        role="status"
        className="m-0 min-w-0 flex-[2_1_480px] self-start rounded-lg border border-brand/30 bg-white p-6"
      >
        Thanks. I will reply within one working day.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex min-w-0 flex-[2_1_480px] flex-col gap-5"
    >
      <div className="flex flex-wrap gap-5">
        <label className={`${label} flex-[1_1_220px]`}>
          Name *
          <input
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
            className={field}
          />
        </label>
        <label className={`${label} flex-[1_1_220px]`}>
          Email *
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            className={field}
          />
        </label>
      </div>

      <div className="flex flex-wrap gap-5">
        <label className={`${label} flex-[1_1_220px]`}>
          Phone
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+91 00000 00000"
            className={field}
          />
        </label>
        <label className={`${label} flex-[1_1_220px]`}>
          I am looking for *
          <select name="service" required defaultValue="" className={field}>
            <option value="" disabled>
              Select a service
            </option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className={label}>
        Message *
        <textarea
          name="message"
          required
          rows={5}
          placeholder="What would you like to automate or build?"
          className="resize-y rounded-md border border-[#d6d6c4] bg-white px-3.5 py-3 font-normal"
        />
      </label>

      <label className="flex items-start gap-2.5 text-sm text-muted">
        <input
          type="checkbox"
          name="consent"
          required
          className="m-0 mt-px h-5 w-5 shrink-0 accent-brand"
        />
        <span>
          I agree to be contacted by W3 Stack Lab about my enquiry. See our{" "}
          <a href="#contact" className="font-semibold text-brand">
            Privacy Policy
          </a>
          .
        </span>
      </label>

      <button
        type="submit"
        className="btn-red h-[50px] cursor-pointer self-start rounded-md border-0 bg-brand px-8 text-base font-semibold text-white"
      >
        Send message
      </button>
    </form>
  );
}
