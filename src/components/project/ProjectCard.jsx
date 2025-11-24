import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./Project.css";

const ProjectCard = ({ title, description, tech, image, website, github }) => {
    return (
        <div className="project-card">
            <div className="project-image-container">
                <img src={image} alt={title} className="project-image" />
                <div className="project-overlay"></div>
            </div>

            <div className="project-content">
                <h3 className="project-title">{title}</h3>
                <p className="project-description">{description}</p>

                <div className="project-tech-stack">
                    {tech.map((t, i) => (
                        <span key={i} className="tech-badge">
                            {t}
                        </span>
                    ))}
                </div>

                <div className="project-actions">
                    {website && (
                        <a
                            href={website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-live"
                        >
                            <FaExternalLinkAlt /> Live Demo
                        </a>
                    )}
                    {github && (
                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-code"
                        >
                            <FaGithub /> Source Code
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
