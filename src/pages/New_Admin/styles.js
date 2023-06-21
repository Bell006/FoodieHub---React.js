import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-rows: 11rem auto 7.5rem;
    grid-template-areas: "header" "content" "footer";

    > main, form, .input-wrapper, .textArea-wrapper {
        display: flex;
        flex-direction: column;
    }

    > main {
        gap: 2rem;
        margin: 2.5rem 2rem 1rem;

        grid-area: content;
    }

    form {
        gap: 2rem;
        margin-top: 2rem;
    }


    .input-wrapper label, .textArea-wrapper label {
        color: ${({ theme }) => theme.COLORS.BLUE_800};
        margin-bottom:.5rem;
    }

    .input-wrapper {
        label:nth-child(3)  {
            margin-top: 2rem;
        }
    }
`;

export const FoodImg = styled.div`

    height: 4.8rem;
    margin-top: 2.5rem;

    border-radius: 1.5rem;
    background-color: ${({ theme }) => theme.COLORS.BLUE_900};

    display: flex;

    > label {
        height: 100%;
        width: 100%;
        padding-left: 3rem;

        display: flex;
        align-items: center;
        gap: 1rem;
        
        color: ${({ theme }) => theme.COLORS.OFF_WHITE};
    }

    input {
        display: none;
    }

    svg {
        width: 2.4rem;
        height: 2.4rem;
    }
`;

export const SelectWrapper = styled.div`

    select {
        width: 100%;
        height: 4.8rem;
        margin-top: 1rem;

        border-radius: 1.5rem;

        padding: 0 2rem;

        background-color: ${({ theme }) => theme.COLORS.BLUE_900};
        color: ${({ theme }) => theme.COLORS.OFF_WHITE};

    }
`;

export const IngredientsWrapper = styled.div`
    margin-top: 1rem;

    display: flex;
    justify-content: center;
    gap: .5rem;

    flex-wrap: wrap;
`;

export const Ingredients = styled.div`

`;

export const TextArea = styled.textarea`
    height: 17rem;

    background-color: ${({ theme }) => theme.COLORS.BLUE_900};
    color: ${({ theme }) => theme.COLORS.OFF_WHITE};

    border: none;
    border-radius: 1.5rem;
    padding: 1.5rem;

    resize: none;

    &:placeholder {
        color: ${({ theme }) => theme.COLORS.GREY};
    }
`;

