import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Haseeb Ahmad — AI / ML Engineer",
  description:
    "Computer Science student and Software Engineer specializing in AI/ML engineering, agentic systems, and LLM-powered applications.",
  authors: [{ name: "Haseeb Ahmad" }],
  keywords: [
    "Haseeb Ahmad",
    "AI / ML Engineer",
    "Agentic Systems",
    "LangGraph",
    "FastAPI",
    "Python",
    "RAG",
    "Next.js",
    "Portfolio",
  ],
  openGraph: {
    title: "Haseeb Ahmad — AI / ML Engineer",
    description:
      "Specializing in AI/ML engineering, agentic systems, LangGraph architectures, and production backend pipelines.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Haseeb Ahmad — AI / ML Engineer",
    description:
      "Specializing in AI/ML engineering, agentic systems, LangGraph architectures, and production backend pipelines.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}document.documentElement.dataset.theme=t}catch(e){}})()`,
          }}
        />
      </head>
      <body className="bg-canvas font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
