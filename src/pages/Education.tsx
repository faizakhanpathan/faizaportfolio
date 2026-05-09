import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate, FaMedal, FaLaptop } from 'react-icons/fa';
import { useScrollReveal, fadeUp, scaleIn, staggerContainer } from '../hooks/useScrollReveal';
import CTASection from '../components/sections/CTASection/CTASection';
import './Education.css';

const education = [
  {
    degree: 'Bachelor of Commerce (B.Com)',
    institution: 'University of Karachi',
    period: '2016 – 2019',
    desc: 'Focused on business administration, marketing fundamentals, and communications. Built the analytical foundation for digital marketing.',
    icon: <FaGraduationCap />,
    color: '#f9a8c9',
  },
  {
    degree: 'Intermediate in Commerce',
    institution: 'Board of Secondary Education',
    period: '2014 – 2016',
    desc: 'Completed intermediate level education with distinction in Commerce subjects.',
    icon: <FaGraduationCap />,
    color: '#ffbf8a',
  },
];

const certifications = [
  {
    title: 'Google Analytics 4 Certification',
    issuer: 'Google',
    year: '2024',
    icon: '🎯',
    color: '#f9a8c9',
  },
  {
    title: 'Google Search Ads Certification',
    issuer: 'Google Skillshop',
    year: '2024',
    icon: '🔍',
    color: '#ffbf8a',
  },
  {
    title: 'HubSpot Content Marketing',
    issuer: 'HubSpot Academy',
    year: '2023',
    icon: '✍️',
    color: '#ff9dc7',
  },
  {
    title: 'SEMrush SEO Fundamentals',
    issuer: 'SEMrush Academy',
    year: '2023',
    icon: '📊',
    color: '#ffa05c',
  },
  {
    title: 'Facebook Blueprint Certification',
    issuer: 'Meta',
    year: '2022',
    icon: '📱',
    color: '#f9a8c9',
  },
  {
    title: 'YouTube Creator Academy',
    issuer: 'Google',
    year: '2022',
    icon: '🎬',
    color: '#ffbf8a',
  },
];

const courses = [
  {
    title: 'Advanced Technical SEO Masterclass',
    platform: 'Udemy',
    hours: '40 hours',
    icon: <FaLaptop />,
    color: '#f9a8c9',
  },
  {
    title: 'Instagram Marketing Mastery',
    platform: 'Coursera',
    hours: '30 hours',
    icon: <FaLaptop />,
    color: '#ffbf8a',
  },
  {
    title: 'YouTube SEO & Channel Growth',
    platform: 'Skillshare',
    hours: '25 hours',
    icon: <FaLaptop />,
    color: '#ff9dc7',
  },
  {
    title: 'Content Strategy for Social Media',
    platform: 'LinkedIn Learning',
    hours: '20 hours',
    icon: <FaLaptop />,
    color: '#ffa05c',
  },
  {
    title: 'Canva for Business Graphics',
    platform: 'Canva Design School',
    hours: '15 hours',
    icon: <FaLaptop />,
    color: '#f9a8c9',
  },
  {
    title: 'WordPress for Beginners to Advanced',
    platform: 'Udemy',
    hours: '35 hours',
    icon: <FaLaptop />,
    color: '#ffbf8a',
  },
];

const workshops = [
  { title: 'Digital Marketing Summit 2024', org: 'DigiSummit Pakistan', icon: '🎤' },
  { title: 'Creator Economy Workshop', org: 'Social Media Week', icon: '🚀' },
  { title: 'SEO Bootcamp - Advanced', org: 'Moz Academy', icon: '🔧' },
  { title: 'Personal Branding Masterclass', org: 'BrandFest Online', icon: '💡' },
];

export default function Education() {
  const heroReveal = useScrollReveal(0.1);
  const eduReveal = useScrollReveal(0.1);
  const certReveal = useScrollReveal(0.1);
  const courseReveal = useScrollReveal(0.1);

  return (
    <div className="page-wrapper education-page">
      {/* Page Hero */}
      <section className="edu-hero section">
        <div className="edu-hero__bg" />
        <div className="container">
          <motion.div
            ref={heroReveal.ref}
            initial="hidden"
            animate={heroReveal.controls}
            variants={staggerContainer}
            className="edu-hero__content"
          >
            <motion.span className="section-tag" variants={fadeUp}>✦ Education</motion.span>
            <motion.h1 className="section-title" variants={fadeUp}>
              Knowledge That <span className="gradient-text">Powers Results</span>
            </motion.h1>
            <motion.p className="section-subtitle" style={{ margin: '0 auto' }} variants={fadeUp}>
              A strong academic foundation combined with continuous digital education and industry certifications.
            </motion.p>
            <div className="section-divider" style={{ margin: '20px auto 0' }} />
          </motion.div>
        </div>
      </section>

      {/* Academic */}
      <section className="edu-academic section" id="academic">
        <div className="container">
          <motion.div
            ref={eduReveal.ref}
            initial="hidden"
            animate={eduReveal.controls}
            variants={staggerContainer}
          >
            <motion.div className="section-header" variants={fadeUp}>
              <span className="section-tag">✦ Academic Qualifications</span>
              <h2 className="section-title">Academic <span className="gradient-text">Background</span></h2>
              <div className="section-divider" />
            </motion.div>

            <motion.div className="edu-cards" variants={staggerContainer}>
              {education.map((edu) => (
                <motion.div key={edu.degree} className="edu-card glass-card" variants={fadeUp} whileHover={{ y: -6 }}>
                  <div className="edu-card__icon" style={{ background: `linear-gradient(135deg, ${edu.color}, #ffbf8a)` }}>
                    {edu.icon}
                  </div>
                  <div className="edu-card__content">
                    <span className="edu-card__period">{edu.period}</span>
                    <h3 className="edu-card__degree">{edu.degree}</h3>
                    <span className="edu-card__institution">{edu.institution}</span>
                    <p className="edu-card__desc">{edu.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section className="edu-certs section animated-gradient-bg" id="certifications">
        <div className="container">
          <motion.div
            ref={certReveal.ref}
            initial="hidden"
            animate={certReveal.controls}
            variants={staggerContainer}
          >
            <motion.div className="section-header" variants={fadeUp}>
              <span className="section-tag">✦ Certifications</span>
              <h2 className="section-title">Industry <span className="gradient-text">Certifications</span></h2>
              <div className="section-divider" />
            </motion.div>

            <motion.div className="certs-grid" variants={staggerContainer}>
              {certifications.map((cert) => (
                <motion.div key={cert.title} className="cert-card glass-card" variants={scaleIn} whileHover={{ y: -6, scale: 1.02 }}>
                  <div className="cert-card__icon">{cert.icon}</div>
                  <div className="cert-card__year badge" style={{ background: `rgba(${cert.color.replace('#','')}, 0.15)`, color: cert.color }}>
                    {cert.year}
                  </div>
                  <h3 className="cert-card__title">{cert.title}</h3>
                  <span className="cert-card__issuer">
                    <FaCertificate style={{ color: cert.color }} /> {cert.issuer}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Courses */}
      <section className="edu-courses section" id="courses">
        <div className="container">
          <motion.div
            ref={courseReveal.ref}
            initial="hidden"
            animate={courseReveal.controls}
            variants={staggerContainer}
          >
            <motion.div className="section-header" variants={fadeUp}>
              <span className="section-tag">✦ Continuous Learning</span>
              <h2 className="section-title">Courses &amp; <span className="gradient-text">Training</span></h2>
              <div className="section-divider" />
            </motion.div>

            <div className="courses-layout">
              <motion.div className="courses-list" variants={staggerContainer}>
                {courses.map((course) => (
                  <motion.div key={course.title} className="course-item glass-card" variants={fadeUp} whileHover={{ x: 8 }}>
                    <div className="course-item__icon" style={{ background: `linear-gradient(135deg, ${course.color}, #ffbf8a)` }}>
                      {course.icon}
                    </div>
                    <div className="course-item__body">
                      <h4 className="course-item__title">{course.title}</h4>
                      <div className="course-item__meta">
                        <span>{course.platform}</span>
                        <span className="course-item__dot">·</span>
                        <span>{course.hours}</span>
                      </div>
                    </div>
                    <FaMedal className="course-item__medal" />
                  </motion.div>
                ))}
              </motion.div>

              {/* Workshops */}
              <motion.div className="workshops" variants={fadeUp}>
                <h3 className="workshops__title">Workshops &amp; Events</h3>
                {workshops.map((w) => (
                  <div key={w.title} className="workshop-item glass-card">
                    <span className="workshop-item__icon">{w.icon}</span>
                    <div>
                      <strong className="workshop-item__title">{w.title}</strong>
                      <span className="workshop-item__org">{w.org}</span>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
