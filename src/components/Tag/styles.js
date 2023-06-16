import styled from "styled-components";

export const Container = styled.div`
    height: 3.3rem;

    padding: .4rem .8rem;
    display: inline-flex;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    color: ${({ theme }) => theme.COLORS.OFF_WHITE};
    border-radius: .8rem;
`;

