import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import './About.css'

const About = () => {
  const aboutRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (aboutRef.current) {
      observer.observe(aboutRef.current)
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current)
      }
    }
  }, [])

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
              {/* Replace with your professional summary */}
              Hello! I'm a passionate Full Stack Developer with a love for creating
              elegant solutions to complex problems. My journey in web development
              started several years ago, and I've been constantly learning and evolving
              ever since.
            </p>

            <p className="about-paragraph">
              I specialize in building exceptional digital experiences. Whether it's a
              responsive website, a complex web application, or anything in between, I
              bring both technical expertise and creative problem-solving to every project.
            </p>

            <p className="about-paragraph">
              When I'm not coding, you can find me exploring new technologies, contributing
              to open-source projects, or sharing knowledge with the developer community.
              I believe in writing clean, maintainable code and creating user experiences
              that make a difference.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <h3 className="highlight-number">3+</h3>
                <p className="highlight-label">Years Experience</p>
              </div>
              <div className="highlight-item">
                <h3 className="highlight-number">50+</h3>
                <p className="highlight-label">Projects Completed</p>
              </div>
              <div className="highlight-item">
                <h3 className="highlight-number">30+</h3>
                <p className="highlight-label">Happy Clients</p>
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
                {/* Replace with your image */}
                <div className="placeholder-image">
                  <span>Your Photo</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
