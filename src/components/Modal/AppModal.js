import React from 'react';
import { ModalStyled, Overlay, ModalCloseButton } from './AppModalStyled';
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
                >
                </ModalCloseButton>
            </ModalStyled>
        </Overlay>
    )
}