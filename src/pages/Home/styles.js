import styled from "styled-components";

export const Container = styled.div`
    height: 100%;

    display: grid;
    grid-template-rows: 11rem auto 7.5rem;
    grid-template-areas: "header" "content" "footer";

    overflow: hidden;  
`;

export const Content = styled.div`
    grid-area: content;

    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;

    margin: 0 auto;

    padding-top: 2rem;



    @media (min-width: 650px) {
         padding-top: 9rem;
    }  
`;

export const Outdoor = styled.div`

    width: clamp(29rem, 80vw, 60rem);
    height: 7.5rem;
    grid-area: content;
    display: grid;
    grid-template-columns: 50% auto;
    grid-template-rows: 1fr;
    grid-template-areas: "macarons text";
    position: relative;
    margin: 3rem 0;
    background: linear-gradient(180deg, #2F2E4C 0%, #161633 100%);
    border-radius: .5rem;

    #img {
        grid-area: macarons;

        position: relative;
        top: -3.5rem;

        > img {
            width: 14rem;
            height: 11rem;
        }
    }

    > aside {
        grid-area: text;
        position: relative;
        top: 1.5rem;
        color: ${({ theme }) => theme.COLORS.OFF_WHITE};

        margin: 0 .5rem;
    }

    h1 {
        font-size: clamp(1.2rem, 3vw, 1.6rem);
    

        margin-bottom: .1rem;
        font-weight: 500;
    }

    p {
        font-size: clamp(.8rem, 2vw, 1rem);
       
        line-height: 140%;
    }

    @media (min-width: 525px) {
        height: 10rem;

        grid-template-columns: 50% auto;

        #img {
            top: -3rem;
            right: 2rem;

            >img {
                width: 18rem;
                height: 13rem;
            }
        }

        > aside {
            top: 2.5rem;
        }

        h1 {
            font-size: 2rem;
            width: 26rem;
        }
    
        p {
            font-size: .9rem;
            width: 23rem;
            line-height: 1.2rem;
        }
    }



    @media (min-width: 650px) {
        width: clamp(60rem, 20vw, 70rem);
        height: 16rem;
        
        grid-template-columns: 55% auto;

        #img {
            top: -9.4rem;
            right: 3.5rem;

            >img {
                width: 39.5rem;
                height: 25.375rem;
            }
        }
    
        aside {
            top: 6rem;
        }
    
        h1 {
            font-size: 2.5rem;
            width: 26rem;
        }
    
        p {
            font-size: .9rem;
            width: 28rem;
            line-height: 2.5rem;
        }
    }
    
`; 
