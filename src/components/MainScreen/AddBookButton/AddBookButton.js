import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { toggleModal } from '../../../store/actions/tableActions';

export const AddBookButton = () => {

    const dispatch = useDispatch();

    return (
        <Button 
            variant="primary"
            onClick={() => dispatch(toggleModal())}
        >
            Добавить новую книгу
        </Button>
    )
}
