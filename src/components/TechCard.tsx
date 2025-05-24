import React, { useState } from 'react';

interface TechCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const TechCard: React.FC<TechCardProps> = ({ title, description, icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`bg-white p-6 rounded-lg shadow-md transition-all duration-300 cursor-pointer
        ${isHovered ? 'shadow-xl transform -translate-y-1' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center mb-4">
        <div className={`bg-blue-50 p-3 rounded-full text-blue-500 mr-4 transition-all duration-300
          ${isHovered ? 'bg-blue-100 text-blue-600 scale-110' : ''}`}>
          {icon}
        </div>
        <h3 className={`text-xl font-bold transition-colors duration-300
          ${isHovered ? 'text-blue-600' : ''}`}>
          {title}
        </h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default TechCard;