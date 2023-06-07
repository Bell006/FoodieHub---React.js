import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    html {
        font-size: 62.5%;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
        ::-webkit-scrollbar-track
            {
                border: 4px solid ${({ theme }) => theme.COLORS.OFF_WHITE};
                background-color: ${({ theme }) => theme.OFFWHITE};
            }

            ::-webkit-scrollbar
            {
                width: 5px;
                background-color: ${({ theme }) => theme.OFF_WHITE};
            }

            ::-webkit-scrollbar-thumb
            {
                background-color: ${({ theme }) => theme.COLORS.BLUE_900};
                border-radius: 6px;
            }
    }

    body {
        background-color: ${({ theme }) => theme.COLORS.OFF_WHITE};
        color: ${({ theme }) => theme.COLORS.BLUE_900};

        -webkit-font-smothing: antialiased;
    }

    body, input, button, textarea {
        font-family: 'Roboto', sans-serif;
        font-size: 1.6rem;
        outline: none;
    }

    a {
        text-decoration: none;
        display: flex;
        gap: .5rem;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;

        font-weight: bold;
    } 

    button:hover, a:hover {
        filter: brightness(0.98);
    } 
`;