import { useState, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { HomePage } from '@/pages/HomePage';
import { ProjectsPage } from '@/pages/ProjectsPage';
import { ProjectDetailPage } from '@/pages/ProjectDetailPage';
import { ContactPage } from '@/pages/ContactPage';
import { ServicesPage } from '@/pages/ServicesPage';

function AnimatedRoutes() {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNavigate = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 400);
  }, []);

  return (
    <>
      {/* Page Transition Overlay */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 bg-white z-50 pointer-events-none"
          />
        )}
      </AnimatePresence>

      <Navbar onNavigate={handleNavigate} />

      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage onNavigate={handleNavigate} />} />
            <Route path="/projects/:slug" element={<ProjectDetailPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services" element={<ServicesPage />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
