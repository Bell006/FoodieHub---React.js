import styled from "styled-components";

export const Container = styled.div`
    button {
        border: none;
        background: none;

        width: clamp(2rem, 5vw, 4rem);


    }

`;

export const MenuBar = styled.div`
    position: fixed;
    top: 10.5rem;
    left: 0;
    width:85%;
    height: 100vh;

    z-index: 150;

    background-color: ${({ theme }) => theme.COLORS.OFF_WHITE};
    box-shadow: 5px 3px 9px -5px rgba(0, 0, 0, 0.25);

    padding-top: 1.5rem;


    main, header {
        margin: 1.5rem;
    }

    p {
        font-size: clamp(1rem, 5vw, 1.8rem);
    }

    p:nth-child(2) {
        color: ${({ theme }) => theme.COLORS.GREY};
    }



    ul {
        margin-top: 2rem;

        li:last-child {
            color: ${({ theme }) => theme.COLORS.RED}; 
        }
    }

    li {
        font-size: clamp(2rem, 5vw, 3rem);
        margin: 3rem 0;

        display: flex;
        align-items: center;

        svg {
            margin-right: 1rem;
        }
    }
`;

