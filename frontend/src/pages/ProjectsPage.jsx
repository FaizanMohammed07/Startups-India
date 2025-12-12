import React from "react";
import ProjectCard from "../components/ProjectCard";

const projectMock = [
  {
    id: 1,
    title: "Portfolio Rebrand",
    description:
      "A minimal, interactive site showcasing Ravi's ventures across startups and arts.",
    tags: ["React", "Tailwind", "Storytelling"],
  },
  {
    id: 2,
    title: "Mentor Network",
    description:
      "Platform that captures mentoring milestones, mentor-mentee pairings, and success stories.",
    tags: ["Community", "Curation", "Growth"],
  },
];

export default function ProjectsPage() {
  if (!projectMock.length) {
    return <p className="text-center text-gray-500">Projects are loading…</p>;
  }

  return (
    <section className="space-y-6">
      <header>
        <p className="text-sm uppercase tracking-[0.6em] text-gray-400">
          Select work
        </p>
        <h1 className="text-3xl font-semibold text-gray-900">Projects</h1>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {projectMock.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
