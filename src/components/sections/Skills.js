import { skills } from "@/data/portfolio";

const colorMap = {
  cyan: {
    accent: "#00d4ff",
    bg: "rgba(0,212,255,0.08)",
    border: "rgba(0,212,255,0.2)",
    bar: "linear-gradient(90deg,#00d4ff,#0ea5e9)",
  },
  purple: {
    accent: "#a855f7",
    bg: "rgba(168,85,247,0.08)",
    border: "rgba(168,85,247,0.2)",
    bar: "linear-gradient(90deg,#a855f7,#6366f1)",
  },
  amber: {
    accent: "#f59e0b",
    bg: "rgba(245,158,11,0.08)",
    border: "rgba(245,158,11,0.2)",
    bar: "linear-gradient(90deg,#f59e0b,#ef4444)",
  },
  green: {
    accent: "#10b981",
    bg: "rgba(16,185,129,0.08)",
    border: "rgba(16,185,129,0.2)",
    bar: "linear-gradient(90deg,#10b981,#06b6d4)",
  },
  rose: {
    accent: "#f43f5e",
    bg: "rgba(244,63,94,0.08)",
    border: "rgba(244,63,94,0.2)",
    bar: "linear-gradient(90deg,#f43f5e,#ec4899)",
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24"
      style={{ background: "var(--color-bg-primary)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-3"
            style={{ color: "var(--color-accent-cyan)" }}
          >
            What I work with
          </p>
          <h2
            className="text-4xl sm:text-5xl font-extrabold mb-4"
            style={{ color: "var(--color-text-primary)" }}
          >
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="section-line mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skills.map((skillGroup) => {
            const colors = colorMap[skillGroup.color] || colorMap.cyan;
            return (
              <div
                key={skillGroup.category}
                className="card-dark p-6"
                style={{ "--hover-border": colors.accent }}
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                    style={{
                      background: colors.bg,
                      border: `1px solid ${colors.border}`,
                    }}
                  >
                    {skillGroup.icon}
                  </div>
                  <h3
                    className="font-bold"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    {skillGroup.category}
                  </h3>
                </div>

                {/* Skill bars */}
                <div className="space-y-4">
                  {skillGroup.items.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-1.5">
                        <span
                          className="text-sm"
                          style={{ color: "var(--color-text-muted)" }}
                        >
                          {skill.name}
                        </span>
                        <span
                          className="text-xs font-bold"
                          style={{ color: colors.accent }}
                        >
                          {skill.level}%
                        </span>
                      </div>
                      <div
                        className="w-full h-1.5 rounded-full overflow-hidden"
                        style={{ background: "var(--color-border)" }}
                      >
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${skill.level}%`,
                            background: colors.bar,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Tool tags cloud */}
        <div className="mt-12 text-center">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-5"
            style={{ color: "var(--color-text-muted)" }}
          >
            Also familiar with
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              "Nginx",
              "Apache",
              "PostgreSQL",
              "MySQL",
              "Redis",
              "RabbitMQ",
              "Vault",
              "Consul",
              "ArgoCD",
              "Helm",
              "Cloudwatch",
              "Route53",
              "S3",
              "IAM",
              "Lambda",
              "EC2 Auto Scaling",
              "Git",
              "Vim",
            ].map((tool) => (
              <span key={tool} className="tag-pill">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
