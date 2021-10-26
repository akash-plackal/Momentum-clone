import React from "react";
import styled from "styled-components";

const TodoBox = styled.div`
  background-color: whitesmoke;
  z-index: 10;
  width: 20rem;
  height: 10rem;
`;

const Todo = () => {
  return <TodoBox></TodoBox>;
};

export default Todo;
