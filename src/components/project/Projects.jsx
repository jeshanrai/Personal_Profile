import React, { useState, useEffect, useRef } from "react";
import { projects } from "../../data/projects";
import "./Project.css";

const ProjectCard = ({ title, description, tech, image, website, github }) => (
  <div className="project-card">
    <h3>{title}</h3>
    <img src={image} alt={title} className="project-image" />
    <p>{description}</p>
    <div className="project-tech">
      {tech.map((t, i) => (
        <span key={i}>{t}</span>
      ))}
    </div>
    <div className="project-links">
      {website && (
        <a href={website} target="_blank" rel="noopener noreferrer">
          Website
        </a>
      )}
      {github && (
        <a href={github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      )}
    </div>
  </div>
);

const Projects = () => {
  const sliderRef = useRef(null);
  const [index, setIndex] = useState(0);

  // Create infinite array (duplicate list)
  const infiniteProjects = [...projects, ...projects];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Reset index instantly when reaching halfway (loop illusion)
  useEffect(() => {
    if (index === projects.length) {
      setTimeout(() => {
        sliderRef.current.style.transition = "none";
        setIndex(0);
      }, 700);

      setTimeout(() => {
        sliderRef.current.style.transition = "transform 0.7s ease-in-out";
      }, 750);
    }
  }, [index]);

  return (
    <section id="projects">
      <h2>Featured Projects</h2>

      <div className="projects-container">
        <div
          className="projects-slider"
          ref={sliderRef}
          style={{
            transform: `translateX(-${index * 50}%)`, // 50% = 2 cards per view
            transition: "transform 0.7s ease-in-out",
          }}
        >
          {infiniteProjects.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
