import { GraduationCap, Award } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="below-fold mx-auto max-w-wrap px-6 py-24">
      <div className="hairline mb-20" />

      {/* Section Header */}
      <div className="reveal" style={{ transitionDelay: "0ms" }}>
        <div className="mb-14 flex items-baseline gap-4">
          <span className="font-mono text-sm text-faint">04</span>
          <span className="font-mono text-sm text-faint">/</span>
          <h2 className="text-lg font-medium tracking-tight text-strong">
            About
          </h2>
        </div>
      </div>

      <div className="grid gap-12 md:grid-cols-[280px_1fr] md:gap-16">
        {/* Profile Image Column */}
        <div className="reveal" style={{ transitionDelay: "0ms" }}>
          <img
            alt="Haseeb Ahmad"
            loading="lazy"
            width={413}
            height={531}
            decoding="async"
            className="mx-auto w-full max-w-[280px] grayscale transition-all duration-500 hover:grayscale-0 md:mx-0 object-cover"
            src="/haseeb.jpeg"
          />
        </div>

        {/* Bio & Details Column */}
        <div>
          <div className="reveal" style={{ transitionDelay: "0ms" }}>
            <p className="max-w-2xl text-base leading-relaxed text-muted">
              Computer Science student and Software Engineer specializing in{" "}
              <strong className="font-semibold text-strong">
                AI/ML engineering, agentic systems, and LLM-powered applications
              </strong>
              . Experienced in building production-oriented, AI-driven backend systems
              using Python, FastAPI, LangGraph, and RAG pipelines, with hands-on work
              across the ML lifecycle from data processing and model integration to
              deployment. Actively contributing to open-source AI infrastructure
              projects and expanding practical expertise in MLOps, model deployment
              pipelines, and scalable AI systems.
            </p>
          </div>

          <div className="reveal" style={{ transitionDelay: "80ms" }}>
            <div className="mt-12 grid gap-10 sm:grid-cols-2">
              {/* Education */}
              <div>
                <h3 className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-faint">
                  <GraduationCap size={16} strokeWidth={1.5} />
                  Education
                </h3>
                <p className="mt-4 text-sm font-medium text-strong">
                  B.Sc. Computer Science (4th Semester)
                </p>
                <p className="mt-1 text-sm text-muted">
                  COMSATS University Islamabad — Lahore Campus
                </p>
                <p className="mt-1 font-mono text-xs text-faint">
                  2024 – 2028 · CGPA: 3.92 / 4.0
                </p>
              </div>

              {/* Achievements */}
              <div>
                <h3 className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-faint">
                  <Award size={16} strokeWidth={1.5} />
                  Achievements &amp; Honors
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-muted">
                  <li>
                    <strong className="font-medium text-strong">1st Place</strong> — 2x Web Hackathon 2026
                  </li>
                  <li>
                    <strong className="font-medium text-strong">3rd Place</strong> — App Development Competition, SOFTEC &apos;26
                  </li>
                  <li>
                    <strong className="font-medium text-strong">Technical Lead</strong> — GDGoC COMSATS (2025 – Present)
                  </li>
                  <li>
                    <strong className="font-medium text-strong">50+ Students Mentored</strong> in Programming Fundamentals &amp; OOP
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
