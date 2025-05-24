import React, { useState } from 'react';

interface FutureCardProps {
  title: string;
  description: string;
  image: string;
}

const FutureCard: React.FC<FutureCardProps> = ({ title, description, image }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative group overflow-hidden rounded-lg shadow-lg transition-all duration-500 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={image}
        alt={title}
        className={`w-full h-64 object-cover transition-all duration-500
          ${isHovered ? 'scale-110 brightness-75' : ''}`}
      />
      <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent 
        flex flex-col justify-end p-6 text-white transition-all duration-500
        ${isHovered ? 'bg-opacity-90' : 'bg-opacity-70'}`}>
        <h3 className={`text-xl font-bold mb-2 transform transition-transform duration-300
          ${isHovered ? 'translate-y-0 scale-105' : ''}`}>
          {title}
        </h3>
        <p className={`transform transition-all duration-300
          ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default FutureCard;