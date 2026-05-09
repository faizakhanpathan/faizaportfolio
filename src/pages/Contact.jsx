import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaInstagram, FaYoutube, FaLinkedinIn, FaPaperPlane, FaClock } from 'react-icons/fa';
import { useScrollReveal, fadeUp, slideLeft, slideRight, staggerContainer } from '../hooks/useScrollReveal';
import './Contact.css';

const contactInfo = [
  {
    icon: <FaEnvelope />,
    title: 'Email Me',
    value: 'faiza@example.com',
    desc: 'Best for project inquiries and collaborations',
    link: 'mailto:faiza@example.com',
    color: '#f9a8c9',
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Location',
    value: 'Karachi, Pakistan',
    desc: 'Available for remote & local work worldwide',
    color: '#ffbf8a',
  },
  {
    icon: <FaClock />,
    title: 'Availability',
    value: 'Mon – Sat, 9AM – 6PM',
    desc: 'Response time within 24 hours',
    color: '#ff9dc7',
  },
];

const socials = [
  { icon: <FaInstagram />, label: 'Instagram', handle: '@faizakhanpathan', link: 'https://instagram.com', color: '#f9a8c9' },
  { icon: <FaYoutube />, label: 'YouTube', handle: 'Faiza Khan Pathan', link: 'https://youtube.com', color: '#ffbf8a' },
  { icon: <FaLinkedinIn />, label: 'LinkedIn', handle: 'faizakhanpathan', link: 'https://linkedin.com', color: '#ff9dc7' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const heroReveal = useScrollReveal(0.1);
  const formReveal = useScrollReveal(0.1);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1800);
  };

  return (
    <div className="page-wrapper contact-page">
      {/* Hero */}
      <section className="contact-hero section">
        <div className="contact-hero__bg" />
        <div className="container">
          <motion.div
            ref={heroReveal.ref}
            initial="hidden"
            animate={heroReveal.controls}
            variants={staggerContainer}
            className="contact-hero__content"
          >
            <motion.span className="section-tag" variants={fadeUp}>✦ Get In Touch</motion.span>
            <motion.h1 className="section-title" variants={fadeUp}>
              Let's Create Something <span className="gradient-text">Amazing Together</span>
            </motion.h1>
            <motion.p className="section-subtitle" style={{ margin: '0 auto' }} variants={fadeUp}>
              Have a project in mind? Looking for an SEO expert or content creator? I'd love to hear from you — let's talk!
            </motion.p>
            <div className="section-divider" style={{ margin: '20px auto 0' }} />
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="contact-info-section section">
        <div className="container">
          <div className="contact-info-grid">
            {contactInfo.map(({ icon, title, value, desc, link, color }) => (
              <motion.div
                key={title}
                className="contact-info-card glass-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
              >
                <div className="contact-info-card__icon" style={{ background: `linear-gradient(135deg, ${color}, #ffbf8a)` }}>
                  {icon}
                </div>
                <div>
                  <h3 className="contact-info-card__title">{title}</h3>
                  {link ? (
                    <a href={link} className="contact-info-card__value" style={{ color }}>
                      {value}
                    </a>
                  ) : (
                    <p className="contact-info-card__value" style={{ color }}>{value}</p>
                  )}
                  <p className="contact-info-card__desc">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Social */}
      <section className="contact-main section animated-gradient-bg" id="form">
        <div className="container">
          <motion.div
            ref={formReveal.ref}
            initial="hidden"
            animate={formReveal.controls}
            variants={staggerContainer}
            className="contact-main-grid"
          >
            {/* Form */}
            <motion.div className="contact-form-wrap" variants={slideLeft}>
              <div className="contact-form-header">
                <span className="section-tag">✦ Send Message</span>
                <h2 className="contact-form-header__title">
                  Drop Me a <span className="gradient-text">Message</span>
                </h2>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-light)', lineHeight: 1.7 }}>
                  Fill in the form below and I'll get back to you within 24 hours.
                </p>
              </div>

              {!submitted ? (
                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                  <div className="contact-form__row">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-input"
                        placeholder="Your full name"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-input"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-input"
                      placeholder="What's this about?"
                      value={form.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-input form-textarea"
                      placeholder="Tell me about your project, goals, or just say hello..."
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary contact-form__submit" disabled={loading}>
                    {loading ? (
                      <>Sending... <span className="contact-form__spinner" /></>
                    ) : (
                      <>Send Message <FaPaperPlane /></>
                    )}
                  </button>
                </form>
              ) : (
                <motion.div
                  className="contact-success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="contact-success__icon">🌸</div>
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out! I'll get back to you within 24 hours.</p>
                  <button className="btn btn-outline" onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); }}>
                    Send Another
                  </button>
                </motion.div>
              )}
            </motion.div>

            {/* Sidebar */}
            <motion.div className="contact-sidebar" variants={slideRight}>
              {/* Social Cards */}
              <div className="contact-social-section">
                <h3 className="contact-sidebar__title">Connect on Social</h3>
                <div className="contact-socials">
                  {socials.map(({ icon, label, handle, link, color }) => (
                    <a key={label} href={link} target="_blank" rel="noreferrer" className="contact-social-card glass-card">
                      <div className="contact-social-card__icon" style={{ background: `linear-gradient(135deg, ${color}, #ffbf8a)` }}>
                        {icon}
                      </div>
                      <div>
                        <strong className="contact-social-card__label">{label}</strong>
                        <span className="contact-social-card__handle">{handle}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="contact-map glass-card">
                <div className="contact-map__inner">
                  <div className="contact-map__pin">📍</div>
                  <h4>Karachi, Pakistan</h4>
                  <p>Available for remote collaboration globally</p>
                  <div className="contact-map__grid">
                    {Array.from({ length: 25 }).map((_, i) => (
                      <div key={i} className="contact-map__cell" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick contact highlight */}
              <div className="contact-highlight glass-card">
                <span className="contact-highlight__emoji">⚡</span>
                <div>
                  <strong>Quick Response Guaranteed</strong>
                  <p>All inquiries answered within 24 hours on business days.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
