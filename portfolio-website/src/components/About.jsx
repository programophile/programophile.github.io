import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./About.css";

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="about" ref={aboutRef}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="about-paragraph">
              From the ashes, I shall rise. I'm Sad Yeamin Sayem — a Computer
              Science student at BRAC University in Bangladesh, actively
              learning and building in AI/ML and NLP. I enjoy turning ideas into
              practical systems and exploring research-driven approaches to real
              problems.
            </p>

            <p className="about-paragraph">
              On GitHub, I maintain projects across Python, JavaScript/MERN, and
              Jupyter notebooks. I like clean, readable code and reproducible
              setups. Recently, I’ve been focusing on neural networks, computer
              vision, and language processing.
            </p>

            <p className="about-paragraph">
              When not coding, I’m usually learning, experimenting, or
              collaborating on research ideas. I’m open to opportunities and
              collaborations in ML/NLP.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <h3 className="highlight-number">36</h3>
                <p className="highlight-label">Public Repos</p>
              </div>
              <div className="highlight-item">
                <h3 className="highlight-number">24</h3>
                <p className="highlight-label">Followers</p>
              </div>
              <div className="highlight-item">
                <h3 className="highlight-number">Bangladesh</h3>
                <p className="highlight-label">Location</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-image-wrapper"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="about-image-container">
              <div className="about-image-bg"></div>
              <div className="about-image">
                <img
                  src="https://avatars.githubusercontent.com/u/98210531?v=4"
                  alt="Sad Yeamin Sayem"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
