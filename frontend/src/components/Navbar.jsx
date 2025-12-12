import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);

  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-[var(--bg)]">
      <div className="flex items-center gap-4">
        <Link to="/" className="text-lg font-semibold">
          Ravi Tilekar
        </Link>
        <div className="text-sm text-[var(--muted)] hidden sm:block">
          Founder • Mentor • Speaker
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={() => setDark(!dark)}
          className="px-3 py-1 border rounded text-sm"
        >
          {dark ? "Light" : "Light Blue"}
        </button>
        <a
          href="/Ravi_Tilekar_CV.pdf"
          className="text-sm px-3 py-1 border rounded"
        >
          Download CV
        </a>
      </div>
    </header>
  );
}
