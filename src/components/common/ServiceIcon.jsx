import React from 'react';

const ServiceIcon = ({ type }) => {
  let bgColor = 'bg-gray-200'; // 기본 배경색
  if (type === 'dualNumber') bgColor = 'bg-blue-500';
  if (type === 'ringtone') bgColor = 'bg-pink-500';
  if (type === 'vColoring') bgColor = 'bg-purple-500';
  if (type === 'autoResponse') bgColor = 'bg-green-500';
  return (
    <div
      className={`w-10 h-10 rounded-lg ${bgColor} flex items-center justify-center text-white text-xs`}>
      {type.substring(0, 2)}
    </div>
  );
};

export default ServiceIcon;
