import React from 'react';

let options = [3, 5, 10, 15, 20, 25, 30, 45, 60, 180];

const RoundSelect = ({ gongAt, setGongAt, selections = options }) => {
  return (
    <>
      <label htmlFor="timer_one_select">gong at</label>
      <select
        id="timer_one_select"
        value={gongAt}
        onChange={(e) => setGongAt(parseInt(e.target.value, 10))}
      >
        {selections.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </>
  );
};

export default RoundSelect;
