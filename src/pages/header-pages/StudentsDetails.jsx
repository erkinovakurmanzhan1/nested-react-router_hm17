import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const StudentsDetails = ({ studentsInfo }) => {
  const { id } = useParams();

  const currentStudent = studentsInfo.find((el) => el.id.toString() === id);
  return (
    <>
      <Box>
        <Title>Material Details Pages</Title>
        <Title>{currentStudent.name}</Title>
      </Box>
    </>
  );
};

export default StudentsDetails;

const Box = styled.div`
  margin: 5rem 0 0 26rem;
  padding: 2rem 0 0 2rem;
  width: 600px;
  height: 150px;
  background-color: #fff;
  box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.5);
`;

const Title = styled.h2`
  color: #0e0ea9;
  padding: 0.6rem 0 0 2rem;
`;
