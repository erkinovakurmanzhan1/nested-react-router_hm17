import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/Button";

const Schedule = () => {
  const navigate = useNavigate();

  const navigateHandler=()=>{
    navigate('/notifications')
  }
  return (
    <Box>
      <Title> Schedule page</Title>
      <Button onClick={navigateHandler}>Go to notifications page</Button>
    </Box>
  );
};

export default Schedule;

const Box = styled.div`
  margin: 4rem 0 0 26rem;
`;
const Title=styled.h1`
  margin-bottom: 2rem;
`