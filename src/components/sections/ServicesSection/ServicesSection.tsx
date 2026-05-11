import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FaSearch, FaPen, FaInstagram, FaYoutube, FaBullhorn, FaUser } from 'react-icons/fa';
import { useScrollReveal, fadeUp, staggerContainer } from '../../../hooks/useScrollReveal';
import './ServicesSection.css';

const services = [
  {
    icon: <FaSearch />,
    title: 'SEO Optimization',
    desc: 'Data-driven keyword research, on-page optimization, and technical SEO to boost your organic rankings and drive qualified traffic.',
    color: '#f9a8c9',
    number: '01'
  },
  {
    icon: <FaPen />,
    title: 'Content Strategy',
    desc: 'Crafting compelling narratives and content calendars that resonate with your audience and align with your brand goals.',
    color: '#ffbf8a',
    number: '02'
  },
  {
    icon: <FaInstagram />,
    title: 'Instagram Growth',
    desc: 'Strategic reels, aesthetic feed curation, and engagement tactics to organically grow your Instagram presence.',
    color: '#ff9dc7',
    number: '03'
  },
  {
    icon: <FaYoutube />,
    title: 'YouTube Branding',
    desc: 'Channel optimization, thumbnail design strategy, and YouTube SEO to maximize your video reach and subscriber growth.',
    color: '#ffa05c',
    number: '04'
  },
  {
    icon: <FaBullhorn />,
    title: 'Social Media Marketing',
    desc: 'Full-funnel social media management across platforms to build community, brand awareness, and drive conversions.',
    color: '#f9a8c9',
    number: '05'
  },
  {
    icon: <FaUser />,
    title: 'Personal Branding',
    desc: 'Defining your unique voice, visual identity, and positioning strategy to stand out in your industry.',
    color: '#ffbf8a',
    number: '06'
  },
];

function ServiceCard({ icon, title, desc, color, number }: any) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-10deg', '10deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);

    // Set CSS variables for the shine effect
    e.currentTarget.style.setProperty('--mouse-x', `${(mouseX / width) * 100}%`);
    e.currentTarget.style.setProperty('--mouse-y', `${(mouseY / height) * 100}%`);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      variants={fadeUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="service-card glass-card"
    >
      <div className="service-card__number">{number}</div>
      <div 
        className="service-card__icon" 
        style={{ '--icon-color': color, transform: 'translateZ(30px)' } as React.CSSProperties}
      >
        {icon}
        <div className="service-card__icon-glow" style={{ background: color }} />
      </div>
      <h3 className="service-card__title" style={{ transform: 'translateZ(20px)' }}>{title}</h3>
      <p className="service-card__desc" style={{ transform: 'translateZ(10px)' }}>{desc}</p>
      
      <Link 
        to="/experience" 
        className="service-card__footer" 
        style={{ transform: 'translateZ(15px)', textDecoration: 'none', display: 'block' }}
      >
        <div className="service-card__arrow">
          <span>Explore Service</span>
          <div className="arrow-icon">→</div>
        </div>
      </Link>

      <div className="service-card__glow" />
    </motion.div>
  );
}

export default function ServicesSection() {
  const { ref, controls } = useScrollReveal();

  return (
    <section className="services-section section" id="services">
      {/* Decorative Background Elements */}
      <div className="services-bg-decor">
        <div className="decor-blob blob-1"></div>
        <div className="decor-blob blob-2"></div>
        <div className="decor-grid"></div>
      </div>

      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
          className="services-inner"
        >
          <motion.div className="section-header" variants={fadeUp}>
            <div className="section-tag-wrapper">
              <span className="section-tag">✦ What I Do</span>
            </div>
            <h2 className="section-title">
              Services That Drive <span className="gradient-text">Results</span>
            </h2>
            <p className="section-subtitle">
              From SEO strategy to content creation — I offer end-to-end digital marketing solutions tailored to your brand's growth.
            </p>
            <div className="section-divider-custom" />
          </motion.div>

          <motion.div className="services-grid" variants={staggerContainer}>
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
