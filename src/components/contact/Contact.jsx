import React, { useEffect, useState } from "react";
import "./Contact.css";

const slogans = [
  "Every great connection starts with a message.",
  "Feel free to reach!"
];

const Contact = () => {
  const [sloganIndex, setSloganIndex] = useState(0);
  const [sloganClass, setSloganClass] = useState("show");

  useEffect(() => {
    const interval = setInterval(() => {
      setSloganClass("fall");
      setTimeout(() => {
        setSloganIndex((prev) => (prev + 1) % slogans.length);
        setSloganClass("rise");
        setTimeout(() => setSloganClass("show"), 400);
      }, 400);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const json = JSON.stringify(data);

    const resultDiv = document.getElementById("result");
    resultDiv.innerText = "Please wait...";

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: json
      });
      const resJson = await res.json();
      resultDiv.innerText = resJson.message;
    } catch (err) {
      console.error(err);
      resultDiv.innerText = "Something went wrong!";
    } finally {
      e.target.reset();
      setTimeout(() => (document.getElementById("result").style.display = "none"), 3000);
    }
  };

  return (

    < section id="contact" >
    <div className="contact-container glass-card-contact">
      <div className="contact-details">
        <h2 className="contact-title">Contact Me</h2>
        <div className={`slogan ${sloganClass}`}>{slogans[sloganIndex]}</div>

        <div className="contact-cards-container fade-in-up">
          <a href="mailto:jeshanrai96@gmail.com">
            <div className="contact-card">
              <img src="https://img.icons8.com/color/48/000000/gmail.png" alt="Email" />
              <h3>Email</h3>
              <span>jeshanrai96@gmail.com</span>
            </div>
          </a>

          <div className="contact-card phone">
            <img src="https://img.icons8.com/color/48/000000/phone.png" alt="Phone" />
            <h3>Phone</h3>
            <span>977-9860149199</span>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="fade-in-up">
        <input type="hidden" name="access_key" value="272c7a10-6c30-4b2a-9296-ca84dcc3b190" />
        <input type="text" name="name" placeholder="Your Name" required className="contact-input" />
        <input type="email" name="email" placeholder="Your Email" required className="contact-input" />
        <textarea name="message" placeholder="Your Message" required className="contact-textarea"></textarea>
        <button type="submit" className="contact-button-send">Send Message</button>
        <div id="result"></div>

        <div className="contact-card-socialmedia glass-card">
          <h3 className="follow-me">Follow Me</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/raichoro.ma" target="_blank" rel="noreferrer">
              <img src="https://img.icons8.com/color/48/000000/facebook-new.png" alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/jeshan_rai/" target="_blank" rel="noreferrer">
              <img src="https://img.icons8.com/color/48/000000/instagram-new.png" alt="Instagram" />
            </a>
            <a href="https://www.linkedin.com/in/jeshan-rai-45092b340/" target="_blank" rel="noreferrer">
              <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="LinkedIn" />
            </a>
            <a href="https://github.com/jeshanrai" target="_blank" rel="noreferrer">
              <img src="https://img.icons8.com/material-outlined/48/000000/github.png" alt="GitHub" />
            </a>
          </div>
        </div>
      </form>
    </div>
    </section >
  );
};

export default Contact;
