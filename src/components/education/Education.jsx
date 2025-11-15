import './Education.css';

const Education = () => (
  <section className="edu-section" id="education">
    <h2 className="edu-title">Education</h2>

    <div className="edu-wrapper">
      
      {/* Bachelor's */}
      <div className="edu-card glass-card">
        <h3 className="edu-degree">Bachelor's in Computer Science and Information Technology (CSIT)</h3>
        <span className="edu-year">2022 – Present</span>
        <p className="edu-school">Orchid International College</p>
        <p className="edu-detail">
          Currently pursuing a Bachelor's degree in CSIT with a strong focus on programming,
          software development, and modern web technologies.
        </p>
      </div>

      {/* +2 Education */}
      <div className="edu-card glass-card">
        <h3 className="edu-degree">Higher Secondary Education (+2 Science)</h3>
        <span className="edu-year">2019 – 2022</span>
        <p className="edu-school">Trinity International College</p>
        <p className="edu-detail">
          Completed +2 in Science specializing in Physics, Chemistry, Mathematics, and Computer Science.
        </p>
      </div>

      {/* School */}
      <div className="edu-card glass-card">
        <h3 className="edu-degree">Secondary Education Examination (SEE)</h3>
        <span className="edu-year">2007 – 2019</span>
        <p className="edu-school">Joseph High School</p>
        <p className="edu-detail">
          Completed school-level education with a strong academic foundation and active participation in extracurricular activities.
        </p>
      </div>

    </div>
  </section>
);

export default Education;
