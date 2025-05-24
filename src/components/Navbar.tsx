import React, { useState, useEffect } from 'react';
import { Menu, X, Search } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md text-gray-800'
          : 'bg-transparent text-white'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">TechEvolution</h1>

        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#history"
            className="hover:text-blue-500 transition-colors duration-200"
          >
            Industrial Revolution
          </a>
          <a
            href="#impact"
            className="hover:text-blue-500 transition-colors duration-200"
          >
            Impact
          </a>
          <a
            href="#future"
            className="hover:text-blue-500 transition-colors duration-200"
          >
            Future
          </a>
          <button className="flex items-center">
            <Search size={20} />
          </button>
        </div>

        <button
          className="md:hidden text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white text-gray-800 py-4 px-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            <a
              href="#history"
              className="py-2 hover:text-blue-500 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Industrial Revolution
            </a>
            <a
              href="#impact"
              className="py-2 hover:text-blue-500 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Impact
            </a>
            <a
              href="#future"
              className="py-2 hover:text-blue-500 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Future
            </a>
            <div className="flex items-center border-b border-gray-300 py-2">
              <Search size={20} className="text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent outline-none w-full"
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;