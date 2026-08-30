"use client";

import { useState } from "react";
import {
  Mail,
  Linkedin,
  Github,
  Phone,
  FileText,
  Send,
  Loader2,
  Check,
  AlertCircle,
  ArrowUpRight,
  ArrowUp,
} from "lucide-react";

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange =
    (field: "name" | "email" | "message") =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Fallback directly to mailto or standard dispatch
    try {
      const subject = encodeURIComponent(
        `Portfolio Message from ${formData.name || "Colleague"}`
      );
      const body = encodeURIComponent(
        `${formData.message}\n\n— ${formData.name}${
          formData.email ? ` (${formData.email})` : ""
        }`
      );
      window.location.href = `mailto:haseebahmad0160@gmail.com?subject=${subject}&body=${body}`;
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full border border-line bg-transparent px-4 py-3 text-sm text-content placeholder:text-faint outline-none transition-colors focus:border-strong";

  return (
    <footer id="contact" className="below-fold border-t border-line bg-hover">
      <div className="mx-auto max-w-wrap px-6 pb-10 pt-24">
        {/* Section Header */}
        <div className="reveal" style={{ transitionDelay: "0ms" }}>
          <div className="mb-14 flex items-baseline gap-4">
            <span className="font-mono text-sm text-faint">05</span>
            <span className="font-mono text-sm text-faint">/</span>
            <h2 className="text-lg font-medium tracking-tight text-strong">
              Contact
            </h2>
          </div>
        </div>

        {/* Heading */}
        <div className="reveal" style={{ transitionDelay: "0ms" }}>
          <p className="max-w-2xl text-2xl font-medium leading-snug tracking-tight text-strong sm:text-3xl">
            Have a product to build or an opportunity to discuss? Let&apos;s talk.
            Drop me a message — I usually reply within a day.
          </p>
        </div>

        {/* Form and Direct Contact Grid */}
        <div className="mt-14 grid gap-x-16 gap-y-14 lg:grid-cols-2">
          {/* Form */}
          <div className="reveal" style={{ transitionDelay: "80ms" }}>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="cf-name"
                    className="mb-2 block font-mono text-xs uppercase tracking-widest text-faint"
                  >
                    Name
                  </label>
                  <input
                    id="cf-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange("name")}
                    placeholder="Your name"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label
                    htmlFor="cf-email"
                    className="mb-2 block font-mono text-xs uppercase tracking-widest text-faint"
                  >
                    Email
                  </label>
                  <input
                    id="cf-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange("email")}
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="mt-4">
                <label
                  htmlFor="cf-message"
                  className="mb-2 block font-mono text-xs uppercase tracking-widest text-faint"
                >
                  Message
                </label>
                <textarea
                  id="cf-message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange("message")}
                  placeholder="Tell me about your project, team, or role…"
                  className={`${inputClass} resize-none`}
                />
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="group inline-flex items-center gap-2 bg-strong px-7 py-3 font-mono text-xs font-medium uppercase tracking-widest text-canvas transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={15} className="animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send message
                      <Send
                        size={14}
                        className="transition-transform group-hover:translate-x-0.5"
                      />
                    </>
                  )}
                </button>

                {status === "success" && (
                  <span className="animate-fade-in inline-flex items-center gap-1.5 text-sm text-content">
                    <Check size={16} />
                    Opening your email client…
                  </span>
                )}
                {status === "error" && (
                  <span className="animate-fade-in inline-flex items-center gap-1.5 text-sm text-red-500">
                    <AlertCircle size={16} />
                    Something went wrong — email me directly.
                  </span>
                )}
              </div>
            </form>
          </div>

          {/* Direct Links */}
          <div>
            <div className="reveal" style={{ transitionDelay: "160ms" }}>
              <p className="mb-2 font-mono text-xs uppercase tracking-widest text-faint">
                Or reach me directly
              </p>
            </div>

            <div className="space-y-0">
              {/* Email */}
              <div className="reveal" style={{ transitionDelay: "160ms" }}>
                <a
                  href="mailto:haseebahmad0160@gmail.com"
                  className="group flex items-center justify-between gap-6 border-t border-line py-5 transition-colors last:border-b hover:bg-hover"
                >
                  <span className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-faint">
                    <Mail
                      size={16}
                      strokeWidth={1.5}
                      className="transition-colors duration-300 group-hover:text-strong"
                    />
                    Email
                  </span>
                  <span className="inline-flex items-center gap-1 text-sm text-muted transition-colors group-hover:text-strong">
                    haseebahmad0160@gmail.com
                  </span>
                </a>
              </div>

              {/* LinkedIn */}
              <div className="reveal" style={{ transitionDelay: "240ms" }}>
                <a
                  href="https://www.linkedin.com/in/haseeb-ahmad-6b506a355/"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-6 border-t border-line py-5 transition-colors last:border-b hover:bg-hover"
                >
                  <span className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-faint">
                    <Linkedin
                      size={16}
                      strokeWidth={1.5}
                      className="transition-colors duration-300 group-hover:text-strong"
                    />
                    LinkedIn
                  </span>
                  <span className="inline-flex items-center gap-1 text-sm text-muted transition-colors group-hover:text-strong">
                    /in/haseeb-ahmad-6b506a355
                    <ArrowUpRight
                      size={14}
                      strokeWidth={1.5}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </span>
                </a>
              </div>

              {/* GitHub */}
              <div className="reveal" style={{ transitionDelay: "320ms" }}>
                <a
                  href="https://github.com/Haseebx162006"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-6 border-t border-line py-5 transition-colors last:border-b hover:bg-hover"
                >
                  <span className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-faint">
                    <Github
                      size={16}
                      strokeWidth={1.5}
                      className="transition-colors duration-300 group-hover:text-strong"
                    />
                    GitHub
                  </span>
                  <span className="inline-flex items-center gap-1 text-sm text-muted transition-colors group-hover:text-strong">
                    @Haseebx162006
                    <ArrowUpRight
                      size={14}
                      strokeWidth={1.5}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </span>
                </a>
              </div>

              {/* Phone */}
              <div className="reveal" style={{ transitionDelay: "400ms" }}>
                <a
                  href="tel:+923249540797"
                  className="group flex items-center justify-between gap-6 border-t border-line py-5 transition-colors last:border-b hover:bg-hover"
                >
                  <span className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-faint">
                    <Phone
                      size={16}
                      strokeWidth={1.5}
                      className="transition-colors duration-300 group-hover:text-strong"
                    />
                    Phone
                  </span>
                  <span className="inline-flex items-center gap-1 text-sm text-muted transition-colors group-hover:text-strong">
                    +92 324 9540797
                  </span>
                </a>
              </div>

              {/* Resume */}
              <div className="reveal" style={{ transitionDelay: "480ms" }}>
                <a
                  href="/Haseeb_Ahmad_Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-6 border-t border-line py-5 transition-colors last:border-b hover:bg-hover"
                >
                  <span className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-faint">
                    <FileText
                      size={16}
                      strokeWidth={1.5}
                      className="transition-colors duration-300 group-hover:text-strong"
                    />
                    Resume
                  </span>
                  <span className="inline-flex items-center gap-1 text-sm text-muted transition-colors group-hover:text-strong">
                    Download PDF
                    <ArrowUpRight
                      size={14}
                      strokeWidth={1.5}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Sub-Bar */}
        <div className="mt-24 border-t border-line pt-8">
          <div className="flex flex-col gap-3 text-sm text-faint sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Haseeb Ahmad — AI / ML Engineer</p>
            <p>Lahore, Pakistan</p>
            <a
              href="#top"
              className="group link-underline inline-flex items-center gap-1 py-1 text-muted transition-colors hover:text-strong"
            >
              Back to top
              <ArrowUp
                size={14}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
