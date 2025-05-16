import React from 'react';
import ServiceModeCards from './ServiceModeCards';
import MyServiceList from './MyServiceList';
import InfoText from '../../../components/common/InfoText';

const MyServicesTab = ({ services }) => {
  return (
    <div className="space-y-6">
      {/* 서비스 모드 카드 (ServiceModeCards) */}
      <ServiceModeCards />

      {/* 소개 텍스트 */}
      <InfoText
        text="부가서비스를 자유롭게 설정해보세요. 유용한 통신 부가서비스를 N건 활용중이에요."
        highlightText="N건"
        highlightColorClass="text-pink-600"
        className="py-0"
      />

      {/* "My 부가서비스" 목록 */}
      <MyServiceList services={services} />
    </div>
  );
};

export default MyServicesTab;
