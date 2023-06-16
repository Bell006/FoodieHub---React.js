import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    height: 4.8rem;

    display: flex;
    align-items: center;
    gap: .8rem;

    background: none;
    color: ${({ theme }) => theme.COLORS.BLUE_800};

    border: none;
`;

