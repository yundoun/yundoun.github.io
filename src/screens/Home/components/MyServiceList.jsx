import React from 'react';
import ServiceIcon from '../../../components/common/ServiceIcon';

const MyServiceList = ({ services }) => {
  if (!services || services.length === 0) {
    return (
      <p className="text-center text-gray-500">부가서비스 내역이 없습니다.</p>
    );
  }

  return (
    <div className="space-y-3">
      {services.map((service) => (
        <div key={service.id} className="bg-white p-5 rounded-xl shadow-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <ServiceIcon type={service.iconType} />
              <div>
                <p className="text-base font-bold text-[#181A1B]">
                  {service.title}
                </p>
                <p className="text-xs text-[#66707A]">{service.description}</p>
              </div>
            </div>
            {/* Figma toggle: (12406:32965) */}
            <div
              className={`w-12 h-7 rounded-full p-0.5 flex items-center cursor-pointer ${
                service.isActive ? 'bg-[#E6007E]' : 'bg-gray-300'
              }`}>
              <div
                className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform ${
                  service.isActive ? 'translate-x-5' : 'translate-x-0'
                }`}></div>
            </div>
          </div>
          {service.id === 'ringtone' && service.nowPlaying && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="bg-[#F3F5F6] p-3 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-[#181A1B]">
                      지금 재생중
                    </p>
                    <p className="text-sm text-[#66707A]">
                      {service.nowPlaying}
                    </p>
                  </div>
                  {service.tag && (
                    <div className="text-xs text-white bg-[#E6007E] px-2 py-0.5 rounded-sm">
                      {service.tag}
                    </div>
                  )}
                </div>
                {service.date && (
                  <p className="text-xs text-[#7F8A94] mt-0.5">
                    설정일 {service.date}
                  </p>
                )}
                {service.changeDate && (
                  <div className="mt-2 text-xs text-[#66707A] bg-transparent border border-[#DCE0E5] rounded-full px-3 py-1 inline-block">
                    변경일 {service.changeDate}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MyServiceList;
