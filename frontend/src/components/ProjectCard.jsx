import React from "react";

export default function ProjectCard({ project }) {
  return (
    <article className="bg-white border border-gray-200 shadow-sm hover:-translate-y-2 transition-transform p-6 rounded-2xl">
      <div className="space-y-3">
        <h2 className="text-2xl font-semibold text-gray-900">{project.title}</h2>
        <p className="text-gray-600">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium tracking-wide uppercase text-gray-500 border border-gray-200 rounded-full px-3 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
