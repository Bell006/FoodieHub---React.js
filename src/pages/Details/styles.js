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

    text-align: center;

    padding-top: 2rem;

    margin: 0 2rem;

    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        
        gap: 2rem;
        > h1 {
            color: ${({ theme }) => theme.COLORS.BLUE_900};
        }
    }
`;

export const MealImg = styled.img`
    height: 25rem;
    width: 25rem;
`;

export const Tags = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: center;

    flex-wrap: wrap;
`;

export const Order = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    gap: 2rem;

    width: 90%;

    margin-top: 2rem;
`;