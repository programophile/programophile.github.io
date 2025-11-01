import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import ScrollReveal from '../Common/ScrollReveal';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with real-time inventory management, secure payments, and an intuitive admin dashboard.',
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&q=80',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    },
    {
      title: 'AI Chat Application',
      description: 'Real-time chat application with AI-powered responses, voice messages, and end-to-end encryption.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
      technologies: ['Next.js', 'Socket.io', 'OpenAI', 'PostgreSQL'],
    },
    {
      title: 'Portfolio Dashboard',
      description: 'Interactive analytics dashboard with real-time data visualization and customizable widgets.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      technologies: ['React', 'D3.js', 'TailwindCSS', 'Firebase'],
    },
    {
      title: 'Social Media App',
      description: 'Modern social platform with stories, live streaming, and advanced content recommendation algorithms.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
      technologies: ['React Native', 'GraphQL', 'AWS', 'Redis'],
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
            <span className="px-4 py-2 rounded-full bg-neon-purple/10 border border-neon-purple/30 text-neon-purple text-sm font-medium">
              💼 My Work
            </span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent works showcasing modern web technologies and creative problem-solving.
          </p>
        </ScrollReveal>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* View all button */}
        <ScrollReveal variant="fadeUp" delay={0.4} className="text-center mt-12">
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 30px rgba(191, 0, 255, 0.6)',
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-neon-purple to-neon-pink rounded-full text-white font-semibold shadow-lg shadow-neon-purple/50"
          >
            View All Projects
          </motion.button>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProjectsSection;