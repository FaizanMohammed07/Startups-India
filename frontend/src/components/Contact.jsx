import React, { useState } from "react";

export default function Contact() {
  const [s, setS] = useState("");
  return (
    <section id="contact" className="mt-12 mb-16">
      <h3 className="text-2xl font-semibold">Contact</h3>
      <p className="text-[var(--muted)] mt-3">
        For collaborations, speaking, or opportunities — reach out.
      </p>

      <form className="mt-6 max-w-xl">
        <input
          placeholder="Your name"
          className="w-full p-3 border rounded mb-3"
        />
        <input placeholder="Email" className="w-full p-3 border rounded mb-3" />
        <textarea
          placeholder="Message"
          rows="6"
          className="w-full p-3 border rounded mb-3"
        ></textarea>
        <button
          onClick={(e) => {
            e.preventDefault();
            setS("Thanks! (No backend configured)");
          }}
          className="px-5 py-3 bg-accent text-white rounded"
        >
          Send Message
        </button>
      </form>
      {s && <div className="mt-3 text-sm text-[var(--muted)]">{s}</div>}
    </section>
  );
}
