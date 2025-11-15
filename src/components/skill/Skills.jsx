import './Skills.css';
const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      items: [
        { name: "HTML", icon: "/icons/html.png" },
        { name: "CSS", icon: "/icons/css.png" },
        { name: "Tailwind CSS", icon: "/icons/tailwind.png" },
        { name: "React.js", icon: "/icons/react.png" },
        { name: "Next.js", icon: "/icons/next.png" }
      ]
    },
    {
      title: "Backend Development",
      items: [
        { name: "Node.js", icon: "/icons/node.png" },
        { name: "Express.js", icon: "/icons/express.png" },
        { name: "REST APIs", icon: "/icons/api.png" }
      ]
    },
    {
      title: "Database",
      items: [
        { name: "MySQL", icon: "/icons/mysql.png" },
        { name: "MongoDB", icon: "/icons/mongo.png" }
      ]
    },
    {
      title: "Tools",
      items: [
        { name: "Git", icon: "/icons/git.png" },
        { name: "GitHub", icon: "/icons/github.png" },
        { name: "Postman", icon: "/icons/postman.png" },
        { name: "Vercel", icon: "/icons/vercel.png" },
        { name: "Trello", icon: "/icons/trello.png" },
        { name: "Thunder Client", icon: "/icons/thunder.png" }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">Skills & Expertise</h2>

      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3 className="category-title">{category.title}</h3>

            <div className="category-items">
              {category.items.map((item, i) => (
                <div key={i} className="skill-card glass-skill">
                  <img src={item.icon} className="skill-icon" alt={item.name} />
                  <p className="skill-name">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
