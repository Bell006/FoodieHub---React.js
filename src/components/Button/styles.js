import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    height: 100%;
    min-height: 2.5rem;
    max-height: 4.5rem;

    color: ${({ theme }) => theme.COLORS.OFF_WHITE};

    border: none;
    border-radius: .5rem;
    font-size: clamp(1.1rem, 2vw, 1.4rem);

    .icon-container {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: .5rem;
    } 

    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme, RedIconButton }) => RedIconButton ?  theme.COLORS.RED : theme.COLORS.ORANGE};

    padding: 0 .5rem;
`;

