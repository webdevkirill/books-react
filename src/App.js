import React from 'react';
import { createGlobalStyle } from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { store } from './store/index';
import { MainScreen } from './components/MainScreen/index';

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
            <MainScreen />
            <GlobalStyles />
        </Provider>
    );
}

export default App;