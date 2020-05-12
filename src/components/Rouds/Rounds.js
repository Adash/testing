import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import Wrapper from '../Wrapper/Wrapper';
import soundFile from './bell.wav';
import RoundSelect from './RoundSelect';

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

const Rounds = () => {
  const [running, setRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [secondsTimer, setSecondsTimer] = useState(false);
  const [gongAt, setGongAt] = useState(3);

  // useEffect(() => {
  //   setAudio(new Audio('../public/clip.mp3'));
  // }, []);

  const Alert = ({ sound }) => {
    // not sure why I would need the ref for that?
    if (seconds === gongAt) {
      // return <audio ref={myRef} src={sound} autoPlay />;
      return <audio src={sound} autoPlay />;
    } else {
      return null;
    }
  };

  const atEachSecond = () => {
    setSeconds((prevState) => prevState + 1);
  };

  // useEffect(() => {
  //   if (seconds === gongAt) {
  //     setGongOne(true);
  //   }
  //   console.log(`seconds: ${seconds} , gong at: ${gongAt}`);
  // }, [seconds, gongAt]);

  const startTimer = () => {
    setRunning(true);
    setSecondsTimer(setInterval(atEachSecond, 1000));
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

  const play = () => {};

  return (
    <Wrapper>
      <Alert sound={soundFile} />
      <RoundSelect gongAt={gongAt} setGongAt={setGongAt} />
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
        <Button color="info" onClick={play}>
          play
        </Button>
      </div>
    </Wrapper>
  );
};

export default Rounds;
