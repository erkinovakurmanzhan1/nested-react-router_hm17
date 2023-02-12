import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../components/Button';

const Notifications = () => {
    const navigate=useNavigate()
    const navigateHandler=()=>{
        navigate('/courses/materials')
    }
    return (
        <Box>
            <Title>Notifications</Title>
            <Button onClick={navigateHandler}>Go to materials page</Button>
        </Box>
    );
};

export default Notifications;


const Box = styled.div`
  margin: 4rem 0 0 26rem;
`;
const Title=styled.h1`
  margin-bottom: 2rem;
`