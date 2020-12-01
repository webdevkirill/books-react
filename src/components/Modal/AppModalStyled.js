import styled from 'styled-components';

export const Overlay = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.25);
`;

export const ModalStyled = styled.div`
    width: 600px;
    height: 600px;
    background-color: #fff;
`;