import styled from "styled-components";

export const Container = styled.button`
    position: relative;

    top: 1rem;
    left: 5rem;

    > svg {
        width: 1.5rem;
        height: 1.5rem;

        color: ${({ theme }) => theme.COLORS.RED};
    };

    border: none;
    background: none;

    > svg {
        width: 2rem;
        height: 2rem;

        color: ${({ theme }) => theme.COLORS.RED};
    };

    @media (min-width: 600px) {
        top: .5rem;
            left: 7rem;

        > svg {
            width: 2rem;
            height: 2rem;
        };
    };
`;

