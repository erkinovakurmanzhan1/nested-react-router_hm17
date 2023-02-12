import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <NavList>
        <ul>
          <li>
            <NavLinkStyle to="materials">Materials</NavLinkStyle>
          </li>
          <li>
            <NavLinkStyle to="students">Students</NavLinkStyle>
          </li>
          <li>
            <NavLinkStyle to='ratings'>Ratings</NavLinkStyle>
          </li>
        </ul>
      </NavList>
    </Container>
  );
};

export default Header;

const NavList = styled.nav`
  width: 100%;
  height: 100px;
  background-color: #4c4ce4;

  ul {
    display: flex;
    justify-content: center;
    gap: 5rem;
    padding-top: 2rem;
    font-size: 26px;
    list-style: none;
  }
`;
const Container = styled.header`
  width: 100%;
  height: 60px;
`;
const NavLinkStyle = styled(NavLink)`
  text-decoration: none;
  color: white;
  &.active {
    color: #000000;
  }
`;
