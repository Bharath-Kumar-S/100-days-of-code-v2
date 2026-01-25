export type Project = {
  slug: string;
  title: string;
  description: string;
  stack: string[];
};

export const projects: Project[] = [
  {
    slug: "feedback-widget",
    title: "Feedback Widget",
    description: "Embeddable feedback widget with AI summarization",
    stack: ["Preact", "TypeScript", "Neon", "Drizzle"],
  },
];
