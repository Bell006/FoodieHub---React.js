import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;

    font-weight: bold;

    margin-bottom: .5rem;

    > button {
        font-size: clamp(.2rem, 90vw, 1.5rem);
        color: ${({ theme }) => theme.COLORS.BLUE_800};

        padding: .2rem .3rem 0rem .3rem;
    }

    button {
        border: none;
        background: ${({ theme }) => theme.COLORS.OFF_WHITE};

        box-shadow: 0px 1px 9px rgba(0, 0, 0, 0.25);
        border-radius: 100%;
    }
`;