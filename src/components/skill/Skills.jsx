import React from "react";
import "./Skills.css";

const Skills = () => {
  const skills = [
    { name: "React.js", img: "/images/skill/react.png" },
    { name: "Next.js", img: "/images/skill/next.png" },
    { name: "JavaScript", img: "/images/skill/js.png" },
    { name: "Node.js", img: "/images/skill/node.png" },
    { name: "Express.js", img: "/images/skill/express.png" },
    { name: "MongoDB", img: "/images/skill/mongo.png" },
    { name: "MySQL", img: "/images/skill/mysql.png" },
    { name: "PHP", img: "/images/skill/php.png" },
    { name: "Git & GitHub", img: "/images/skill/git.png" },
  ];

  return (
    <section id="skills" className="glass-card">
      <div className="skills-container">
        <h1 className="skills-title">My Skills</h1>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`skill-card ${skill.name === "JavaScript" ? "javascript" : ""}`}
              style={{
                "--skill-color": skill.color,
                animationDelay: `${index * 0.1}s`
              }}
            >
              <img src={skill.img} alt={skill.name} className="skill-icon" />
              <h3 className="skill-name">{skill.name}</h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
