import Link from "next/link";
import { projects } from "@/data/portfolio";

const categoryColors = {
  "Cloud & DevOps": { bg: "rgba(0,212,255,0.08)", border: "rgba(0,212,255,0.2)", text: "#00d4ff" },
  "DevOps": { bg: "rgba(168,85,247,0.08)", border: "rgba(168,85,247,0.2)", text: "#a855f7" },
  "Full Stack": { bg: "rgba(16,185,129,0.08)", border: "rgba(16,185,129,0.2)", text: "#10b981" },
};

const projectIcons = ["📡", "🤖", "🚀"];

export default function Projects() {
  return (
    <section id="projects" className="py-24" style={{ background: "var(--color-bg-primary)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--color-accent-cyan)" }}>
            What I&apos;ve built
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4" style={{ color: "var(--color-text-primary)" }}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="section-line mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => {
            const cat = categoryColors[project.category] || categoryColors["DevOps"];
            return (
              <div key={project.id} className="card-dark flex flex-col overflow-hidden">
                {/* Project image placeholder */}
                <div
                  className="h-48 flex items-center justify-center relative overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, rgba(0,212,255,0.05) 0%, rgba(168,85,247,0.08) 100%)`,
                    borderBottom: "1px solid var(--color-border)",
                  }}
                >
                  <span className="text-6xl" aria-hidden>{projectIcons[idx % projectIcons.length]}</span>
                  <div
                    className="absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ background: cat.bg, border: `1px solid ${cat.border}`, color: cat.text }}
                  >
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6">
                  <h3 className="text-lg font-bold mb-3" style={{ color: "var(--color-text-primary)" }}>
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: "var(--color-text-muted)" }}>
                    {project.shortDescription}
                  </p>

                  {/* Stack tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.stack.slice(0, 4).map((tech) => (
                      <span key={tech} className="tag-pill">
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 4 && (
                      <span className="tag-pill">+{project.stack.length - 4}</span>
                    )}
                  </div>

                  {/* View details button */}
                  <Link
                    href={`/projects/${project.id}`}
                    className="w-full py-2.5 rounded-lg text-sm font-semibold text-center transition-all duration-200 hover:opacity-90"
                    style={{
                      background: "linear-gradient(135deg, #00d4ff, #a855f7)",
                      color: "#fff",
                    }}
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/rakib4kbd"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-105"
            style={{
              border: "1px solid var(--color-border)",
              color: "var(--color-text-primary)",
              background: "rgba(255,255,255,0.03)",
            }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
