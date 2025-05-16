import React from 'react';

const ImageBanner = () => {
  return (
    <div>
      {/* 배너 카드 (#938CEE 부분) */}
      <div className="rounded-xl overflow-hidden shadow-md">
        <div
          style={{ backgroundColor: '#938CEE' }}
          className="px-5 pt-6 pb-6 relative flex items-center">
          {/* wrap (12406:33377) - Text Area */}
          <div className="flex-grow space-y-2">
            <p className="text-xs font-semibold text-white leading-normal">
              캡션 문구
            </p>
            <h3 className="text-xl font-bold text-white mt-0 leading-[1.4em]">
              메인 문구 메인 문구
              <br />
              메인 문구 메인 문구
            </h3>
            <p className="text-xs font-medium text-white opacity-40 mt-0 leading-normal">
              서브 문구 서브 문구
            </p>
          </div>
          {/* Thumbnail (12406:33374) */}
          <div
            className="w-24 h-24 rounded-lg flex-shrink-0 ml-4 flex items-center justify-center"
            style={{ backgroundColor: '#817BDA' }}>
            {/* Placeholder for actual image */}
          </div>
        </div>
      </div>

      {/* 인디케이터 (카드 외부, 카드와 12px 간격) */}
      {/* Figma: item/bottom (12406:33389) */}
      <div className="bg-white py-2 flex justify-center items-center space-x-2 mt-3">
        <div className="w-4 h-[6px] rounded-full bg-[#66707A]"></div>
        <div className="w-[6px] h-[6px] rounded-full bg-[#A8B3BD]"></div>
        <div className="w-[6px] h-[6px] rounded-full bg-[#A8B3BD]"></div>
        <div className="w-[6px] h-[6px] rounded-full bg-[#A8B3BD]"></div>
        <div className="w-[6px] h-[6px] rounded-full bg-[#A8B3BD]"></div>
      </div>
    </div>
  );
};

export default ImageBanner;
