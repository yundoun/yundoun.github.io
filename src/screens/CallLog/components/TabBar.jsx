import React from 'react';
import PropTypes from 'prop-types';

/**
 * 최근기록 페이지의 상단 탭 컴포넌트
 * @param {Object} props
 * @param {string} props.activeTab - 현재 활성화된 탭
 * @param {Function} props.onTabChange - 탭 변경 핸들러
 */
const TabBar = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'recent', label: '최근기록' },
    { id: 'blocked', label: '차단된 기록' },
  ];

  return (
    <div className="flex border-b border-gray-200">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`flex-1 py-3 text-sm font-semibold ${
            activeTab === tab.id
              ? 'border-b-2 border-[#E6007E] text-[#181A1B]'
              : 'text-[#66707A]'
          }`}
          onClick={() => onTabChange(tab.id)}>
          {tab.label}
        </button>
      ))}
    </div>
  );
};

TabBar.propTypes = {
  activeTab: PropTypes.string.isRequired,
  onTabChange: PropTypes.func.isRequired,
};

export default TabBar;
