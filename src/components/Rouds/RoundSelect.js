import React from 'react';

let options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const RoundSelect = ({ gongAt, setGongAt }) => {
  return (
    <>
      <label htmlFor="timer_one_select">gong at</label>
      <select
        id="timer_one_select"
        value={gongAt}
        onChange={(e) => setGongAt(parseInt(e.target.value, 10))}
      >
        {options.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </>
  );
};

export default RoundSelect;
