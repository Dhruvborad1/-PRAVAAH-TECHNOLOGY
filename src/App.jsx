import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/loading/LoadingScreen';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollAnimations from './components/ScrollAnimations';
import CustomCursor from './components/custom-cursor/CustomCursor';
import ScrollToTopButton from './components/ScrollToTopButton';

// Pages
import Home from './pages/Home';
import AboutPage from './pages/About';
import ServicesPage from './pages/Services';
import ProjectsPage from './pages/Projects';
import CareersPage from './pages/Careers';
import ContactPage from './pages/Contact';

function App() {
  const location = useLocation();
  
  // Checks sessionStorage directly on initial load: only true if not seen yet
  const [isLoading, setIsLoading] = useState(() => {
    return !sessionStorage.getItem('pravaah_welcome_shown');
  });

  const handleLoadingComplete = () => {
    sessionStorage.setItem('pravaah_welcome_shown', 'true');
    setIsLoading(false);
  };

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    if (!isLoading) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, isLoading]);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen 
            key="loading-screen" 
            onComplete={handleLoadingComplete} 
          />
        )}
      </AnimatePresence>

      <CustomCursor />
      <Navbar />
      <ScrollAnimations />
      <ScrollToTopButton />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;