import Section from "@/components/Section";

export default function ContactPage() {
  return (
    <>
      <main className="max-w-4xl mx-auto px-6">
        <Section title="Contact">
          <p className="mb-4">You can reach me via:</p>
          <ul className="space-y-2">
            <li>
              Email:{" "}
              <a className="underline" href="mailto:you@example.com">
                you@example.com
              </a>
            </li>
            <li>
              LinkedIn:{" "}
              <a className="underline" href="https://linkedin.com">
                linkedin.com
              </a>
            </li>
            <li>
              GitHub:{" "}
              <a className="underline" href="https://github.com">
                github.com
              </a>
            </li>
          </ul>
        </Section>
      </main>
    </>
  );
}
