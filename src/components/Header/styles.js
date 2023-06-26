import styled from "styled-components";

export const Container = styled.header`
    grid-area: header;
    
    width: 100%;
    height: 11rem;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 200;

    background-color: ${({ theme }) => theme.COLORS.OFF_WHITE};
    
    display: flex;
    align-items: center;
    justify-content: space-around;
    
    color: ${({ theme }) => theme.COLORS.BLUE_800};

    filter: drop-shadow(0px 8px 10px rgba(0, 0, 0, 0.09));

    > button {
        border: none;
        background: none;

        width: clamp(2rem, 5vw, 4rem);
        height: clamp(2rem, 5vw, 4rem);
    }

    button svg {
        width: 100%;
        height: 100%;
    }

    > img {
        width: clamp(12rem, 40vw, 30rem);
    }
`;

export const DesktopHeader = styled.div`
    display: grid;
    grid-template-columns: 18% 52% 16% auto;
    grid-template-areas: "brand search button sideButtons";

    align-items: center;
    gap: 1rem;

    width: clamp(60rem, 90vw, 110rem);

    margin: 0 4rem;

    > img {
        grid-area: brand;
        width: clamp(7rem, 16vw, 18rem);
    }

    > Input {
        grid-area: search;
    }

    > Button {
        grid-area: button;
    }

    .sideButtons {
        grid-area: sideButtons;
        display: flex;
        gap: 1.5rem;

        margin-left: 1.5rem;

        #exit, #configs {
            border: none;
            background: none;
            width: clamp(.3rem, 40vw, 3rem);
    
            > svg {
                width: clamp(.3rem, 40vw, 3rem);
            }
        }
    }

`;

