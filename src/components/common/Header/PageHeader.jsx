import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

/**
 * 페이지 헤더 컴포넌트
 *
 * @param {Object} props
 * @param {string} props.title - 페이지 제목 (고정형)
 * @param {string} props.variant - 헤더 변형 ('regular', 'prominent')
 * @param {boolean} props.hasDivider - 하단 구분선 표시 여부
 * @param {Function} props.onBackClick - 뒤로가기 아이콘 클릭 핸들러
 * @param {Array} props.rightIcons - 오른쪽 아이콘 버튼 배열
 * @param {boolean} props.isAdaptive - 수용형 헤더 여부
 * @param {string} props.scrollTitle - 스크롤 시 표시할 제목 (수용형)
 * @param {number} props.scrollThreshold - 제목이 변경될 스크롤 위치 기준점 (수용형)
 */
const PageHeader = ({
  title = '페이지제목',
  variant = 'regular',
  hasDivider = false,
  onBackClick,
  rightIcons = [],
  isAdaptive = false,
  scrollTitle = '',
  scrollThreshold = 100,
}) => {
  const [currentTitle, setCurrentTitle] = useState(title);
  const [isScrolled, setIsScrolled] = useState(false);

  // 수용형 헤더인 경우 스크롤 이벤트 리스너 등록
  useEffect(() => {
    if (!isAdaptive) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > scrollThreshold && !isScrolled) {
        setCurrentTitle(scrollTitle);
        setIsScrolled(true);
      } else if (scrollPosition <= scrollThreshold && isScrolled) {
        setCurrentTitle(title);
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isAdaptive, title, scrollTitle, scrollThreshold, isScrolled]);

  // 프로미넌트 변형일 경우 그림자 추가
  const headerClassName =
    variant === 'prominent'
      ? `shadow-md transition-shadow duration-300 ${
          isAdaptive && isScrolled
            ? 'opacity-100'
            : isAdaptive
            ? 'opacity-0'
            : 'opacity-100'
        }`
      : '';

  return (
    <Header hasDivider={hasDivider} className={headerClassName}>
      <div className="flex justify-between items-center w-full h-full px-1">
        {/* 왼쪽 영역: 뒤로가기 + 타이틀 */}
        <div className="flex items-center pl-1">
          {/* 뒤로가기 아이콘 */}
          <button
            type="button"
            className="p-2"
            onClick={onBackClick}
            aria-label="뒤로가기">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15 4L7 12L15 20"
                stroke="#181A1B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* 페이지 제목 */}
          {currentTitle && (
            <h1
              className={`text-lg font-semibold text-text-primary ml-1 truncate max-w-[200px] ${
                isAdaptive ? 'transition-opacity duration-300' : ''
              }`}>
              {currentTitle}
            </h1>
          )}
        </div>

        {/* 오른쪽 영역: 아이콘 버튼들 */}
        <div className="flex items-center">
          {rightIcons.map((icon, index) => (
            <button
              key={`icon-${index}`}
              type="button"
              className="p-2"
              onClick={icon.onClick}
              aria-label={icon.label || `아이콘 ${index + 1}`}>
              {icon.svg || (
                <div className="w-6 h-6 flex items-center justify-center">
                  <div className="w-5 h-5 bg-text-primary"></div>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </Header>
  );
};

PageHeader.propTypes = {
  title: PropTypes.string,
  variant: PropTypes.oneOf(['regular', 'prominent']),
  hasDivider: PropTypes.bool,
  onBackClick: PropTypes.func,
  rightIcons: PropTypes.arrayOf(
    PropTypes.shape({
      svg: PropTypes.node,
      onClick: PropTypes.func,
      label: PropTypes.string,
    })
  ),
  isAdaptive: PropTypes.bool,
  scrollTitle: PropTypes.string,
  scrollThreshold: PropTypes.number,
};

export default PageHeader;
