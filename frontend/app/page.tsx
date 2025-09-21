import Hero from "../src/components/Hero";
import Projects from "../src/components/Projects";
import Skills from "../src/components/Skills";
import About from "../src/components/About";
import Contact from "../src/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <main className="max-w-6xl mx-auto p-6 space-y-16">
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
