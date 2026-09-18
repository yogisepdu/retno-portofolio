import About from "./components/About";
import AmbientBackground from "./components/AmbientBackground";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Organization from "./components/Organization";
import ScrollProgress from "./components/ScrollProgress";
import Skills from "./components/Skills";
import Work from "./components/Work";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <AmbientBackground />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Work />
      <Organization />
      <Contact />
      <Footer />
    </main>
  );
}
