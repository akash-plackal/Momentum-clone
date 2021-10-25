import React, { useEffect, useState } from "react";
import styled from "styled-components";

const QuoteTag = styled.p`
  color: white;
  /* font-family: "Courier New", Courier, monospace; */
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.1rem;
  position: absolute;
  bottom: 1rem;
  z-index: 10;
  max-width: 80%;
  text-align: center;
`;

const Quotes = () => {
  const [quote, setquote] = useState("");

  useEffect(() => {
    const quote = async () => {
      try {
        const res = await fetch("https://api.quotable.io/random");
        const data = await res.json();
        setquote(data.content);
      } catch (e) {
        setquote("Victory is sweetest when you've known defeat");
      }
    };

    quote();
  }, []);

  return <QuoteTag>"{quote}"</QuoteTag>;
};

export default Quotes;
