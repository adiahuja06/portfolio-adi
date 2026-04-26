import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import About from "../components/About";
import Blog from "../components/Blog";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="bg-[#0f0f0f] text-white">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Blog />
      <Skills />
      <Footer />
    </main>
  );
}