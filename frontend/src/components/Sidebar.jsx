import React from "react";
import { NavLink } from "react-router-dom";
import profile from "../assets/profile-placeholder.jpg"; // add your image to src/assets

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/writing", label: "Writing" },
  { to: "/journey", label: "Professional Journey" },
  { to: "/speaker", label: "Speaker" },
  { to: "/contact", label: "Contact" },
];

export default function Sidebar() {
  return (
    <aside className="w-72 hidden lg:flex flex-col items-center py-10 px-6 border-r border-gray-200 dark:border-gray-800 bg-[var(--bg)] sticky top-0 h-screen">
      <img
        src={profile}
        alt="Ravi Tilekar"
        className="w-36 h-36 object-cover rounded-full shadow-md mb-4"
      />
      <h2 className="text-xl font-semibold">Ravi Tilekar</h2>
      <p className="text-sm text-[var(--muted)] mt-1 text-center">
        Entrepreneur • Ecosystem Builder • Writer
      </p>

      <nav className="mt-8 w-full">
        <ul className="space-y-2">
          {links.map((li) => (
            <li key={li.to}>
              <NavLink
                to={li.to}
                className={({ isActive }) =>
                  `block py-2 px-3 rounded ${
                    isActive
                      ? "bg-accent/10 text-accent"
                      : "text-[var(--text)] hover:bg-gray-50 dark:hover:bg-gray-900"
                  }`
                }
              >
                {li.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-auto text-center">
        <div className="text-xs text-[var(--muted)]">Connect</div>
        <div className="flex gap-3 mt-3">
          <a href="#" aria-label="LinkedIn" className="text-sm">
            in
          </a>
          <a href="#" aria-label="Twitter" className="text-sm">
            tw
          </a>
          <a href="#" aria-label="Instagram" className="text-sm">
            ig
          </a>
        </div>
      </div>
    </aside>
  );
}
