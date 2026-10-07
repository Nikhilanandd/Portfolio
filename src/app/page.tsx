import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Certifications from "@/components/sections/Certifications";
import Education from "@/components/sections/Education";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Certifications />
      <Education />
      <Achievements />
      <Contact />
    </>
  );
}
