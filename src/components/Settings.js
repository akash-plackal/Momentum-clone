import React, { useState } from "react";
import styled from "styled-components";
import { BsGearFill } from "react-icons/bs";

const SettingIcon = styled(BsGearFill)`
  color: whitesmoke;
  z-index: 10;
  font-size: 1.2rem;
  position: absolute;
  left: 2rem;
  bottom: 1rem;
  opacity: 0.8;
`;

const DialogMenu = styled.div`
  background-color: whitesmoke;
  height: 30rem;
  width: 39.5rem;
  z-index: 10;
  position: absolute;
  transition: 0.2s ease-in-out;
  left: ${({ toggle }) => (toggle ? "1rem" : "-100%")};
  bottom: 3rem;
  border-radius: 0.7rem;
  opacity: ${({ toggle }) => (toggle ? "1" : "0")};
`;

const TinyDiv = styled.div`
  transform: rotate(0.4turn);
  background-color: whitesmoke;
  width: 1rem;
  height: 1rem;
  position: absolute;
  transition: 0.2s ease-in-out;
  left: ${({ toggle }) => (toggle ? "36px" : "-100%")};
  bottom: 42px;
  z-index: 10;
  opacity: ${({ toggle }) => (toggle ? "1" : "0")};
`;

const Settings = () => {
  const [toggle, setToggle] = useState(false);
  const changeState = () => setToggle(!toggle);

  return (
    <>
      <DialogMenu toggle={toggle} />
      <TinyDiv toggle={toggle} />
      <SettingIcon onClick={changeState} />
    </>
  );
};

export default Settings;
