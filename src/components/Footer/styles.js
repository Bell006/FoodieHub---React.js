import styled from "styled-components";

export const Container = styled.footer`
    grid-area: footer;
    width: 100%;
    height: 7rem;
    margin-top: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: space-evenly;

    position: fixed;
    bottom: 0;

    img {
        width: 8rem;
    }

    p {
        font-size: 1.1rem;
    }
`;

