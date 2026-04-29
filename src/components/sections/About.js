import { personalInfo, stats, education } from "@/data/portfolio";

export default function About() {
  return (
    <section
      id="about"
      className="py-24"
      style={{ background: "var(--color-bg-card)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-3"
            style={{ color: "var(--color-accent-cyan)" }}
          >
            Get to know me
          </p>
          <h2
            className="text-4xl sm:text-5xl font-extrabold mb-4"
            style={{ color: "var(--color-text-primary)" }}
          >
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="section-line mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: story */}
          <div>
            <h3
              className="text-2xl font-bold mb-4"
              style={{ color: "var(--color-text-primary)" }}
            >
              My Journey
            </h3>
            <p
              className="leading-relaxed mb-5"
              style={{ color: "var(--color-text-muted)" }}
            >
              {personalInfo.aboutJourney}
            </p>
            <p
              className="leading-relaxed mb-5"
              style={{ color: "var(--color-text-muted)" }}
            >
              {personalInfo.aboutWork}
            </p>
            <p
              className="leading-relaxed"
              style={{ color: "var(--color-text-muted)" }}
            >
              {personalInfo.aboutHobbies}
            </p>

            <div className="mt-8 flex flex-col gap-3">
              {[
                {
                  label: "Email",
                  value: personalInfo.email,
                  href: `mailto:${personalInfo.email}`,
                },
                {
                  label: "Phone",
                  value: personalInfo.phone,
                  href: `tel:${personalInfo.phone}`,
                },
                { label: "Location", value: personalInfo.location, href: null },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <span
                    className="text-xs font-bold tracking-widest uppercase w-20 shrink-0"
                    style={{ color: "var(--color-accent-cyan)" }}
                  >
                    {item.label}
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm link-hover"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span
                      className="text-sm"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      {item.value}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: stats + education */}
          <div>
            <div className="grid grid-cols-2 gap-4 mb-10">
              {stats.map((s) => (
                <div key={s.label} className="stat-card p-6 text-center">
                  <div className="text-4xl font-extrabold mb-2 gradient-text">
                    {s.value}
                  </div>
                  <div
                    className="text-sm"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <div>
              {education.length > 0 && (
                <h3
                  className="text-xl font-bold mb-5"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  Education
                </h3>
              )}
              {education.map((edu) => (
                <div key={edu.degree} className="card-dark p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p
                        className="font-semibold mb-1"
                        style={{ color: "var(--color-text-primary)" }}
                      >
                        {edu.degree}
                      </p>
                      <p
                        className="text-sm mb-1"
                        style={{ color: "var(--color-accent-cyan)" }}
                      >
                        {edu.institution}
                      </p>
                      <p
                        className="text-sm"
                        style={{ color: "var(--color-text-muted)" }}
                      >
                        {edu.location}
                      </p>
                    </div>
                    <span
                      className="shrink-0 text-sm font-semibold px-3 py-1 rounded-lg"
                      style={{
                        background: "rgba(0,212,255,0.08)",
                        color: "var(--color-accent-cyan)",
                        border: "1px solid rgba(0,212,255,0.2)",
                      }}
                    >
                      {edu.year}
                    </span>
                  </div>
                </div>
              ))}

              <div
                className="mt-5 p-5 rounded-xl"
                style={{
                  background: "rgba(0,212,255,0.04)",
                  border: "1px solid rgba(0,212,255,0.15)",
                }}
              >
                <p
                  className="text-sm font-semibold mb-3"
                  style={{ color: "var(--color-accent-cyan)" }}
                >
                  You hire me when:
                </p>
                <ul className="space-y-1.5">
                  {[
                    "Your infra is fragile",
                    "Your AWS bill is too high",
                    "Your deployments are slow or risky",
                    "You need production-grade reliability",
                  ].map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2 text-sm"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      <span style={{ color: "var(--color-accent-cyan)" }}>
                        →
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
