import { skills } from "../data/skills";

const SkillCard = ({ name, level, icon }) => (
  <div className="glass-card">
    <div className="skill-header">
      {icon}
      <div className="skill-name">{name}</div>
    </div>
    <div className="skill-bar">
      <div className="skill-progress" style={{ width: `${level}%` }}></div>
    </div>
  </div>
);

const Skills = () => (
  <section id="skills" className="glass-card">
    <h2>Skills & Expertise</h2>
    <div className="skills-grid">
      {skills.map((skill, i) => (
        <SkillCard key={i} {...skill} />
      ))}
    </div>
  </section>
);

export default Skills;
