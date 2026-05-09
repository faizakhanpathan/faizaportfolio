import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useScrollReveal, fadeUp, staggerContainer } from '../../../hooks/useScrollReveal';
import './TestimonialsSection.css';

const testimonials = [
  {
    name: 'Sarah Ahmed',
    role: 'E-commerce Owner',
    text: 'Faiza transformed our online visibility completely. Our organic traffic increased by 340% in just 4 months! Her SEO strategy was meticulous and the results speak for themselves.',
    rating: 5,
    initials: 'SA',
    color: '#f9a8c9',
  },
  {
    name: 'Zara Malik',
    role: 'Fashion Blogger',
    text: 'Working with Faiza on my Instagram content strategy was a game-changer. She helped me grow from 5K to 50K followers authentically. Her knowledge of the algorithm is unmatched.',
    rating: 5,
    initials: 'ZM',
    color: '#ffbf8a',
  },
  {
    name: 'Ali Hassan',
    role: 'Digital Startup Founder',
    text: 'Faiza\'s content strategy for our YouTube channel was exceptional. She optimized every video for SEO and our channel hit 20K subscribers within 3 months of working with her.',
    rating: 5,
    initials: 'AH',
    color: '#ff9dc7',
  },
  {
    name: 'Nadia Khan',
    role: 'Lifestyle Influencer',
    text: 'The personal branding package Faiza created for me was absolutely stunning. She has a gift for capturing authentic voices and building cohesive brand identities.',
    rating: 5,
    initials: 'NK',
    color: '#ffa05c',
  },
  {
    name: 'Imran Sheikh',
    role: 'Restaurant Owner',
    text: 'Our local SEO improved drastically after Faiza\'s audit and strategy. We\'re now ranking #1 for multiple keywords in our city and footfall has increased significantly.',
    rating: 5,
    initials: 'IS',
    color: '#f9a8c9',
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const { ref, controls } = useScrollReveal(0.1);

  const prev = () => setActive((p) => (p === 0 ? testimonials.length - 1 : p - 1));
  const next = () => setActive((p) => (p === testimonials.length - 1 ? 0 : p + 1));

  return (
    <section className="testimonials-section section" id="testimonials">
      <div className="testimonials-section__bg" />
      <div className="container">
        <motion.div ref={ref} initial="hidden" animate={controls} variants={staggerContainer}>
          <motion.div className="section-header" variants={fadeUp}>
            <span className="section-tag">✦ Client Love</span>
            <h2 className="section-title">What My <span className="gradient-text">Clients Say</span></h2>
            <p className="section-subtitle">Real results, real relationships — here's what clients say about working together.</p>
            <div className="section-divider" />
          </motion.div>

          <motion.div className="testimonials-layout" variants={fadeUp}>
            {/* Main testimonial */}
            <div className="testimonial-featured">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  className="testimonial-card glass-card"
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="testimonial-card__quote-icon">
                    <FaQuoteLeft />
                  </div>
                  <p className="testimonial-card__text">{testimonials[active].text}</p>
                  <div className="testimonial-card__rating">
                    {Array.from({ length: testimonials[active].rating }).map((_, i) => (
                      <FaStar key={i} className="testimonial-card__star" />
                    ))}
                  </div>
                  <div className="testimonial-card__author">
                    <div
                      className="testimonial-card__avatar"
                      style={{ background: `linear-gradient(135deg, ${testimonials[active].color}, #ffbf8a)` }}
                    >
                      {testimonials[active].initials}
                    </div>
                    <div>
                      <strong className="testimonial-card__name">{testimonials[active].name}</strong>
                      <span className="testimonial-card__role">{testimonials[active].role}</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="testimonials-nav">
                <button className="testimonials-nav__btn" onClick={prev} aria-label="Previous testimonial">
                  <FaChevronLeft />
                </button>
                <div className="testimonials-dots">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      className={`testimonials-dot ${i === active ? 'testimonials-dot--active' : ''}`}
                      onClick={() => setActive(i)}
                      aria-label={`Go to testimonial ${i + 1}`}
                    />
                  ))}
                </div>
                <button className="testimonials-nav__btn" onClick={next} aria-label="Next testimonial">
                  <FaChevronRight />
                </button>
              </div>
            </div>

            {/* Side cards */}
            <div className="testimonials-side">
              {testimonials.filter((_, i) => i !== active).slice(0, 2).map((t) => (
                <div key={t.name} className="testimonial-mini glass-card">
                  <div className="testimonial-mini__header">
                    <div
                      className="testimonial-mini__avatar"
                      style={{ background: `linear-gradient(135deg, ${t.color}, #ffbf8a)` }}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <strong className="testimonial-mini__name">{t.name}</strong>
                      <span className="testimonial-mini__role">{t.role}</span>
                    </div>
                  </div>
                  <p className="testimonial-mini__text">"{t.text.substring(0, 80)}..."</p>
                  <div className="testimonial-mini__stars">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
