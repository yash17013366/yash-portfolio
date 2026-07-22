import { motion } from "framer-motion";
import { projects } from "./projects.data";
import { ProjectShowcase } from "./ProjectShowcase";

export function Projects() {
  return (
    <div id="projects">
      <section className="relative px-6 pt-40 md:px-12 md:pt-56">
        <div className="mx-auto max-w-7xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 text-[11px] uppercase tracking-[0.35em] text-muted-foreground"
          >
            <span className="inline-block h-px w-8 bg-silver/60" />
            Selected Work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-5xl font-light leading-[1.05] tracking-tight md:text-7xl"
          >
            Selected work.
            <br />
            <span className="text-muted-foreground/80">Built with intent.</span>
          </motion.h2>
        </div>
      </section>

      {projects.map((p) => (
        <ProjectShowcase key={p.id} project={p} />
      ))}
    </div>
  );
}
