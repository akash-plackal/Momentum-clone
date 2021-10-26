import React, { useState } from "react";
import styled from "styled-components";

const TodoBox = styled.div`
  background-color: whitesmoke;
  z-index: 10;
  width: 20rem;
  min-height: 10rem;
  position: absolute;
  bottom: 3rem;
  right: 1rem;
  border-radius: 0.5rem;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  transition: 0.2s ease-in-out;
  padding: 0.5rem;
  padding-left: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TinyBox = styled.div`
  transform: rotate(0.6turn);
  background-color: whitesmoke;
  width: 1rem;
  height: 1rem;
  position: absolute;
  transition: 0.2s ease-in-out;
  right: 36px;
  bottom: 42px;
  z-index: 10;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

const TodoTxt = styled.p`
  z-index: 10;
  color: whitesmoke;
  cursor: pointer;
  position: absolute;
  right: 2rem;
  bottom: 1rem;
  font-size: 1rem;
`;

const TodoTitle = styled.p`
  font-size: 1.35rem;
  z-index: 10;
`;

const TodoInput = styled.input`
  border: none;
  outline: none;
  z-index: 10;
  height: 2rem;
  font-size: 0.98rem;
  background-color: whitesmoke;
`;

const Todo = () => {
  const [isOpen, setIsOpen] = useState(true);
  const changeState = () => setIsOpen(!isOpen);

  return (
    <>
      <TodoBox isOpen={isOpen}>
        <TodoTitle>Todos</TodoTitle>
        <TodoInput placeholder="New Todo" />
      </TodoBox>
      <TinyBox isOpen={isOpen} />
      <TodoTxt onClick={changeState}>Todo</TodoTxt>
    </>
  );
};

export default Todo;
