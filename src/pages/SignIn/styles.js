import styled from "styled-components";
import logoIcon from "../../assets/LogoBackground.png";

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
        gap: 2rem;
    }

    section {
        gap: 1.5rem;
        height: 20rem;
    }

    aside {
        gap: .5rem;
    }


    a {
        color: ${({ theme }) => theme.COLORS.LIGHT_BLUE};
    }

    background: url(${logoIcon}) no-repeat 12rem 37rem;



    @media (min-width: 650px) {
        
        > main, section, aside {
            width: 40rem;
        }
    }   
`;

export const Logo = styled.div`
    
`;


