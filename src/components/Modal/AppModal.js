import React from 'react';
import { ModalStyled, Overlay, ModalCloseButton, ModalTitle } from './AppModalStyled';
import closeIcon from '../../close.svg';
import { useDispatch } from 'react-redux';
import { toggleModal } from '../../store/actions/tableActions';

export const AppModal = () => {

    const dispatch = useDispatch();

    return (
        <Overlay>
            <ModalStyled>
                <ModalCloseButton 
                    img={closeIcon}
                    onClick={() => dispatch(toggleModal())}
                />
                <ModalTitle>Добавить новую книгу</ModalTitle>
            </ModalStyled>
        </Overlay>
    )
}