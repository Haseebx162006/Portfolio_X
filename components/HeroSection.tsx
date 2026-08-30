import { Counter } from "./Counter";
import { BrandIcon } from "./BrandIcon";

const MARQUEE_TECH = [
  "Python",
  "FastAPI",
  "LangGraph",
  "LangChain",
  "Next.js",
  "React",
  "PostgreSQL",
  "Qdrant",
  "Docker",
  "Groq",
  "Gemini",
  "Scikit-learn",
  "TensorFlow",
  "Node.js",
  "Express",
  "Tailwind CSS",
  "MongoDB",
  "Git",
];

export function HeroSection() {
  return (
    <section id="top" className="pt-28 md:pt-32">
      <div className="mx-auto max-w-wrap px-6 pb-16 md:pb-20">
        {/* Status Bar */}
        <div className="animate-reveal" style={{ animationDelay: "0ms" }}>
          <div className="flex items-center gap-4">
            <span className="flex min-w-0 items-center gap-3 sm:shrink-0">
              <span className="h-2 w-2 shrink-0 bg-red-500" aria-hidden="true" />
              <span className="font-mono text-xs uppercase tracking-wider text-muted">
                Open to AI / ML Engineer &amp; Backend roles
              </span>
            </span>
            <span className="hairline hidden flex-1 sm:block" />
            <span className="hidden shrink-0 font-mono text-xs uppercase tracking-wider text-muted md:block">
              Lahore, PK — remote worldwide
            </span>
          </div>
        </div>

        {/* Name Headline */}
        <div className="animate-reveal" style={{ animationDelay: "80ms" }}>
          <h1 className="mt-12 text-[clamp(2.75rem,6.5vw,6rem)] font-semibold leading-[0.95] tracking-tighter text-strong md:mt-16">
            Haseeb Ahmad
          </h1>
        </div>

        {/* Bio & Metrics Grid */}
        <div className="mt-14 grid gap-y-14 md:mt-20 lg:grid-cols-2 lg:gap-x-24">
          <div className="animate-reveal" style={{ animationDelay: "160ms" }}>
            <p className="max-w-md text-2xl leading-snug tracking-tight text-content sm:text-[1.75rem]">
              Computer Science student and Software Engineer specializing in{" "}
              <strong className="font-semibold text-strong">
                AI/ML engineering, agentic systems, and LLM-powered applications
              </strong>{" "}
              — building production backend pipelines, LangGraph multi-agent architectures, and RAG systems.
            </p>
          </div>

          <div className="animate-reveal" style={{ animationDelay: "240ms" }}>
            <div className="grid grid-cols-2 gap-x-12 gap-y-10">
              <div>
                <div className="hairline mb-5" />
                <div className="text-4xl font-medium tracking-tight text-strong sm:text-5xl">
                  <Counter value="3.92" />
                </div>
                <div className="mt-2 text-sm text-muted">CGPA / 4.0 (COMSATS)</div>
              </div>
              <div>
                <div className="hairline mb-5" />
                <div className="text-4xl font-medium tracking-tight text-strong sm:text-5xl">
                  <Counter value="2+" />
                </div>
                <div className="mt-2 text-sm text-muted">Technical events led</div>
              </div>
              <div>
                <div className="hairline mb-5" />
                <div className="text-4xl font-medium tracking-tight text-strong sm:text-5xl">
                  <Counter value="3+" />
                </div>
                <div className="mt-2 text-sm text-muted">Production AI projects</div>
              </div>
              <div>
                <div className="hairline mb-5" />
                <div className="text-4xl font-medium tracking-tight text-strong sm:text-5xl">
                  <Counter value="50+" />
                </div>
                <div className="mt-2 text-sm text-muted">Students mentored</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Marquee */}
      <div className="marquee-track overflow-hidden bg-strong py-4" aria-hidden="true">
        <div className="marquee items-center">
          {[...MARQUEE_TECH, ...MARQUEE_TECH].map((tech, idx) => (
            <span
              key={`${tech}-${idx}`}
              className="flex items-center font-mono text-xs uppercase tracking-widest text-canvas"
            >
              <BrandIcon name={tech} className="mr-2.5 h-3.5 w-3.5 fill-current" />
              {tech}
              <span className="px-8 opacity-40">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
