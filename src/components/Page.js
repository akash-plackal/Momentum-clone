import React from "react";
import styled from "styled-components";
import bgimg from "../assets/bgimg.jpg";
import Quotes from "./Quotes";
import Search from "./Search";
import Settings from "./Settings";
import Time from "./Time";
import Todo from "./Todo";

const Background = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${bgimg});
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  position: relative;

  &::before {
    content: "";
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100vh;
    bottom: 0vh;
    left: 0;
    overflow: hidden;
    opacity: 0.4;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 50%,
      rgba(0, 0, 0, 0.3) 100%
    );
  }
`;

const Page = () => {
  return (
    <Background>
      <Time />
      <Quotes />
      <Search />
      <Settings />
      <Todo />
    </Background>
  );
};

export default Page;
