import React from 'react';
import ServiceSuggestionCarousel from './ServiceSuggestionCarousel';
import RecommendedServiceCard from './RecommendedServiceCard';
import ViewAllServicesLink from './ViewAllServicesLink';
import InfoText from '../../../components/common/InfoText';

const RecommendServicesTab = () => {
  return (
    <div className="space-y-6 pb-32">
      {/* 안내 문구 */}
      <InfoText
        text="내 소통 스타일에 어울리는 통신 부가서비스를 확인해 보세요."
        className="pt-0 pb-0 px-0"
      />
      <ServiceSuggestionCarousel />
      <RecommendedServiceCard />
      <div className="mb-6">
        <ViewAllServicesLink />
      </div>
    </div>
  );
};

export default RecommendServicesTab;
