import React from 'react';
import PropTypes from 'prop-types';
import CallLogItem from './CallLogItem';

/**
 * 최근기록 리스트 컴포넌트
 * @param {Object} props
 * @param {Array} props.data - 통화기록 데이터
 */
const CallLogList = ({ data }) => {
  return (
    <div>
      {data.map((group, index) => (
        <div key={index} className="mb-6">
          <div className="flex items-center px-5 py-2.5">
            {group.date && (
              <span className="text-xs font-semibold text-[#E6007E] mr-1">
                {group.date}
              </span>
            )}
            <span className="text-xs font-semibold text-[#66707A]">
              {group.formattedDate}
            </span>
          </div>
          <div>
            {group.logs.map((log) => (
              <CallLogItem key={log.id} log={log} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

CallLogList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string,
      formattedDate: PropTypes.string.isRequired,
      logs: PropTypes.array.isRequired,
    })
  ).isRequired,
};

export default CallLogList;
