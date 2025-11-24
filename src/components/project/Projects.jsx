import React, { useRef } from "react";
import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";
import "./Project.css";

const Projects = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = direction === "left" ? -current.offsetWidth : current.offsetWidth;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-header">
        <h2>Featured Projects</h2>
        <p>A selection of my recent work</p>
      </div>

      <div className="projects-container">
        <button className="scroll-btn left" onClick={() => scroll("left")}>
          &lt;
        </button>

        <div className="projects-scroll-wrapper" ref={scrollRef}>
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <button className="scroll-btn right" onClick={() => scroll("right")}>
          &gt;
        </button>
      </div>
    </section>
  );
};

export default Projects;
