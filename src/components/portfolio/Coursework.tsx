import { motion } from "framer-motion";

const coursework = [
  "Database Management Systems",
  "Object-Oriented Programming",
  "Machine Learning",
  "Natural Language Processing",
  "Cloud Basics (AWS)",
  "Computer Networks",
  "Operating Systems",
  "Software Engineering",
  "Web Development",
  "Mobile App Development",
  "Internet Of Things",
  "Artificial Intelligence",
  "Data Science",
  "Data Analytics",
];

export function Coursework() {
  return (
    <section
      id="coursework"
      className="relative border-t border-border/60 px-6 py-32 md:px-12 md:py-44"
    >
      <div className="mx-auto max-w-7xl">
        <p className="flex items-center gap-3 text-[11px] uppercase tracking-[0.35em] text-muted-foreground">
          <span className="inline-block h-px w-8 bg-silver/60" /> Coursework
        </p>
        <h2 className="mt-6 text-4xl font-light tracking-tight md:text-6xl">
          Foundations that <span className="text-silver-gradient">shape</span> the work.
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mt-12 flex max-w-4xl flex-wrap gap-3"
        >
          {coursework.map((course) => (
            <span
              key={course}
              className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-light text-muted-foreground transition-colors hover:border-silver/40 hover:text-foreground"
            >
              {course}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
