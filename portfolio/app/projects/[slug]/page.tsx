import { projects } from "@/content/projects";
import { notFound } from "next/navigation";

export default async function ProjectPage(
  props: PageProps<"/projects/[slug]">,
) {
  const { slug } = await props.params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <main className="max-w-3xl mx-auto px-6">
      <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
      <p className="mb-4">{project.description}</p>
      <ul className="flex gap-2 flex-wrap">
        {project.stack.map((tech) => (
          <li key={tech} className="px-2 py-1 bg-gray-100 rounded">
            {tech}
          </li>
        ))}
      </ul>
    </main>
  );
}
