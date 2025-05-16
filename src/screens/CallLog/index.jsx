import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import TabBar from './components/TabBar';
import CallLogList from './components/CallLogList';

// 임시 데이터 - 통화기록 데이터
const callLogData = [
  {
    date: '오늘',
    formattedDate: '2024.07.03 월',
    logs: [
      {
        id: 1,
        type: 'outbound', // outbound, inbound, missed
        callType: 'phone', // phone, facecall, message
        name: '타이틀 최대 1줄 초과시 말줄임표 타이틀 최대 1줄 초과시 말줄임표',
        phone: '010-0000-0000',
        time: '오후 8:13',
        tags: [],
      },
      {
        id: 2,
        type: 'outbound',
        callType: 'phone',
        name: '김유플',
        time: '오후 8:10',
        tags: [],
      },
      {
        id: 3,
        type: 'outbound',
        callType: 'phone',
        name: 'DB 제안 번호 정보',
        phone: '010-0000-0000',
        time: '오후 6:24',
        isDangerous: true,
        tags: [],
      },
    ],
  },
  {
    date: '어제',
    formattedDate: '2024.07.02 일',
    logs: [
      {
        id: 4,
        type: 'outbound',
        callType: 'facecall',
        name: '타이틀 최대 1줄 초과시 말줄임표 타이틀 최대 1줄 초과시 말줄임표',
        phone: '010-0000-0000#',
        time: '오후 8:13',
        tags: ['듀얼', '의심'],
      },
      {
        id: 5,
        type: 'outbound',
        callType: 'facecall',
        name: '김유플',
        time: '오후 8:10',
        tags: ['듀얼'],
      },
      {
        id: 6,
        type: 'outbound',
        callType: 'facecall',
        name: 'DB 제안 번호 정보',
        phone: '010-0000-0000',
        time: '오후 6:24',
        isDangerous: true,
        tags: ['의심'],
      },
    ],
  },
  {
    date: '',
    formattedDate: '2024.07.01 토',
    logs: [
      {
        id: 7,
        type: 'outbound',
        callType: 'message',
        name: '타이틀 최대 1줄 초과시 말줄임표 타이틀 최대 1줄 초과시 말줄임표',
        phone: '010-0000-0000',
        time: '오후 8:13',
        tags: [],
      },
      {
        id: 8,
        type: 'outbound',
        callType: 'message',
        name: '김유플',
        time: '오후 8:10',
        tags: [],
      },
      {
        id: 9,
        type: 'outbound',
        callType: 'message',
        name: '안전안내문자',
        time: '오후 6:24',
        isDangerous: true,
        tags: [],
      },
    ],
  },
];

const CallLog = () => {
  const [tabSelection, setTabSelection] = useState('recent'); // 'recent' 또는 'blocked'

  // 서브 탭 변경 핸들러
  const handleSubTabChange = (tabId) => {
    console.log('Sub tab changed:', tabId);
    setTabSelection(tabId);
  };

  return (
    <div className="flex flex-col h-full overflow-y-auto hide-scrollbar">
      <SearchBar />
      <TabBar activeTab={tabSelection} onTabChange={handleSubTabChange} />
      <div className="flex-grow">
        <CallLogList data={callLogData} />
      </div>
    </div>
  );
};

export default CallLog;
