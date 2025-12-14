import { motion } from "framer-motion";
import { useState } from "react";
import { FaBrain, FaGlobe, FaTools, FaCode } from "react-icons/fa";
import "./Skills.css";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const skillCategories = [
    {
      title: "ML & NLP",
      icon: <FaBrain />,
      skills: [
        "TensorFlow",
        "PyTorch",
        "Scikit-learn",
        "Hugging Face",
        "Transformers",
        "BERT/Roberta",
        "Spacy/NLTK",
        "Computer Vision",
      ],
    },
    {
      title: "Web Development",
      icon: <FaGlobe />,
      skills: [
        "Django",
        "REST APIs",
        "React.js",
        "Node.js",
        "Express.js",
        "PHP",
        "MySQL",
        "HTML/CSS",
      ],
    },
    {
      title: "Tools & Platforms",
      icon: <FaTools />,
      skills: [
        "Git & GitHub",
        "Docker",
        "VS Code",
        "Jupyter Notebook",
        "WordPress",
        "Postman",
        "Excel",
        "Google Analytics",
      ],
    },
    {
      title: "Languages",
      icon: <FaCode />,
      skills: [
        "Python",
        "JavaScript",
        "TypeScript",
        "Java",
        "C/C++",
        "PHP",
        "SQL",
        "Bash",
      ],
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          className="skills-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Technical Arsenal</h2>
          <p className="skills-subtitle">
            A comprehensive breakdown of my technical capabilities across
            various domains.
          </p>
        </motion.div>

        <div className="skills-content">
          <motion.div
            className="skills-tabs"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {skillCategories.map((category, index) => (
              <button
                key={category.title}
                className={`skill-tab ${
                  activeCategory === index ? "active" : ""
                }`}
                onClick={() => setActiveCategory(index)}
              >
                <span className="tab-icon">{category.icon}</span>
                <span className="tab-title">{category.title}</span>
              </button>
            ))}
          </motion.div>

          <motion.div
            className="skills-display"
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="skills-display-title">
              {skillCategories[activeCategory].title}
            </h3>
            <div className="skills-list">
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  className="skill-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <span className="skill-bullet">•</span>
                  <span className="skill-name">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
