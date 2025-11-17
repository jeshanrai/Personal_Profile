import { motion } from "framer-motion";
import "./Hero.css";

const Hero = ({ scrollToSection }) => {
  return (
    <section id="home" className="hero-wrapper">
      {/* Left Content */}
      <div className="hero-left-content">
       <motion.h1
  className="hero-main-title"
  initial={{ y: 50, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8 }}
>
  Thank you for visiting
</motion.h1>


        <motion.p
          className="hero-description"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          A creative <strong className="tech-tag">Full Stack Developer</strong> crafting immersive
          and modern web experiences using 
          <span className="tech-tag">MERN</span> Stack
        </motion.p>

        <motion.div
          className="hero-button-group"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <button
            className="hero-btn primary-btn"
            onClick={() => scrollToSection("projects")}
          >
            View Work
          </button>

          <button
            className="hero-btn primary-btn"
            onClick={() => scrollToSection("Contact")}
          >
            Get in Touch
          </button>

         <a
  href="/file/JESHAN_RAI.pdf"
  download
  className="hero-btn primary-btn"
>
  <img 
    src="./images/skill/download.png" 
    alt="Download" 
    style={{ width: "18px", height: "18px", marginRight: "0.5rem" }} 
  />
 Resume
</a>

        </motion.div>
      </div>

    </section>
  );
};

export default Hero;
