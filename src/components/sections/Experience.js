import { experiences } from "@/data/portfolio";
import { Check } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { CircleArrowRight } from "lucide-react";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24"
      style={{ background: "var(--color-bg-card)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-3"
            style={{ color: "var(--color-accent-cyan)" }}
          >
            Work history
          </p>
          <h2
            className="text-4xl sm:text-5xl font-extrabold mb-4"
            style={{ color: "var(--color-text-primary)" }}
          >
            My <span className="gradient-text">Experience</span>
          </h2>
          <div className="section-line mx-auto" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-4 sm:left-8 top-0 bottom-0 w-px hidden sm:block"
            style={{ background: "var(--color-border)" }}
          />

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div key={idx} className="sm:pl-20 relative">
                {/* Timeline dot */}
                <div
                  className="hidden sm:flex absolute left-6 top-7 w-4 h-4 rounded-full items-center justify-center"
                  style={{
                    background: "var(--color-bg-card)",
                    border: "2px solid var(--color-accent-cyan)",
                    boxShadow: "0 0 8px rgba(0,212,255,0.4)",
                  }}
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: "var(--color-accent-cyan)" }}
                  />
                </div>

                <div className="card-dark p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                    <div>
                      <h3
                        className="text-xl font-bold mb-1"
                        style={{ color: "var(--color-text-primary)" }}
                      >
                        {exp.role}
                      </h3>
                      <p
                        className="font-semibold"
                        style={{ color: "var(--color-accent-cyan)" }}
                      >
                        {exp.company}
                      </p>
                      <p
                        className="text-sm mt-0.5"
                        style={{ color: "var(--color-text-muted)" }}
                      >
                        {exp.location}
                      </p>
                    </div>
                    <span
                      className="flex-shrink-0 text-sm font-semibold px-4 py-1.5 rounded-lg self-start"
                      style={{
                        background: "rgba(0,212,255,0.08)",
                        color: "var(--color-accent-cyan)",
                        border: "1px solid rgba(0,212,255,0.2)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {exp.period}
                    </span>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2 mb-4">
                    {exp.bullets.map((bullet, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-0.5 text-sm"
                        style={{ color: "var(--color-text-muted)" }}
                      >
                        <span style={{ color: "var(--color-accent-cyan)" }}>
                          <ChevronRight width={15} />
                        </span>
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  {/* Impact */}
                  {exp.impact && exp.impact.length > 0 && (
                    <div
                      className="pt-4 mt-2"
                      style={{ borderTop: "1px solid var(--color-border)" }}
                    >
                      <p
                        className="text-xs font-bold tracking-widest uppercase mb-2"
                        style={{ color: "var(--color-accent-amber)" }}
                      >
                        Impact
                      </p>
                      <ul className="space-y-1">
                        {exp.impact.map((point, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-0.5 text-sm"
                            style={{ color: "var(--color-text-muted)" }}
                          >
                            <span
                              style={{ color: "var(--color-accent-amber)" }}
                            >
                              <Check width={15} />
                            </span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
