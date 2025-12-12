import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import ScrollReveal from '../Common/ScrollReveal';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'DataBrew Analytics Dashboard',
      description: 'Full-stack analytics dashboard for coffee shop management featuring real-time sales tracking, AI-generated insights, and predictive analytics for business optimization.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      technologies: ['TypeScript', 'React', 'Node.js', 'AI/ML'],
      github: 'https://github.com/programophile/DataBrew_Hackathon_EvenOddAi',
    },
    {
      title: 'Bangla Hate Speech Detection',
      description: 'Advanced NLP system for detecting hate speech in Bangla language using transformer models and multiple evaluation methods for social media content moderation.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
      technologies: ['Python', 'Transformers', 'NLP', 'PyTorch'],
      github: 'https://github.com/programophile/Bangla_NLP_workshop_Subtask1A_Velora',
    },
    {
      title: 'Hospital Management System',
      description: 'Comprehensive MERN stack hospital HR management system with nurse scheduling, patient records, and real-time communication between doctors, patients, and administrators.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
      technologies: ['MongoDB', 'Express', 'React', 'Node.js'],
      github: 'https://github.com/programophile/Hospital-Nurse-Hr-Management---MERN_PROJECT',
    },
    {
      title: 'Resume Matcher',
      description: 'AI-powered resume screening tool that analyzes resumes against job descriptions using NLP techniques to provide intelligent matching scores and improvement suggestions.',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80',
      technologies: ['Python', 'NLP', 'Machine Learning', 'Streamlit'],
      github: 'https://github.com/programophile/Resume-Matcher',
      demo: 'https://resume-matcher-programophile.streamlit.app/',
    },
    {
      title: 'RNA Structure Prediction Benchmarking',
      description: 'Research project benchmarking state-of-the-art RNA secondary structure prediction models, comparing accuracy and computational efficiency across different algorithms.',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80',
      technologies: ['Python', 'Jupyter', 'Bioinformatics', 'ML'],
      github: 'https://github.com/programophile/Benchmarking-of-RNA-second-structure-prediction-models',
    },
    {
      title: 'CGPA Calculator for BRACU',
      description: 'Interactive web application for BRAC University students to calculate their cumulative GPA by inputting current semester grades and previous academic records with an intuitive interface.',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80',
      technologies: ['JavaScript', 'HTML', 'CSS', 'Web App'],
      github: 'https://github.com/programophile/CGPA-Calculator-For-BRAC-University-Students-BRACU',
      demo: 'https://programophile.github.io/CGPA-Calculator-For-BRAC-University-Students-BRACU/',
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
              Projects
            </span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white">
            Featured Work
          </h2>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A selection of projects demonstrating expertise in full-stack development, machine learning, and software engineering.
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
          <motion.a
            href="https://github.com/programophile?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-slate-800 border border-slate-700 rounded-lg text-white font-semibold hover:bg-slate-700 transition-all duration-300"
          >
            View All Projects on GitHub
          </motion.a>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProjectsSection;