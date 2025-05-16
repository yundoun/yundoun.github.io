import React from 'react';
import PropTypes from 'prop-types';

/**
 * 하단 탐색 바 컴포넌트
 * @param {Object} props
 * @param {string} props.activeTab - 현재 활성화된 탭 ID
 * @param {Function} props.onTabChange - 탭 변경 핸들러
 */
const BottomNavigation = ({ activeTab, onTabChange }) => {
  // 탭 메뉴 데이터
  const tabs = [
    {
      id: 'recent',
      label: '최근기록',
      icon: (active) => (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM16.3 16.3C15.9 16.7 15.3 16.7 14.9 16.3L11.7 13.1C11.5 12.9 11.4 12.7 11.4 12.4V7C11.4 6.4 11.8 6 12.4 6C12.9 6 13.4 6.4 13.4 7V12L16.3 14.9C16.7 15.3 16.7 15.9 16.3 16.3Z"
            fill={active ? '#E6007E' : '#A8B3BD'}
          />
        </svg>
      ),
    },
    {
      id: 'keypad',
      label: '키패드',
      icon: (active) => (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M19 5H5C3.9 5 3 5.9 3 7V17C3 18.1 3.9 19 5 19H19C20.1 19 21 18.1 21 17V7C21 5.9 20.1 5 19 5ZM12 16C11.45 16 11 15.55 11 15C11 14.45 11.45 14 12 14C12.55 14 13 14.45 13 15C13 15.55 12.55 16 12 16ZM12 13C11.45 13 11 12.55 11 12C11 11.45 11.45 11 12 11C12.55 11 13 11.45 13 12C13 12.55 12.55 13 12 13ZM12 10C11.45 10 11 9.55 11 9C11 8.45 11.45 8 12 8C12.55 8 13 8.45 13 9C13 9.55 12.55 10 12 10ZM15 16C14.45 16 14 15.55 14 15C14 14.45 14.45 14 15 14C15.55 14 16 14.45 16 15C16 15.55 15.55 16 15 16ZM15 13C14.45 13 14 12.55 14 12C14 11.45 14.45 11 15 11C15.55 11 16 11.45 16 12C16 12.55 15.55 13 15 13ZM15 10C14.45 10 14 9.55 14 9C14 8.45 14.45 8 15 8C15.55 8 16 8.45 16 9C16 9.55 15.55 10 15 10ZM9 16C8.45 16 8 15.55 8 15C8 14.45 8.45 14 9 14C9.55 14 10 14.45 10 15C10 15.55 9.55 16 9 16ZM9 13C8.45 13 8 12.55 8 12C8 11.45 8.45 11 9 11C9.55 11 10 11.45 10 12C10 12.55 9.55 13 9 13ZM9 10C8.45 10 8 9.55 8 9C8 8.45 8.45 8 9 8C9.55 8 10 8.45 10 9C10 9.55 9.55 10 9 10Z"
            fill={active ? '#E6007E' : '#A8B3BD'}
          />
        </svg>
      ),
    },
    {
      id: 'home',
      label: '홈',
      icon: (active) => (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 3L4 9V21H10V14H14V21H20V9L12 3Z"
            fill={active ? '#E6007E' : '#A8B3BD'}
          />
        </svg>
      ),
    },
    {
      id: 'contacts',
      label: '연락처',
      icon: (active) => (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
            fill={active ? '#E6007E' : '#A8B3BD'}
          />
        </svg>
      ),
    },
    {
      id: 'services',
      label: '생활편의',
      icon: (active) => (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4 8H8V4H4V8ZM10 20H14V16H10V20ZM4 20H8V16H4V20ZM4 14H8V10H4V14ZM10 14H14V10H10V14ZM16 4V8H20V4H16ZM10 8H14V4H10V8ZM16 14H20V10H16V14ZM16 20H20V16H16V20Z"
            fill={active ? '#E6007E' : '#A8B3BD'}
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="w-full bg-white shadow-md border-t border-gray-200 h-16">
      <div className="flex justify-around items-center h-full">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className="flex flex-col items-center justify-center w-full h-full"
            onClick={() => onTabChange(tab.id)}>
            <div className="mb-1">{tab.icon(tab.id === activeTab)}</div>
            <span
              className={`text-xs font-semibold ${
                tab.id === activeTab ? 'text-[#E6007E]' : 'text-[#A8B3BD]'
              }`}>
              {tab.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

BottomNavigation.propTypes = {
  activeTab: PropTypes.string.isRequired,
  onTabChange: PropTypes.func.isRequired,
};

export default BottomNavigation;
