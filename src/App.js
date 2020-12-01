import React from 'react';
import { createGlobalStyle } from "styled-components";
import { AppTable } from './components/MainScreen/AppTable/AppTable';
import 'bootstrap/dist/css/bootstrap.min.css';

const GlobalStyles = createGlobalStyle`
    body {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        color: #000;
    }
`;

const mockBookData = [
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
];

function App() {
    return (
        <>
            <AppTable data={mockBookData} />
            <GlobalStyles />
        </>
    );
}

export default App;