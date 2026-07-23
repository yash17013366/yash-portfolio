import { motion } from "framer-motion";
const certs = [
  "German Language Proficiency - Goethe-Institut A1 Certificate",
  "Introduction to Data Science in Python - University of Michigan, Coursera",
  "PCAP: Programming Essentials in Python - Cisco Networking Academy & OpenEDG Python Institute",
  "Data Modeling in Power BI - Coursera",
  "Tableau for Data Visualization and Analysis - Coursera",
  "Data Visualization in R with ggplot2 - Johns Hopkins University, Coursera",
  "Certificate for the Completion of C Training - Spoken Tutorial Project, IIT Bombay",
  "Go for Gold contest - Accenture India",
  "Operating Systems Basics - Cisco Networking Academy program",
];
export function Certifications() {
  return (
    <section
      id="certifications"
      className="relative border-t border-border/60 px-6 py-40 md:px-12 md:py-56"
    >
      <div className="mx-auto max-w-7xl">
        <p className="flex items-center gap-3 text-[11px] uppercase tracking-[0.35em] text-muted-foreground">
          <span className="inline-block h-px w-8 bg-silver/60" /> Certifications
        </p>
        <h2 className="mt-6 text-4xl font-light tracking-tight md:text-6xl">
          Signed, <span className="text-silver-gradient">stamped</span>, shipped.
        </h2>
        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certs.map((cert, i) => (
            <motion.div
              key={cert}
              initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all duration-500 hover:border-silver/40"
            >
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Certificate · 0{i + 1}
              </p>
              <p className="mt-6 text-lg font-light leading-relaxed text-foreground">{cert}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
