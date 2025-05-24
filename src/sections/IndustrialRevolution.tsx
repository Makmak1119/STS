import React, { useEffect, useRef } from 'react';
import { Stamp as Steam, Fuel, Factory, Wrench, Train, Lightbulb } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import TimelineItem from '../components/TimelineItem';
import TechCard from '../components/TechCard';

const IndustrialRevolution: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-in-section');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const firstRevolutionInventions = [
    {
      icon: <Wrench size={24} />,
      title: "Spinning Jenny (1764)",
      description: "Invented by James Hargreaves, this multi-spindle spinning frame revolutionized textile production by allowing workers to produce multiple threads simultaneously."
    },
    {
      icon: <Factory size={24} />,
      title: "Puddling Furnace (1784)",
      description: "Henry Cort's iron refining process removed impurities from pig iron, producing higher-quality wrought iron for machinery and construction."
    },
    {
      icon: <Steam size={24} />,
      title: "Cotton Gin (1793)",
      description: "Eli Whitney's invention quickly separated cotton fibers from seeds, dramatically increasing cotton production and fueling textile industry expansion."
    }
  ];

  const secondRevolutionInventions = [
    {
      icon: <Train size={24} />,
      title: "Telephone (1876)",
      description: "Alexander Graham Bell's invention enabled real-time voice transmission over long distances, transforming business and personal communication."
    },
    {
      icon: <Fuel size={24} />,
      title: "Internal Combustion Engine (1876)",
      description: "Nikolaus Otto's four-stroke engine and Karl Benz's first gasoline-powered automobile marked a new era in transportation."
    },
    {
      icon: <Lightbulb size={24} />,
      title: "Electric Light Bulb (1879)",
      description: "Thomas Edison's long-lasting incandescent bulb made electric lighting accessible for homes, factories, and streets."
    }
  ];

  return (
    <section
      id="history"
      ref={sectionRef}
      className="py-20 bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <SectionTitle
          title="The Industrial Revolution"
          subtitle="A transformative period that merged technology with industry, revolutionizing manufacturing, transportation, and daily life"
        />

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center">First Industrial Revolution Innovations</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 fade-in-section opacity-0">
            {firstRevolutionInventions.map((invention, index) => (
              <TechCard
                key={index}
                icon={invention.icon}
                title={invention.title}
                description={invention.description}
              />
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center">Second Industrial Revolution Innovations</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 fade-in-section opacity-0">
            {secondRevolutionInventions.map((invention, index) => (
              <TechCard
                key={index}
                icon={invention.icon}
                title={invention.title}
                description={invention.description}
              />
            ))}
          </div>
        </div>

        <div className="relative mt-20">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 hidden md:block"></div>
          
          <div className="space-y-16">
            <TimelineItem
              year="1750-1850"
              title="First Industrial Revolution"
              description="A period of rapid technological innovation that introduced new tools and machines, improving labor efficiency and production methods. Key innovations included the Spinning Jenny, Puddling Furnace, and Cotton Gin."
              isLeft={true}
            />
            
            <TimelineItem
              year="1870-1914"
              title="Second Industrial Revolution"
              description="Marked by significant advancements in communication, transportation, and energy. Notable inventions included the telephone, internal combustion engine, and electric light bulb."
              isLeft={false}
            />
            
            <TimelineItem
              year="1950s-1970s"
              title="Third Industrial Revolution"
              description="The Digital Revolution brought computers, the internet, and automation to manufacturing processes, fundamentally changing how we work and communicate."
              isLeft={true}
            />
            
            <TimelineItem
              year="2011-Present"
              title="Fourth Industrial Revolution"
              description="Characterized by the fusion of digital, biological, and physical innovations. AI, robotics, and IoT are reshaping industries and society."
              isLeft={false}
            />
          </div>
        </div>

        <div className="mt-16 bg-white p-8 rounded-lg shadow-md fade-in-section opacity-0">
          <h3 className="text-2xl font-bold mb-6 text-center">Impact of Industrialization</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-blue-600">Economic & Social Changes</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Increased production and economic growth</li>
                <li>Rise of new industries and job opportunities</li>
                <li>Mass migration to cities and rapid urbanization</li>
                <li>Formation of labor unions and workers' rights movements</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-blue-600">Long-term Effects</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Environmental impact and resource consumption</li>
                <li>Technological advancement and innovation</li>
                <li>Improved transportation and communication networks</li>
                <li>Modern urban development and planning</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrialRevolution;