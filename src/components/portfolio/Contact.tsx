import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, type FormEvent } from "react";
import { Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID ?? "SERVICE_ID";
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? "TEMPLATE_ID";
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? "PUBLIC_KEY";

const contactLinks = [
  { label: "Email", value: "yash99720@gmail.com", href: "mailto:yash99720@gmail.com", icon: Mail },
  {
    label: "LinkedIn",
    value: "Click to go to My LinkedIn",
    href: "https://www.linkedin.com/in/yash-gaikwad-468226283/",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "Click to go to My GitHub",
    href: "https://github.com/yash17013366",
    icon: Github,
  },
  { label: "Location", value: "Pune, India", icon: MapPin },
  {
    label: "Resume",
    value: "Click to download My resume",
    href: "/Yash_Gaikwad_Resume_.pdf",
    icon: Download,
    download: true,
  },
];

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");
    try {
      if (SERVICE_ID === "SERVICE_ID") await new Promise((r) => setTimeout(r, 900));
      else
        await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY });
      setStatus("success");
      formRef.current.reset();
      setTimeout(() => setStatus("idle"), 4200);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  }
  return (
    <section
      id="contact"
      className="relative border-t border-border/60 px-6 py-40 md:px-12 md:py-56"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 md:grid-cols-2 md:gap-24">
        <div>
          <p className="flex items-center gap-3 text-[11px] uppercase tracking-[0.35em] text-muted-foreground">
            <span className="inline-block h-px w-8 bg-silver/60" /> Contact
          </p>
          <h2 className="mt-6 text-4xl font-light leading-[1.05] tracking-tight md:text-6xl">
            Let's Build Something <span className="text-silver-gradient">Great.</span>
          </h2>
          <p className="mt-8 max-w-md text-base font-light leading-relaxed text-muted-foreground md:text-lg">
            I'm a B.Tech student in Artificial Intelligence & Analytics, building thoughtful
            AI-powered applications and full-stack systems. Let's talk about your next idea.
          </p>
          <div className="mt-12 grid gap-3 sm:grid-cols-2">
            {contactLinks.map(({ label, value, href, icon: Icon, download }) => {
              const content = (
                <>
                  <Icon className="h-4 w-4 text-silver" />
                  <span>
                    <span className="block text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                      {label}
                    </span>
                    <span className="mt-1 block text-sm font-light text-foreground">{value}</span>
                  </span>
                </>
              );
              return href ? (
                <a
                  key={label}
                  href={href}
                  target={download ? undefined : "_blank"}
                  rel={download ? undefined : "noreferrer"}
                  download={download}
                  className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 transition-colors hover:border-silver/50"
                >
                  {content}
                </a>
              ) : (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4"
                >
                  {content}
                </div>
              );
            })}
          </div>
        </div>
        <div className="relative">
          <div
            className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] opacity-70 blur-3xl"
            style={{
              background:
                "radial-gradient(ellipse at 60% 40%, rgba(220,220,220,0.12), transparent 70%)",
            }}
          />
          <div className="rounded-3xl border border-border bg-card p-8 md:p-10">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex min-h-[430px] flex-col items-center justify-center text-center"
                >
                  <p className="text-lg font-light text-foreground">Message sent.</p>
                  <p className="mt-1 text-sm font-light text-muted-foreground">
                    Thank you. I'll be in touch shortly.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  ref={formRef}
                  onSubmit={onSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <Field label="Name" name="name" required />
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Message" name="message" as="textarea" required />
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="group relative w-full overflow-hidden rounded-full border border-border bg-background/40 px-6 py-4 text-sm font-light uppercase tracking-widest text-foreground transition-all hover:border-silver/60 disabled:opacity-60"
                  >
                    <span className="relative">
                      {status === "sending" ? "Sending..." : "Send Message"}
                    </span>
                  </button>
                  {status === "error" && (
                    <p className="text-xs text-destructive">
                      Something went wrong. Please try again.
                    </p>
                  )}
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  as = "input",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  as?: "input" | "textarea";
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{label}</span>
      {as === "textarea" ? (
        <textarea
          name={name}
          required={required}
          rows={5}
          maxLength={2000}
          className="mt-2 block w-full resize-none border-0 border-b border-border bg-transparent py-3 text-base font-light text-foreground outline-none transition-colors placeholder:text-muted-foreground/40 focus:border-silver"
          placeholder="Tell me a little about what you're building..."
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          maxLength={200}
          className="mt-2 block w-full border-0 border-b border-border bg-transparent py-3 text-base font-light text-foreground outline-none transition-colors placeholder:text-muted-foreground/40 focus:border-silver"
          placeholder={
            type === "email"
              ? "you@domain.com"
              : label === "Subject"
                ? "Project inquiry"
                : "Your name"
          }
        />
      )}
    </label>
  );
}
