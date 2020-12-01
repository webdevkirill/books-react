import React from 'react';
import { AppTable } from './AppTable/AppTable';
import { Container } from './MainScreenStyled';
import { AddBookButton } from './AddBookButton/AddBookButton';

export const MainScreen =  () => {

    return (
        <Container>
            <AppTable />
            <AddBookButton />
        </Container>
    )
}