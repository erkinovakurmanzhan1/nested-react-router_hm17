import React from "react";
import styled from "styled-components";

const Button = ({ children, onClick ,color}) => {
  return (
    <ButtonStyled  onClick={onClick} style={{background: color}}>
      {children}
    </ButtonStyled>
  );
};

export default Button;

const ButtonStyled = styled.button`
  border: none;
  border-radius: 20px;
  padding: 10px;
  font-size: 24px;
  background-color: #4bb9a8;
  color: white;

`;
