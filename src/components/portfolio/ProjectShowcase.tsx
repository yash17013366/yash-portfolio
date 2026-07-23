import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Github } from "lucide-react";
import type { Project, ProjectSection } from "./projects.data";
import { projectImageManifest } from "virtual:project-gallery-manifest";

const sections: { id: ProjectSection; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "Problem" },
  { id: "solution", label: "Solution" },
  { id: "features", label: "Features" },
  { id: "tech", label: "Tech Stack" },
  { id: "github", label: "GitHub" },
];

function BrowserFrame({
  project,
  active,
  image,
  imageIndex,
  imageCount,
  onPrevious,
  onNext,
  onWheel,
}: {
  project: Project;
  active: ProjectSection;
  image?: string;
  imageIndex: number;
  imageCount: number;
  onPrevious: () => void;
  onNext: () => void;
  onWheel: (event: React.WheelEvent<HTMLDivElement>) => void;
}) {
  const map: Record<ProjectSection, { title: string; body: React.ReactNode }> = {
    overview: {
      title: "Overview",
      body: (
        <p className="text-[13px] font-light leading-relaxed text-muted-foreground">
          {project.overview}
        </p>
      ),
    },
    problem: {
      title: "The Problem",
      body: (
        <p className="text-[13px] font-light leading-relaxed text-muted-foreground">
          {project.problem}
        </p>
      ),
    },
    solution: {
      title: "The Solution",
      body: (
        <p className="text-[13px] font-light leading-relaxed text-muted-foreground">
          {project.solution}
        </p>
      ),
    },
    features: {
      title: "Features",
      body: (
        <ul className="space-y-2 text-[13px] font-light text-muted-foreground">
          {project.features.map((f) => (
            <li key={f} className="flex gap-3">
              <span className="mt-2 h-px w-4 shrink-0 bg-silver/60" />
              {f}
            </li>
          ))}
        </ul>
      ),
    },
    tech: {
      title: "Technology",
      body: (
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-light text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      ),
    },
    github: {
      title: "Repository",
      body: (
        <p className="text-[13px] font-light leading-relaxed text-muted-foreground">
          View the source code and project work on GitHub.
        </p>
      ),
    },
  };

  return (
    <div
      onWheel={onWheel}
      className="group relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border bg-card shadow-elegant"
    >
      {/* Traffic lights */}
      <div className="flex items-center gap-1.5 border-b border-border/70 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#2b2b2b]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#2b2b2b]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#2b2b2b]" />
        <div className="mx-auto rounded-full bg-background/60 px-3 py-0.5 text-[10px] tracking-widest text-muted-foreground">
          {project.name.toLowerCase().replace(/\s+/g, "-")}.app
        </div>
      </div>
      {/* Body */}
      {image ? (
        <div className="relative flex h-[calc(100%-2.75rem)] items-center justify-center bg-[#080b14] p-2 md:p-3">
          <AnimatePresence mode="wait">
            <motion.img
              key={image}
              src={image}
              alt={`${project.name} screenshot ${imageIndex + 1}`}
              initial={{ opacity: 0, scale: 0.985 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.015 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="h-full w-full rounded-lg object-contain"
              loading={imageIndex === 0 ? "eager" : "lazy"}
              decoding="async"
            />
          </AnimatePresence>
          {imageCount > 1 && (
            <>
              <button
                type="button"
                onClick={onPrevious}
                aria-label="Previous project screenshot"
                className="absolute left-4 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/55 text-white opacity-0 backdrop-blur transition-all hover:border-silver/70 hover:bg-black/75 group-hover:opacity-100 focus:opacity-100"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={onNext}
                aria-label="Next project screenshot"
                className="absolute right-4 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/55 text-white opacity-0 backdrop-blur transition-all hover:border-silver/70 hover:bg-black/75 group-hover:opacity-100 focus:opacity-100"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
              <p className="absolute bottom-5 right-5 rounded-full border border-white/10 bg-black/55 px-3 py-1 text-[10px] tracking-[0.2em] text-white/80 backdrop-blur">
                {String(imageIndex + 1).padStart(2, "0")} / {String(imageCount).padStart(2, "0")}
              </p>
            </>
          )}
        </div>
      ) : (
        <div className="relative h-[calc(100%-2.75rem)] p-8 md:p-12">
          <div className="pointer-events-none absolute inset-0 radial-silver opacity-60" />
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex h-full flex-col"
          >
            <div className="mb-6 flex items-baseline justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
                  {project.index} · {project.name}
                </p>
                <h4 className="mt-2 text-2xl font-light text-silver-gradient md:text-3xl">
                  {map[active].title}
                </h4>
              </div>
            </div>
            <div className="max-w-lg">{map[active].body}</div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export function ProjectShowcase({ project }: { project: Project }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [active, setActive] = useState<ProjectSection>("overview");
  const [imageIndex, setImageIndex] = useState(0);
  const lastWheelAt = useRef(0);
  const images = projectImageManifest[project.imageFolder] ?? [];
  const coverImage = images[0];
  const selectPreviousImage = () =>
    setImageIndex((current) => (images.length ? (current - 1 + images.length) % images.length : 0));
  const selectNextImage = () =>
    setImageIndex((current) => (images.length ? (current + 1) % images.length : 0));
  const handleImageWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    if (images.length < 2 || Math.abs(event.deltaY) < Math.abs(event.deltaX)) return;
    const now = Date.now();
    if (now - lastWheelAt.current < 350) return;
    event.preventDefault();
    lastWheelAt.current = now;
    event.deltaY > 0 ? selectNextImage() : selectPreviousImage();
  };

  useEffect(() => setImageIndex(0), [project.id]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const parallax = useTransform(scrollYProgress, [0, 1], [40, -40]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          setActive(visible.target.getAttribute("data-section") as ProjectSection);
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );
    Object.values(sectionRefs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [project.id]);

  return (
    <section
      ref={containerRef}
      id={project.id}
      className="relative border-t border-border/60 py-32 md:py-48"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 md:grid-cols-[1.1fr_1fr] md:px-12 lg:gap-24">
        {/* Left: sticky screenshot */}
        <div className="relative">
          <div className="sticky top-28 md:top-32">
            <motion.div style={{ y: parallax }}>
              <BrowserFrame
                project={project}
                active={active}
                image={images[imageIndex] ?? coverImage}
                imageIndex={imageIndex}
                imageCount={images.length}
                onPrevious={selectPreviousImage}
                onNext={selectNextImage}
                onWheel={handleImageWheel}
              />
              <div className="mt-8 flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
                    Project {project.index}
                  </p>
                  <h3 className="mt-3 text-4xl font-light tracking-tight text-foreground md:text-5xl lg:text-6xl">
                    {project.name}
                  </h3>
                  <p className="mt-3 text-sm font-light text-muted-foreground">{project.tagline}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right: independently sticky navigation and content */}
        <div className="grid min-w-0 grid-cols-1 gap-14 xl:grid-cols-[10rem_minmax(0,1fr)] xl:gap-16">
          {/* Sticky in-project nav */}
          <div className="sticky top-32 z-10 hidden self-start xl:block">
            <ul className="space-y-2 border-l border-border pl-4">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${project.id}-${s.id}`}
                    className={`flex items-center gap-3 text-xs uppercase tracking-[0.3em] transition-colors ${
                      active === s.id
                        ? "text-foreground"
                        : "text-muted-foreground/60 hover:text-muted-foreground"
                    }`}
                  >
                    <span
                      className={`h-px transition-all ${
                        active === s.id ? "w-8 bg-silver" : "w-3 bg-border"
                      }`}
                    />
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0 space-y-28 md:space-y-36">
            <div
              ref={(el) => {
                sectionRefs.current.overview = el;
              }}
              data-section="overview"
              id={`${project.id}-overview`}
              className="min-h-[34vh] scroll-mt-36"
            >
              <p className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
                Overview
              </p>
              <p className="mt-6 max-w-xl text-xl font-light leading-relaxed text-foreground md:text-2xl">
                {project.overview}
              </p>
            </div>

            <div
              ref={(el) => {
                sectionRefs.current.problem = el;
              }}
              data-section="problem"
              id={`${project.id}-problem`}
              className="min-h-[34vh] scroll-mt-36"
            >
              <p className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
                The Problem
              </p>
              <p className="mt-6 max-w-xl text-xl font-light leading-relaxed text-muted-foreground md:text-2xl">
                {project.problem}
              </p>
            </div>

            <div
              ref={(el) => {
                sectionRefs.current.solution = el;
              }}
              data-section="solution"
              id={`${project.id}-solution`}
              className="min-h-[34vh] scroll-mt-36"
            >
              <p className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
                The Solution
              </p>
              <p className="mt-6 max-w-xl text-xl font-light leading-relaxed text-foreground md:text-2xl">
                {project.solution}
              </p>
            </div>

            <div
              ref={(el) => {
                sectionRefs.current.features = el;
              }}
              data-section="features"
              id={`${project.id}-features`}
              className="min-h-[34vh] scroll-mt-36"
            >
              <p className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
                Features
              </p>
              <ul className="mt-6 space-y-4">
                {project.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-4 text-base font-light leading-relaxed text-foreground md:text-lg"
                  >
                    <span className="mt-3 h-px w-8 shrink-0 bg-silver/70" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div
              ref={(el) => {
                sectionRefs.current.tech = el;
              }}
              data-section="tech"
              id={`${project.id}-tech`}
              className="min-h-[34vh] scroll-mt-36"
            >
              <p className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
                Technology
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-card px-5 py-2 text-sm font-light text-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div
              ref={(el) => {
                sectionRefs.current.github = el;
              }}
              data-section="github"
              id={`${project.id}-github`}
              className="min-h-[34vh] scroll-mt-36"
            >
              <p className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
                Repository
              </p>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-3 rounded-full border border-border bg-card px-6 py-3 text-sm font-light text-foreground transition-all hover:border-silver/60 hover:bg-card/80"
              >
                <Github className="h-4 w-4" />
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
