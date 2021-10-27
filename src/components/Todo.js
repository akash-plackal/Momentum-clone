import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineDelete } from "react-icons/ai";

const TodoDiv = styled.div`
  background-color: whitesmoke;
  z-index: 10;
  width: 20rem;
  min-height: 10rem;
  position: absolute;
  bottom: 3rem;
  right: 1rem;
  border-radius: 0.5rem;
  transition: 0.2s ease-in-out;
  padding: 0.5rem;
  padding-left: 1rem;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
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

// ========items=======

const TodoList = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  padding: 0.35rem;
  z-index: 10;
  display: flex;
  align-items: center;
`;

const ItemTxt = styled.span`
  padding: 0 0.5rem;
`;

const ItemInput = styled.input`
  &:checked + ${ItemTxt} {
    opacity: 0.5;
    text-decoration: line-through;
  }
`;

const DelIcon = styled(AiOutlineDelete)`
  display: none;
  z-index: 10;
  margin-left: auto;
  font-size: 1.3rem;

  ${Label}:hover & {
    display: block;
  }
`;

const Todo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const changeState = () => setIsOpen(!isOpen);

  const [input, setInput] = useState("");

  const [todoItem, setTodoItem] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    setTodoItem([
      ...todoItem,
      {
        id: Date.now(),
        text: input.trim(),
      },
    ]);
    setInput("");
  };

  // const delHandler = (id) => todoItem.filter(() => todoItem.id !== id);
  const delHandler = (id) => {
    const filteredArr = todoItem.filter((item) => {
      return item.id !== id;
    });

    setTodoItem(filteredArr);
  };

  return (
    <>
      <TodoDiv isOpen={isOpen}>
        <TodoTitle>Todos</TodoTitle>

        <TodoList>
          {todoItem.map((item) => (
            <Label key={item.id} htmlFor="input">
              <ItemInput type="checkbox" id="input" />{" "}
              <ItemTxt> {item.text}</ItemTxt>
              <DelIcon onClick={() => delHandler(item.id)}>del</DelIcon>
            </Label>
          ))}
        </TodoList>

        <form onSubmit={submitHandler}>
          <TodoInput
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="New Todo"
          />
        </form>
      </TodoDiv>
      <TinyBox isOpen={isOpen} />
      <TodoTxt onClick={changeState}>Todo</TodoTxt>
    </>
  );
};

export default Todo;
