import React from 'react';
import { createGlobalStyle } from "styled-components";
import { AppTable } from './components/MainScreen/AppTable/AppTable';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { store } from './store/index';

const GlobalStyles = createGlobalStyle`
    body {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        color: #000;
    }
`;

function App() {
    return (
        <Provider store={store}>
            <AppTable />
            <GlobalStyles />
        </Provider>
    );
}

export default App;