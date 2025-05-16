import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
// 로고 이미지 가져오기 (실제 경로에 맞게 수정 필요)
import logoImage from '../../../assets/images/U+ICON.png';

/**
 * 홈 화면 헤더 컴포넌트
 * @param {Object} props
 * @param {string} props.title - 헤더 타이틀 (앱 이름)
 * @param {Function} props.onSearchClick - 검색 아이콘 클릭 핸들러
 * @param {Function} props.onMenuClick - 메뉴 아이콘 클릭 핸들러
 * @param {string} props.currentTab - 현재 활성화된 탭 (페이지) 정보
 */
const HomeHeader = ({
  title = '모바일매니저',
  onSearchClick,
  onMenuClick,
  currentTab,
}) => {
  const isContactsPage = currentTab === 'contacts';

  return (
    <Header>
      <div className="flex justify-between items-center w-full px-5">
        <div className={`flex items-center ${isContactsPage ? '' : ''}`}>
          {/* 로고 이미지 (연락처 페이지가 아닐 때만 표시) */}
          {!isContactsPage && (
            <img
              src={logoImage}
              alt="모바일매니저 로고"
              className="w-[20px] h-[14.34px] mr-2"
            />
          )}
          <h1
            className={`text-lg font-bold text-text-primary ${
              isContactsPage ? 'ml-[0px]' : ''
            }`}>
            {title}
          </h1>
        </div>
        <div className="flex items-center space-x-2">
          {/* 검색 아이콘 */}
          <button
            type="button"
            className="p-2"
            onClick={onSearchClick}
            aria-label="검색">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10Z"
                stroke="#181A1B"
                strokeWidth="2"
              />
              <path
                d="M15 15L21 21"
                stroke="#181A1B"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {/* 메뉴 아이콘 */}
          <button
            type="button"
            className="p-2"
            onClick={onMenuClick}
            aria-label="메뉴">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6C4 5.44772 4.44772 5 5 5H19C19.5523 5 20 5.44772 20 6C20 6.55228 19.5523 7 19 7H5C4.44772 7 4 6.55228 4 6ZM4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12ZM4 18C4 17.4477 4.44772 17 5 17H19C19.5523 17 20 17.4477 20 18C20 18.5523 19.5523 19 19 19H5C4.44772 19 4 18.5523 4 18Z"
                fill="#181A1B"
              />
            </svg>
          </button>
        </div>
      </div>
    </Header>
  );
};

HomeHeader.propTypes = {
  title: PropTypes.string,
  onSearchClick: PropTypes.func,
  onMenuClick: PropTypes.func,
  currentTab: PropTypes.string,
};

export default HomeHeader;
