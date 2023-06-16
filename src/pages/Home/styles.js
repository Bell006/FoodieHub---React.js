import styled from "styled-components";

export const Container = styled.div`
    height: 100%;

    display: grid;
    grid-template-rows: 11rem auto 7.5rem;
    grid-template-areas: "header" "content" "footer";
`;

export const Content = styled.div`
    grid-area: content;

    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;

    margin: 0 auto;

    padding-top: 2rem;
`;

export const Outdoor = styled.div`

    width: clamp(30rem, 20vw, 40rem);
    height: 12rem;
    grid-area: content;
    display: grid;
    grid-template-columns: 40% auto;
    grid-template-rows: 1fr;
    grid-template-areas: "macarons text";
    position: relative;
    margin: 3rem 0;
    background: linear-gradient(180deg, #2F2E4C 0%, #161633 100%);
    border-radius: .5rem;

    #img {
        grid-area: macarons;

        position: relative;
        top: -2.9rem;
    }

    > aside {
        grid-area: text;
        position: relative;
        top: 3.5rem;
        color: ${({ theme }) => theme.COLORS.OFF_WHITE};

        margin: 0 .5rem;
    }

    h1 {
        font-size: clamp(1.6rem, 3vw, 1.8rem);
        width: 21rem;

        margin-bottom: .5rem;
    }

    p {
        font-size: clamp(1rem, 2vw, 1.2rem);
        width: 18rem;
    }
`; 
