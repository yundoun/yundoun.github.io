import React from 'react';

const InfoText = ({ text, highlightText, highlightColorClass, className }) => {
  if (!text) return null;

  const defaultClassName = 'text-[#181A1B] text-lg font-bold leading-[25.2px]';
  const combinedClassName = `${defaultClassName} ${className || ''}`.trim();

  if (highlightText && highlightColorClass) {
    const parts = text.split(new RegExp(`(${highlightText})`, 'gi'));
    return (
      <p className={combinedClassName}>
        {parts.map((part, index) =>
          part.toLowerCase() === highlightText.toLowerCase() ? (
            <span key={index} className={highlightColorClass}>
              {part}
            </span>
          ) : (
            part
          )
        )}
      </p>
    );
  }

  return <p className={combinedClassName}>{text}</p>;
};

export default InfoText;
