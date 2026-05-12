import { motion } from 'framer-motion';
import { FaBriefcase, FaInstagram, FaYoutube, FaHandshake, FaSearch } from 'react-icons/fa';
import CountUpPkg from 'react-countup';
const CountUp = (CountUpPkg as any).default || CountUpPkg;
import { useInView } from 'react-intersection-observer';
import { useScrollReveal, fadeUp, slideLeft, slideRight, staggerContainer } from '../hooks/useScrollReveal';
import CTASection from '../components/sections/CTASection/CTASection';
import './Experience.css';

const experiences = [
  {
    period: '2023 – Present',
    role: 'Senior SEO & Content Strategist',
    company: 'Freelance / Self-employed',
    type: 'Full-time',
    icon: <FaSearch />,
    color: '#f9a8c9',
    achievements: [
      'Managed SEO for 10+ clients, delivering avg. 280% organic traffic growth',
      'Developed content strategies resulting in top 3 Google rankings',
      'Created editorial calendars and managed content teams',
      'Increased client e-commerce revenue by avg. 45% through SEO',
    ],
  },
  {
    period: '2022 – 2023',
    role: 'Instagram Content Creator & Strategist',
    company: 'Faiza Khan — Personal Brand',
    type: 'Creator',
    icon: <FaInstagram />,
    color: '#ff9dc7',
    achievements: [
      'Grew Instagram following from 0 to 1.8K+ organically in 12 months',
      'Secured 10+ brand collaborations with lifestyle and beauty brands',
      'Developed reels strategy resulting in 1M+ combined reel views',
      'Maintained 8.5% average engagement rate across all content',
    ],
  },
  {
    period: '2021 – 2022',
    role: 'YouTube Content Creator',
    company: 'Faiza Khan — YouTube Channel',
    type: 'Creator',
    icon: <FaYoutube />,
    color: '#ffbf8a',
    achievements: [
      'Built YouTube channel to 850 subscribers with educational SEO content',
      'Produced 100+ tutorial videos on SEO, content creation, and digital marketing',
      'Achieved 500K+ total video views through strategic YouTube SEO',
      'Launched series on "SEO for Beginners" with 50K+ views per episode',
    ],
  },
  {
    period: '2020 – 2021',
    role: 'Digital Marketing Specialist',
    company: 'Various Agencies (Contract)',
    type: 'Contract',
    icon: <FaBriefcase />,
    color: '#ffa05c',
    achievements: [
      'Executed social media campaigns for 10+ brands across niches',
      'Managed monthly ad budgets and content calendars',
      'Delivered monthly analytics reports with actionable insights',
      'Improved client page engagement by average 120%',
    ],
  },
  {
    period: '2019 – 2020',
    role: 'Brand Collaboration & Marketing',
    company: 'Freelance Influencer Marketing',
    type: 'Freelance',
    icon: <FaHandshake />,
    color: '#f9a8c9',
    achievements: [
      'Collaborated with 10+ brands for product reviews and sponsored content',
      'Built authentic audience trust through transparent content creation',
      'Negotiated brand deals and managed influencer agreements',
      'Created compelling product storytelling campaigns',
    ],
  },
];

const counters = [
  { value: 30, suffix: '+', label: 'Projects Completed', icon: '📁' },
  { value: 10, suffix: '+', label: 'Clients Worked With', icon: '🤝' },
  { value: 2500, suffix: '+', label: 'Social Reach', icon: '🌟' },
  { value: 1, suffix: '+', label: 'Year Experience', icon: '📅' },
];

function Counter({ value, suffix, label, icon }: { value: number, suffix: string, label: string, icon: string }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
  return (
    <div ref={ref} className="exp-counter">
      <span className="exp-counter__icon">{icon}</span>
      <div className="exp-counter__value gradient-text">
        {inView ? <CountUp end={value} duration={2.5} separator="," suffix={suffix} /> : `0${suffix}`}
      </div>
      <span className="exp-counter__label">{label}</span>
    </div>
  );
}

export default function Experience() {
  const heroReveal = useScrollReveal(0.1);
  const timelineReveal = useScrollReveal(0.1);

  return (
    <div className="page-wrapper experience-page">
      {/* Page Hero */}
      <section className="exp-hero section">
        <div className="exp-hero__blob exp-hero__blob--1" />
        <div className="exp-hero__blob exp-hero__blob--2" />
        <div className="container">
          <motion.div
            ref={heroReveal.ref}
            initial="hidden"
            animate={heroReveal.controls}
            variants={staggerContainer}
            className="exp-hero__content"
          >
            <motion.span className="section-tag" variants={fadeUp}>✦ My Experience</motion.span>
            <motion.h1 className="section-title" variants={fadeUp}>
              A Track Record of <span className="gradient-text">Real Results</span>
            </motion.h1>
            <motion.p className="section-subtitle" style={{ margin: '0 auto' }} variants={fadeUp}>
              One year of building brands, creating content, and driving measurable SEO growth for clients across industries.
            </motion.p>
            <div className="section-divider" style={{ margin: '20px auto 0' }} />
          </motion.div>
        </div>
      </section>

      {/* Counters */}
      <section className="exp-counters-section">
        <div className="container">
          <div className="exp-counters-grid">
            {counters.map((c) => <Counter key={c.label} {...c} />)}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="exp-timeline-section section animated-gradient-bg" id="timeline">
        <div className="container">
          <motion.div
            ref={timelineReveal.ref}
            initial="hidden"
            animate={timelineReveal.controls}
            variants={staggerContainer}
          >
            <motion.div className="section-header" variants={fadeUp}>
              <span className="section-tag">✦ Work History</span>
              <h2 className="section-title">Professional <span className="gradient-text">Timeline</span></h2>
              <div className="section-divider" />
            </motion.div>

            <div className="exp-timeline">
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.period}
                  className="exp-timeline-item"
                  variants={i % 2 === 0 ? slideLeft : slideRight}
                >
                  <div className="exp-timeline-item__period">
                    <span>{exp.period}</span>
                    <div className="exp-timeline-dot" style={{ background: exp.color }} />
                  </div>
                  <div className="exp-card glass-card">
                    <div className="exp-card__header">
                      <div className="exp-card__icon" style={{ background: `linear-gradient(135deg, ${exp.color}, #ffbf8a)` }}>
                        {exp.icon}
                      </div>
                      <div>
                        <h3 className="exp-card__role">{exp.role}</h3>
                        <span className="exp-card__company">{exp.company}</span>
                        <span className="badge" style={{ marginLeft: '12px' }}>{exp.type}</span>
                      </div>
                    </div>
                    <ul className="exp-card__achievements">
                      {exp.achievements.map((a) => (
                        <li key={a}>
                          <span className="exp-card__bullet" style={{ background: exp.color }} />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
