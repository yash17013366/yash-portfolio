import { motion } from "framer-motion";

const skillGroups = [
  { title: "Languages", skills: ["Java", "Python", "JavaScript", "TypeScript", "SQL"] },
  { title: "Frontend", skills: ["React.js", "React Native"] },
  { title: "Backend", skills: ["FastAPI", "Node.js", "Express.js", "REST APIs", "JWT Authentication"] },
  { title: "Database", skills: ["MongoDB", "Database Design", "Data Modeling"] },
  { title: "Machine Learning", skills: ["Machine Learning", "NLP", "LLM Integration", "Gemini API"] },
  { title: "Analytics", skills: ["Data Modeling", "Power BI", "Tableau"] },
  { title: "Tools", skills: ["Git", "GitHub", "Postman", "AWS", "Agile/Scrum", "SDLC", "DBMS", "OOP", "Problem Solving"] },
];

export function Skills() {
  return (
    <section id="skills" className="relative border-t border-border/60 px-6 py-40 md:px-12 md:py-56">
      <div className="mx-auto max-w-7xl">
        <p className="flex items-center gap-3 text-[11px] uppercase tracking-[0.35em] text-muted-foreground">
          <span className="inline-block h-px w-8 bg-silver/60" /> Technical Skills
        </p>
        <h2 className="mt-6 text-4xl font-light tracking-tight md:text-6xl">The <span className="text-silver-gradient">tools</span> behind the work.</h2>
        <div className="mt-16 grid gap-x-16 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, i) => (
            <motion.div key={group.title} initial={{ opacity: 0, y: 20, filter: "blur(8px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}>
              <h3 className="text-sm font-light uppercase tracking-[0.28em] text-foreground">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {group.skills.map((skill) => <span key={skill} className="rounded-full border border-border bg-card px-4 py-2 text-sm font-light text-muted-foreground transition-colors hover:border-silver/40 hover:text-foreground">{skill}</span>)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
