import React from "react";
import styled from "styled-components";
const HeaderDiv = styled.div`
  height: 20vh;
  /* background-color: blue; */
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  h1 {
    font-family: 'Roboto', sans-serif;
  }
  div {
    width: 5rem;
    border-bottom: 5px solid #c59d5f;
  }
`;
function Header() {
  return (
    <HeaderDiv>
      <h1>UOR-MENU</h1>
      <div></div>
    </HeaderDiv>
  );
}

export default Header;
