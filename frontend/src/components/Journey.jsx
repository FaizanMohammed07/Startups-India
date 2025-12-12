import React from "react";

const items = [
  {
    year: "2023",
    title: "Founder - StartupsIndia",
    desc: "Established StartupsIndia to help founders.",
  },
  {
    year: "2022",
    title: "IEC Director",
    desc: "Led Innovation & Entrepreneurship Council projects.",
  },
];

export default function Journey() {
  return (
    <section id="journey" className="mt-12">
      <h3 className="text-2xl font-semibold">Professional Journey</h3>
      <div className="mt-6 space-y-6">
        {items.map((it, i) => (
          <div key={i} className="flex gap-4 items-start">
            <div className="w-20 text-sm font-medium">{it.year}</div>
            <div>
              <h4 className="font-semibold">{it.title}</h4>
              <p className="text-[var(--muted)] mt-1">{it.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
