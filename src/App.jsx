import React, { useState } from 'react';
import Home from './screens/Home'; // 경로가 동일하게 유지됩니다 (index.jsx를 자동으로 인식)
import MainLayout from './components/layout/MainLayout';
import Contacts from './screens/Contacts'; // Contacts 컴포넌트 import 추가
import CallLog from './screens/CallLog'; // CallLog 컴포넌트 import 추가

function App() {
  const [activeTab, setActiveTab] = useState('home');

  // 탭 변경 핸들러
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  // 현재 활성화된 탭에 따라 렌더링할 컴포넌트 결정
  const renderScreen = () => {
    switch (activeTab) {
      case 'home':
        return <Home />;
      case 'recent':
        return <CallLog />;
      case 'keypad':
        return <div className="p-5 text-center py-10">키패드 화면</div>;
      case 'contacts':
        return <Contacts />;
      case 'services':
        return <div className="p-5 text-center py-10">생활편의 화면</div>;
      default:
        return <Home />;
    }
  };

  // 현재 탭에 따라 타이틀 결정
  const getTitle = () => {
    switch (activeTab) {
      case 'home':
        return '모바일매니저'; // 홈 화면 타이틀
      case 'recent':
        return '최근기록'; // 최근기록 화면 타이틀
      case 'contacts':
        return '연락처'; // 연락처 화면 타이틀
      case 'keypad':
        return '키패드'; // 키패드 화면 타이틀
      case 'services':
        return '생활편의'; // 생활편의 화면 타이틀
      default:
        return '모바일매니저'; // 기본 타이틀
    }
  };

  return (
    <div className="mobile-container">
      <MainLayout
        activeTab={activeTab}
        onTabChange={handleTabChange}
        onSearchClick={() => console.log('검색 클릭')}
        onMenuClick={() => console.log('메뉴 클릭')}
        title={getTitle()}
        currentTab={activeTab}>
        {renderScreen()}
      </MainLayout>
    </div>
  );
}

export default App;
