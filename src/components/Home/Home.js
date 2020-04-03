import React from 'react';
import 'styled-components/macro';

const Home = () => {
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
      <p>Home</p>
    </div>
  );
};

export default Home;
