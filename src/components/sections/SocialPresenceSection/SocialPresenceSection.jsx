import { motion } from 'framer-motion';
import { FaInstagram, FaYoutube, FaUsers, FaHandshake } from 'react-icons/fa';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { useScrollReveal, fadeUp, staggerContainer } from '../../../hooks/useScrollReveal';
import './SocialPresenceSection.css';

const presenceCards = [
  {
    icon: <FaInstagram />,
    platform: 'Instagram',
    handle: '@faizakhanpathan',
    stat: '50000',
    statLabel: 'Followers',
    desc: 'Lifestyle, SEO tips, and behind-the-scenes content creation journey.',
    gradient: 'linear-gradient(135deg, #f9a8c9, #ff9dc7)',
    link: 'https://instagram.com',
  },
  {
    icon: <FaYoutube />,
    platform: 'YouTube',
    handle: 'Faiza Khan Pathan',
    stat: '25000',
    statLabel: 'Subscribers',
    desc: 'Educational SEO tutorials, content strategy guides, and creator vlogs.',
    gradient: 'linear-gradient(135deg, #ffbf8a, #ffa05c)',
    link: 'https://youtube.com',
  },
  {
    icon: <FaUsers />,
    platform: 'Audience Reach',
    handle: 'Multi-platform',
    stat: '100000',
    statLabel: 'Combined Reach',
    desc: 'Building engaged communities across digital platforms with authentic content.',
    gradient: 'linear-gradient(135deg, #ff9dc7, #ffbf8a)',
    link: '#',
  },
  {
    icon: <FaHandshake />,
    platform: 'Brand Collabs',
    handle: 'Partnerships',
    stat: '30',
    statLabel: 'Brand Deals',
    desc: 'Collaborating with leading brands to create impactful sponsored content.',
    gradient: 'linear-gradient(135deg, #f9a8c9, #ffa05c)',
    link: '/contact',
  },
];

export default function SocialPresenceSection() {
  const { ref, controls } = useScrollReveal(0.1);

  return (
    <section className="social-section section" id="social">
      <div className="social-section__bg-deco" />
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
        >
          <motion.div className="section-header" variants={fadeUp}>
            <span className="section-tag">✦ Social Presence</span>
            <h2 className="section-title">Digital <span className="gradient-text">Creator</span> Reach</h2>
            <p className="section-subtitle">
              Building authentic connections with audiences across platforms through meaningful content.
            </p>
            <div className="section-divider" />
          </motion.div>

          <motion.div className="social-grid" variants={staggerContainer}>
            {presenceCards.map((card) => (
              <SocialCard key={card.platform} card={card} controls={controls} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function SocialCard({ card }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <motion.a
      ref={ref}
      href={card.link}
      target={card.link.startsWith('http') ? '_blank' : '_self'}
      rel="noreferrer"
      className="social-card glass-card"
      variants={fadeUp}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      <div className="social-card__icon-wrap" style={{ background: card.gradient }}>
        {card.icon}
      </div>
      <div className="social-card__body">
        <div className="social-card__stat">
          {inView ? (
            <CountUp
              end={parseInt(card.stat)}
              duration={2.5}
              separator=","
              suffix="+"
              className="social-card__stat-number gradient-text"
            />
          ) : (
            <span className="social-card__stat-number gradient-text">0</span>
          )}
          <span className="social-card__stat-label">{card.statLabel}</span>
        </div>
        <h3 className="social-card__platform">{card.platform}</h3>
        <span className="social-card__handle">{card.handle}</span>
        <p className="social-card__desc">{card.desc}</p>
      </div>
    </motion.a>
  );
}
