import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    height: 4.8rem;

    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    color: ${({ theme }) => theme.COLORS.OFF_WHITE};

    border: none;
    border-radius: .5rem;
`;

