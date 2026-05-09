import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Contact from './pages/Contact';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import './App.css';

const pageVariants: Variants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] } },
  exit: { opacity: 0, y: -16, transition: { duration: 0.35 } },
};

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><Home /></motion.div>} />
        <Route path="/about" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><About /></motion.div>} />
        <Route path="/experience" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><Experience /></motion.div>} />
        <Route path="/education" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><Education /></motion.div>} />
        <Route path="/contact" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><Contact /></motion.div>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <AnimatePresence>
        {loading && <LoadingScreen key="loader" />}
      </AnimatePresence>
      {!loading && (
        <>
          <Navbar />
          <main>
            <AnimatedRoutes />
          </main>
          <Footer />
          <ScrollToTop />
        </>
      )}
    </Router>
  );
}
