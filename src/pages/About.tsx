import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaRocket, FaStar, FaLeaf } from 'react-icons/fa';
import { useScrollReveal, fadeUp, slideLeft, slideRight, staggerContainer } from '../hooks/useScrollReveal';
import CTASection from '../components/sections/CTASection/CTASection';
import './About.css';

const timeline = [
  {
    year: '2019',
    title: 'The Beginning',
    desc: 'Started my digital journey with a passion for storytelling and discovering the power of organic search.',
    icon: <FaLeaf />,
    color: '#f9a8c9',
  },
  {
    year: '2020',
    title: 'SEO Awakening',
    desc: 'Dove deep into technical SEO and content strategy, completing multiple Google certifications and digital marketing courses.',
    icon: <FaRocket />,
    color: '#ffbf8a',
  },
  {
    year: '2021',
    title: 'Creator Era',
    desc: 'Launched my Instagram and YouTube channels, blending SEO expertise with authentic content creation for personal brand growth.',
    icon: <FaStar />,
    color: '#ff9dc7',
  },
  {
    year: '2022',
    title: 'Freelance Success',
    desc: 'Began working with brands and businesses, delivering measurable SEO results and building a loyal clientele.',
    icon: <FaHeart />,
    color: '#ffa05c',
  },
  {
    year: '2023-Present',
    title: 'Full-Scale Agency',
    desc: 'Expanded to full social media management and content strategy for 50+ clients across e-commerce, lifestyle, and tech niches.',
    icon: <FaRocket />,
    color: '#f9a8c9',
  },
];

const values = [
  { icon: '🎯', title: 'Results-First', desc: 'Every strategy is driven by measurable outcomes and data insights.' },
  { icon: '🌸', title: 'Authentic Voice', desc: 'Building genuine connections between brands and their audiences.' },
  { icon: '⚡', title: 'Continuous Growth', desc: 'Always learning, adapting, and staying ahead of digital trends.' },
  { icon: '💡', title: 'Creative Thinking', desc: 'Combining creativity with analytics for powerful content strategies.' },
];

export default function About() {
  const heroReveal = useScrollReveal(0.1);
  const timelineReveal = useScrollReveal(0.1);
  const valuesReveal = useScrollReveal(0.1);

  return (
    <div className="page-wrapper about-page">
      {/* Hero */}
      <section className="about-hero section">
        <div className="about-hero__bg-blob about-hero__bg-blob--1" />
        <div className="about-hero__bg-blob about-hero__bg-blob--2" />
        <div className="container">
          <motion.div
            className="about-hero__grid"
            ref={heroReveal.ref}
            initial="hidden"
            animate={heroReveal.controls}
            variants={staggerContainer}
          >
            {/* Text */}
            <motion.div className="about-hero__text" variants={slideLeft}>
              <span className="section-tag">✦ About Me</span>
              <h1 className="about-hero__title">
                Passion Meets <span className="gradient-text">Purpose</span>
              </h1>
              <div className="section-divider left" style={{ marginBottom: '24px' }} />
              <p className="about-hero__lead">
                I'm Faiza Khan Pathan — an SEO Specialist, Content Creator, and Social Media Strategist based in Pakistan. My journey began with a simple curiosity about how people discover content online, which evolved into a deep passion for organic growth and digital storytelling.
              </p>
              <p className="about-hero__body">
                With over 5 years of hands-on experience, I've helped businesses and creators transform their digital presence through data-driven SEO strategies and compelling content. I believe that the best marketing doesn't feel like marketing — it tells a story that resonates.
              </p>
              <p className="about-hero__body">
                When I'm not optimizing websites or crafting content calendars, you'll find me creating educational reels on Instagram, filming YouTube tutorials, or collaborating with inspiring brands on meaningful campaigns.
              </p>
              <div className="about-hero__mission">
                <div className="about-hero__mission-icon">💌</div>
                <blockquote className="about-hero__mission-text">
                  "My mission is to empower brands and creators to show up authentically in the digital world — and let their story be found."
                </blockquote>
              </div>
            </motion.div>

            {/* Visual */}
            <motion.div className="about-hero__visual" variants={slideRight}>
              <div className="about-hero__image-wrap">
                <div className="about-hero__image">
                  <div className="about-hero__avatar">FK</div>
                </div>
                <div className="about-hero__decorations">
                  <div className="about-badge about-badge--1">
                    <span>🏆</span> Top SEO Specialist
                  </div>
                  <div className="about-badge about-badge--2">
                    <span>📱</span> 100K+ Reach
                  </div>
                  <div className="about-badge about-badge--3">
                    <span>⭐</span> 5+ Years Exp.
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="about-timeline section animated-gradient-bg" id="journey">
        <div className="container">
          <motion.div
            ref={timelineReveal.ref}
            initial="hidden"
            animate={timelineReveal.controls}
            variants={staggerContainer}
          >
            <motion.div className="section-header" variants={fadeUp}>
              <span className="section-tag">✦ My Journey</span>
              <h2 className="section-title">The Road That <span className="gradient-text">Shaped Me</span></h2>
              <div className="section-divider" />
            </motion.div>

            <div className="timeline">
              {timeline.map(({ year, title, desc, icon, color }, i) => (
                <motion.div
                  key={year}
                  className={`timeline-item ${i % 2 === 0 ? 'timeline-item--left' : 'timeline-item--right'}`}
                  variants={i % 2 === 0 ? slideLeft : slideRight}
                >
                  <div className="timeline-card glass-card">
                    <div className="timeline-card__icon" style={{ background: `linear-gradient(135deg, ${color}, #ffbf8a)` }}>
                      {icon}
                    </div>
                    <div className="timeline-card__year" style={{ color }}>{year}</div>
                    <h3 className="timeline-card__title">{title}</h3>
                    <p className="timeline-card__desc">{desc}</p>
                  </div>
                  <div className="timeline-connector">
                    <div className="timeline-dot" style={{ background: color }} />
                    <div className="timeline-line" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="about-values section" id="values">
        {/* Decorative Background Elements */}
        <div className="values-bg-decor">
          <div className="values-blob values-blob--1" />
          <div className="values-blob values-blob--2" />
        </div>

          <div className="container" style={{ position: 'relative', zIndex: 5 }}>
            <motion.div 
              className="section-header"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-tag">✦ Core Values</span>
              <h2 className="section-title">What Drives <span className="gradient-text">Everything I Do</span></h2>
              <div className="section-divider" />
            </motion.div>

            <div className="values-grid">
              {values.map((val, idx) => (
                <ValueCard key={val.title} {...val} delay={idx * 0.1} />
              ))}
            </div>
          </div>
      </section>

      <CTASection />
    </div>
  );
}

function ValueCard({ icon, title, desc, delay }: { icon: string; title: string; desc: string; delay: number }) {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <motion.div 
      className="value-card glass-card" 
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="value-card__icon-wrap">
        <span className="value-card__icon">{icon}</span>
      </div>
      <h3 className="value-card__title">{title}</h3>
      <p className="value-card__desc">{desc}</p>
      <div className="value-card__glow" />
    </motion.div>
  );
}
