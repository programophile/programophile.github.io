import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce platform with user authentication, product management, shopping cart, and payment integration. Built with modern technologies for optimal performance.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/yourusername/project1",
      live: "https://project1.demo.com",
      image: null,
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, team collaboration features, and advanced filtering options. Perfect for remote teams.",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
      github: "https://github.com/yourusername/project2",
      live: "https://project2.demo.com",
      image: null,
    },
    {
      title: "Weather Dashboard",
      description:
        "An interactive weather dashboard that provides real-time weather data, forecasts, and beautiful visualizations. Supports multiple locations and units.",
      tech: ["React", "Tailwind CSS", "OpenWeather API"],
      github: "https://github.com/yourusername/project3",
      live: "https://project3.demo.com",
      image: null,
    },
    {
      title: "Social Media App",
      description:
        "A modern social media platform with posts, comments, likes, user profiles, and real-time notifications. Features responsive design and smooth animations.",
      tech: ["React", "Firebase", "Material-UI"],
      github: "https://github.com/yourusername/project4",
      live: "https://project4.demo.com",
      image: null,
    },
    {
      title: "Portfolio Builder",
      description:
        "A SaaS platform that allows users to create beautiful portfolio websites without coding. Includes drag-and-drop interface and multiple templates.",
      tech: ["Next.js", "Express", "MongoDB", "AWS"],
      github: "https://github.com/yourusername/project5",
      live: "https://project5.demo.com",
      image: null,
    },
    {
      title: "AI Chat Assistant",
      description:
        "An intelligent chat assistant powered by AI that helps users with various tasks. Features natural language processing and context-aware responses.",
      tech: ["React", "Python", "OpenAI API", "FastAPI"],
      github: "https://github.com/yourusername/project6",
      live: "https://project6.demo.com",
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
