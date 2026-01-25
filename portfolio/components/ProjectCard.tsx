import Link from "next/link";
import { Project } from "@/content/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="block border rounded p-4 hover:shadow"
    >
      <h3 className="text-xl font-semibold">{project.title}</h3>
      <p className="text-sm text-gray-600">{project.description}</p>
    </Link>
  );
}
