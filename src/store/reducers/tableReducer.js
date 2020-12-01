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
    ]
};

const handlers = {
    DEFAULT: (state) => state,
};

export const tableReducer = (state = initialState, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT;
    return handler(state, action)
}