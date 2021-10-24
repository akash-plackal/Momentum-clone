import React from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";

const FormWrapper = styled.form``;

const Icon = styled(AiOutlineSearch)`
  font-size: 1.5rem;
  color: white;
  z-index: 10;
`;

const BtnDiv = styled.button`
  background-color: #4285f4;
  height: 2.3rem;

  border: 1px solid whitesmoke;
  outline: none;
  border-radius: 0px 8px 8px 0px;
  position: relative;
  top: 2px;
  right: 39px;
  width: 2.5rem;
`;

const SearchDiv = styled.div`
  z-index: 10;
  position: absolute;
  top: 1rem;
  left: 1rem;
`;

const SearchInput = styled.input`
  width: 18rem;
  height: 2.3rem;
  border: 1px solid whitesmoke;
  z-index: 10;
  border-radius: 8px;
  outline: none;
  font-size: 1.5rem;
  color: whitesmoke;
  background-color: transparent;
  padding: 0.5rem;
`;

const Search = () => {
  return (
    <FormWrapper
      action="https://google.com/search"
      method="get"
      target="_blank"
    >
      <SearchDiv>
        <SearchInput type="text" name="q" />
        <BtnDiv type="submit">
          <Icon />
        </BtnDiv>
      </SearchDiv>
    </FormWrapper>
  );
};

export default Search;
