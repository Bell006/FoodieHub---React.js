import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

export const Container = styled.div`
    width: 100%;
`;

export const DesktopGradientRight = styled.div`
    position: absolute;
    z-index: 2;

    right: 0;
    

    width: 3.5rem;
    height: 35rem;
    background-image: linear-gradient(to right, transparent, ${({ theme }) => theme.COLORS.OFF_WHITE});

`;

export const DesktopGradientLeft = styled.div`
    position: absolute;
    z-index: 2;

    width: 3.5rem;
    height: 35rem;
    background-image: linear-gradient(to left, transparent, ${({ theme }) => theme.COLORS.OFF_WHITE}); /* Gradiente linear */
`;

export const CustomSwiper = styled(Swiper)`
    width: clamp(32rem, 100vw, 60rem);
    
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;

    @media (min-width: 650px) {
        width: clamp(70rem, 100vw, 80rem);
    
    }
`;

export const CustomSwiperSlide = styled(SwiperSlide)`

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    margin: 2.5rem 1rem;

    position: relative;

    background-color: ${({ theme }) => theme.COLORS.OFF_WHITE};
    box-shadow: 5px 4px 9px 2px rgba(0, 0, 0, 0.25);
    border-radius: 1rem;
     
    height: 20rem;
    width: clamp(13rem, 80vw, 18rem);

    .slideButton {
        position: relative;

        bottom: -.5rem;
        left: 6rem;

        border: none;
        background: none;

        > svg {
            width: 1.5rem;
            height: 1.5rem;

            color: ${({ theme }) => theme.COLORS.RED};
        }
    }
    
    h1, section {
        display: flex;
        align-items: center;
    }

    h1, p {
        font-size: .9rem;
    }
    
    > h1 {
        margin: .1rem 0;
        gap: .5rem;
    }

    > h2 {
        font-size: 1rem;
        margin-bottom: .5rem;

        color: ${({ theme }) => theme.COLORS.LIGHT_BLUE};
    }

    section {
        width: 100%;
        height: 100%;
        flex-direction: column;
    }

    img {
        width: 5.5rem;
        height: 5.5rem;
    }

    button:nth-child(2) {
        margin-top: .5rem;
    }


    @media (min-width: 600px) {
        height: 32rem;
        width: clamp(21rem, 80vw, 24rem);

        padding: 2.4rem;

        h1, p {
            font-size: 1.6rem;
        }
        

        > h1 {
            margin: 1rem 0;
            gap: 1rem;
        }

        > img {
            width: 11rem;
            height: 11rem;
        }


        > h2 {
            font-size: 1.8rem;
            margin-bottom: 1rem;
        }

        .slideButton {
            position: relative;

            bottom: .4rem;
            left: 7.5rem;

            > svg {
                width: 2rem;
                height: 2rem;
            }
        }
    }
`;
