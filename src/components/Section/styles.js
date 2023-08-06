import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    > header {
        color: ${({ theme }) => theme.COLORS.BLUE_800};
    
        display: flex;
        align-items: center;
        gap: 1rem;

        margin-left: 1rem;

        h2 {
            white-space: nowrap;
            font-size: clamp(1.8rem, 5vw, 2.8rem);
        };

        #line {
            width: 100%;
            height: .2rem;
            box-shadow: inset 5px -6px 13px rgba(0, 0, 0, 0.18);
            background-color: ${({ theme }) => theme.COLORS.OFF_WHITE};
        };
    };
    
`;

