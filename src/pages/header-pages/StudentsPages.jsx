import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/Button";

const StudentsPages = ({ studentsInfo }) => {
  return (
    <div>
      <ul>
        <li>
          {studentsInfo.map((info) => {
            return (
              <LinkStyle to={`${info.id}/details`}>
                <Box>
                  <Title key={info.id}>{info.name}</Title>
                  <ButtonContainer>
                    <Button>details</Button>
                  </ButtonContainer>
                </Box>
              </LinkStyle>
            );
          })}
        </li>
      </ul>
    </div>
  );
};

export default StudentsPages;

const Box = styled.div`
  width: 600px;
  height: 100px;
  background-color: white;
  box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.5);
  margin: 4rem 0 2rem 26rem;
  display: flex;
  justify-content: space-between;
`;
const ButtonContainer = styled.div`
  margin: 1.5rem 1rem 0 0;
`;
const Title = styled.h2`
  color: #0e0ea9;
  padding: 2rem 0 0 2rem;
`;

const LinkStyle=styled(Link)`
  text-decoration: none;
`
