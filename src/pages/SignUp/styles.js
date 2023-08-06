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
    };

    > main {
        gap: .8rem;
    };

    section {
        gap: 1.5rem;
        height: 33rem;
    };

    aside {
        gap: .5rem;
    };


    a {
        color: ${({ theme }) => theme.COLORS.LIGHT_BLUE};
    };

    background: url(${logoIcon}) no-repeat 12rem 37rem;



    @media (min-width: 650px) {
        
        > main, section, aside {
            width: 40rem;
        };
    };  
`;

export const Logo = styled.div`
    
`;

export const Admin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;

    margin-top: 1rem;
    
    .form-control {
        display: grid;
        grid-template-columns: 1em auto;
        gap: .8em;
        align-items: center;
    };

    .form-control + .form-control {
        margin-top: 1em;
    };

    .form-control--disabled {
        color: var(--form-control-disabled);
        cursor: not-allowed;
    };

    input[type="checkbox"] {
        -webkit-appearance: none;
        appearance: none;
        background-color: ${({ theme }) => theme.COLORS.ORANGE};
        margin: 0;

        width: 1em;
        height: 1em;
        border: 0.15em solid;
        border-radius: 0.15em;
        transform: translateY(-0.075em);

        display: grid;
        place-content: center;
    };

    input[type="checkbox"]::before {
    content: "";
        width: 0.5em;
        height: 0.5em;
        clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
        transform: scale(0);
        transform-origin: bottom left;
        transition: 120ms transform ease-in-out;
        background-color: CanvasText;
    };

    input[type="checkbox"]:checked::before {
        transform: scale(1);
    };

    input[type="checkbox"]:focus {
        outline: max(2px, 0.15em) solid;
        outline-offset: max(2px, 0.15em);
    };

    input[type="checkbox"]:disabled {
        color: ${({ theme }) => theme.COLORS.BLUE_900};
        cursor: not-allowed;
    };

`;