import { ADD_NEW_BOOK, TOGGLE_MODAL } from '../types';

export const toggleModal = () => ({
    type: TOGGLE_MODAL
});

export const addNewBook = (book) => ({
    type: ADD_NEW_BOOK,
    payload: book
});