import React, { useState } from 'react';
import { Button } from 'reactstrap';
import Wrapper from '../Wrapper/Wrapper';
import List from '../List/List';

const getOnlyHours = (number) =>
  Math.floor((number % (60 * 60 * 24)) / (60 * 60));
const getOnlyMinutes = (number) => Math.floor((number % (60 * 60)) / 60);
const getOnlySeconds = (number) => Math.floor(number % 60);

const PaddedTime = ({ children }) => (
  <>{children.toString().padStart(2, '0')}</>
);

const TimerDisplay = ({ seconds }) => {
  return (
    <p>
      <PaddedTime>{getOnlyHours(seconds)}</PaddedTime>:
      <PaddedTime>{getOnlyMinutes(seconds)}</PaddedTime>:
      <PaddedTime>{getOnlySeconds(seconds)}</PaddedTime>
    </p>
  );
};

const Timer = () => {
  const [timesList, setTimesList] = useState([]);
  const [running, setRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [secondsTimer, setSecondsTimer] = useState(false);

  const startTimer = () => {
    setRunning(true);
    setSecondsTimer(
      setInterval(() => {
        setSeconds((prevState) => prevState + 1);
      }, 1000)
    );
  };

  const stopTimer = () => {
    setRunning(false);
    clearInterval(secondsTimer);
  };

  const resetTimer = () => {
    setRunning(false);
    clearInterval(secondsTimer);
    setSeconds(0);
  };

  const saveTime = () => {
    const newTime = getOnlyHours(seconds) + ':' + getOnlyMinutes(seconds);
    setTimesList((prevState) => [...prevState, newTime]);
  };

  return (
    <Wrapper>
      <TimerDisplay seconds={seconds} />
      <div>
        {!running ? (
          <Button color="primary" onClick={startTimer}>
            start
          </Button>
        ) : (
          <Button color="warning" onClick={stopTimer}>
            stop
          </Button>
        )}
        <Button color="danger" onClick={resetTimer}>
          reset
        </Button>
        <Button color="info" onClick={saveTime}>
          save
        </Button>
      </div>
      <List data={timesList} />
    </Wrapper>
  );
};

export default Timer;
