import { Bot, Brain, Server, Database } from "lucide-react";
import { BrandIcon } from "./BrandIcon";

interface Capability {
  num: string;
  title: string;
  description: string;
  icon: typeof Bot;
  badges: { name: string; brandIcon?: string }[];
}

const CAPABILITIES: Capability[] = [
  {
    num: "01",
    title: "AI & Agent Systems",
    description:
      "Autonomous multi-agent orchestration, stateful workflows, adaptive RAG pipelines, LLM reasoning, and semantic vector evaluation.",
    icon: Bot,
    badges: [
      { name: "LangGraph", brandIcon: "LangGraph" },
      { name: "LangChain", brandIcon: "LangChain" },
      { name: "RAG & CRAG" },
      { name: "LLM Workflows" },
      { name: "Google Gemini", brandIcon: "Gemini" },
      { name: "Groq", brandIcon: "Groq" },
      { name: "Embeddings" },
    ],
  },
  {
    num: "02",
    title: "Machine Learning & Data",
    description:
      "End-to-end ML lifecycle from exploratory data analysis and feature engineering to supervised model training and evaluation.",
    icon: Brain,
    badges: [
      { name: "Scikit-learn", brandIcon: "Scikit-learn" },
      { name: "Pandas & NumPy" },
      { name: "XGBoost" },
      { name: "TensorFlow", brandIcon: "TensorFlow" },
      { name: "Keras" },
      { name: "EDA" },
      { name: "Feature Engineering" },
    ],
  },
  {
    num: "03",
    title: "Backend & Systems",
    description:
      "High-throughput asynchronous APIs, multi-agent state checkpointing, role-based access control, and secure token authentication.",
    icon: Server,
    badges: [
      { name: "FastAPI", brandIcon: "FastAPI" },
      { name: "Python", brandIcon: "Python" },
      { name: "Node.js", brandIcon: "Node.js" },
      { name: "Express.js", brandIcon: "Express" },
      { name: "Uvicorn" },
      { name: "REST APIs" },
      { name: "RBAC & JWT" },
    ],
  },
  {
    num: "04",
    title: "Databases & DevOps",
    description:
      "Relational data schemas, high-dimensional vector search engines, containerized workflows, and automated CI/CD validation.",
    icon: Database,
    badges: [
      { name: "PostgreSQL", brandIcon: "PostgreSQL" },
      { name: "Qdrant Vector DB", brandIcon: "Qdrant" },
      { name: "MongoDB", brandIcon: "MongoDB" },
      { name: "Docker", brandIcon: "Docker" },
      { name: "Git", brandIcon: "Git" },
      { name: "GitHub Actions", brandIcon: "GitHub" },
      { name: "MLOps" },
    ],
  },
];

export function CapabilitiesSection() {
  return (
    <section
      id="capabilities"
      className="below-fold mx-auto max-w-wrap px-6 py-24"
    >
      <div className="hairline mb-20" />

      {/* Section Header */}
      <div className="reveal" style={{ transitionDelay: "0ms" }}>
        <div className="mb-14 flex items-baseline gap-4">
          <span className="font-mono text-sm text-faint">03</span>
          <span className="font-mono text-sm text-faint">/</span>
          <h2 className="text-lg font-medium tracking-tight text-strong">
            Capabilities
          </h2>
        </div>
      </div>

      {/* Grid */}
      <div className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {CAPABILITIES.map((cap, index) => {
          const Icon = cap.icon;
          return (
            <div
              key={cap.num}
              className="reveal h-full"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="group flex h-full flex-col bg-canvas p-7 transition-colors duration-300 hover:bg-hover">
                <div className="flex items-start justify-between">
                  <Icon
                    size={24}
                    strokeWidth={1.25}
                    className="text-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:text-strong"
                  />
                  <span className="font-mono text-xs text-faint transition-colors duration-300 group-hover:text-strong">
                    {cap.num}
                  </span>
                </div>

                <h3 className="mt-12 text-base font-medium text-strong">
                  {cap.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {cap.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-1.5 pt-8">
                  {cap.badges.map((badge) => (
                    <span
                      key={badge.name}
                      className="inline-flex items-center gap-1.5 border border-line px-2.5 py-1 font-mono text-[11px] leading-relaxed text-faint transition-colors duration-300 hover:border-faint hover:text-strong"
                    >
                      {badge.brandIcon && (
                        <BrandIcon
                          name={badge.brandIcon}
                          className="h-3 w-3 shrink-0 fill-current"
                        />
                      )}
                      {badge.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
