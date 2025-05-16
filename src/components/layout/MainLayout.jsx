import React from 'react';
import PropTypes from 'prop-types';
import { HomeHeader } from '../common/Header';
import BottomNavigation from '../common/BottomNavigation';

/**
 * 메인 레이아웃 컴포넌트 - Single Activity Architecture 형태로 구현
 * 헤더와 하단 네비게이션을 공통으로 사용하고 내부 컨텐츠만 교체
 * @param {Object} props
 * @param {ReactNode} props.children - 내부 컨텐츠
 * @param {string} props.activeTab - 현재 활성화된 탭
 * @param {Function} props.onTabChange - 탭 변경 핸들러
 * @param {boolean} props.showHeader - 헤더 표시 여부
 * @param {string} props.currentTab - 현재 활성화된 탭
 */
const MainLayout = ({
  children,
  activeTab = 'home',
  onTabChange,
  onSearchClick,
  onMenuClick,
  title = '모바일매니저',
  showHeader = true,
  currentTab,
}) => {
  // 탭 변경 핸들러
  const handleTabChange = (tabId) => {
    if (onTabChange) {
      onTabChange(tabId);
    }
  };

  // 검색 아이콘 클릭 핸들러
  const handleSearchClick = () => {
    if (onSearchClick) {
      onSearchClick();
    }
  };

  // 메뉴 아이콘 클릭 핸들러
  const handleMenuClick = () => {
    if (onMenuClick) {
      onMenuClick();
    }
  };

  // 페이지 상단으로 스크롤
  const scrollToTop = () => {
    const contentArea = document.getElementById('main-content-area');
    if (contentArea) {
      contentArea.scrollTop = 0;
    }
  };

  return (
    <div className="h-full flex flex-col overflow-hidden">
      {/* 헤더 */}
      {showHeader && (
        <div className="flex-shrink-0 z-10">
          <HomeHeader
            title={title}
            onSearchClick={handleSearchClick}
            onMenuClick={handleMenuClick}
            currentTab={currentTab}
          />
        </div>
      )}

      {/* 메인 컨텐츠 영역 */}
      <div
        id="main-content-area"
        className="flex-1 overflow-y-scroll hide-scrollbar"
        style={{ paddingBottom: 'calc(4rem + 12px)' }} // 64px (내비게이션 높이) + 12px (여유 공간)
      >
        {children}
      </div>

      {/* FAB 버튼 */}
      <button
        className="absolute z-20 right-5 bottom-20 w-12 h-12 rounded-full bg-[#3B4044] flex items-center justify-center shadow-lg"
        aria-label="페이지 상단으로 이동"
        onClick={scrollToTop}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M18 15L12 9L6 15"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* 하단 네비게이션 - 절대 위치로 고정 */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <BottomNavigation activeTab={activeTab} onTabChange={handleTabChange} />
      </div>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  activeTab: PropTypes.string,
  onTabChange: PropTypes.func,
  onSearchClick: PropTypes.func,
  onMenuClick: PropTypes.func,
  title: PropTypes.string,
  showHeader: PropTypes.bool,
  currentTab: PropTypes.string,
};

export default MainLayout;
