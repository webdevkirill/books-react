import { ADD_NEW_BOOK, TOGGLE_MODAL } from '../types';

const initialState = {
    table: [],
    isModalOpen: false
};

const handlers = {
    [TOGGLE_MODAL]: (state) => ({...state, isModalOpen: !state.isModalOpen}),
    [ADD_NEW_BOOK]: (state, {payload}) => ({...state, table: [...state.table, {
        ...payload,
        id: `${new Date()}_${payload.name}`
    }]}),
    DEFAULT: (state) => state,
};

export const tableReducer = (state = initialState, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT;
    return handler(state, action)
}