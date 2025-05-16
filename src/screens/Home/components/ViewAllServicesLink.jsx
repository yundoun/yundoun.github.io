import React from 'react';

// 오른쪽 화살표 아이콘 (임시)
const ArrowRightIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-[#B20068]">
    <path
      d="M10 17L15 12L10 7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ViewAllServicesLink = () => {
  return (
    <a
      href="#"
      className="bg-[#FDEDF6] p-4 rounded-xl flex items-center justify-between text-sm font-medium text-[#8A0050] hover:bg-opacity-80 transition-colors">
      <span>전체 부가서비스 보기</span>
      <ArrowRightIcon />
    </a>
  );
};

export default ViewAllServicesLink;
