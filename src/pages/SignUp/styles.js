import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > main, section, aside {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        max-width: 32rem;
    }

    > main {
        gap: 3.5rem;


    }

    section {
        gap: 1.5rem;
    }

    aside {
        gap: .5rem;
    }


    a {
        color: ${({ theme }) => theme.COLORS.LIGHT_BLUE};
    }
`;

export const Logo = styled.div`
    
`;