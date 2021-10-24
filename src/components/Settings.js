import React from "react";
import styled from "styled-components";
import { BsGearFill } from "react-icons/bs";

const SettingIcon = styled(BsGearFill)`
  color: whitesmoke;
  z-index: 10;
  font-size: 1.2rem;
  position: absolute;
  left: 0.4rem;
  bottom: 0.4rem;
  opacity: 0.8;
`;

const Settings = () => {
  return <SettingIcon onClick={() => console.log("hello")} />;
};

export default Settings;
