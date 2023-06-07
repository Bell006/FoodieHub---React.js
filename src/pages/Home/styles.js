import styled from "styled-components";

export const Container = styled.div`
    height: 100%;

    display: grid;
    justify-items: center;
    grid-template-rows: 11rem auto 7.5rem;
    grid-template-areas: "header" "content" "footer";
`;

export const Content = styled.div`
    grid-area: content;
    height:  100%;
    width: 37rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;

    margin: 1rem;
`;

export const Outdoor = styled.div`

    width: clamp(37rem, 20vw, 90rem);

    display: grid;
    grid-template-columns: 25% auto;
    grid-template-areas: "macarons" "text";

    position: relative;

    display: flex;
    align-items: center;
    
    margin: 3rem 0;

    width: clamp(37rem, 10vw, 90rem);
    height: clamp(12rem, 10vw, 60rem);
    background: linear-gradient(180deg, #2F2E4C 0%, #161633 100%);
    border-radius: .5rem;

    #img {
        grid-area: macarons;

        position: relative;
        top: -1.3rem;
    }

    > aside {
        position: relative;
        color: ${({ theme }) => theme.COLORS.OFF_WHITE};
        grid-area: text;

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
