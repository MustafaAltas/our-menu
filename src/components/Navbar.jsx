import React from "react";
import styled from "styled-components";

const NavbarDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  gap: 5rem;
`;
const ButtonStyled = styled.button`
  cursor: pointer;
  background-color: white;
  border: none;
  transition: all 0.5s;
  font-size: 20px;
  padding: 0.5rem;
  border-radius: 10px;
  color: #c59d5f;
  :hover {
    background-color: #c59d5f;
    color: white;
  }
`;

function Navbar({ setCategory ,data,category}) {
  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  return (
    <NavbarDiv>
      <ButtonStyled value={"All"} onClick={handleCategory}>
        All
      </ButtonStyled>
      <ButtonStyled value={"Breakfask"} onClick={handleCategory}>
        Breakfast
      </ButtonStyled>
      <ButtonStyled value={"Lunch"} onClick={handleCategory}>
        Lunch
      </ButtonStyled>
      <ButtonStyled value={"Shakes"} onClick={handleCategory}>
        Shakes
      </ButtonStyled>
    </NavbarDiv>
  );
}

export default Navbar;
