import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  return (
    <header className="animate-nav fixed inset-x-0 top-0 z-50 border-b border-line bg-nav backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-wrap items-center justify-between px-6">
        <a href="#top" className="py-2 text-sm font-medium text-strong">
          Haseeb Ahmad
        </a>
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#work"
            className="link-underline py-2 text-sm text-muted transition-colors hover:text-strong"
          >
            Work
          </a>
          <a
            href="#experience"
            className="link-underline py-2 text-sm text-muted transition-colors hover:text-strong"
          >
            Experience
          </a>
          <a
            href="#capabilities"
            className="link-underline py-2 text-sm text-muted transition-colors hover:text-strong"
          >
            Capabilities
          </a>
          <a
            href="#about"
            className="link-underline py-2 text-sm text-muted transition-colors hover:text-strong"
          >
            About
          </a>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <a
            href="#contact"
            className="py-2 text-sm text-strong underline decoration-faint underline-offset-4 transition-colors hover:decoration-strong"
          >
            Get in touch
          </a>
        </div>
      </nav>
    </header>
  );
}
