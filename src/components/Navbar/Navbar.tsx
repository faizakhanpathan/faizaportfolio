import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import './Navbar.css';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/experience', label: 'Experience' },
  { path: '/education', label: 'Education' },
  { path: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <motion.header
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="navbar__container container">
        {/* Logo */}
        <NavLink to="/" className="navbar__logo">
          <span className="navbar__logo-text">Faiza</span>
          <span className="navbar__logo-dot">.</span>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="navbar__nav" aria-label="Main navigation">
          {navLinks.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`}
            >
              {label}
              <span className="navbar__link-underline" />
            </NavLink>
          ))}
        </nav>

        {/* Social + CTA */}
        <div className="navbar__actions">
          <div className="navbar__socials">
            <a href="https://www.instagram.com/faiiiizzzaaaa?igsh=MTZ6a3B2cTZvNjZ0Yw%3D%3D&utm_source=qr" target="_blank" rel="noreferrer" className="navbar__social-icon" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://youtube.com/@lifewithfaiza1?si=kU2Ico3SWREICfbe" target="_blank" rel="noreferrer" className="navbar__social-icon" aria-label="YouTube">
              <FaYoutube />
            </a>
            <a href="https://in.linkedin.com/in/faiza-khan-b61639359" target="_blank" rel="noreferrer" className="navbar__social-icon" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
          <NavLink to="/contact" className="btn btn-primary navbar__cta">
            Hire Me
          </NavLink>
        </div>

        {/* Mobile Toggle */}
        <button
          className="navbar__hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="navbar__mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            <nav className="navbar__mobile-nav">
              {navLinks.map(({ path, label }, i) => (
                <motion.div
                  key={path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <NavLink
                    to={path}
                    className={({ isActive }) => `navbar__mobile-link ${isActive ? 'navbar__mobile-link--active' : ''}`}
                  >
                    {label}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div
                className="navbar__mobile-socials"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <a href="https://www.instagram.com/faiiiizzzaaaa?igsh=MTZ6a3B2cTZvNjZ0Yw%3D%3D&utm_source=qr" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
                <a href="https://youtube.com/@lifewithfaiza1?si=kU2Ico3SWREICfbe" target="_blank" rel="noreferrer" aria-label="YouTube"><FaYoutube /></a>
                <a href="https://in.linkedin.com/in/faiza-khan-b61639359" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
