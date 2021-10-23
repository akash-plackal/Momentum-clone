import React from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";

const Icon = styled(AiOutlineSearch)`
  font-size: 1.5rem;
  color: white;
  z-index: 10;
  /* position: absolute; */
`;

const SearchDiv = styled.div``;

const SearchInput = styled.input`
  width: 5rem;
  height: 2rem;
  border-color: whitesmoke;
`;

const Search = () => {
  return (
    <SearchDiv>
      <Icon />
      <SearchInput />
    </SearchDiv>
  );
};

export default Search;
