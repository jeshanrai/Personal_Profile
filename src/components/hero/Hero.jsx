import { motion } from "framer-motion";
import "./Hero.css";

const Hero = ({ scrollToSection }) => {
  return (
    <section id="home" className="hero-section">
      {/* Left Content */}
      <div className="hero-left">
        <motion.h1
          className="hero-title"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Welcome.
        </motion.h1>

        <motion.h2
          className="hero-name"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          I’m <span>Jeshan Rai</span>
        </motion.h2>

        <motion.p
          className="hero-subtext"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          A creative <strong>Full Stack Developer</strong> crafting immersive
          and modern web experiences using <span>React</span>, <span>Node.js</span>,
          and <span>Tailwind CSS</span>.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <button
            className="glass-button primary"
            onClick={() => scrollToSection("projects")}
          >
            View Work
          </button>
          <button
            className="glass-button secondary"
            onClick={() => scrollToSection("contact")}
          >
            Get in Touch
          </button>
        </motion.div>
      </div>

      {/* Right Content */}
      <motion.div
        className="hero-right"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        <div className="hero-blob"></div>
        <div className="hero-ring"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
