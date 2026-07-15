"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { projectsQuery } from "@/sanity/lib/queries";

type Project = {
  _id: string;
  title: string;
  tag: string;
  description: string;
  href?: string;
  image?: string;
};

const hardcodedProjects: Project[] = [
  {
    _id: "h1",
    image: "/communityplanting.png",
    title: "Community Tree Planting",
    tag: "Ongoing",
    description:
      "Organizing tree planting events in schools, parks, and neighborhoods.",
    href: "/projects/community-planting",
  },
  {
    _id: "h2",
    image: "/school-green.jpg",
    title: "School Green Programs",
    tag: "Education",
    description:
      "Teaching the next generation about environmental responsibility and tree care.",
    href: "/projects/school-programs",
  },
  {
    _id: "h3",
    image: "/education.jpeg",
    title: "Volunteer Initiatives",
    tag: "Community",
    description:
      "Mobilizing volunteers and youth groups to drive grassroots environmental action.",
    href: "/projects/volunteer-initiatives",
  },
];

export default function ProjectsGrid() {
  const [projects, setProjects] = useState<Project[]>(hardcodedProjects);

  useEffect(() => {
    client.fetch(projectsQuery).then((data) => {
      const sanityProjects = (data || []).map((p: any) => ({
        _id: p._id,
        image: p.image,
        title: p.title,
        tag: p.tag,
        description: p.description,
        href: p.href || "/projects",
      }));
      setProjects([...hardcodedProjects, ...sanityProjects]);
    });
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
      {projects.map((p) => (
        <Link
          key={p._id}
          href={p.href || "/projects"}
          className="border border-gray-100 rounded-2xl overflow-hidden no-underline hover:-translate-y-1 hover:shadow-md transition-all duration-200 block group h-full"
        >
          <div className="relative h-40 sm:h-44 w-full overflow-hidden bg-gray-100">
            {p.image && (
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
          <div className="p-5 sm:p-6">
            <span className="bg-forest-mist text-forest-dark text-[11px] px-3 py-1 rounded-full uppercase tracking-wider font-medium">
              {p.tag}
            </span>
            <h3 className="text-base sm:text-lg font-bold text-forest-dark mt-3 mb-2">
              {p.title}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              {p.description}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
