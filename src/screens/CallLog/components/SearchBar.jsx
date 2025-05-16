import React from 'react';

/**
 * 최근기록 검색을 위한 검색바 컴포넌트
 */
const SearchBar = () => {
  return (
    <div className="p-4 border-b border-gray-200 bg-white">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <img
            src="/src/assets/icons/search_icon.svg"
            alt="Search"
            className="w-5 h-5"
          />
        </div>
        <input
          type="text"
          placeholder="최근기록을 검색해보세요"
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-[#F9FAFB] text-base font-semibold placeholder-[#A8B3BD] focus:outline-none focus:ring-1 focus:ring-pink-500 focus:border-pink-500"
        />
      </div>
    </div>
  );
};

export default SearchBar;
