import React from "react";
import styled from "styled-components";

const ItemsDiv = styled.div`
  z-index: 10;
`;

const Item = styled.p`
  padding: 0.8rem 0;
  padding-left: 0.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  text-transform: capitalize;
  color: darkgrey;
`;

const SettingItems = () => {
  return (
    <ItemsDiv>
      <Item>links</Item>
      <Item>Bookmark Bar</Item>
      <Item>top sites</Item>
      <Item>search</Item>
      <Item>weather</Item>
    </ItemsDiv>
  );
};

export default SettingItems;
