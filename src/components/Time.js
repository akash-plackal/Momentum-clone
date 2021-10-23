import React, { useState, useEffect } from "react";
import styled from "styled-components";

const TimeTxt = styled.h1`
  font-size: 10rem;
  font-weight: 400;
  color: white;
  letter-spacing: -6px;
  z-index: 10;
  flex-wrap: wrap;
`;

const Greeting = styled(TimeTxt)`
  font-size: 3rem;
  letter-spacing: 1px;
`;

const Time = () => {
  const [hrs, sethrs] = useState(new Date().getHours() % 12);
  const [min, setMin] = useState(new Date().getMinutes().toLocaleString());
  const [time] = useState(new Date().getHours());
  const [word, setWord] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      sethrs(new Date().getHours() % 12);
      setMin(new Date().getMinutes());
    }, 500);

    return () => clearInterval(interval);
  });

  useEffect(() => {
    if (time > 12 && time < 21) {
      setWord("afternoon");
    } else if (time >= 21) {
      setWord("night");
    } else if (time < 12) {
      setWord("morning");
    }
  }, [time]);

  return (
    <>
      <TimeTxt>{`${hrs}:${min}`}</TimeTxt>
      <Greeting>Good {word}, Akash.</Greeting>
    </>
  );
};

export default Time;
