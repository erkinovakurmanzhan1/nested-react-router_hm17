import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/Button";

const Anouncements = () => {
  const navigate =useNavigate()

  const navigateHandler=()=>{
    navigate('/courses/students')
  }
  return (
    <Box>
      <Title> Anouncements page</Title>
      <Button onClick={navigateHandler}>Go to students page</Button>
    </Box>
  );
};

export default Anouncements;

const Box = styled.div`
  margin: 4rem 0 0 26rem;
`;
const Title=styled.h1`
  margin-bottom: 2rem;
`