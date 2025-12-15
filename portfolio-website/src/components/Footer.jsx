import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FaGithub />,
      url: "https://github.com/programophile",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/sad-yeamin-sayem-8a68a7277/",
      label: "LinkedIn",
    },
    {
      icon: <FaEnvelope />,
      url: "mailto:sayem.programophile@gmail.com",
      label: "Email",
    },
  ];

  const contactDetails = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "sayem.programophile@gmail.com",
      href: "mailto:sayem.programophile@gmail.com",
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Location",
      value: "Dhaka, Bangladesh (Hybrid)",
    },
    {
      icon: <FaClock />,
      label: "Availability",
      value: "Open to collaboration & research",
    },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-cta">
        <div className="footer-cta-text">
          <span className="footer-kicker">Lets build something impactful</span>
          <h2 className="footer-cta-title">
            Ready to collaborate on your next AI project or research venture?
          </h2>
        </div>
        <button
          className="footer-cta-btn"
          onClick={() => scrollToSection("contact")}
        >
          Start a conversation <FaArrowRight />
        </button>
      </div>
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-logo">Portfolio</h3>
          <p className="footer-tagline">
            Full-stack developer & machine learning engineer focused on crafting
            human-centered digital experiences.
          </p>
          <div className="footer-highlight">
            <span className="highlight-dot" />
            <p>
              Currently exploring applied AI for healthcare and intelligent
              automation.
            </p>
          </div>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Quick Links</h4>
          <nav className="footer-nav">
            <a onClick={() => scrollToSection("home")} className="footer-link">
              Home
            </a>
            <a onClick={() => scrollToSection("about")} className="footer-link">
              About
            </a>
            <a
              onClick={() => scrollToSection("skills")}
              className="footer-link"
            >
              Skills
            </a>
            <a
              onClick={() => scrollToSection("projects")}
              className="footer-link"
            >
              Projects
            </a>
            <a
              onClick={() => scrollToSection("contact")}
              className="footer-link"
            >
              Contact
            </a>
          </nav>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Contact</h4>
          <ul className="footer-contact">
            {contactDetails.map(({ icon, label, value, href }) => (
              <li key={label} className="contact-item">
                <span className="contact-icon">{icon}</span>
                <div className="contact-content">
                  <span className="contact-label">{label}</span>
                  {href ? (
                    <a href={href} className="contact-link">
                      {value}
                    </a>
                  ) : (
                    <span className="contact-value">{value}</span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Connect</h4>
          <div className="footer-social">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copyright">
          © {currentYear} Sad Yeamin Sayem · Crafting code with curiosity & care
        </p>
      </div>
    </footer>
  );
};

export default Footer;
