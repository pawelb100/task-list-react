import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    html {
        box-sizing: border-box;
    }

    *, ::before, ::after {
        box-sizing: inherit;
    }

    body {
        background-color: ${({ theme }) => theme.color.blackHaze};;
        margin: 0 auto;
        max-width: 1000px;
        font-family: "Lato", sans-serif;
        overflow-wrap: anywhere;
    }

    @media (max-width: 1000px) {
        body {
            margin: 0 15px;
        }
    }
`;