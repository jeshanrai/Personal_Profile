const Education = () => (
  <section className=" education-section" id="education">
    <h2 className="section-title">Education</h2>
    
    <div className="education-container">
      {/* Education Item */}
      <div className="education-item">
        <h3>Bachelor's in Computer Science (CSIT)</h3>
        <span className="education-duration">2019 - 2023</span>
        <p>XYZ University, Nepal</p>
        <p>Focused on software development, web technologies, and database management.</p>
      </div>

      <div className="education-item">
        <h3>+2 Science</h3>
        <span className="education-duration">2017 - 2019</span>
        <p>ABC Higher Secondary School, Nepal</p>
        <p>Studied Physics, Chemistry, Mathematics, and Computer Science.</p>
      </div>

      <div className="education-item">
        <h3>Secondary School (SLC)</h3>
        <span className="education-duration">2015 - 2017</span>
        <p>DEF Secondary School, Nepal</p>
        <p>Completed secondary education with strong foundation in Science and Mathematics.</p>
      </div>
    </div>
  </section>
);

export default Education;
