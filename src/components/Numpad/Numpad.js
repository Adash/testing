import React, { useState, useEffect } from 'react';
import './Numpad.css';
import 'styled-components/macro';
import { Button } from 'reactstrap';
import Digital from '../Digital/Digital';

const code = 1502;
const initialScreen = 'Enter Code';

const Numpad = () => {
  const [number, setNumber] = useState(0);
  const [screen, setScreen] = useState(initialScreen);
  const [backgroundColor, setBackgroundColor] = useState('none');
  const [lock, setLock] = useState(false);

  const handleClick = e => {
    if (e.target.value === '#') {
      setNumber(0);
      setScreen(initialScreen);
      setBackgroundColor('none');
      setLock(false);
      return;
    }
    if (lock) {
      return;
    }
    setNumber(parseInt(number + e.target.value));
  };

  useEffect(() => {
    // console.log(`${number} - ${code}`);
    if (number === code) {
      setScreen('Success!');
      setBackgroundColor('green');
      setLock(true);
    }
  }, [number]);

  return (
    <div className="App">
      <div className="App-header">
        <div
          css={`
            display: flex;
            flex-direction: column;
          `}
        >
          <p
            css={`
              background-color: ${backgroundColor};
            `}
          >
            {screen}
          </p>
          <Digital number={number} setNumber={setNumber} />
          <div
            css={`
              display: grid;
              grid-template-columns: 1fr 1fr 1fr;
              grid-template-rows: 1fr 1fr 1fr 1fr;
              margin-top: 5px;
            `}
          >
            <Button onClick={handleClick} value="9">
              9
            </Button>
            <Button onClick={handleClick} value="8">
              8
            </Button>
            <Button onClick={handleClick} value="7">
              7
            </Button>
            <Button onClick={handleClick} value="6">
              6
            </Button>
            <Button onClick={handleClick} value="5">
              5
            </Button>
            <Button onClick={handleClick} value="4">
              4
            </Button>
            <Button onClick={handleClick} value="3">
              3
            </Button>
            <Button onClick={handleClick} value="2">
              2
            </Button>
            <Button onClick={handleClick} value="1">
              1
            </Button>
            <Button onClick={handleClick} value="*">
              *
            </Button>
            <Button onClick={handleClick} value="0">
              0
            </Button>
            <Button onClick={handleClick} value="#">
              #
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Numpad;
