import React from 'react';
import PropTypes from 'prop-types';

/**
 * 서비스 탭 바 컴포넌트
 * @param {Object} props
 * @param {string} props.activeTab - 현재 활성화된 탭 ID
 * @param {Function} props.onTabChange - 탭 변경 핸들러
 */
const ServiceTabBar = ({ activeTab = 'my', onTabChange }) => {
  // 탭 데이터
  const tabs = [
    {
      id: 'my',
      label: 'My 부가서비스',
    },
    {
      id: 'recommend',
      label: '추천 부가서비스',
    },
  ];

  return (
    <div className="relative">
      <div className="flex border-b border-[#E7EBEE]">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className="flex-1 relative"
            onClick={() => onTabChange && onTabChange(tab.id)}>
            <div className="flex justify-center items-center py-4">
              <span
                className={`text-base font-semibold ${
                  tab.id === activeTab ? 'text-[#E6007E]' : 'text-[#66707A]'
                }`}>
                {tab.label}
              </span>
            </div>
            {tab.id === activeTab && (
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#E6007E]"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

ServiceTabBar.propTypes = {
  activeTab: PropTypes.string,
  onTabChange: PropTypes.func,
};

export default ServiceTabBar;
