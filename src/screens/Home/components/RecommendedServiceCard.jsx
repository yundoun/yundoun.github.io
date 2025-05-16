import React from 'react';
import { recommendedServices } from '../data/recommendedServicesData';

// 임시 아이콘 컴포넌트 (실제 프로젝트에서는 SVG 아이콘 사용)
const ServiceItemIcon = () => (
  <div className="w-10 h-10 rounded-lg bg-gray-200 flex items-center justify-center text-white text-xs">
    Icon
  </div>
);

const RecommendedServiceCard = () => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      {/* 썸네일 이미지 - 실제 이미지를 사용하려면 <img /> 태그와 src 속성을 사용하세요. */}
      <div className="h-32 bg-gray-300 flex items-center justify-center">
        <span className="text-gray-500">썸네일 이미지</span>
      </div>

      <div className="p-5 space-y-3">
        <div>
          <h3 className="text-lg font-semibold text-[#181A1B]">
            함께 연결되기
          </h3>
          <p className="text-sm text-[#66707A]">
            전화를 건 사람에게 내 취향이나 관심사를 알려줘요
          </p>
        </div>

        <div className="space-y-4">
          {recommendedServices.map((service) => (
            <div
              key={service.id}
              className="flex items-start space-x-3 pt-4 border-t border-gray-100 first:border-t-0 first:pt-0">
              <ServiceItemIcon />
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h4 className="text-base font-medium text-[#181A1B]">
                    {service.title}
                  </h4>
                  <span
                    className={`text-xs font-bold ${
                      service.price === '무료'
                        ? 'text-[#E6007E]'
                        : 'text-[#7F8A94]'
                    }`}>
                    {service.price}
                  </span>
                </div>
                <p className="text-xs text-[#66707A]">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="w-full mt-3 py-3 px-4 border border-[#DCE0E5] rounded-lg text-sm font-semibold text-[#66707A] hover:bg-gray-50 transition-colors">
          유료 상품 가입하기
        </button>
      </div>
    </div>
  );
};

export default RecommendedServiceCard;
