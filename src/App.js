import React from 'react';
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        color: #000;
    }
`;

function App() {
    return (
        <GlobalStyles>
            
        </GlobalStyles>
    );
}

export default App;