import React from 'react';
import 'styled-components/macro';

const Wrapper = ({ children }) => (
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
    {children}
  </div>
);

export default Wrapper;
