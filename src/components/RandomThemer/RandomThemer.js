import React, { useState } from 'react';
import 'styled-components/macro';
// import Button from '../SimpleButton/SimpleButton';

const RandomThemer = () => {
  const [randomColor, setRandomColor] = useState('#fff000');

  const handleClick = () => {
    let newColor = Math.floor(Math.random() * 16777215).toString(16);
    setRandomColor(`#${newColor}`);
  };

  return (
    <div
      css={`
        background-color: #282c34;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: calc(10px + 2vmin);
        color: white;
      `}
    >
      <p
        css={`
          width: 100px;
          margin: 0;
          text-align: center;
          background-color: gray;
        `}
      >
        {randomColor}
      </p>
      <div
        css={`
          display: flex;
          flex-direction: row;
        `}
      >
        <div
          css={`
            width: 100px;
            height: 100px;
            background-color: ${randomColor};
          `}
        ></div>
      </div>
      <button
        css={`
          width: 100px;
          height: 40px;
          font-size: 11px;
        `}
        onClick={handleClick}
      >
        Generate
      </button>
    </div>
  );
};

export default RandomThemer;
