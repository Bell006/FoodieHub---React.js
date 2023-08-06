import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100%;

    display: grid;
    grid-template-rows: 11rem auto 7.5rem;
    grid-template-areas: "header" "content" "footer";
    position: relative;

    .logo {
        width: 17rem;
    };


    @media(min-width: 650px) {
        justify-items: center;

        .logo {
            display: none;
        };
    };
`;

export const Content = styled.div`
    grid-area: content;

    max-width: 74rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;

    text-align: center;

    padding-top: 2rem;

    margin: 0 2rem;

    .image-wrapper, section {
        display: flex;
    };

    .image-wrapper {
        border-radius: 50%;
        overflow: hidden;
        width: clamp(18rem, 40vw, 33rem);
        height: clamp(18rem, 40vw, 33rem);
        position: relative; /* Adiciona position: relative para permitir o posicionamento absoluto da imagem */

                
        img {
            width: 100%; 
            height: 100%; 
            object-fit: cover;
            position: absolute; 
            top: 0;
            left: 0;
        };
    };

    section {
        display: flex;
        flex-direction: column;
        align-items: center;

        margin-top: 1.5rem;
        
        gap: 2rem;

        > h1 {
            color: ${({ theme }) => theme.COLORS.BLUE_900};
        };
    };

    

    @media(min-width: 650px) {
        display: grid;
        gap: 2rem;

        max-width: 80rem;

        grid-template-columns: 45% auto;
        grid-template-rows: auto 80%;
        grid-template-areas: 
            "backButton ." 
            "img description";
        
        text-align: left;
            
        >TextButton {
            grid-area: backButton;
        };
        
        >.image-wrapper {
            grid-area: img;

            margin-right: 2rem;
        };
        
        > section {
            grid-area: description;
            
            align-items: flex-start;

            
            h1 {
                font-size: 2.5rem;
            };
        };
    };
`;

export const MealImg = styled.img`
    width: clamp(22rem, 40vw, 33rem);
`;

export const Tags = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: center;

    flex-wrap: wrap;

    @media(min-width: 650px) {
        justify-content: left;

    };
`;

export const Order = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;

    width: 90%;
    height: 4rem;

    margin-top: 2rem;



    
    @media(min-width: 650px) {
        gap: 3rem;
        padding-right: 3rem;
    };
`;