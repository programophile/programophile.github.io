import { motion } from 'framer-motion';
import { useState } from 'react';

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
        className="relative bg-slate-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-800 hover:border-slate-700 transition-colors duration-300"
      >

        {/* Project image */}
        <div className="relative h-48 sm:h-56 overflow-hidden bg-slate-800">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
          />
          
          {/* Overlay on hover */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent flex items-center justify-center gap-4"
          >
            {project.demo && (
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white text-slate-900 rounded-lg font-medium shadow-lg"
              >
                View Demo
              </motion.a>
            )}
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border-2 border-slate-600 rounded-lg text-white font-medium hover:bg-slate-800"
              >
                GitHub
              </motion.a>
            )}
          </motion.div>
        </div>

        {/* Project content */}
        <div className="p-6 relative z-10">
          <h3 className="text-2xl font-bold text-white mb-2">
            {project.title}
          </h3>

          <p className="text-gray-400 mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs font-medium bg-slate-800 text-gray-300 rounded-md border border-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;