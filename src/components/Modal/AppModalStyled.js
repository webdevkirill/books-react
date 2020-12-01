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
    position: relative;
    padding: 20px;
`;

export const ModalCloseButton = styled.a`
    position: absolute;
    cursor: pointer;
    top: 20px;
    right: 20px;
    color: #000;
    width: 24px;
    height: 24px;
    padding: 0;
    background-image: url(${props => props.img});
`;

export const ModalTitle = styled.h3`
    font-size: 20px;
    line-height: 20px;
    margin-bottom: 50px;
`;