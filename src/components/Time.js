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
  const [hrs, sethrs] = useState(new Date().getHours());
  const [min, setMin] = useState(new Date().getMinutes().toLocaleString());
  const [word, setWord] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      sethrs(new Date().getHours());
      setMin(new Date().getMinutes());
    }, 500);

    return () => clearInterval(interval);
  });

  useEffect(() => {
    if (hrs > 12 && hrs < 21) {
      setWord("afternoon");
    } else if (hrs >= 21) {
      setWord("night");
    } else if (hrs < 12) {
      setWord("morning");
    }
  }, [hrs]);

  return (
    <>
      <TimeTxt>{`${hrs === 0 ? 12 : hrs % 12}:${min}`}</TimeTxt>
      <Greeting>Good {word}, Akash.</Greeting>
    </>
  );
};

export default Time;
