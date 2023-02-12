import React from 'react';
import styled from 'styled-components';

const Modal = ({children}) => {
    return (
        <ModalStyle>{children}</ModalStyle>
    );
};

export default Modal;

const ModalStyle=styled.div`
    width: 600px;
    height: 300px;
    position: fixed;
    right: 22rem;
    background-color: #f7d7ce;
`