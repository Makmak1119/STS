import React from 'react';
import { Github, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">TechEvolution</h3>
            <p className="text-gray-400">
              Exploring the past, present, and future of technology and its impact on society.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#history" className="text-gray-400 hover:text-white transition-colors">
                  Industrial Revolution
                </a>
              </li>
              <li>
                <a href="#impact" className="text-gray-400 hover:text-white transition-colors">
                  Impact of Technology
                </a>
              </li>
              <li>
                <a href="#future" className="text-gray-400 hover:text-white transition-colors">
                  Future of Technology
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Subscribe</h4>
            <p className="text-gray-400 mb-2">
              Stay updated with our newsletter
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-md text-gray-800 focus:outline-none w-full"
              />
              <button className="bg-blue-500 hover:bg-blue-600 transition-colors px-4 py-2 rounded-r-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} TechEvolution. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;