import styled, { keyframes } from "styled-components";
import logoIcon from "../../assets/Logo.png";

const slideFwdCenter = keyframes`
    0% {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }
    100% {
        -webkit-transform: translateZ(160px);
        transform: translateZ(160px);
    }
`;

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

    
    > img { 
        position: absolute;
        top: 60rem;
        left: 17rem;
        width: 35rem;
        animation: ${slideFwdCenter} 1s;
    }

    background: url(${logoIcon}) no-repeat 12rem 37rem;
    

`;

export const Logo = styled.div`
    
`;
