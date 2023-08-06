import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-rows: 11rem auto 7.5rem;
    grid-template-areas: "header" "content" "footer";
    position: relative;

    > main, form, .input-wrapper, .textArea-wrapper, .img-wrapper {
        display: flex;
        flex-direction: column;
    };

    > main {
        gap: 2rem;
        margin: 2.5rem 2rem 1rem;

        grid-area: content;


        @media(min-width: 650px) {
            max-width: 80rem;

    
        };
    };

    form {
        gap: 2rem;
        margin-top: 2rem;



        @media(min-width: 650px) {
            width: 80rem;
            min-height: 50rem;
            margin-top: 5rem;

            grid-gap: 1rem;
            grid-row-gap: 2rem;
            display: grid;
            grid-template-columns: .9fr .75fr;
            grid-template-rows: 8rem 8rem 15rem 12rem 5rem;
            grid-template-areas: 
                "name price"
                "category img"
                "description description"
                "ingredients ingredients"
                "button button"
            ;
        };
    };

    .img-wrapper {
        span {
            margin-bottom: .6rem;
        };
    };


    .input-name, .input-price {
        display: flex;
        flex-direction: column;
        gap: .8rem;
    };

    .textArea-wrapper {
        @media(min-width: 650px) {
            grid-area: description;
        };
    };

    .button-wrapper {
        grid-area: button;

        height: 4rem;
        display: flex;
        flex-direction: row;
        gap: 2rem;
    };



    @media(min-width: 650px) {

    justify-items: center;
    height: 100vh;


    .input-wrapper {
        flex-direction: row;
    };

    .input-name {
        grid-area: name;
        width: 100%;
    };

    .input-price {
        grid-area: price;
        width: 100%;
    };

}
`;

export const FoodImg = styled.div`

    height: 4.8rem;

    border-radius: 1.5rem;
    background-color: ${({ theme }) => theme.COLORS.BLUE_900};

    display: flex;

    position: relative;

    > label {
        height: 100%;
        width: 100%;
        padding-left: 3rem;

        display: flex;
        align-items: center;
        gap: 1rem;
        
        color: ${({ theme }) => theme.COLORS.OFF_WHITE};
    };

    input {
        display: none;
    };

    svg {
        width: 2.4rem;
        height: 2.4rem;
    };


    @media(min-width: 650px) {
        grid-area: img;
        margin-top: 0;
    };
`;

export const SelectWrapper = styled.div`

    select {
        width: 100%;
        height: 4.8rem;
        margin-top: .8rem;

        border-radius: 1.5rem;

        padding: 0 2rem;

        background-color: ${({ theme }) => theme.COLORS.BLUE_900};
        color: ${({ theme }) => theme.COLORS.OFF_WHITE};
    };


    @media(min-width: 650px) {
        grid-area: category;
        width: 100%;
    };
`;

export const IngredientsWrapper = styled.div`
    margin-top: .8rem;

    display: flex;
    justify-content: center;
    gap: .5rem;

    flex-wrap: wrap;


    @media(min-width: 650px) {
        justify-content: flex-start;
    };
`;

export const Ingredients = styled.div`

    @media(min-width: 650px) {
        grid-area: ingredients;    
    };

`;

export const TextArea = styled.textarea`
    height: 17rem;
    margin-top: .8rem;

    background-color: ${({ theme }) => theme.COLORS.BLUE_900};
    color: ${({ theme }) => theme.COLORS.OFF_WHITE};

    border: none;
    border-radius: 1.5rem;
    padding: 1.5rem;

    resize: none;

    &:placeholder {
        color: ${({ theme }) => theme.COLORS.GREY};
    };
`;

