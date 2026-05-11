import { NavLink } from 'react-router-dom';
import { FaInstagram, FaYoutube, FaLinkedinIn, FaEnvelope, FaHeart } from 'react-icons/fa';
import './Footer.css';

const quickLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/experience', label: 'Experience' },
  { path: '/education', label: 'Education' },
  { path: '/contact', label: 'Contact' },
];

const services = ['SEO Optimization', 'Content Strategy', 'Instagram Growth', 'YouTube Branding', 'Social Media Marketing', 'Personal Branding'];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__glow footer__glow--1" />
      <div className="footer__glow footer__glow--2" />

      <div className="container">
        {/* Top Grid */}
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">Faiza<span>.</span></div>
            <p className="footer__tagline">
              Transforming brands through strategic SEO and authentic content creation. Let's build something remarkable together.
            </p>
            <div className="footer__socials">
              <a href="https://www.instagram.com/faiiiizzzaaaa?igsh=MTZ6a3B2cTZvNjZ0Yw%3D%3D&utm_source=qr" target="_blank" rel="noreferrer" className="footer__social" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://youtube.com/@lifewithfaiza1?si=kU2Ico3SWREICfbe" target="_blank" rel="noreferrer" className="footer__social" aria-label="YouTube">
                <FaYoutube />
              </a>
              <a href="https://in.linkedin.com/in/faiza-khan-b61639359" target="_blank" rel="noreferrer" className="footer__social" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="mailto:faiza@example.com" className="footer__social" aria-label="Email">
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__col">
            <h4 className="footer__col-title">Quick Links</h4>
            <ul className="footer__links">
              {quickLinks.map(({ path, label }) => (
                <li key={path}>
                  <NavLink to={path} className="footer__link">{label}</NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer__col">
            <h4 className="footer__col-title">Services</h4>
            <ul className="footer__links">
              {services.map((s) => (
                <li key={s}>
                  <span className="footer__link footer__link--text">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <h4 className="footer__col-title">Get In Touch</h4>
            <div className="footer__contact-info">
              <p><span>📧</span> faiza@example.com</p>
              <p><span>📍</span> Pakistan</p>
              <p><span>💼</span> Available for Freelance</p>
            </div>
            <NavLink to="/contact" className="btn btn-primary footer__cta">
              Work With Me
            </NavLink>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer__bottom">
          <p>© 2025 Faiza Khan Pathan. All rights reserved.</p>
          <p className="footer__credit">
            Made with <FaHeart className="footer__heart" /> for digital excellence
          </p>
        </div>
      </div>
    </footer>
  );
}
