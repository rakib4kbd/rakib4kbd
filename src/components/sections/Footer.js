import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();
  const navAnchors = [
    "#home",
    "#about",
    "#skills",
    "#experience",
    "#projects",
    "#contact",
  ];

  return (
    <footer
      className="py-10"
      style={{
        background: "var(--color-bg-primary)",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <a href="#home" className="text-xl font-bold">
            rakib<span style={{ color: "var(--color-accent-cyan)" }}>4</span>kbd
          </a>

          <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center text-sm">
            {navAnchors.map((href) => (
              <a
                key={href}
                href={href}
                className="capitalize link-hover"
                style={{ color: "var(--color-text-muted)" }}
              >
                {href.replace("#", "")}
              </a>
            ))}
          </div>

          <div className="flex gap-3">
            {[
              { href: personalInfo.github, label: "GitHub" },
              { href: personalInfo.linkedin, label: "LinkedIn" },
              { href: personalInfo.upwork, label: "Upwork" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs px-3 py-1.5 rounded-lg transition-all duration-200 hover:scale-105 hover-cyan hover-cyan-border"
                style={{
                  border: "1px solid var(--color-border)",
                  color: "var(--color-text-muted)",
                }}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div
          className="mt-8 text-center text-sm"
          style={{ color: "var(--color-text-muted)" }}
        >
          <p>
            © {year}{" "}
            <span style={{ color: "var(--color-accent-cyan)" }}>
              Rakib Khan
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
