import { motion, AnimatePresence } from 'framer-motion';
import './LoadingScreen.css';

export default function LoadingScreen() {
  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    >
      <motion.div
        className="loading-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <div className="loading-icon">
          <div className="loading-petal" />
          <div className="loading-petal" />
          <div className="loading-petal" />
          <div className="loading-petal" />
        </div>
        <div className="loading-logo">Faiza<span className="loading-dot">.</span></div>
        <p className="loading-subtitle">SEO Specialist &amp; Content Creator</p>
        <div className="loading-bar-container">
          <div className="loading-bar" />
        </div>
      </motion.div>
    </motion.div>
  );
}
