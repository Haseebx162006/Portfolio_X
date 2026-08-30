# Haseeb Ahmad — Portfolio Website

A minimal, high-performance, and responsive personal portfolio website for **Haseeb Ahmad (AI / ML Engineer)**, built with **Next.js 14/15 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Lucide Icons**.

---

## 🌟 Features

- **Editorial Minimalist Aesthetic**: Clean typography with Inter and JetBrains Mono, border grid layout, hairline dividers, and custom interactive states.
- **Dark & Light Mode Switcher**: Smooth theme transitions with state persistence in `localStorage` and system theme detection.
- **Top Reading Progress Bar**: Real-time scroll indicator tracking window scroll position.
- **Animated Metric Counters**: Smooth cubic-eased number counter animations triggered upon scrolling into view.
- **Continuous Tech Marquee**: Infinite smooth-scrolling ticker with scalable SVG brand icons.
- **Selected Work**: Featured project cards showcasing **CodeCrew**, **MentorX**, and **CampuzLift** with live links, detailed architecture bullet points, and technology badges.
- **Track Record & Leadership**: Timeline of technical leadership at **Google Developer Groups on Campus (GDGoC)**, hackathon wins, and mentorship achievements.
- **Technical Capabilities**: 4-card breakdown covering AI & Agent Systems, Machine Learning & Data, Backend & Systems, and Databases & DevOps.
- **About Section**: Professional bio, grayscale-to-color hover transition portrait, education credentials (COMSATS University Islamabad, 3.92 CGPA), and honors.
- **Contact Channels**: Interactive contact form with status feedback and direct links for Email, LinkedIn, GitHub, Phone, and Resume PDF download.
- **Fully Responsive & Accessible**: Optimized for mobile, tablet, and ultra-wide displays.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/) & Custom SVG Sprite Sheet
- **Deployment Ready**: Vercel, Netlify, Cloudflare Pages, or GitHub Pages

---

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Design system tokens, variables, animations & utilities
│   ├── layout.tsx           # Root layout with font imports, theme script & SEO metadata
│   └── page.tsx             # Main page assembling all portfolio sections
├── components/
│   ├── AboutSection.tsx     # Bio, black & white portrait photo, education & awards
│   ├── BrandIcon.tsx        # High-performance SVG sprite sheet loader & icon component
│   ├── CapabilitiesSection.tsx # Technical capabilities & core competencies grid
│   ├── ContactSection.tsx   # Contact form, direct links & footer
│   ├── Counter.tsx          # IntersectionObserver animated number counter
│   ├── ExperienceSection.tsx# GDGoC leadership timeline & competition wins
│   ├── HeroSection.tsx      # Status pill, headline, metrics & tech marquee
│   ├── Navbar.tsx           # Sticky glass navbar with anchor links & theme toggle
│   ├── ProgressBar.tsx      # Fixed top scroll progress bar
│   ├── ScrollReveal.tsx     # IntersectionObserver scroll reveal animations
│   ├── ThemeToggle.tsx      # Dark/Light mode switcher button
│   └── WorkSection.tsx      # Featured project cards (CodeCrew, MentorX, CampuzLift)
├── public/
│   ├── brand-sprite.svg     # SVG symbol definitions for programming languages & tools
│   ├── haseeb.jpeg          # Profile photograph
│   └── Haseeb_Ahmad_Resume.pdf # Resume PDF
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🚀 Getting Started

### 1. Prerequisites
- [Node.js](https://nodejs.org/) (v18.17+ or v20+)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)

### 2. Installation
Clone the repository and install the dependencies:
```bash
git clone https://github.com/Haseebx162006/portfolio.git
cd portfolio
npm install
```

### 3. Development Server
Start the development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to see the live site.

### 4. Production Build
Create an optimized production build:
```bash
npm run build
npm run start
```

---

## 📬 Contact & Connect

- **Name**: Haseeb Ahmad
- **Role**: AI / ML Engineer
- **Email**: [haseebahmad0160@gmail.com](mailto:haseebahmad0160@gmail.com)
- **LinkedIn**: [linkedin.com/in/haseeb-ahmad-6b506a355](https://www.linkedin.com/in/haseeb-ahmad-6b506a355/)
- **GitHub**: [github.com/Haseebx162006](https://github.com/Haseebx162006)
- **Phone**: +92 324 9540797
- **Location**: Lahore, Pakistan

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
