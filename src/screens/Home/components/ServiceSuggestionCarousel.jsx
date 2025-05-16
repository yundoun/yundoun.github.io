import React from 'react';
import { carouselItems } from '../data/carouselItemsData';

const CarouselItem = ({ bgColor, borderColor }) => (
  <div
    className="flex-shrink-0 rounded-xl shadow-lg overflow-hidden"
    style={{
      width: '112px',
      height: '112px', // Assuming square items for now, adjust if needed
      backgroundColor: bgColor,
      border: `2px solid ${borderColor}`,
      boxShadow: '3px 6px 28px 0px rgba(0, 0, 0, 0.08)',
      marginRight: '12px', // Corresponds to gap: 12px in Figma
    }}>
    {/* Placeholder for actual image or content */}
  </div>
);

const ServiceSuggestionCarousel = () => {
  return (
    <div
      className="flex overflow-x-auto py-1" // py-1 for a little vertical breathing room
      style={{
        paddingLeft: '20px', // Corresponds to padding: 0px 0px 0px 20px in Figma
        scrollbarWidth: 'none' /* Firefox */,
        msOverflowStyle: 'none' /* IE and Edge */,
        // For Webkit-based browsers (Chrome, Safari, new Edge),
        // you might need a global CSS rule like:
        // .no-scrollbar::-webkit-scrollbar { display: none; }
        // and then add className="no-scrollbar" to this div.
        // Alternatively, a Tailwind plugin like 'tailwind-scrollbar-hide' can be used.
      }}>
      {carouselItems.map((item) => (
        <CarouselItem
          key={item.id}
          bgColor={item.bgColor}
          borderColor={item.borderColor}
        />
      ))}
      {/* Add a small spacer at the end to ensure right padding effect if items fill the screen */}
      <div style={{ flexShrink: 0, width: '8px' }}></div>
    </div>
  );
};

export default ServiceSuggestionCarousel;
