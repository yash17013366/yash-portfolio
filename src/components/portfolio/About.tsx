import { motion } from "framer-motion";
export function About() {
  return (
    <section id="about" className="relative border-t border-border/60 px-6 py-40 md:px-12 md:py-56">
      <div className="mx-auto max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 text-[11px] uppercase tracking-[0.35em] text-muted-foreground"
        >
          <span className="inline-block h-px w-8 bg-silver/60" /> About
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 text-4xl font-light leading-[1.15] tracking-tight text-foreground md:text-6xl"
        >
          I build AI-powered applications and full-stack systems with{" "}
          <span className="text-silver-gradient">thoughtful engineering</span>, from reliable APIs
          to useful user experiences.
        </motion.h2>
      </div>
    </section>
  );
}
