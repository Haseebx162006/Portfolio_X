import { ArrowUpRight } from "lucide-react";
import { BrandIcon } from "./BrandIcon";

interface Project {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  liveUrl: string;
  featured?: boolean;
  tags: { name: string; brandIcon?: string }[];
}

const PROJECTS: Project[] = [
  {
    id: "codecrew",
    num: "01",
    title: "CodeCrew",
    subtitle: "Autonomous Multi-Agent Software House",
    description:
      "Autonomous multi-agent software engineering platform that simulates a complete development team for repository analysis, architecture planning, code generation, testing, and technical documentation.",
    bullets: [
      "Designed a stateful LangGraph orchestration workflow with specialized Planner, Backend, Frontend, Database, Testing, and Documentation agents collaborating through structured agent state.",
      "Integrated GitHub automation for repository cloning, codebase analysis, feature-branch creation, automated implementation, and generation of verified Pull Requests.",
      "Implemented fault-tolerant workflow execution using PostgreSQL/SQLite checkpointers, JWT/Argon2 authentication, sandboxed repository processing, and automated CI/CD validation using Ruff, Prettier, and TypeScript.",
    ],
    liveUrl: "https://codecrew-ashen.vercel.app/",
    featured: true,
    tags: [
      { name: "LangGraph", brandIcon: "LangGraph" },
      { name: "FastAPI", brandIcon: "FastAPI" },
      { name: "Python", brandIcon: "Python" },
      { name: "React", brandIcon: "React" },
      { name: "PostgreSQL", brandIcon: "PostgreSQL" },
      { name: "GitHub API", brandIcon: "GitHub" },
    ],
  },
  {
    id: "mentorx",
    num: "02",
    title: "MentorX",
    subtitle: "AI Academic Intelligence & Admission Guidance Platform",
    description:
      "Agentic AI academic guidance platform providing data-backed university admission counseling, aggregate calculations, merit analysis, and interdisciplinary degree transition guidance for FSc and O/A-Level students.",
    bullets: [
      "Designed an adaptive LangGraph RAG pipeline that retrieves and grades document relevance, conditionally rewrites queries, performs Tavily web searches, and refines context before generating evidence-grounded responses.",
      "Implemented a hybrid knowledge system using Qdrant for semantic retrieval of university prospectuses, policies, and merit documents, with PostgreSQL and SQLAlchemy for transactional data.",
      "Developed secure multi-role access with Google OAuth and role-based authorization, alongside an admin document ingestion pipeline for PDF extraction, configurable chunking, embedding generation, and vector indexing.",
    ],
    liveUrl: "https://mentor-x-beryl.vercel.app/",
    featured: true,
    tags: [
      { name: "LangGraph", brandIcon: "LangGraph" },
      { name: "Qdrant", brandIcon: "Qdrant" },
      { name: "Next.js", brandIcon: "Next.js" },
      { name: "FastAPI", brandIcon: "FastAPI" },
      { name: "PostgreSQL", brandIcon: "PostgreSQL" },
      { name: "Gemini", brandIcon: "Gemini" },
      { name: "Groq", brandIcon: "Groq" },
    ],
  },
  {
    id: "campuzlift",
    num: "03",
    title: "CampuzLift",
    subtitle: "Intelligent Campus Ride-Sharing Platform",
    description:
      "Full-stack campus carpooling platform matching student and faculty drivers with passengers using fixed-route corridor matching.",
    bullets: [
      "Engineered a custom geospatial matching engine to calculate point-to-route distances and verify pickup/drop-off directionality along driver routes.",
      "Designed a weighted ranking system based on route compatibility, pickup proximity, schedule alignment, and driver ratings.",
      "Reduced route storage by 70%+ using PostgreSQL caching and Douglas-Peucker geometry simplification while maintaining 10-meter spatial accuracy.",
    ],
    liveUrl: "https://campuz-lift.vercel.app/",
    tags: [
      { name: "React", brandIcon: "React" },
      { name: "Node.js", brandIcon: "Node.js" },
      { name: "Express", brandIcon: "Express" },
      { name: "PostgreSQL", brandIcon: "PostgreSQL" },
      { name: "Prisma", brandIcon: "Prisma" },
    ],
  },
];

export function WorkSection() {
  return (
    <section id="work" className="below-fold mx-auto max-w-wrap px-6 py-24">
      <div className="hairline mb-20" />

      {/* Section Header */}
      <div className="reveal" style={{ transitionDelay: "0ms" }}>
        <div className="mb-14 flex items-baseline gap-4">
          <span className="font-mono text-sm text-faint">01</span>
          <span className="font-mono text-sm text-faint">/</span>
          <h2 className="text-lg font-medium tracking-tight text-strong">
            Selected work
          </h2>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-px border border-line bg-line md:grid-cols-2">
        {PROJECTS.map((project, index) => (
          <div
            key={project.id}
            className="reveal h-full"
            style={{ transitionDelay: `${(index % 2) * 80}ms` }}
          >
            <article className="group flex h-full flex-col bg-canvas p-7 transition-colors duration-300 hover:bg-hover sm:p-8">
              {/* Header */}
              <div className="flex items-start justify-between">
                <span className="font-mono text-xs text-faint transition-colors duration-300 group-hover:text-strong">
                  {project.num}
                </span>
                {project.featured && (
                  <span className="border border-line px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-faint">
                    Featured
                  </span>
                )}
              </div>

              {/* Title & Link */}
              <h3 className="mt-8 text-xl font-medium tracking-tight text-strong">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group/title link-underline inline-flex items-center gap-1"
                >
                  <span>{project.title}</span>
                  <span className="text-xs font-normal text-muted">
                    {" "}— {project.subtitle}
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="lucide lucide-arrow-up-right shrink-0 transition-transform duration-300 group-hover/title:-translate-y-0.5 group-hover/title:translate-x-0.5"
                    strokeWidth={1.5}
                  />
                </a>
              </h3>

              {/* Summary */}
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {project.description}
              </p>

              {/* Bullets */}
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
                {project.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex gap-3">
                    <span
                      className="mt-[9px] h-px w-3 shrink-0 bg-faint"
                      aria-hidden="true"
                    />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Live Link */}
              <p className="mt-5 flex flex-wrap gap-x-6 gap-y-1 text-sm">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group/link link-underline inline-flex items-center gap-1 text-muted transition-colors hover:text-strong"
                >
                  Live Demo
                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                  />
                </a>
              </p>

              {/* Badges */}
              <div className="mt-auto flex flex-wrap gap-1.5 pt-8">
                {project.tags.map((tag) => (
                  <span
                    key={tag.name}
                    className="inline-flex items-center gap-1.5 border border-line px-2.5 py-1 font-mono text-[11px] leading-relaxed text-faint transition-colors duration-300 hover:border-faint hover:text-strong"
                  >
                    {tag.brandIcon && (
                      <BrandIcon
                        name={tag.brandIcon}
                        className="h-3 w-3 shrink-0 fill-current"
                      />
                    )}
                    {tag.name}
                  </span>
                ))}
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}
