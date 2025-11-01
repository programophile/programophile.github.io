import { motion } from 'framer-motion';
import { useState } from 'react';

const SkillCard = ({ skill, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        whileHover={{ 
          y: -8,
          rotateY: 5,
          rotateX: -5,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="relative group perspective-1000"
      >
        <div className="relative bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-800 hover:border-neon-blue/50 transition-all duration-300 transform-gpu">
          {/* Animated gradient background */}
          <motion.div
            className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle at center, ${skill.color}20, transparent)`,
            }}
            animate={isHovered ? {
              scale: [1, 1.1, 1],
            } : {}}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Icon */}
            <motion.div
              animate={isHovered ? {
                rotate: [0, -10, 10, -10, 0],
                scale: [1, 1.1, 1],
              } : {}}
              transition={{ duration: 0.5 }}
              className="mb-4 text-5xl"
              style={{
                filter: isHovered ? `drop-shadow(0 0 20px ${skill.color})` : 'none',
              }}
            >
              {skill.icon}
            </motion.div>

            {/* Name */}
            <h3 className="text-lg font-semibold text-white mb-2">
              {skill.name}
            </h3>

            {/* Level bar */}
            <div className="w-full bg-slate-800 rounded-full h-2 mb-2 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.05 + 0.3 }}
                className="h-full rounded-full"
                style={{
                  background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`,
                  boxShadow: isHovered ? `0 0 15px ${skill.color}` : 'none',
                }}
              />
            </div>

            {/* Level percentage */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0.7 }}
              className="text-sm text-gray-400"
            >
              {skill.level}%
            </motion.span>
          </div>

          {/* Animated corner borders */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <motion.rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="none"
              stroke={skill.color}
              strokeWidth="2"
              rx="12"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: isHovered ? 1 : 0,
                opacity: isHovered ? 0.5 : 0,
              }}
              transition={{ duration: 0.6 }}
              style={{ strokeDasharray: '20 10' }}
            />
          </svg>
        </div>

        {/* Glow effect */}
        <motion.div
          className="absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10"
          style={{
            background: `radial-gradient(circle, ${skill.color}40, transparent)`,
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default SkillCard;