import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }
    body{
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
    }
    #root{
        width: 360px;
        height: 640px;
        border: 1px solid black;
    }
`;

export default GlobalStyles;
