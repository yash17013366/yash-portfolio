import { motion } from "framer-motion";

const timeline = [
  {
    year: "Jun - Jul 2025",
    title: "Software Developer Intern",
    company: "Elevati Infotech Pvt. Ltd. · Pune, India",
    body: "Built application modules with React.js and React Native in an Agile sprint cycle; integrated REST APIs with Axios and used Jira, Git, and GitHub for delivery.",
  },
  {
    year: "Aug 2024 - Sep 2025",
    title: "Vice Lead - Content Team",
    company: "ACES Club, MIT ADT University · Pune, India",
    body: "Led 6+ writers producing scripts, reports, and promotional content for 10+ club activities, while mentoring new writers through structured onboarding.",
  },
  {
    year: "2023 - 2027",
    title: "B.Tech, Artificial Intelligence & Analytics",
    company: "MIT ADT University · CGPA: 8.45/10",
    body: "Bachelor of Technology program, expected to graduate in 2027.",
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="relative border-t border-border/60 px-6 py-40 md:px-12 md:py-56"
    >
      <div className="mx-auto max-w-5xl">
        <p className="flex items-center gap-3 text-[11px] uppercase tracking-[0.35em] text-muted-foreground">
          <span className="inline-block h-px w-8 bg-silver/60" /> Experience & Education
        </p>
        <h2 className="mt-6 text-4xl font-light tracking-tight md:text-6xl">
          A steady line of <span className="text-silver-gradient">building.</span>
        </h2>
        <ol className="relative mt-20">
          <div className="absolute bottom-0 left-[7.5rem] top-0 w-px bg-border md:left-44" />
          {timeline.map((t, i) => (
            <motion.li
              key={t.title}
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.9, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="relative grid grid-cols-[7.5rem_1fr] gap-8 pb-14 last:pb-0 md:grid-cols-[11rem_1fr]"
            >
              <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {t.year}
              </div>
              <div className="relative">
                <span className="absolute -left-[calc(1rem+1px)] top-2 h-1.5 w-1.5 rounded-full bg-silver" />
                <h3 className="text-xl font-light text-foreground md:text-2xl">{t.title}</h3>
                <p className="mt-1 text-sm font-light text-muted-foreground">{t.company}</p>
                <p className="mt-3 max-w-xl text-sm font-light leading-relaxed text-muted-foreground md:text-base">
                  {t.body}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
