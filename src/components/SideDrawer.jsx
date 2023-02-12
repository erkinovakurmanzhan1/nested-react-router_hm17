import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const SideDrawer = () => {
  return (
    <SideDrawerNav>
      <SideBox>
        <Logo>LOGO</Logo>
        <ul>
          <li>
            <NavLinkStyle to="/courses/materials">Courses</NavLinkStyle>
          </li>
          <li>
            <NavLinkStyle to='/anouncements'>Anouncements</NavLinkStyle>
          </li>
          <li>
            <NavLinkStyle to='/notifications'>Notifications</NavLinkStyle>
          </li>
          <li>
            <NavLinkStyle to='/schedule'>Schedule</NavLinkStyle>
          </li>
        </ul>
      </SideBox>
    </SideDrawerNav>
  );
};

export default SideDrawer;

const SideDrawerNav = styled.nav`
  height: 100%;
  width: 300px;
  background-color: #e3d2d2;
  box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
`;

const SideBox = styled.div`
  margin-top: 4rem;

  ul {
    margin: 5rem 0 0 2rem;
    list-style: none;
  }

  li {
    margin-top: 2rem;
    font-size: 25px;
  }
`;
const Logo = styled.p`
  margin-left: 2rem;
  color: #a326a3;
  font-size: 30px;
  margin-top: 3rem;
`;
const NavLinkStyle = styled(NavLink)`
  text-decoration: none;
  color: #1e61be;
  &.active {
    color: #000000;
  }
`;
