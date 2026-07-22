import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { id: "top", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "coursework", label: "Coursework" },
  { id: "experience", label: "Experience & Education" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export function Nav({ show }: { show: boolean }) {
  const [activeId, setActiveId] = useState("top");

  useEffect(() => {
    const visibility = new Map<string, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => visibility.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0));
        const active = [...visibility.entries()].sort((a, b) => b[1] - a[1])[0];
        if (active?.[1] > 0) setActiveId(active[0]);
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] },
    );

    links.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  function navigateTo(id: string) {
    setActiveId(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <motion.header initial={{ y: -30, opacity: 0 }} animate={show ? { y: 0, opacity: 1 } : { y: -30, opacity: 0 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: show ? 0.1 : 0 }} className="fixed left-0 right-0 top-0 z-50 flex justify-center px-4 pt-5">
      <nav aria-label="Primary navigation" className="glass flex max-w-[calc(100vw-2rem)] items-center gap-1 overflow-x-auto rounded-full px-2 py-2 pl-4 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <a href="#top" onClick={(event) => { event.preventDefault(); navigateTo("top"); }} className="mr-2 shrink-0 text-sm font-medium tracking-widest text-silver-gradient">YG</a>
        <span className="mx-1 h-4 shrink-0 w-px bg-border" />
        {links.map((link) => {
          const isActive = activeId === link.id;
          return <a key={link.id} href={`#${link.id}`} onClick={(event) => { event.preventDefault(); navigateTo(link.id); }} aria-current={isActive ? "page" : undefined} className={`relative shrink-0 rounded-full px-3 py-1.5 text-xs font-light tracking-wide transition-colors md:px-4 md:text-[13px] ${isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}>
            <AnimatePresence initial={false}>{isActive && <motion.span layoutId="active-navigation-pill" className="absolute inset-0 -z-10 rounded-full border border-white/15 bg-white/[0.08] shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_0_18px_rgba(220,220,220,0.12)] backdrop-blur-md" initial={{ opacity: 0.5 }} animate={{ opacity: 1 }} exit={{ opacity: 0.5 }} transition={{ type: "spring", stiffness: 380, damping: 32, mass: 0.7 }} />}</AnimatePresence>
            <span className="relative">{link.label}</span>
          </a>;
        })}
      </nav>
    </motion.header>
  );
}
