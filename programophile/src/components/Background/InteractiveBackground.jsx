import { motion } from 'framer-motion';
import { useMousePosition } from '../../hooks/useMousePosition';
import { useScrollProgress } from '../../hooks/useScrollProgress';
import { useMemo } from 'react';

const InteractiveBackground = () => {
  const mousePosition = useMousePosition();
  const scrollProgress = useScrollProgress();

  // Generate particles once
  const particles = useMemo(() => 
    Array.from({ length: 30 }, (_, i) => ({
      id: i,
      size: Math.random() * 4 + 2,
      initialX: Math.random() * 100,
      initialY: Math.random() * 100,
      speed: Math.random() * 0.5 + 0.3,
      opacity: Math.random() * 0.5 + 0.2,
    })), []
  );

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 -left-1/4 w-96 h-96 bg-neon-blue/20 rounded-full blur-3xl"
        animate={{
          x: mousePosition.x * 0.02,
          y: mousePosition.y * 0.02,
          scale: [1, 1.2, 1],
        }}
        transition={{
          x: { type: 'spring', stiffness: 50 },
          y: { type: 'spring', stiffness: 50 },
          scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl"
        animate={{
          x: -mousePosition.x * 0.03,
          y: -mousePosition.y * 0.03,
          scale: [1, 1.3, 1],
        }}
        transition={{
          x: { type: 'spring', stiffness: 50 },
          y: { type: 'spring', stiffness: 50 },
          scale: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
        }}
      />

      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-neon-blue"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.initialX}%`,
            top: `${particle.initialY}%`,
            opacity: particle.opacity,
          }}
          animate={{
            y: [0, -30, 0],
            x: [(mousePosition.x - window.innerWidth / 2) * 0.01 * particle.speed, 
                (mousePosition.x - window.innerWidth / 2) * 0.01 * particle.speed],
            opacity: [particle.opacity, particle.opacity * 1.5, particle.opacity],
          }}
          transition={{
            y: {
              duration: 3 + particle.speed * 2,
              repeat: Infinity,
              ease: 'easeInOut',
            },
            opacity: {
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
        />
      ))}

      {/* Scroll-reactive grid */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 240, 255, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 240, 255, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
        animate={{
          opacity: 0.05 + scrollProgress * 0.001,
          backgroundPosition: `${scrollProgress * 0.5}px ${scrollProgress * 0.5}px`,
        }}
      />
    </div>
  );
};

export default InteractiveBackground;