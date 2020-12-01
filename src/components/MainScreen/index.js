import React from 'react';
import { AppTable } from './AppTable/AppTable';
import { Container } from './MainScreenStyled';
import { AddBookButton } from './AddBookButton/AddBookButton';
import { useSelector } from 'react-redux';
import { AppModal } from '../Modal/AppModal';

export const MainScreen =  () => {

    const isModalOpen = useSelector((state) => state.tableReducer.isModalOpen)

    return (
        <Container>
            {isModalOpen && <AppModal />}
            <AppTable />
            <AddBookButton />
        </Container>
    )
}