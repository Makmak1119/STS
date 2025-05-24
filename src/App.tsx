import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import IndustrialRevolution from './sections/IndustrialRevolution';
import TechnologyImpact from './sections/TechnologyImpact';
import FutureTechnology from './sections/FutureTechnology';
import Footer from './components/Footer';
import './animations.css';

function App() {
  useEffect(() => {
    // Update document title
    document.title = 'TechEvolution | Past, Present & Future of Technology';
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId) {
          document.querySelector(targetId)?.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
    
    // Initialize intersection observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    // Observe all fade-in sections
    document.querySelectorAll('.fade-in-section').forEach((el) => {
      observer.observe(el);
    });
    
    return () => {
      // Cleanup
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function (e) {
          e.preventDefault();
        });
      });
      
      document.querySelectorAll('.fade-in-section').forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <IndustrialRevolution />
      <TechnologyImpact />
      <FutureTechnology />
      <Footer />
    </div>
  );
}

export default App;