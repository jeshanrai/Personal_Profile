import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Projects from "./components/project/Projects";
import Skills from "./components/skill/Skills";
import Contact from "./components/contact/Contact";
import Footer from "./components/Footer";
import CanvasDroplets from "./components/CanvasDroplets";
import ThreeBackground from "./components/ThreeBackground";
import { useActiveSection } from "./hooks/useActiveSection";
import Education from "./components/education/Education";
import "./GlassPortfolio.css";

const GlassPortfolio = () => {
  const { activeSection, scrolled } = useActiveSection();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="glass-portfolio">
      <ThreeBackground mousePosition={mousePosition} />
      <CanvasDroplets />
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      <Hero scrollToSection={scrollToSection} />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
};

export default GlassPortfolio;
