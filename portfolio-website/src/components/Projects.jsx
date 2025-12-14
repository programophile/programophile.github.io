import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Codeforces Problems",
      description:
        "Personal solutions and practice for Codeforces problems; focuses on algorithms and data structures in Python.",
      tech: ["Python", "DSA"],
      github: "https://github.com/programophile/Codeforces-Problems",
      live: "",
      image: null,
    },
    {
      title: "Face Detection (OpenCV)",
      description:
        "Face detection experiments with OpenCV in Python; classic CV pipeline and cascades.",
      tech: ["Python", "OpenCV"],
      github: "https://github.com/programophile/Face-Detection---OpenCv-python",
      live: "",
      image: null,
    },
    {
      title: "CGPA Calculator (BRACU)",
      description:
        "A utility to calculate CGPA for BRAC University students; simple UI and semester inputs.",
      tech: ["JavaScript"],
      github:
        "https://github.com/programophile/CGPA-Calculator-For-BRAC-University-Students-BRACU",
      live: "",
      image: null,
    },
    {
      title: "Hospital Management (PHP)",
      description:
        "Doctor–Patient–Admin communications and management built with PHP/HTML/CSS.",
      tech: ["PHP", "HTML", "CSS"],
      github:
        "https://github.com/programophile/HospitalManagement-Doctor-Patient-Admin-communation--PHP-HTML-CSS",
      live: "",
      image: null,
    },
    {
      title: "CSE440 NLP Assignments",
      description:
        "Course assignments exploring NLP tasks and transformer basics in notebooks.",
      tech: ["Jupyter", "NLP"],
      github:
        "https://github.com/programophile/CSE440-BRACU-Natural-Language-Processing-Assignments-",
      live: "",
      image: null,
    },
    {
      title: "Hospital Nurse HR (MERN)",
      description:
        "MERN stack app for hospital nurse/HR workflows and management.",
      tech: ["MongoDB", "Express", "React", "Node"],
      github:
        "https://github.com/programophile/Hospital-Nurse-Hr-Management---MERN_PROJECT",
      live: "",
      image: null,
    },
  ];

  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>

        <div className="projects-grid">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="View GitHub repository"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="View live project"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
                {project.image ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  <div className="project-placeholder">
                    <span>{project.title}</span>
                  </div>
                )}
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="projects-actions">
          {!showAll ? (
            <button
              className="projects-button"
              onClick={() => setShowAll(true)}
              aria-label="Show all projects"
            >
              Show All Projects
            </button>
          ) : (
            <button
              className="projects-button"
              onClick={() => setShowAll(false)}
              aria-label="Show fewer projects"
            >
              Show Fewer
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
