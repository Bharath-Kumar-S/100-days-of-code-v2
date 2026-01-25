import { projects } from "@/content/projects";
import ProjectCard from "@/components/ProjectCard";
import Section from "@/components/Section";

export default function ProjectsPage() {
  return (
    <main className="max-w-4xl mx-auto px-6">
      <Section title="Projects">
        <div className="grid gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>
    </main>
  );
}
