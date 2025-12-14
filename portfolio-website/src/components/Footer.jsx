import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from "react-icons/fa";
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
      icon: <FaTwitter />,
      url: "https://twitter.com/yourusername",
      label: "Twitter",
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
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">Portfolio</h3>
            <p className="footer-tagline">
              Building digital experiences that matter
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <nav className="footer-nav">
              <a
                onClick={() => scrollToSection("home")}
                className="footer-link"
              >
                Home
              </a>
              <a
                onClick={() => scrollToSection("about")}
                className="footer-link"
              >
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
            © {currentYear} Sad Yeamin Sayem. Made with{" "}
            <FaHeart className="heart-icon" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
