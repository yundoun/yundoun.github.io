import React, { useState } from 'react';
import MyServicesTab from './components/MyServicesTab';
import RecommendServicesTab from './components/RecommendServicesTab';
import ServiceTabBar from './components/ServiceTabBar';
import ImageBanner from './components/ImageBanner';
import { myServices } from './data/myServicesData';

const Home = () => {
  // 상태 관리
  const [serviceActiveTab, setServiceActiveTab] = useState('my');

  // 서비스 탭 변경 핸들러
  const handleServiceTabChange = (tabId) => {
    console.log('Service tab changed:', tabId);
    setServiceActiveTab(tabId);
  };

  return (
    <div className="pt-4 pb-5 px-5 space-y-6">
      {/* 이미지 배너 컴포넌트 사용 */}
      <ImageBanner />

      {/* 서비스 탭 */}
      <ServiceTabBar
        activeTab={serviceActiveTab}
        onTabChange={handleServiceTabChange}
      />

      {/* "My 부가서비스" 탭 콘텐츠 */}
      {serviceActiveTab === 'my' && <MyServicesTab services={myServices} />}

      {/* "추천 부가서비스" 탭 활성 시 내용 */}
      {serviceActiveTab === 'recommend' && <RecommendServicesTab />}
    </div>
  );
};

export default Home;
