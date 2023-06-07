import styled from "styled-components";

export const Container = styled.header`
    grid-area: header;
    
    width: 100%;
    height: 11rem;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;

    background-color: ${({ theme }) => theme.COLORS.OFF_WHITE};
    
    display: flex;
    align-items: center;
    justify-content: space-around;
    
    color: ${({ theme }) => theme.COLORS.BLUE_800};

    filter: drop-shadow(0px 8px 10px rgba(0, 0, 0, 0.09));
    button {
        border: none;
        background: none;

        width: clamp(2rem, 5vw, 4rem);
        height: clamp(2rem, 5vw, 4rem);
    }

    button svg {
        width: 100%;
        height: 100%;
    }

    img {
        width: clamp(12rem, 40vw, 30rem);
    }

`;

