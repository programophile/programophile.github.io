import { motion } from "framer-motion";
import "./Experience.css";

const timeline = [
  {
    role: "Adjunct Lecturer",
    org: "BRAC University",
    period: "Oct 2025 – Present",
    bullets: [
      "Serving as an Adjunct Faculty in the Department of Computer Science and Engineering.",
    ],
  },
  {
    role: "Freelance Web Developer",
    org: "Self-Employed / Group",
    period: "05/2024 – 10/2024",
    bullets: [
      "Delivered custom WordPress sites and front-end work for clients.",
      "Focused on clean UX, speed, and maintainability.",
    ],
  },
  {
    role: "Family Business Operations & Web Dev",
    org: "Euromarktbd.com",
    period: "05/2024 – 12/2024",
    bullets: [
      "Managed operations and built the business website using WordPress.",
      "Streamlined stock/inventory in Excel and analyzed customer feedback.",
    ],
  },
  {
    role: "Intern, Product and Technology Division",
    org: "bKash Limited",
    period: "01/2024 – 04/2024",
    bullets: [
      "Assisted merchants with bKash Payment Gateway API integration.",
      "Ran UAT, validated API responses, and built a demo Windows Forms app.",
    ],
  },
];

const education = [
  {
    degree: "Master of Science - MS, Computer Science and Engineering",
    org: "BRAC University",
    status: "Enrolled",
    period: "Sep 2025",
  },
  {
    degree: "Bachelor of Science in Computer Science and Engineering",
    org: "BRAC University",
    status: "CGPA: 3.95 / 4.00",
    period: "01/2020 – 01/2024",
  },
  {
    degree: "GCE As and A Level",
    org: "Cambridge Assessment Int. Education (Loreeto School)",
    status: "Completed",
    period: "06/2017 – 06/2019",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4 },
  }),
};

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="experience-headers">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Experience
          </motion.h2>
          <motion.h2
            className="section-title align-right"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Education
          </motion.h2>
        </div>

        <div className="experience-grid">
          <div className="timeline-col">
            {timeline.map((item, i) => (
              <motion.div
                key={`${item.role}-${item.period}`}
                className="timeline-card"
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={itemVariants}
              >
                <div className="dot" />
                <div className="content">
                  <div className="header">
                    <h3 className="role">{item.role}</h3>
                    <span className="period">{item.period}</span>
                  </div>
                  <p className="org">{item.org}</p>
                  <ul className="bullets">
                    {item.bullets.map((b, idx) => (
                      <li key={idx}>{b}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="education-col">
            <div className="education-list">
              {education.map((e, i) => (
                <motion.div
                  key={`${e.degree}-${e.period}`}
                  className="edu-card"
                  custom={i}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={itemVariants}
                >
                  <div className="edu-header">
                    <h3 className="degree">{e.degree}</h3>
                    <span className="badge">{e.period}</span>
                  </div>
                  <p className="org">{e.org}</p>
                  <div className="meta">
                    <span className="status">{e.status}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
