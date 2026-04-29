import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/portfolio";
import Navbar from "@/components/Navbar/page";
import Footer from "@/components/sections/Footer";

export async function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} | Rakib Khan`,
    description: project.shortDescription,
  };
}

export default async function ProjectDetailPage({ params }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) notFound();

  const projectIcons = { "Cloud & DevOps": "📡", DevOps: "🚀", "Full Stack": "💻" };
  const icon = projectIcons[project.category] ?? "⚙️";

  return (
    <>
      <Navbar />
      <main style={{ background: "var(--color-bg-primary)", minHeight: "100vh", paddingTop: "4rem" }}>
        {/* Hero banner */}
        <div
          className="py-20 relative overflow-hidden"
          style={{
            background:
              "radial-gradient(ellipse at 60% 50%, rgba(168,85,247,0.12) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(0,212,255,0.08) 0%, transparent 50%), var(--color-bg-card)",
            borderBottom: "1px solid var(--color-border)",
          }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm mb-8 link-hover"
              style={{ color: "var(--color-text-muted)" }}
            >
              ← Back to Projects
            </Link>

            <div className="flex items-center gap-4 mb-5">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shrink-0"
                style={{
                  background: "rgba(0,212,255,0.08)",
                  border: "1px solid rgba(0,212,255,0.2)",
                }}
              >
                {icon}
              </div>
              <div>
                <span
                  className="text-xs font-semibold tracking-widest uppercase"
                  style={{ color: "var(--color-accent-cyan)" }}
                >
                  {project.category}
                </span>
                <h1 className="text-3xl sm:text-4xl font-extrabold mt-1" style={{ color: "var(--color-text-primary)" }}>
                  {project.title}
                </h1>
              </div>
            </div>

            <p className="text-lg leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
              {project.shortDescription}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-10">
              <section>
                <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--color-text-primary)" }}>
                  Overview
                </h2>
                <div className="section-line mb-5" />
                <p className="leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                  {project.fullDescription}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--color-text-primary)" }}>
                  Challenges
                </h2>
                <div className="section-line mb-5" />
                <ul className="space-y-4">
                  {project.challenges.map((c, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 p-4 rounded-xl"
                      style={{
                        background: "var(--color-bg-card)",
                        border: "1px solid var(--color-border)",
                      }}
                    >
                      <span
                        className="w-7 h-7 rounded-lg shrink-0 flex items-center justify-center text-sm font-bold"
                        style={{ background: "rgba(0,212,255,0.1)", color: "var(--color-accent-cyan)" }}
                      >
                        {i + 1}
                      </span>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                        {c}
                      </p>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--color-text-primary)" }}>
                  Future Improvements
                </h2>
                <div className="section-line mb-5" />
                <ul className="space-y-3">
                  {project.improvements.map((imp, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "var(--color-text-muted)" }}>
                      <span style={{ color: "var(--color-accent-purple)" }} className="mt-1 shrink-0">◆</span>
                      {imp}
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div
                className="p-5 rounded-xl"
                style={{ background: "var(--color-bg-card)", border: "1px solid var(--color-border)" }}
              >
                <h3 className="font-bold mb-4" style={{ color: "var(--color-text-primary)" }}>
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="tag-pill">{tech}</span>
                  ))}
                </div>
              </div>

              <div
                className="p-5 rounded-xl space-y-3"
                style={{ background: "var(--color-bg-card)", border: "1px solid var(--color-border)" }}
              >
                <h3 className="font-bold mb-4" style={{ color: "var(--color-text-primary)" }}>
                  Links
                </h3>
                {project.liveLink ? (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 w-full px-4 py-2.5 rounded-lg text-sm font-semibold text-white justify-center transition-opacity duration-200 hover:opacity-90"
                    style={{ background: "linear-gradient(135deg, #00d4ff, #a855f7)" }}
                  >
                    🌐 Live Project
                  </a>
                ) : (
                  <div
                    className="flex items-center gap-2 w-full px-4 py-2.5 rounded-lg text-sm justify-center"
                    style={{ background: "var(--color-border)", color: "var(--color-text-muted)" }}
                  >
                    🔒 Private / NDA
                  </div>
                )}
                {project.githubLink ? (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 w-full px-4 py-2.5 rounded-lg text-sm font-semibold justify-center transition-all duration-200 hover:scale-105"
                    style={{
                      border: "1px solid var(--color-border)",
                      color: "var(--color-text-primary)",
                      background: "rgba(255,255,255,0.03)",
                    }}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub (Client)
                  </a>
                ) : (
                  <div
                    className="flex items-center gap-2 w-full px-4 py-2.5 rounded-lg text-sm justify-center"
                    style={{ background: "var(--color-border)", color: "var(--color-text-muted)" }}
                  >
                    🔒 Private Repo
                  </div>
                )}
              </div>

              <div
                className="p-5 rounded-xl"
                style={{ background: "var(--color-bg-card)", border: "1px solid var(--color-border)" }}
              >
                <h3 className="font-bold mb-4" style={{ color: "var(--color-text-primary)" }}>
                  Other Projects
                </h3>
                <div className="space-y-2">
                  {projects
                    .filter((p) => p.id !== project.id)
                    .map((p) => (
                      <Link
                        key={p.id}
                        href={`/projects/${p.id}`}
                        className="block text-sm py-2 px-3 rounded-lg transition-all duration-200 hover-bg-cyan hover-cyan"
                        style={{ color: "var(--color-text-muted)" }}
                      >
                        → {p.title}
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-105"
              style={{
                border: "1px solid var(--color-border)",
                color: "var(--color-text-primary)",
                background: "rgba(255,255,255,0.03)",
              }}
            >
              ← Back to all projects
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
