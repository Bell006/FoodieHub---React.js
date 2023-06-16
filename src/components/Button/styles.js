import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    height: 4.8rem;

    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    color: ${({ theme }) => theme.COLORS.OFF_WHITE};

    border: none;
    border-radius: .5rem;
    font-size: clamp(1.2rem, 3vw, 1.8rem);

    .icon-container {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: .5rem;
    } 

    ${props => props.Icon} {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${({ theme }) => theme.COLORS.RED};

        padding: 0 .5rem;
    } 
`;

