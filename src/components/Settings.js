import React, { useState } from "react";
import styled from "styled-components";
import { BsGearFill } from "react-icons/bs";
import SettingItems from "./SettingItems";

const SettingIcon = styled(BsGearFill)`
  color: whitesmoke;
  z-index: 10;
  font-size: 1.2rem;
  position: absolute;
  left: 2rem;
  bottom: 1rem;
  opacity: 0.8;
  cursor: pointer;
`;

const TinyDiv = styled.div`
  transform: rotate(0.4turn);
  background-color: whitesmoke;
  width: 1rem;
  height: 1rem;
  position: absolute;
  transition: 0.2s ease-in-out;
  left: 36px;
  bottom: 42px;
  z-index: 10;
  opacity: ${({ toggle }) => (toggle ? "1" : "0")};
`;

const DialogMenu = styled.div`
  background-color: whitesmoke;
  height: 30rem;
  width: 39.5rem;
  z-index: 10;
  position: absolute;
  transition: 0.2s ease-in-out;
  left: 1rem;
  bottom: 3rem;
  border-radius: 0.6rem;
  opacity: ${({ toggle }) => (toggle ? "1" : "0")};

  display: flex;
  flex-direction: column;
  padding: 0.5rem 1.5rem;
`;

const H2 = styled.h2`
  margin-top: 0.8rem;
  z-index: 10;
  font-family: sans-serif;
`;
const H5 = styled.h5`
  margin-top: 1.1rem;
  padding-bottom: 0.8rem;
  z-index: 10;
  font-family: sans-serif;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const Disc = styled.p`
  color: grey;
  margin-top: 0.2rem;
  font-family: sans-serif;
`;

const Settings = () => {
  const [toggle, setToggle] = useState(false);
  const changeState = () => setToggle(!toggle);

  return (
    <>
      <DialogMenu toggle={toggle}>
        <H2>General</H2>
        <Disc>Customise your dashboard</Disc>
        <H5>SHOW</H5>
        <SettingItems>hello</SettingItems>
      </DialogMenu>
      <TinyDiv toggle={toggle} />
      <SettingIcon onClick={changeState} />
    </>
  );
};

export default Settings;
