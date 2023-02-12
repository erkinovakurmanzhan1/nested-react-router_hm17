import React from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import styled from "styled-components";

const Details = ({ materials }) => {
  const { id } = useParams();

  const currentMaterials = materials.find((el) => el.id.toString() === id);
  return (
    <>
      <Box>
        <Title>Material Details Pages</Title>
        <Title>{currentMaterials.title}</Title>
      </Box>
      <Container>
        <SecondHeaderStyle>
          <ul>
            <li>
              <NavLinkStyle to="submitted">Submited</NavLinkStyle>
            </li>
            <li>
              <NavLinkStyle to="waiting">Waiting</NavLinkStyle>
            </li>
            <li>
              <NavLinkStyle to="late">Late</NavLinkStyle>
            </li>
          </ul>
        </SecondHeaderStyle>
        <Outlet />
      </Container>
    </>
  );
};

export default Details;

const Container = styled.div`
  width: 100%;
  height: 358px;
  background-color: #b6e2e5;
`;
const Title=styled.p`
font-size: 24px;
`

const Box = styled.div`
  margin: 5rem 0 0 26rem;
  padding: 2rem 0 0 2rem;
  width: 600px;
  height: 150px;
  background-color: #fff;
  box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.5);
`;
const SecondHeaderStyle = styled.div`
  width: 100%;
  height: 100px;
  background-color: #4ce4ac;

  ul {
    display: flex;
    justify-content: center;
    gap: 5rem;
    padding-top: 2rem;
    font-size: 26px;
    list-style: none;
  }
`;
const NavLinkStyle = styled(NavLink)`
  text-decoration: none;
  color: white;
  &.active {
    color: #000000;
  }
`;
