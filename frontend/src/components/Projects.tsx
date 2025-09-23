"use client";

import { useEffect, useState } from "react";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
};

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    // Example data, you can fetch from API later
    setProjects([
      {
        id: 1,
        title: "Portfolio Website",
        description: "Personal portfolio built with Next.js, TailwindCSS, and TypeScript.",
        image: "https://placehold.co/600x400/1e293b/white?text=Project+1"
      },
      {
        id: 2,
        title: "E-Commerce App",
        description: "Fullstack MERN app with authentication and payments.",
        image: "https://placehold.co/600x400/1e293b/white?text=Project+2"
      },
    ]);
  }, []);

  return (
    <section className="py-16 bg-gray-900 text-white" id="projects">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform"
            >
              <img
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="object-cover w-full h-48"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-2 text-gray-400">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
