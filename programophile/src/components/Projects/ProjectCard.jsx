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
        whileHover={{ y: -10 }}
        transition={{ duration: 0.3 }}
        className="relative bg-slate-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-800 hover:border-neon-blue/50 transition-colors duration-300"
      >
        {/* Glow effect on hover */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: 'radial-gradient(circle at center, rgba(0, 240, 255, 0.1), transparent 70%)',
          }}
          animate={isHovered ? {
            scale: [1, 1.2, 1],
          } : {}}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />

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
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="px-6 py-3 bg-neon-blue rounded-full text-white font-medium shadow-lg shadow-neon-blue/50"
            >
              View Demo
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="px-6 py-3 border-2 border-white rounded-full text-white font-medium"
            >
              GitHub
            </motion.button>
          </motion.div>
        </div>

        {/* Project content */}
        <div className="p-6 relative z-10">
          <motion.h3
            className="text-2xl font-bold text-white mb-2 group-hover:text-neon-blue transition-colors duration-300"
          >
            {project.title}
          </motion.h3>
          
          <p className="text-gray-400 mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * i }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-3 py-1 text-xs font-medium bg-neon-blue/10 text-neon-blue rounded-full border border-neon-blue/30"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Animated corner accent */}
        <motion.div
          className="absolute top-0 right-0 w-20 h-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <motion.path
              d="M 100 0 L 100 100 L 0 100"
              fill="none"
              stroke="url(#cornerGradient)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: isHovered ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            />
            <defs>
              <linearGradient id="cornerGradient">
                <stop offset="0%" stopColor="#00f0ff" />
                <stop offset="100%" stopColor="#bf00ff" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;