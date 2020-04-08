import React, { useState } from 'react';
import Wrapper from '../Wrapper/Wrapper';
import List from '../List/List';

const getOnlyHours = number =>
  Math.floor((number % (60 * 60 * 24)) / (60 * 60));
const getOnlyMinutes = number => Math.floor((number % (60 * 60)) / 60);

const Timer = () => {
  const [timesList, setTimesList] = useState([]);
  const [running, setRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [secondsTimer, setSecondsTimer] = useState(false);

  const startTimer = () => {
    setRunning(true);
    setSecondsTimer(
      setInterval(() => {
        setSeconds(prevState => prevState + 1);
      }, 1)
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
    setTimesList(prevState => [...prevState, newTime]);
  };

  return (
    <Wrapper>
      <p>
        {getOnlyHours(seconds)}:{getOnlyMinutes(seconds)}
      </p>
      {!running ? (
        <button onClick={startTimer}>start</button>
      ) : (
        <button onClick={stopTimer}>stop</button>
      )}
      <button onClick={resetTimer}>reset</button>
      <button onClick={saveTime}>save</button>
      <List data={timesList} />
    </Wrapper>
  );
};

export default Timer;
