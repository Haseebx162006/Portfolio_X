export function ExperienceSection() {
  return (
    <section id="experience" className="below-fold mx-auto max-w-wrap px-6 py-24">
      <div className="hairline mb-20" />

      {/* Section Header */}
      <div className="reveal" style={{ transitionDelay: "0ms" }}>
        <div className="mb-14 flex items-baseline gap-4">
          <span className="font-mono text-sm text-faint">02</span>
          <span className="font-mono text-sm text-faint">/</span>
          <h2 className="text-lg font-medium tracking-tight text-strong">
            Track record
          </h2>
        </div>
      </div>

      <div className="space-y-14">
        {/* Experience Item 1 */}
        <div className="reveal" style={{ transitionDelay: "0ms" }}>
          <div className="grid gap-4 md:grid-cols-[180px_1fr] md:gap-12">
            <div className="font-mono text-sm text-faint">2025 – Present</div>
            <div>
              <h3 className="text-base font-medium text-strong">
                Technical Co-Lead
              </h3>
              <p className="mt-1 text-sm text-muted">
                Google Developers Groups on Campus (GDGoC) — COMSATS Lahore
              </p>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
                <li className="flex gap-3">
                  <span
                    className="mt-[9px] h-px w-3 shrink-0 bg-faint"
                    aria-hidden="true"
                  />
                  <span>
                    Led technical initiatives and coordinated{" "}
                    <strong className="font-semibold text-strong">
                      2+ technical events and workshops
                    </strong>
                    , handling planning, technical execution, and cross-team
                    collaboration.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span
                    className="mt-[9px] h-px w-3 shrink-0 bg-faint"
                    aria-hidden="true"
                  />
                  <span>
                    Maintained and enhanced the developer community website by
                    implementing new features and improving existing functionality
                    and user experience.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span
                    className="mt-[9px] h-px w-3 shrink-0 bg-faint"
                    aria-hidden="true"
                  />
                  <span>
                    Designed and implemented an{" "}
                    <strong className="font-semibold text-strong">
                      automatic certificate generation and download system
                    </strong>
                    , reducing manual administrative effort.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span
                    className="mt-[9px] h-px w-3 shrink-0 bg-faint"
                    aria-hidden="true"
                  />
                  <span>
                    Mentored{" "}
                    <strong className="font-semibold text-strong">
                      50+ students
                    </strong>{" "}
                    in Programming Fundamentals and Object-Oriented Programming
                    while promoting hands-on technical learning.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Leadership & Competitions */}
        <div className="reveal" style={{ transitionDelay: "80ms" }}>
          <div className="grid gap-4 md:grid-cols-[180px_1fr] md:gap-12">
            <div className="font-mono text-sm text-faint">Leadership &amp; Awards</div>
            <div>
              <ul className="space-y-3">
                <li className="text-sm text-muted">
                  <span className="text-strong">1st Place Winner</span> — 2x Web
                  Hackathon 2026
                </li>
                <li className="text-sm text-muted">
                  <span className="text-strong">3rd Place Winner</span> — App
                  Development Competition, SOFTEC &apos;26
                </li>
                <li className="text-sm text-muted">
                  <span className="text-strong">Technical Lead</span> — Google
                  Developer Groups on Campus (Oct 2025 – Present)
                </li>
                <li className="text-sm text-muted">
                  <span className="text-strong">Technical Mentor</span> — Mentored
                  50+ students in Programming Fundamentals &amp; OOP
                </li>
              </ul>
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted">
                Hands-on work across the AI and backend engineering lifecycle —
                from stateful LangGraph agentic orchestrations and Qdrant vector
                retrieval pipelines to high-throughput FastAPI microservices and
                automated CI/CD evaluation systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
