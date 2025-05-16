import React from 'react';
import PropTypes from 'prop-types';

/**
 * 개별 통화기록 아이템 컴포넌트
 * @param {Object} props
 * @param {Object} props.log - 통화기록 데이터
 */
const CallLogItem = ({ log }) => {
  // 아이콘 결정 함수
  const getCallTypeIcon = () => {
    // 통화 유형에 따라 다른 아이콘 반환
    if (log.callType === 'phone') {
      return (
        <img
          src={`/src/assets/icons/phone_outbound_icon${
            log.isDangerous ? '2' : ''
          }.svg`}
          alt="전화"
          className="w-6 h-6"
        />
      );
    } else if (log.callType === 'facecall') {
      return (
        <img
          src={`/src/assets/icons/facecall_outbound_icon.svg`}
          alt="영상통화"
          className="w-6 h-6"
          style={{ filter: log.isDangerous ? 'hue-rotate(140deg)' : 'none' }}
        />
      );
    } else if (log.callType === 'message') {
      return (
        <img
          src={`/src/assets/icons/message_outbound_icon.svg`}
          alt="메시지"
          className="w-6 h-6"
          style={{ filter: log.isDangerous ? 'hue-rotate(140deg)' : 'none' }}
        />
      );
    }

    return null;
  };

  return (
    <div className="px-5 py-4 border-b border-[#E7EBEE] flex items-center">
      <div className="w-6 h-6 mr-3">{getCallTypeIcon()}</div>

      <div className="flex-grow min-w-0">
        <div className="flex items-center mb-0.5">
          {log.tags && log.tags.length > 0 && (
            <div className="flex gap-1 mr-2">
              {log.tags.includes('듀얼') && (
                <span className="px-2 py-1 text-xs font-medium bg-[#FDEDF6] text-[#E6007E] rounded-full">
                  듀얼
                </span>
              )}
              {log.tags.includes('의심') && (
                <span className="px-2 py-1 text-xs font-medium bg-[#FBDCDA] text-[#E22A21] rounded-full">
                  의심
                </span>
              )}
            </div>
          )}
          <p className="text-base font-medium text-[#181A1B] truncate">
            {log.name}
          </p>
        </div>
        {log.phone && <p className="text-sm text-[#A8B3BD]">{log.phone}</p>}
      </div>

      <div className="flex flex-col items-end ml-4">
        <button className="mb-1 w-8 h-8 border border-[#E7EBEE] rounded-full flex items-center justify-center">
          <img
            src="/src/assets/icons/phone_icon.svg"
            alt="전화 걸기"
            className="w-5 h-5"
          />
        </button>
        <span className="text-xs text-[#7F8A94]">{log.time}</span>
      </div>
    </div>
  );
};

CallLogItem.propTypes = {
  log: PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    callType: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string,
    time: PropTypes.string.isRequired,
    isDangerous: PropTypes.bool,
    tags: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default CallLogItem;
