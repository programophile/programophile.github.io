import { motion } from 'framer-motion';
import { useMousePosition } from '../../hooks/useMousePosition';

const AnimatedShapes = () => {
  const mousePosition = useMousePosition();

  return (
    <>
      {/* Large rotating hexagon */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 opacity-20"
        animate={{
          rotate: 360,
          x: (mousePosition.x - window.innerWidth / 2) * 0.05,
          y: (mousePosition.y - window.innerHeight / 2) * 0.05,
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
          x: { type: 'spring', stiffness: 50 },
          y: { type: 'spring', stiffness: 50 },
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon
            points="50,5 90,30 90,70 50,95 10,70 10,30"
            fill="none"
            stroke="url(#gradient1)"
            strokeWidth="0.5"
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00f0ff" />
              <stop offset="100%" stopColor="#bf00ff" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Floating circle */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-48 h-48"
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360],
          x: -(mousePosition.x - window.innerWidth / 2) * 0.03,
        }}
        transition={{
          y: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
          scale: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
          rotate: { duration: 15, repeat: Infinity, ease: 'linear' },
          x: { type: 'spring', stiffness: 50 },
        }}
      >
        <div className="w-full h-full rounded-full border-2 border-neon-purple/30 blur-sm" />
      </motion.div>

      {/* Triangle */}
      <motion.div
        className="absolute bottom-1/4 left-1/3 w-40 h-40 opacity-30"
        animate={{
          rotate: -360,
          x: (mousePosition.x - window.innerWidth / 2) * 0.04,
          y: (mousePosition.y - window.innerHeight / 2) * 0.04,
        }}
        transition={{
          rotate: { duration: 25, repeat: Infinity, ease: 'linear' },
          x: { type: 'spring', stiffness: 50 },
          y: { type: 'spring', stiffness: 50 },
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon
            points="50,10 90,90 10,90"
            fill="none"
            stroke="#ff006e"
            strokeWidth="0.5"
          />
        </svg>
      </motion.div>

      {/* Pulsing rings */}
      <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-96 h-96 rounded-full border border-neon-blue/20"
            style={{
              top: '50%',
              left: '50%',
              marginTop: '-12rem',
              marginLeft: '-12rem',
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 1.3,
              ease: 'easeInOut',
            }}
          />
        ))}
      </motion.div>

      {/* Small floating dots */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`dot-${i}`}
          className="absolute w-2 h-2 bg-neon-green rounded-full"
          style={{
            left: `${20 + i * 10}%`,
            top: `${30 + (i % 3) * 20}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + i * 0.2,
            repeat: Infinity,
            delay: i * 0.3,
            ease: 'easeInOut',
          }}
        />
      ))}
    </>
  );
};

export default AnimatedShapes;