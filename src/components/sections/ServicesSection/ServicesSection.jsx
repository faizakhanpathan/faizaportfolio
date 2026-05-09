import { motion } from 'framer-motion';
import { FaSearch, FaPen, FaInstagram, FaYoutube, FaBullhorn, FaUser } from 'react-icons/fa';
import { useScrollReveal, fadeUp, staggerContainer } from '../../../hooks/useScrollReveal';
import './ServicesSection.css';

const services = [
  {
    icon: <FaSearch />,
    title: 'SEO Optimization',
    desc: 'Data-driven keyword research, on-page optimization, and technical SEO to boost your organic rankings and drive qualified traffic.',
    color: '#f9a8c9',
  },
  {
    icon: <FaPen />,
    title: 'Content Strategy',
    desc: 'Crafting compelling narratives and content calendars that resonate with your audience and align with your brand goals.',
    color: '#ffbf8a',
  },
  {
    icon: <FaInstagram />,
    title: 'Instagram Growth',
    desc: 'Strategic reels, aesthetic feed curation, and engagement tactics to organically grow your Instagram presence.',
    color: '#ff9dc7',
  },
  {
    icon: <FaYoutube />,
    title: 'YouTube Branding',
    desc: 'Channel optimization, thumbnail design strategy, and YouTube SEO to maximize your video reach and subscriber growth.',
    color: '#ffa05c',
  },
  {
    icon: <FaBullhorn />,
    title: 'Social Media Marketing',
    desc: 'Full-funnel social media management across platforms to build community, brand awareness, and drive conversions.',
    color: '#f9a8c9',
  },
  {
    icon: <FaUser />,
    title: 'Personal Branding',
    desc: 'Defining your unique voice, visual identity, and positioning strategy to stand out in your industry.',
    color: '#ffbf8a',
  },
];

export default function ServicesSection() {
  const { ref, controls } = useScrollReveal();

  return (
    <section className="services-section section" id="services">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
          className="services-inner"
        >
          <motion.div className="section-header" variants={fadeUp}>
            <span className="section-tag">✦ What I Do</span>
            <h2 className="section-title">Services That Drive <span className="gradient-text">Results</span></h2>
            <p className="section-subtitle">
              From SEO strategy to content creation — I offer end-to-end digital marketing solutions tailored to your brand.
            </p>
            <div className="section-divider" />
          </motion.div>

          <motion.div className="services-grid" variants={staggerContainer}>
            {services.map(({ icon, title, desc, color }, i) => (
              <motion.div
                key={title}
                className="service-card glass-card"
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="service-card__icon" style={{ '--icon-color': color }}>
                  {icon}
                  <div className="service-card__icon-glow" style={{ background: color }} />
                </div>
                <h3 className="service-card__title">{title}</h3>
                <p className="service-card__desc">{desc}</p>
                <div className="service-card__arrow">→</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
