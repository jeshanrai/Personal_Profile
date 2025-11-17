import React from "react";
import "./About.css";

export default function About({ profileSrc = "/images/profile/profile.png" }) {
  return (
    <div className="hero_ui_wrapper">
      <div className="hero_ui_card" role="region" aria-label="hero">
        <div className="hero_ui_left">
          <p className="hero_ui_intro">Hello, I'm</p>
          <h1 className="hero_ui_name">JESHAN RAI</h1>
         <p className="hero_ui_tagline">
<span className="tech-tag">Fullstack Developer</span> crafting modern, scalable web applications.
I specialize in building secure platforms, realtime communication systems, intuitive UI/UX,
and high‑performance backend architectures.
<br /><br />
Passionate about delivering seamless digital experiences, optimizing workflows,
and creating products that are fast, reliable, and user‑centric.
</p>
          <div className="hero_ui_socials">
            <a className="hero_ui_btn" href="mailto:jeshanrai663@gmail.com">jeshanrai663@gmail.com</a>
            <a className="hero_ui_btn" href="https://github.com/jeshanrai" target="_blank" rel="noreferrer">GitHub</a>
            <a className="hero_ui_btn" href="https://linkedin.com/in/jeshanrai" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>

        <div className="hero_ui_center">
          <div className="hero_ui_profile_frame">
            <img
              src={profileSrc}
              alt="Profile"
              className="hero_ui_profile_img"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src =
                  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='360' height='360'><rect width='100%' height='100%' fill='%23eef2f7'/><circle cx='180' cy='140' r='80' fill='%23d1d5db'/><rect x='70' y='260' width='240' height='60' rx='30' fill='%23cbd5e1'/></svg>";
              }}
            />
          </div>
        </div>
<aside className="hero_ui_right" aria-hidden="false">
  <div className="hero_ui_skill_card diamond_card">Frontend Developer</div>
  <div className="hero_ui_skill_card square3d_card">3D Designer</div>
  <div className="hero_ui_skill_card react_card">Backend Developer</div>
</aside>

      </div>
    </div>
  );
}
