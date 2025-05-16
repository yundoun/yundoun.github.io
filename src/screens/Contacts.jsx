import React, { useState } from 'react';

// 임시 데이터
const sampleContacts = [
  {
    initial: '#',
    people: [{ name: '#강소라사원', phone: '010-0000-0000', isFavorite: true }],
  },
  {
    initial: 'ㄱ',
    people: [
      { name: '강사원/별칭', phone: '010-0000-0000' },
      { name: '고사원', phone: '010-0000-0000' },
      { name: '구사원/별칭', phone: '010-0000-0000' },
    ],
  },
  {
    initial: 'ㄴ',
    people: [
      { name: '나사원/별칭', phone: '010-0000-0000' },
      { name: '남사원', phone: '010-0000-0000' },
    ],
  },
];

// 안내 메시지 공통 컴포넌트
const InfoMessage = ({ message, hasMoreIcon = true }) => (
  <div className="pt-5 px-5 pb-4">
    <div className="flex items-start justify-between gap-3">
      <p className="flex-grow text-base font-semibold text-[#181A1B] leading-snug">
        {message}
      </p>
      {hasMoreIcon && (
        <img
          src="/src/assets/icons/more_vertical_icon.svg"
          alt="더보기"
          className="w-6 h-6"
        />
      )}
    </div>
  </div>
);

const Contacts = () => {
  const [activeTab, setActiveTab] = useState('default'); // 'default' or 'dual'

  // 임시 아이콘 경로 - 실제로는 import 해서 사용
  const SearchIcon = () => (
    <img
      src="/src/assets/icons/search_icon.svg"
      alt="Search"
      className="w-5 h-5"
    />
  );
  const PersonIcon = () => (
    <img
      src="/src/assets/icons/person_icon.svg"
      alt="Person"
      className="w-4 h-4"
    />
  );
  const HeaderSearchIcon = () => (
    <img
      src="/src/assets/icons/header_search_icon.svg"
      alt="Search"
      className="w-6 h-6"
    />
  );
  const HeaderMenuIcon = () => (
    <img
      src="/src/assets/icons/header_menu_icon.svg"
      alt="Menu"
      className="w-6 h-6"
    />
  );
  const PhoneActionIcon = () => (
    <img
      src="/src/assets/icons/phone_icon.svg"
      alt="Phone"
      className="w-5 h-5"
    />
  );

  const ContactItem = ({ contact, isFavorite }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
      <div className="border-b border-gray-200">
        <div
          className="flex items-center justify-between p-4 cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}>
          <div className="flex-grow">
            <div className="flex items-center">
              <p className="text-sm font-medium text-gray-900">
                {contact.name}
              </p>
              {isFavorite && <span className="ml-2 text-yellow-500">★</span>}
            </div>
            <p className="text-xs text-gray-500">{contact.phone}</p>
          </div>
          <button className="p-2 rounded-full hover:bg-gray-100">
            <img
              src="/src/assets/icons/phone_icon.svg"
              alt="Phone"
              className="w-5 h-5"
            />
          </button>
        </div>
        {isExpanded && (
          <div className="bg-gray-50 p-4 flex justify-around items-center">
            <button className="flex flex-col items-center text-blue-500">
              <img
                src="/src/assets/icons/chat_icon.svg"
                alt="Chat"
                className="w-8 h-8 mb-1"
              />
              <span className="text-xs">메시지</span>
            </button>
            <button className="flex flex-col items-center text-green-500">
              <img
                src="/src/assets/icons/phone_icon.svg"
                alt="Call"
                className="w-8 h-8 mb-1"
              />
              <span className="text-xs">통화</span>
            </button>
            <button className="flex flex-col items-center text-purple-500">
              <img
                src="/src/assets/icons/videocam_icon.svg"
                alt="Video Call"
                className="w-8 h-8 mb-1"
              />
              <span className="text-xs">영상통화</span>
            </button>
            <button className="flex flex-col items-center text-gray-500">
              <img
                src="/src/assets/icons/info_icon.svg"
                alt="Info"
                className="w-8 h-8 mb-1"
              />
              <span className="text-xs">정보</span>
            </button>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="flex flex-col h-full bg-white overflow-y-auto hide-scrollbar">
      {/* Search Bar - 탭 위로 이동 */}
      <div className="p-4 border-b border-gray-200">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon />
          </div>
          <input
            type="text"
            placeholder="연락처를 검색해보세요"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-gray-50 text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200">
        <button
          className={`flex-1 py-3 text-sm font-medium text-center ${
            activeTab === 'default'
              ? 'border-b-2 border-pink-500 text-pink-500'
              : 'text-gray-500 hover:bg-gray-50'
          }`}
          onClick={() => setActiveTab('default')}>
          기본 연락처
        </button>
        <button
          className={`flex-1 py-3 text-sm font-medium text-center ${
            activeTab === 'dual'
              ? 'border-b-2 border-pink-500 text-pink-500'
              : 'text-gray-500 hover:bg-gray-50'
          }`}
          onClick={() => setActiveTab('dual')}>
          듀얼넘버 연락처
        </button>
      </div>

      {/* 스크롤 가능한 컨텐츠 영역 */}
      <div className="flex-grow">
        {activeTab === 'default' && (
          <>
            {/* 기본 연락처 탭 안내 메시지 */}
            <InfoMessage
              message={
                <>
                  듀얼넘버, 지정번호필터링 가입자는
                  <br />
                  더욱 다양한 기능들을 이용할 수 있어요
                </>
              }
            />

            {/* My Profile */}
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-xs font-semibold text-pink-500 mb-2">
                내 프로필
              </h2>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900">나</p>
                  <p className="text-xs text-gray-500">콜 메시지</p>
                  <p className="text-xs text-gray-500">010-0000-0000</p>
                </div>
                {/* 프로필 편집 등의 버튼 추가 가능 */}
              </div>
            </div>

            {/* 여백 */}
            <div className="h-4 bg-gray-50"></div>

            {/* Relationship Filter */}
            <div className="p-4 border-b border-gray-200">
              <p className="text-sm font-bold text-gray-900 mb-1">
                관계 관리 필터
              </p>
              {/* Single Filter Item based on Figma */}
              <div
                className="flex items-center justify-between px-0 py-2.5 cursor-pointer hover:bg-gray-50 -mx-3 px-3 rounded-lg"
                onClick={() => console.log('항상 차단하고 싶은 전화 clicked')}>
                <div className="flex-1">
                  <p className="text-sm font-medium text-[#181A1B]">
                    항상 차단하고 싶은 전화
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-4 h-4 relative">
                    <div className="w-3 h-3 left-0.5 top-0.5 absolute bg-[#A8B3BD] rounded-full"></div>
                  </div>
                  <p className="text-sm font-medium text-[#A8B3BD]">4</p>
                </div>
              </div>
            </div>

            {/* 여백 */}
            <div className="h-4 bg-gray-50"></div>

            {/* Contact List */}
            {sampleContacts.map((group) => (
              <div key={group.initial}>
                <div className="px-4 py-2 border-gray-200 sticky top-0 z-10">
                  <p className="text-xs font-semibold text-pink-500">
                    {group.initial}
                  </p>
                </div>
                {group.people.map((person) => (
                  <ContactItem
                    key={person.name}
                    contact={person}
                    isFavorite={person.isFavorite}
                  />
                ))}
              </div>
            ))}
          </>
        )}

        {activeTab === 'dual' && (
          <div className="flex flex-col">
            {/* 듀얼 넘버 연락처 탭 안내 메시지 */}
            <InfoMessage
              message={
                <>
                  두 번째 번호 전용 연락처로
                  <br />
                  편리하게 듀얼넘버를 이용하세요
                </>
              }
            />

            {/* 카드 - 듀얼넘버 가입 안내 */}
            <div className="mx-5 my-4">
              <div className="border border-[#DCE0E5] rounded-xl p-5 flex flex-col gap-5">
                <div className="text-center">
                  <p className="text-sm font-medium text-[#66707A] leading-relaxed">
                    듀얼넘버 부가서비스에 가입하고
                    <br />
                    듀얼넘버를 이용해 보세요
                  </p>
                </div>
                <button
                  className="w-full py-3 bg-[#E6007E] text-white font-semibold text-sm rounded-xl"
                  onClick={() => console.log('듀얼넘버 가입하기 클릭')}>
                  가입하기
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contacts;
