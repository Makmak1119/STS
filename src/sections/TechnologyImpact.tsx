import React, { useState } from 'react';
import { Globe, Home, Briefcase, Brain, Heart, Users } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const TechnologyImpact: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const impactItems = [
    {
      icon: <Globe size={24} />,
      title: "Global Connectivity",
      description: "The internet and telecommunications have connected people across the globe, enabling instant communication, knowledge sharing, and global commerce at an unprecedented scale."
    },
    {
      icon: <Briefcase size={24} />,
      title: "Economic Transformation",
      description: "Technology has revolutionized business models, created new industries, and transformed the way we work. Automation and AI continue to reshape employment and economic structures."
    },
    {
      icon: <Home size={24} />,
      title: "Daily Life",
      description: "From smart homes to digital entertainment, technology has permeated every aspect of our daily routines, changing how we live, shop, travel, and interact with our environment."
    },
    {
      icon: <Heart size={24} />,
      title: "Healthcare",
      description: "Medical technologies have extended lifespans, improved quality of life, and enabled treatments that were once unimaginable, from robotic surgery to personalized medicine."
    },
    {
      icon: <Users size={24} />,
      title: "Social Dynamics",
      description: "Social media and digital platforms have transformed how we form communities, share information, and express ourselves, reshaping social interactions and cultural development."
    },
    {
      icon: <Brain size={24} />,
      title: "Education",
      description: "Digital learning tools, online courses, and educational technologies have democratized access to knowledge and transformed how we learn and develop skills."
    }
  ];

  return (
    <section id="impact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="The Impact of Technology"
          subtitle="How technology has transformed our society, economy, and daily lives"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {impactItems.map((item, index) => (
            <div 
              key={index}
              className="fade-in-section opacity-0"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div className={`flex items-start mb-4 p-6 rounded-lg transition-all duration-300 cursor-pointer
                ${activeIndex === index ? 'bg-blue-50 transform scale-105' : ''}`}>
                <div className={`bg-blue-100 p-3 rounded-full text-blue-600 mr-4 transition-all duration-300
                  ${activeIndex === index ? 'scale-110 bg-blue-200' : ''}`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className={`text-xl font-bold mb-2 transition-colors duration-300
                    ${activeIndex === index ? 'text-blue-600' : ''}`}>
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 p-8 rounded-lg shadow-md fade-in-section opacity-0">
          <h3 className="text-2xl font-bold mb-4 text-center">The Dual Nature of Technology</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="transform transition-all duration-300 hover:scale-105 cursor-pointer">
              <h4 className="text-xl font-semibold mb-2 text-blue-600">Benefits</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Increased productivity and efficiency</li>
                <li>Improved healthcare outcomes</li>
                <li>Democratized access to information</li>
                <li>Enhanced communication capabilities</li>
                <li>Solutions to complex global challenges</li>
              </ul>
            </div>
            <div className="transform transition-all duration-300 hover:scale-105 cursor-pointer">
              <h4 className="text-xl font-semibold mb-2 text-orange-600">Challenges</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Digital divide and inequality</li>
                <li>Privacy and security concerns</li>
                <li>Job displacement due to automation</li>
                <li>Environmental impacts</li>
                <li>Ethical dilemmas of emerging technologies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyImpact;