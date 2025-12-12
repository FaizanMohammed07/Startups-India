import React, { useEffect, useState } from "react";

const lines = [
  "Entrepreneur",
  "Ecosystem Builder",
  "Writer",
  "Mentor",
  "Community Builder",
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const typingSpeed = 60;

  // typing effect for current line
  useEffect(() => {
    setDisplay("");
    let i = 0;
    const chars = lines[index].split("");
    const t = setInterval(() => {
      setDisplay((prev) => prev + chars[i]);
      i++;
      if (i >= chars.length) clearInterval(t);
    }, typingSpeed);
    const timer = setTimeout(() => {
      // after showing full line, pause then go next
      setTimeout(() => setIndex((index + 1) % lines.length), 1400);
    }, chars.length * typingSpeed);
    return () => {
      clearInterval(t);
      clearTimeout(timer);
    };
  }, [index]);

  return (
    <section className="pt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Hello, I’m <span className="text-accent">Ravi Tilekar</span>.
          </h1>
          <p className="mt-4 text-xl text-[var(--muted)]">
            <span className="fade-up inline-block">{display}</span>
            <span className="caret" />
          </p>

          <div className="mt-6 flex gap-4">
            <a href="#projects" className="px-5 py-3 border rounded shadow-sm">
              View My Work
            </a>
            <a
              href="/Ravi_Tilekar_CV.pdf"
              className="px-5 py-3 bg-accent text-white rounded"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="w-full h-64 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
            <div className="text-center text-[var(--muted)]">
              [Feature image / hero visual placeholder]
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
