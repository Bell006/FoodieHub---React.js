import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding-left: 1rem;

    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.BLUE_900};
    color: ${({ theme }) => theme.COLORS.OFF_WHITE};

    border-radius: 1.5rem;

    > input {
        height: 4.8rem;
        width: 100%;

        background-color: ${({ theme }) => theme.COLORS.BLUE_900};
        color: ${({ theme }) => theme.COLORS.OFF_WHITE};

        display: flex;
        align-items: center;

        border: none;
        border-radius: 1.5rem;
        padding-left: 1rem;

        &:placeholder {
            color: ${({ theme }) => theme.COLORS.GREY};
        };
    };


`;


