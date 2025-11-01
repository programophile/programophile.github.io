import { motion } from 'framer-motion';
import SkillCard from './SkillCard';
import ScrollReveal from '../Common/ScrollReveal';

const SkillsSection = () => {
  const skills = [
    { name: 'React', icon: '⚛️', level: 95, color: '#61DAFB' },
    { name: 'TypeScript', icon: '📘', level: 90, color: '#3178C6' },
    { name: 'Node.js', icon: '🟢', level: 88, color: '#339933' },
    { name: 'Python', icon: '🐍', level: 85, color: '#3776AB' },
    { name: 'TailwindCSS', icon: '🎨', level: 92, color: '#06B6D4' },
    { name: 'Next.js', icon: '▲', level: 87, color: '#000000' },
    { name: 'GraphQL', icon: '◈', level: 83, color: '#E10098' },
    { name: 'MongoDB', icon: '🍃', level: 86, color: '#47A248' },
    { name: 'AWS', icon: '☁️', level: 80, color: '#FF9900' },
    { name: 'Docker', icon: '🐳', level: 82, color: '#2496ED' },
    { name: 'Git', icon: '📦', level: 93, color: '#F05032' },
    { name: 'Figma', icon: '🎯', level: 88, color: '#F24E1E' },
  ];

  const categories = [
    {
      title: 'Frontend',
      skills: skills.slice(0, 4),
      gradient: 'from-neon-blue to-neon-purple',
    },
    {
      title: 'Backend',
      skills: skills.slice(4, 8),
      gradient: 'from-neon-purple to-neon-pink',
    },
    {
      title: 'DevOps & Tools',
      skills: skills.slice(8, 12),
      gradient: 'from-neon-pink to-neon-green',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <ScrollReveal variant="fadeUp" className="text-center mb-16">
          <motion.div
            className="inline-block mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <span className="px-4 py-2 rounded-full bg-neon-green/10 border border-neon-green/30 text-neon-green text-sm font-medium">
              🚀 Expertise
            </span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit built through years of experience and continuous learning.
          </p>
        </ScrollReveal>

        {/* Skills by category */}
        <div className="space-y-12">
          {categories.map((category, catIndex) => (
            <ScrollReveal key={catIndex} variant="fadeUp" delay={catIndex * 0.1}>
              <div>
                {/* Category title */}
                <motion.h3
                  className={`text-2xl font-bold mb-6 bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}
                  whileHover={{ scale: 1.02 }}
                >
                  {category.title}
                </motion.h3>

                {/* Skills grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                  {category.skills.map((skill, index) => (
                    <SkillCard 
                      key={skill.name} 
                      skill={skill} 
                      index={index} 
                    />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Stats section */}
        <ScrollReveal variant="fadeUp" delay={0.3} className="mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Projects Completed', value: '50+' },
              { label: 'Years Experience', value: '5+' },
              { label: 'Happy Clients', value: '30+' },
              { label: 'Code Commits', value: '10k+' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-800 hover:border-neon-blue/50 transition-colors duration-300 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    type: 'spring', 
                    stiffness: 200, 
                    delay: index * 0.1 
                  }}
                  className="text-4xl font-bold bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent mb-2"
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default SkillsSection;