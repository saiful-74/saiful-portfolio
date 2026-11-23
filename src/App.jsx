import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Research from "./components/Research";
import Skills from "./components/Skills";

/*
  App
  The whole page, top to bottom. To change the order of sections, move the lines
  inside <main>.
*/
export default function App() {
  return (
    <>
      {/* Lets keyboard users jump past the navigation */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-on-accent"
      >
        Skip to content
      </a>

      <Header />

      <main id="main">
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Research />
        <Education />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
