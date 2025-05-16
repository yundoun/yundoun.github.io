import React from 'react';

/**
 * 서비스 모드 카드 컴포넌트
 * 내맘대로 설정, 업무 모드, 쉼 모드 등 모드 선택 카드
 */
const ServiceModeCards = () => {
  // 모드 데이터
  const modes = [
    {
      id: 'custom',
      label: '내맘대로 설정',
      isActive: true,
      icon: (
        <div className="w-10 h-10 relative">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M26.6667 33.3333L20 26.6667L13.3333 33.3333"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 26.6667V6.66675"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      ),
      moreIcon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
            fill="white"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
            fill="white"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
            fill="white"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      bgColor: '#3B4044',
      textColor: 'text-white',
    },
    {
      id: 'work',
      label: '업무 모드',
      isActive: false,
      icon: (
        <div className="w-10 h-10 relative">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M33.3333 13.3333H6.66667C5.74619 13.3333 5 14.0795 5 15V31.6667C5 32.5871 5.74619 33.3333 6.66667 33.3333H33.3333C34.2538 33.3333 35 32.5871 35 31.6667V15C35 14.0795 34.2538 13.3333 33.3333 13.3333Z"
              stroke="#181A1B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M26.6667 33.3333V10C26.6667 9.11594 26.3155 8.2681 25.6904 7.64298C25.0652 7.01786 24.2174 6.66666 23.3333 6.66666H16.6667C15.7826 6.66666 14.9348 7.01786 14.3096 7.64298C13.6845 8.2681 13.3333 9.11594 13.3333 10V33.3333"
              stroke="#181A1B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      ),
      moreIcon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
            fill="#7F8A94"
            stroke="#7F8A94"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
            fill="#7F8A94"
            stroke="#7F8A94"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
            fill="#7F8A94"
            stroke="#7F8A94"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      bgColor: 'white',
      textColor: 'text-[#181A1B]',
    },
    {
      id: 'rest',
      label: '쉼 모드',
      isActive: false,
      icon: (
        <div className="w-10 h-10 relative">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.0001 35C28.2844 35 35.0001 28.2843 35.0001 20C35.0001 11.7157 28.2844 5 20.0001 5C11.7158 5 5.00012 11.7157 5.00012 20C5.00012 28.2843 11.7158 35 20.0001 35Z"
              stroke="#181A1B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 13.3333V20L25 22.5"
              stroke="#181A1B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      ),
      moreIcon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
            fill="#7F8A94"
            stroke="#7F8A94"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
            fill="#7F8A94"
            stroke="#7F8A94"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
            fill="#7F8A94"
            stroke="#7F8A94"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      bgColor: 'white',
      textColor: 'text-[#181A1B]',
    },
  ];

  return (
    <div className="flex space-x-3 overflow-x-auto pb-2 hide-scrollbar">
      {modes.map((mode) => (
        <div
          key={mode.id}
          className={`flex-shrink-0 w-[134px] p-4 rounded-xl shadow-md`}
          style={{ backgroundColor: mode.bgColor }}>
          <div className="flex justify-between items-center mb-2.5">
            {mode.icon}
            <div className="cursor-pointer">{mode.moreIcon}</div>
          </div>
          <p className={`text-sm font-bold ${mode.textColor}`}>{mode.label}</p>
        </div>
      ))}
    </div>
  );
};

export default ServiceModeCards;
