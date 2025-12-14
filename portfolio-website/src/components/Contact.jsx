import { motion } from 'framer-motion'
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'your.email@example.com',
      link: 'mailto:your.email@example.com'
    },
    {
      icon: <FaGithub />,
      label: 'GitHub',
      value: 'github.com/yourusername',
      link: 'https://github.com/yourusername'
    },
    {
      icon: <FaLinkedin />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/yourprofile',
      link: 'https://linkedin.com/in/yourprofile'
    },
    {
      icon: <FaTwitter />,
      label: 'Twitter',
      value: '@yourusername',
      link: 'https://twitter.com/yourusername'
    }
  ]

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>

        <motion.div
          className="contact-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="contact-text">
            <h3 className="contact-heading">Let's Work Together</h3>
            <p className="contact-description">
              I'm currently available for freelance work and full-time opportunities.
              If you have a project that you want to get started, think you need my
              help with something, or just fancy saying hey, then get in touch.
            </p>
          </div>

          <div className="contact-info-grid">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="contact-icon">{info.icon}</div>
                <div className="contact-details">
                  <h4 className="contact-label">{info.label}</h4>
                  <p className="contact-value">{info.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            className="contact-cta"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <a
              href="mailto:your.email@example.com"
              className="btn btn-primary btn-large"
            >
              Send Me an Email
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
