import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { FaInstagram, FaYoutube, FaLinkedinIn, FaArrowRight, FaPlay } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';
import './HeroSection.css';

const floatingBadges = [
  { icon: '📈', label: 'SEO Expert', delay: 0 },
  { icon: '🎬', label: 'Content Creator', delay: 0.2 },
  { icon: '✨', label: 'Brand Strategist', delay: 0.4 },
];

const stats = [
  { value: '150+', label: 'Projects' },
  { value: '50+', label: 'Clients' },
  { value: '100K+', label: 'Audience' },
];

export default function HeroSection() {
  return (
    <section className="hero" id="hero">
      {/* Background decorations */}
      <div className="hero__bg-blob hero__bg-blob--1" />
      <div className="hero__bg-blob hero__bg-blob--2" />
      <div className="hero__bg-blob hero__bg-blob--3" />
      <div className="hero__bg-pattern" />

      <div className="container hero__container">
        {/* Left - Text Content */}
        <div className="hero__content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="section-tag">
              <HiSparkles /> Welcome to my portfolio
            </span>
          </motion.div>

          <motion.h1
            className="hero__title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Hi, I'm{' '}
            <span className="hero__name gradient-text">
              Faiza Khan
              <span className="hero__name-line" />
            </span>{' '}
            Pathan
          </motion.h1>

          <motion.div
            className="hero__roles"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <span className="hero__role">SEO Specialist</span>
            <span className="hero__role-dot">·</span>
            <span className="hero__role">Content Creator</span>
            <span className="hero__role-dot">·</span>
            <span className="hero__role">Social Media Strategist</span>
          </motion.div>

          <motion.p
            className="hero__bio"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            I craft data-driven SEO strategies and compelling content that elevates brands, grows audiences, and drives measurable results across Instagram, YouTube, and beyond.
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            <NavLink to="/experience" className="btn btn-primary hero__btn-primary">
              View My Work <FaArrowRight />
            </NavLink>
            <NavLink to="/contact" className="btn btn-outline hero__btn-secondary">
              Contact Me
            </NavLink>
          </motion.div>

          <motion.div
            className="hero__stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            {stats.map(({ value, label }) => (
              <div key={label} className="hero__stat">
                <span className="hero__stat-value gradient-text">{value}</span>
                <span className="hero__stat-label">{label}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="hero__social"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <span className="hero__social-label">Follow me on</span>
            <a href="https://www.instagram.com/faiiiizzzaaaa?igsh=MTZ6a3B2cTZvNjZ0Yw%3D%3D&utm_source=qr" target="_blank" rel="noreferrer" className="hero__social-btn" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://youtube.com/@lifewithfaiza1?si=kU2Ico3SWREICfbe" target="_blank" rel="noreferrer" className="hero__social-btn" aria-label="YouTube">
              <FaYoutube />
            </a>
            <a href="https://in.linkedin.com/in/faiza-khan-b61639359" target="_blank" rel="noreferrer" className="hero__social-btn" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </motion.div>
        </div>

        {/* Right - Visual */}
        <div className="hero__visual">
          <motion.div
            className="hero__image-wrapper"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Main image area */}
            <div className="hero__image-frame">
              <div className="hero__image-placeholder">
                <div className="hero__avatar-circle">
                  <span className="hero__avatar-initials">FK</span>
                </div>
                <div className="hero__image-glow" />
              </div>
            </div>

            {/* Floating badges */}
            {floatingBadges.map(({ icon, label, delay }) => (
              <motion.div
                key={label}
                className={`hero__badge hero__badge--${label.replace(' ', '-').toLowerCase()}`}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + delay, type: 'spring', stiffness: 200 }}
              >
                <span className="hero__badge-icon">{icon}</span>
                <span className="hero__badge-text">{label}</span>
              </motion.div>
            ))}

            {/* Play reel button */}
            <motion.a
              href="https://youtube.com/@lifewithfaiza1?si=kU2Ico3SWREICfbe"
              target="_blank"
              rel="noreferrer"
              className="hero__play-btn"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="hero__play-icon">
                <FaPlay />
              </div>
              <div className="hero__play-text">
                <span>Watch my</span>
                <strong>Content Reel</strong>
              </div>
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="hero__wave">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg">
          <path fill="#ffffff" d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"/>
        </svg>
      </div>
    </section>
  );
}
