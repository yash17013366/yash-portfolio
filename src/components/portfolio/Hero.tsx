import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen w-full items-center overflow-hidden px-6 pt-32 md:px-12"
    >
      <div className="pointer-events-none absolute inset-0 radial-silver" />
      <div
        className="pointer-events-none absolute -left-40 top-1/3 h-[600px] w-[600px] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(192,192,192,0.15), transparent 60%)" }}
      />
      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 pb-16 md:grid-cols-[1.2fr_1fr] md:gap-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, filter: "blur(20px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
          className="group relative order-1 mx-auto aspect-[4/5] w-full max-w-sm md:order-2 md:max-w-md"
        >
          <div
            className="absolute -inset-8 -z-10 rounded-[3rem] blur-3xl opacity-70 transition-all duration-500 ease-out group-hover:-inset-12 group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(ellipse at 50% 40%, rgba(220,220,220,0.28), rgba(9,9,9,0) 65%)",
            }}
          />
          <motion.div
            animate={{ y: [0, -6, 0] }}
            whileHover={{
              y: -8,
              rotate: -0.25,
              scale: 1.025,
              transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
            }}
            transition={{
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              default: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
            }}
            className="relative h-full w-full rotate-[1.25deg] overflow-hidden rounded-[2rem] border border-border bg-card shadow-elegant transition-shadow duration-500 ease-out group-hover:shadow-[0_28px_70px_-24px_rgba(220,220,220,0.38)]"
          >
            <img
              src="/yash-blazer-portrait.jpeg"
              alt="Yash Gaikwad in a blazer"
              className="h-full w-full object-cover object-top contrast-[1.03] saturate-[0.94]"
              loading="eager"
              decoding="async"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-background/55 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-br from-white/15 via-white/0 to-transparent opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" />
            <div className="absolute left-5 top-5 text-[10px] uppercase tracking-[0.3em] text-muted-foreground/80">
              YG · 01
            </div>
          </motion.div>
        </motion.div>
        <div className="order-2 md:order-1">
          <motion.p
            initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="mb-8 flex items-center gap-3 text-[11px] uppercase tracking-[0.35em] text-muted-foreground"
          >
            <span className="inline-block h-px w-8 bg-silver/60" />
            Portfolio · 2026
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
            className="text-5xl font-light leading-[1.02] tracking-tight text-foreground md:text-7xl lg:text-[5.25rem]"
          >
            Hello. I'm <span className="text-silver-gradient">Yash Gaikwad</span>.<br />
            <span className="text-muted-foreground/90">
              B.Tech student in AI & Analytics, building AI-powered products.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
            className="mt-10 flex flex-wrap items-center gap-3 text-sm font-light text-muted-foreground md:text-base"
          >
            <span>AI & Analytics</span>
            <span className="h-1 w-1 rounded-full bg-silver/50" />
            <span>Full Stack Development</span>
            <span className="h-1 w-1 rounded-full bg-silver/50" />
            <span>Machine Learning</span>
          </motion.p>
          <motion.a
            href="#projects"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 1 }}
            className="mt-16 inline-flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-muted-foreground transition-colors hover:text-foreground"
          >
            <span className="relative flex h-8 w-5 items-start justify-center rounded-full border border-border">
              <motion.span
                animate={{ y: [2, 14, 2], opacity: [0, 1, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                className="mt-1 h-1.5 w-px bg-silver"
              />
            </span>
            Explore
          </motion.a>
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}
