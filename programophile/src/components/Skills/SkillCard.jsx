import { motion } from 'framer-motion';

const SkillCard = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-all duration-300 group"
    >
      {/* Subtle color accent */}
      <div
        className="absolute top-0 left-0 w-1 h-full rounded-l-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ backgroundColor: skill.color }}
      />

      <div className="relative z-10">
        <h4 className="text-white font-semibold mb-1">{skill.name}</h4>
        <div className="flex items-center gap-2">
          <div className="flex-1 h-1 bg-slate-800 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.1 }}
              className="h-full rounded-full"
              style={{ backgroundColor: skill.color }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;