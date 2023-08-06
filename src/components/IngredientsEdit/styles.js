import styled from "styled-components";

export const Container = styled.div`
    display: inline-flex;
    align-items: center;
    
    padding-right: .4rem;
    
    border-radius: .8rem;
    margin-bottom: .8rem;

    background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.ORANGE};

    border:  ${({ theme, isNew }) => isNew ? `.1rem dashed ${ theme.COLORS.ORANGE}` : "none"};

    input, button {
        border: none;
        background: none;
    };

    input {
        width: 100%;
        height: 3.4rem;
        max-width: 14rem;

        padding: 1.2rem;
 
        color: ${({ theme, isNew }) => isNew ? theme.COLORS.BLUE_800 : theme.COLORS.OFF_WHITE};
    };

    .button-add {
        color: ${({ theme }) => theme.COLORS.GREEN};
    };

    .button-delete {
        color: ${({ theme }) => theme.COLORS.RED};
    };
`;

