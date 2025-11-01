import { motion } from 'framer-motion';
import { useState } from 'react';
import AnimatedShapes from './AnimatedShapes';
import { fadeInUp, fadeInDown, smoothTransition } from '../../utils/animations';

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Animated background shapes */}
      <AnimatedShapes />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Greeting */}
        <motion.div
          variants={fadeInDown}
          initial="initial"
          animate="animate"
          transition={{ ...smoothTransition, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-neon-blue/10 border border-neon-blue/30 text-neon-blue text-sm font-medium backdrop-blur-sm">
            👋 Welcome to my portfolio
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ ...smoothTransition, delay: 0.4 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-neon-blue to-neon-purple bg-clip-text text-transparent"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.span
            animate={isHovered ? { scale: 1.05, rotateZ: [0, -1, 1, 0] } : { scale: 1 }}
            transition={{ duration: 0.3 }}
            className="inline-block"
          >
            Your Name
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ ...smoothTransition, delay: 0.6 }}
          className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-8 max-w-3xl mx-auto"
        >
          Full Stack Developer • Designer • Creative Technologist
        </motion.p>

        {/* Description */}
        <motion.p
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ ...smoothTransition, delay: 0.8 }}
          className="text-base sm:text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          Crafting digital experiences with modern web technologies. 
          Passionate about building beautiful, performant applications.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ ...smoothTransition, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 240, 255, 0.6)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full text-white font-semibold shadow-lg shadow-neon-blue/50 transition-all duration-300"
          >
            View My Work
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-neon-blue/50 rounded-full text-white font-semibold hover:bg-neon-blue/10 transition-all duration-300 backdrop-blur-sm"
          >
            Get In Touch
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-neon-blue/50 rounded-full flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-neon-blue rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;