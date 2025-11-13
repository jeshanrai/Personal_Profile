import { projects } from "../data/projects";

const ProjectCard = ({ title, description, tech }) => (
  <div className="project-card">
    <h3>{title}</h3>
    <p>{description}</p>
    <div className="project-tech">
      {tech.map((t, i) => (
        <span key={i}>{t}</span>
      ))}
    </div>
  </div>
);

const Projects = () => (
  <section id="projects">
    <h2>Featured Projects</h2>
    <div className="projects-grid">
      {projects.map((project, i) => (
        <ProjectCard key={i} {...project} />
      ))}
    </div>
  </section>
);

export default Projects;
