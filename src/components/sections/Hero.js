import { personalInfo } from "@/data/portfolio";
import { ArrowDownToLine } from "lucide-react";
import { Star } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-gradient min-h-screen flex items-center pt-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <p
              className="text-sm font-semibold tracking-widest uppercase mb-4"
              style={{ color: "var(--color-accent-cyan)" }}
            >
              Hello, I&apos;m
            </p>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-4">
              <span style={{ color: "var(--color-text-primary)" }}>Rakib</span>{" "}
              <span className="gradient-text">Khan</span>
            </h1>

            <div
              className="text-xl sm:text-2xl font-medium mb-6"
              style={{ color: "var(--color-text-muted)" }}
            >
              <span style={{ color: "var(--color-accent-cyan)" }}>
                Cloud &amp; DevOps Engineer
              </span>
              <span className="mx-2 opacity-40">|</span>
              <span>SRE</span>
              <span className="mx-2 opacity-40">|</span>
              <span>Full Stack Developer</span>
            </div>

            <p
              className="text-base leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8"
              style={{ color: "var(--color-text-muted)" }}
            >
              I build infrastructure that doesn&apos;t break. 7+ years scaling
              systems on AWS, Kubernetes, and everything in between. You hire me
              when your infra is fragile, your AWS bill is too high, or your
              deployments are slow.
            </p>

            {/* Key stats pills */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10">
              {[
                "7+ yrs Linux",
                "5+ yrs AWS",
                "50K emails/day",
                "~5s failover",
              ].map((s) => (
                <span key={s} className="tag-pill">
                  {s}
                </span>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="px-8 py-3 rounded-xl font-semibold text-white text-center transition-opacity duration-200 hover:opacity-90"
                style={{
                  background: "linear-gradient(135deg, #00d4ff, #a855f7)",
                }}
              >
                Let&apos;s Talk
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-xl font-semibold text-center transition-all duration-200 hover:scale-105 flex items-center gap-0.5"
                style={{
                  border: "1px solid var(--color-border)",
                  color: "var(--color-text-primary)",
                  background: "rgba(255,255,255,0.03)",
                }}
              >
                Download CV <ArrowDownToLine width={22} />
              </a>
            </div>

            {/* Social links */}
            <div className="flex gap-4 mt-10 justify-center lg:justify-start">
              {[
                {
                  label: "GitHub",
                  href: personalInfo.github,
                  icon: (
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                  ),
                },
                {
                  label: "LinkedIn",
                  href: personalInfo.linkedin,
                  icon: (
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  ),
                },
                {
                  label: "Upwork",
                  href: personalInfo.upwork,
                  icon: (
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.543-2.546V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.452-5.439-5.452z" />
                    </svg>
                  ),
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2.5 rounded-lg transition-all duration-200 hover:scale-110 hover-cyan hover-cyan-border"
                  style={{
                    border: "1px solid var(--color-border)",
                    color: "var(--color-text-muted)",
                    background: "rgba(255,255,255,0.03)",
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Avatar / Photo */}
          <div className="shrink-0 relative">
            <div
              className="w-64 h-64 sm:w-lg sm:h-128 rounded-full relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(0,212,255,0.15), rgba(168,85,247,0.15))",
                border: "2px solid rgba(0,212,255,0.3)",
                boxShadow:
                  "0 0 60px rgba(0,212,255,0.1), 0 0 120px rgba(168,85,247,0.08)",
              }}
            >
              {/* Replace with <Image src="/photo.jpg" fill alt="Rakib Khan" className="object-cover" /> when photo is ready */}
              <div className="w-full h-full flex items-center justify-center">
                <span
                  className="text-8xl font-extrabold gradient-text select-none"
                  aria-hidden
                >
                  <Image
                    src={"/profile-photo.jpg"}
                    alt="RK"
                    width={600}
                    height={600}
                  />
                </span>
              </div>
            </div>
            <div
              className="absolute -bottom-3 right-45 px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1"
              style={{
                background: "linear-gradient(135deg, #00d4ff, #a855f7)",
                color: "#fff",
                boxShadow: "0 4px 20px rgba(0,212,255,0.3)",
              }}
            >
              <Star width={18} />
              Top Rated Plus
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
