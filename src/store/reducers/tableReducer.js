import { ADD_NEW_BOOK, TOGGLE_MODAL } from '../types';

const initialState = {
    table: [
        {
            id: new Date(),
            name: 'First book',
            author: 'First author',
            pageNumbers: '100',
            year: '2020'
        },
        {
            id: new Date(),
            name: 'Second book',
            author: 'Second author',
            pageNumbers: '200',
            year: '2010'
        },
        {
            id: new Date(),
            name: 'Second book',
            author: 'Second author',
            pageNumbers: '250',
            year: '2015'
        }
    ],
    isModalOpen: false
};

const handlers = {
    [TOGGLE_MODAL]: (state) => ({...state, isModalOpen: !state.isModalOpen}),
    [ADD_NEW_BOOK]: (state, {payload}) => ({...state, table: [...state.table, {
        ...payload,
        id: `${new Date()}_${payload.bookName}`
    }]}),
    DEFAULT: (state) => state,
};

export const tableReducer = (state = initialState, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT;
    return handler(state, action)
}