import React from 'react';
import PropTypes from 'prop-types';

/**
 * 기본 헤더 컴포넌트
 * @param {Object} props
 * @param {React.ReactNode} props.children - 헤더 내부 콘텐츠
 * @param {boolean} props.hasDivider - 하단 구분선 표시 여부
 * @param {string} props.className - 추가 클래스명
 */
const Header = ({ children, hasDivider = false, className = '' }) => {
  return (
    <header
      className={`w-full h-[55px] bg-white flex items-center relative ${
        hasDivider ? 'border-b border-border-divider' : ''
      } ${className}`}>
      {children}
    </header>
  );
};

Header.propTypes = {
  children: PropTypes.node.isRequired,
  hasDivider: PropTypes.bool,
  className: PropTypes.string,
};

export default Header;
