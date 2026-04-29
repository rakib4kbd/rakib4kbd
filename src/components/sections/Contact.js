"use client";

import { useState } from "react";
import { personalInfo } from "@/data/portfolio";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
import { MessageCircleMore } from "lucide-react";
import { MapPin } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Opens mailto with form data — replace with a form backend if needed
    const subject = encodeURIComponent(
      `Portfolio Inquiry from ${form.name}${form.company ? ` (${form.company})` : ""}`,
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\n\n${form.message}`,
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
  };

  const contactItems = [
    {
      icon: <Mail />,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: <Phone />,
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
    },
    {
      icon: <MessageCircleMore />,
      label: "WhatsApp",
      value: personalInfo.phone,
      href: `https://wa.me/${personalInfo.phone.replace(/\D/g, "")}`,
    },
    {
      icon: <MapPin />,
      label: "Location",
      value: personalInfo.location,
      href: null,
    },
  ];

  return (
    <section
      id="contact"
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
            Get in touch
          </p>
          <h2
            className="text-4xl sm:text-5xl font-extrabold mb-4"
            style={{ color: "var(--color-text-primary)" }}
          >
            Say <span className="gradient-text">Hi!</span>
          </h2>
          <p
            className="text-base max-w-lg mx-auto"
            style={{ color: "var(--color-text-muted)" }}
          >
            Have a project in mind or want to discuss your infrastructure
            challenges? I&apos;ll get back to you within 24 hours.
          </p>
          <div className="section-line mx-auto mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: contact info */}
          <div>
            <h3
              className="text-xl font-bold mb-6"
              style={{ color: "var(--color-text-primary)" }}
            >
              Contact Information
            </h3>
            <div className="space-y-4 mb-10">
              {contactItems.map((item) => (
                <div
                  key={item.label}
                  className="card-dark p-5 flex items-center gap-4"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                    style={{
                      background: "rgba(0,212,255,0.08)",
                      border: "1px solid rgba(0,212,255,0.2)",
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p
                      className="text-xs font-bold tracking-widest uppercase mb-0.5"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={
                          item.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          item.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="font-medium transition-colors duration-200 hover:underline"
                        style={{ color: "var(--color-text-primary)" }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color =
                            "var(--color-accent-cyan)")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.color =
                            "var(--color-text-primary)")
                        }
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p
                        className="font-medium"
                        style={{ color: "var(--color-text-primary)" }}
                      >
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div>
              <p
                className="text-xs font-bold tracking-widest uppercase mb-4"
                style={{ color: "var(--color-text-muted)" }}
              >
                Find me online
              </p>
              <div className="flex gap-3">
                {[
                  { label: "GitHub", href: personalInfo.github },
                  { label: "LinkedIn", href: personalInfo.linkedin },
                  { label: "Upwork", href: personalInfo.upwork },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105"
                    style={{
                      background: "rgba(0,212,255,0.08)",
                      border: "1px solid rgba(0,212,255,0.2)",
                      color: "var(--color-accent-cyan)",
                    }}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div>
            <h3
              className="text-xl font-bold mb-6"
              style={{ color: "var(--color-text-primary)" }}
            >
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    className="block text-xs font-semibold mb-1.5"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                    style={{
                      background: "var(--color-bg-primary)",
                      border: "1px solid var(--color-border)",
                      color: "var(--color-text-primary)",
                    }}
                    onFocus={(e) =>
                      (e.currentTarget.style.borderColor =
                        "var(--color-accent-cyan)")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.borderColor =
                        "var(--color-border)")
                    }
                  />
                </div>
                <div>
                  <label
                    className="block text-xs font-semibold mb-1.5"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="you@company.com"
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                    style={{
                      background: "var(--color-bg-primary)",
                      border: "1px solid var(--color-border)",
                      color: "var(--color-text-primary)",
                    }}
                    onFocus={(e) =>
                      (e.currentTarget.style.borderColor =
                        "var(--color-accent-cyan)")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.borderColor =
                        "var(--color-border)")
                    }
                  />
                </div>
              </div>

              <div>
                <label
                  className="block text-xs font-semibold mb-1.5"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Company / Website
                </label>
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Your company or website"
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                  style={{
                    background: "var(--color-bg-primary)",
                    border: "1px solid var(--color-border)",
                    color: "var(--color-text-primary)",
                  }}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor =
                      "var(--color-accent-cyan)")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor = "var(--color-border)")
                  }
                />
              </div>

              <div>
                <label
                  className="block text-xs font-semibold mb-1.5"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Message *
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project or infrastructure challenges..."
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 resize-none"
                  style={{
                    background: "var(--color-bg-primary)",
                    border: "1px solid var(--color-border)",
                    color: "var(--color-text-primary)",
                  }}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor =
                      "var(--color-accent-cyan)")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor = "var(--color-border)")
                  }
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl font-semibold text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.01]"
                style={{
                  background: "linear-gradient(135deg, #00d4ff, #a855f7)",
                }}
              >
                {status === "sent" ? "Message sent! ✓" : "Send Message →"}
              </button>
              <p
                className="text-xs text-center"
                style={{ color: "var(--color-text-muted)" }}
              >
                I&apos;ll get back to you within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
