import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { useScrollReveal, fadeUp } from '../../../hooks/useScrollReveal';
import './CTASection.css';

export default function CTASection() {
  const { ref, controls } = useScrollReveal(0.2);

  return (
    <section className="cta-section" id="cta">
      <div className="cta-section__bg" />
      <div className="cta-section__blob cta-section__blob--1" />
      <div className="cta-section__blob cta-section__blob--2" />

      <div className="cta-section__container">
        <motion.div
          ref={ref}
          className="cta-content"
          initial="hidden"
          animate={controls}
          variants={fadeUp}
        >
          <span className="section-tag" style={{ background: 'rgba(255,255,255,0.2)', color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}>
            ✦ Let's Connect
          </span>
          <h2 className="cta-content__title">
            Ready to Grow Your<br />
            <span className="cta-content__title-highlight">Digital Presence?</span>
          </h2>
          <p className="cta-content__desc">
            Whether you need SEO strategy, content creation, or full brand development — let's collaborate and create something extraordinary together.
          </p>

          <div className="cta-content__actions">
            <NavLink to="/contact" className="btn btn-white cta-btn-primary">
              Start a Project <FaArrowRight />
            </NavLink>
            <a href="https://www.instagram.com/faiiiizzzaaaa?igsh=MTZ6a3B2cTZvNjZ0Yw%3D%3D&utm_source=qr" target="_blank" rel="noreferrer" className="btn cta-btn-outline">
              <FaInstagram /> Follow on Instagram
            </a>
          </div>

          <div className="cta-content__email">
            <FaEnvelope />
            <a href="mailto:faiza@example.com">faiza@example.com</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
