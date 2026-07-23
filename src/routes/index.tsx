import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SmoothScroll } from "@/components/portfolio/SmoothScroll";
import { Intro } from "@/components/portfolio/Intro";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Projects } from "@/components/portfolio/Projects";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Coursework } from "@/components/portfolio/Coursework";
import { Experience } from "@/components/portfolio/Experience";
import { Certifications } from "@/components/portfolio/Certifications";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Yash Gaikwad — AI & Analytics Student" },
      {
        name: "description",
        content:
          "The portfolio of Yash Gaikwad — B.Tech student in Artificial Intelligence & Analytics building AI-powered applications and full-stack systems.",
      },
      { property: "og:title", content: "Yash Gaikwad — AI & Analytics Student" },
      {
        property: "og:description",
        content: "Selected AI-powered applications and full-stack systems by Yash Gaikwad.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [ready, setReady] = useState(false);

  // Skip intro on subsequent visits within the session
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("yg-intro-seen")) setReady(true);
  }, []);

  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <SmoothScroll />
      {!ready && (
        <Intro
          onDone={() => {
            setReady(true);
            if (typeof window !== "undefined") sessionStorage.setItem("yg-intro-seen", "1");
          }}
        />
      )}
      <Nav show={ready} />
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Coursework />
      <Experience />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}
