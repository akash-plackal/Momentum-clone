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
`;

const Quotes = () => {
  const [quote, setquote] = useState("");

  useEffect(() => {
    const quote = async () => {
      const res = await fetch("https://api.quotable.io/random");
      const data = await res.json();
      setquote(data.content);
    };

    quote();
  }, []);

  return <QuoteTag>"{quote}"</QuoteTag>;
};

export default Quotes;
