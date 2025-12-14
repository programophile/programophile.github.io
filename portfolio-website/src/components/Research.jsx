import { useState } from "react";
import { motion } from "framer-motion";
import "./Research.css";

const interests = [
  {
    id: "01",
    title: "Ethical AI & NLP",
    summary:
      "Focus on bias detection and mitigation in transformer-based models; bridging NLP advances with societal impact for responsible human-AI collaboration.",
    keyFocus: ["Bias detection", "Mitigation techniques", "Responsible AI"],
  },
  {
    id: "02",
    title: "Contextualized Embeddings",
    summary:
      "Exploring context-aware representations to improve downstream task performance and interpretability across domains.",
    keyFocus: ["Transformers", "Domain adaptation", "Interpretability"],
  },
  {
    id: "03",
    title: "AI for Social Good",
    summary:
      "Applying ML techniques to solve practical societal problems with fairness, robustness, and transparency.",
    keyFocus: ["Fairness", "Robust ML", "Transparency"],
  },
];

const papers = [
  {
    title:
      "Exploration and Mitigation of Gender Bias in Transformer-Based Language Models",
    venue: "Thesis / Preprint",
    year: "2025",
    area: "Ethical AI & NLP",
    links: [{ label: "PDF", href: "#" }],
  },
  {
    title: "Context-Aware Embeddings for Low-Resource Languages",
    venue: "Workshop Submission",
    year: "2025",
    area: "Contextualized Embeddings",
    links: [{ label: "Draft", href: "#" }],
  },
  {
    title: "Evaluating Fairness in Sentiment Models Across Demographics",
    venue: "Under Review",
    year: "2024",
    area: "AI for Social Good",
    links: [{ label: "Abstract", href: "#" }],
  },
];

const Research = () => {
  const [active, setActive] = useState(0);
  const [showAll, setShowAll] = useState(true);
  const [showAllModal, setShowAllModal] = useState(false);

  const activeInterestTitle = interests[active].title;
  const filteredPapers = showAll
    ? papers
    : papers.filter((p) => p.area === activeInterestTitle);

  return (
    <section id="research" className="research">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Research Interests
        </motion.h2>

        <div className="research-grid">
          <motion.div
            className="interest-tabs"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {interests.map((i, idx) => (
              <button
                key={i.id}
                className={`interest-tab ${active === idx ? "active" : ""}`}
                onClick={() => {
                  setActive(idx);
                  setShowAll(false); // auto-filter to selected interest
                }}
              >
                <span className="tab-index">{i.id}</span>
                <span className="tab-title">{i.title}</span>
              </button>
            ))}
          </motion.div>

          {/* Removed right-side All Research panel; modal will be used instead */}

          <motion.div
            className="interest-panel"
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="panel-title">{interests[active].title}</h3>
            <p className="panel-summary">{interests[active].summary}</p>
            <div className="key-focus">
              <span className="label">Key Focus</span>
              <ul>
                {interests[active].keyFocus.map((k) => (
                  <li key={k}>{k}</li>
                ))}
              </ul>
            </div>
            <div className="panel-actions">
              <button
                className={`toggle-all ${showAll ? "active" : ""}`}
                onClick={() => setShowAll(true)}
              >
                Show All Research
              </button>
              <button
                className={`toggle-filter ${!showAll ? "active" : ""}`}
                onClick={() => setShowAll(false)}
              >
                Show {activeInterestTitle}
              </button>
            </div>
          </motion.div>

          <motion.div
            className="papers-panel"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="papers-header">
              <h3 className="papers-title">Research Works & Papers</h3>
              <button
                className="open-all-modal"
                onClick={() => setShowAllModal(true)}
                aria-label="Open all research"
              >
                All Research
              </button>
            </div>
            <div className="papers-list">
              {filteredPapers.map((p) => (
                <div key={p.title} className="paper-card">
                  <div className="paper-header">
                    <h4 className="paper-title">{p.title}</h4>
                    <span className="paper-year">{p.year}</span>
                  </div>
                  <div className="paper-meta">
                    <span className="paper-venue">
                      {p.venue} · {p.area}
                    </span>
                    <div className="paper-links">
                      {p.links.map((l) => (
                        <a key={l.label} href={l.href} className="paper-link">
                          {l.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        {showAllModal && (
          <div
            className="research-modal-overlay"
            onClick={() => setShowAllModal(false)}
          >
            <div
              className="research-modal"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <h3>All Research</h3>
                <button
                  className="close-modal"
                  onClick={() => setShowAllModal(false)}
                  aria-label="Close"
                >
                  ×
                </button>
              </div>
              <div className="modal-content">
                {papers.map((p) => (
                  <div key={p.title} className="paper-card">
                    <div className="paper-header">
                      <h4 className="paper-title">{p.title}</h4>
                      <span className="paper-year">{p.year}</span>
                    </div>
                    <div className="paper-meta">
                      <span className="paper-venue">
                        {p.venue} · {p.area}
                      </span>
                      <div className="paper-links">
                        {p.links.map((l) => (
                          <a key={l.label} href={l.href} className="paper-link">
                            {l.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Research;
