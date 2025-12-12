import React from "react";

const posts = [
  {
    id: 1,
    title: "Poem: Dawn of Ideas",
    excerpt: "Short excerpt from the poem...",
  },
  { id: 2, title: "Shayari: Hustle & Heart", excerpt: "Short excerpt..." },
];

export default function Writing() {
  return (
    <section id="writing" className="mt-12">
      <h3 className="text-2xl font-semibold">Writing</h3>
      <div className="mt-4 space-y-3">
        {posts.map((p) => (
          <div
            key={p.id}
            className="p-3 border rounded hover:bg-gray-50 dark:hover:bg-gray-900 transition"
          >
            <h4 className="font-medium">{p.title}</h4>
            <p className="text-[var(--muted)] mt-1">{p.excerpt}</p>
            <a className="text-sm text-accent mt-2 inline-block" href="#">
              Read More →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
