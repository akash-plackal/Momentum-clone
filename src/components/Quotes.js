import React, { useEffect, useState } from "react";
import styled from "styled-components";

const QuoteDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  bottom: 0.5rem;
  width: 80%;
  text-align: center;
  height: 3rem;
  transition: 0.2s ease-in-out;
  z-index: 10;
`;

const QuoteTag = styled.p`
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.1rem;
  z-index: 10;
  max-width: 80%;
  text-align: center;
  transition: 0.2s ease-in-out;

  ${QuoteDiv}:hover & {
    margin-top: -2rem;
  }
`;

const Author = styled.p`
  display: none;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.8rem;
  position: absolute;
  bottom: 0.5rem;
  z-index: 10;
  text-align: center;

  ${QuoteDiv}:hover & {
    display: block;
  }
`;

const Quotes = () => {
  const [quote, setquote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    const quote = async () => {
      try {
        const res = await fetch("https://api.quotable.io/random");
        const data = await res.json();
        setquote(data.content);
        setAuthor(data.author);
      } catch (e) {
        setquote("Victory is sweetest when you've known defeat");
      }
    };

    quote();
  }, []);

  return (
    <QuoteDiv>
      <QuoteTag>"{quote}"</QuoteTag>
      <Author>- {author}</Author>
    </QuoteDiv>
  );
};

export default Quotes;
