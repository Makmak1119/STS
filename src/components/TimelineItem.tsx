import React, { useState } from 'react';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  isLeft?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  year,
  title,
  description,
  isLeft = true,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={`flex w-full ${isLeft ? 'justify-start' : 'justify-end'}`}>
      <div
        className={`relative w-full md:w-2/3 lg:w-1/2 p-6 bg-white shadow-lg rounded-lg
                  transform transition-all duration-300 cursor-pointer
                  ${isHovered ? 'scale-[1.02] shadow-xl bg-blue-50' : ''}
                  ${isLeft ? 'md:mr-8' : 'md:ml-8'}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`absolute top-6 ${
            isLeft ? '-right-4 md:-right-10' : '-left-4 md:-left-10'
          } w-8 h-8 bg-blue-500 rounded-full border-4 border-white z-10
          transition-transform duration-300 ${isHovered ? 'scale-125' : ''}`}
        ></div>
        <span className={`text-blue-500 font-bold text-lg transition-all duration-300 
          ${isHovered ? 'text-blue-600 scale-105' : ''}`}>
          {year}
        </span>
        <h3 className={`text-xl font-bold mt-1 transition-all duration-300 
          ${isHovered ? 'text-blue-800' : ''}`}>
          {title}
        </h3>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default TimelineItem;