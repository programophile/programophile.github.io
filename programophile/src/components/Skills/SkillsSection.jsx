import { motion } from 'framer-motion';
import SkillCard from './SkillCard';
import ScrollReveal from '../Common/ScrollReveal';

const SkillsSection = () => {
  const skills = [
    { name: 'Python', level: 90, color: '#3776AB' },
    { name: 'Java', level: 85, color: '#007396' },
    { name: 'JavaScript', level: 80, color: '#F7DF1E' },
    { name: 'React.js', level: 85, color: '#61DAFB' },
    { name: 'Node.js', level: 80, color: '#339933' },
    { name: 'MongoDB', level: 80, color: '#47A248' },
    { name: 'Express.js', level: 80, color: '#000000' },
    { name: 'PHP', level: 75, color: '#777BB4' },
    { name: 'TensorFlow', level: 85, color: '#FF6F00' },
    { name: 'Scikit-learn', level: 85, color: '#F7931E' },
    { name: 'Keras', level: 80, color: '#D00000' },
    { name: 'Hugging Face', level: 85, color: '#FFD21E' },
    { name: 'Pandas', level: 88, color: '#150458' },
    { name: 'NumPy', level: 88, color: '#013243' },
    { name: 'OpenCV', level: 80, color: '#5C3EE8' },
    { name: 'BERT/NLP', level: 85, color: '#4285F4' },
    { name: 'Git/GitHub', level: 90, color: '#F05032' },
    { name: 'Streamlit', level: 85, color: '#FF4B4B' },
  ];

  const categories = [
    {
      title: 'Programming Languages',
      skills: skills.slice(0, 3),
    },
    {
      title: 'Web Development',
      skills: skills.slice(3, 8),
    },
    {
      title: 'Machine Learning & AI',
      skills: skills.slice(8, 12),
    },
    {
      title: 'Data Science & Tools',
      skills: skills.slice(12, 18),
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
            <span className="px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-gray-300 text-sm font-medium uppercase tracking-wider">
              Technical Skills
            </span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white">
            Expertise
          </h2>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Proficient in modern technologies across full-stack development and machine learning.
          </p>
        </ScrollReveal>

        {/* Skills by category */}
        <div className="space-y-12">
          {categories.map((category, catIndex) => (
            <ScrollReveal key={catIndex} variant="fadeUp" delay={catIndex * 0.1}>
              <div>
                {/* Category title */}
                <h3 className="text-xl font-semibold mb-4 text-white">
                  {category.title}
                </h3>

                {/* Skills grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
              { label: 'Projects Completed', value: '15+' },
              { label: 'CGPA', value: '3.86/4.0' },
              { label: 'GitHub Repos', value: '36+' },
              { label: 'Research Areas', value: '3+' },
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