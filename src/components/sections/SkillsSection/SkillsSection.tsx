import { motion } from 'framer-motion';
import { useScrollReveal, fadeUp, staggerContainer } from '../../../hooks/useScrollReveal';
import './SkillsSection.css';

const skills = [
  { name: 'SEO Strategy', level: 95, color: '#f9a8c9' },
  { name: 'Content Writing', level: 90, color: '#ffbf8a' },
  { name: 'YouTube SEO', level: 88, color: '#ff9dc7' },
  { name: 'Instagram Marketing', level: 92, color: '#ffa05c' },
  { name: 'Video Content Strategy', level: 85, color: '#f9a8c9' },
  { name: 'Canva Design', level: 88, color: '#ffbf8a' },
  { name: 'WordPress', level: 80, color: '#ff9dc7' },
  { name: 'Google Analytics', level: 87, color: '#ffa05c' },
];

const techBadges = ['Google Search Console', 'Ahrefs', 'SEMrush', 'Moz', 'Canva', 'WordPress', 'YouTube Studio', 'Meta Business Suite', 'Google Analytics 4'];

export default function SkillsSection() {
  const { ref, controls } = useScrollReveal(0.1);

  return (
    <section className="skills-section section animated-gradient-bg" id="skills">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
        >
          <motion.div className="section-header" variants={fadeUp}>
            <span className="section-tag">✦ My Expertise</span>
            <h2 className="section-title">Skills &amp; <span className="gradient-text">Proficiency</span></h2>
            <p className="section-subtitle">
              Years of hands-on experience with industry-leading tools and platforms for SEO and content creation.
            </p>
            <div className="section-divider" />
          </motion.div>

          <div className="skills-layout">
            {/* Progress Bars */}
            <motion.div className="skills-bars" variants={fadeUp}>
              <h3 className="skills-bars__heading">Core Skills</h3>
              {skills.map(({ name, level, color }) => (
                <SkillBar key={name} name={name} level={level} color={color} controls={controls} />
              ))}
            </motion.div>

            {/* Tech stack */}
            <motion.div className="skills-stack" variants={fadeUp}>
              <h3 className="skills-stack__heading">Tools &amp; Platforms</h3>
              <div className="skills-badges">
                {techBadges.map((badge, i) => (
                  <motion.span
                    key={badge}
                    className="skills-badge"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={controls}
                    variants={{
                      visible: {
                        opacity: 1,
                        scale: 1,
                        transition: { delay: 0.05 * i, duration: 0.4 },
                      },
                    }}
                    whileHover={{ scale: 1.08 }}
                  >
                    {badge}
                  </motion.span>
                ))}
              </div>

              {/* Highlights */}
              <div className="skills-highlights">
                {[
                  { value: '5+', label: 'Years Experience' },
                  { value: '150+', label: 'Projects Done' },
                  { value: '50+', label: 'Happy Clients' },
                ].map(({ value, label }) => (
                  <div key={label} className="skills-highlight">
                    <span className="skills-highlight__value gradient-text">{value}</span>
                    <span className="skills-highlight__label">{label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SkillBar({ name, level, color, controls }: { name: string, level: number, color: string, controls: any }) {
  return (
    <div className="skill-bar">
      <div className="skill-bar__header">
        <span className="skill-bar__name">{name}</span>
        <span className="skill-bar__level" style={{ color }}>{level}%</span>
      </div>
      <div className="skill-bar__track">
        <motion.div
          className="skill-bar__fill"
          style={{ background: `linear-gradient(90deg, ${color} 0%, #ffbf8a 100%)` }}
          initial={{ width: 0 }}
          animate={controls}
          variants={{
            visible: {
              width: `${level}%`,
              transition: { duration: 1.2, ease: [0.4, 0, 0.2, 1] },
            },
          }}
        />
      </div>
    </div>
  );
}
