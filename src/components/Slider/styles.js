import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

export const Container = styled.div`
    width: 100%;
`;

export const CustomSwiper = styled(Swiper)`
    width: clamp(32rem, 100vw, 60rem);
    height:  36rem;
    
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
`;

export const CustomSwiperSlide = styled(SwiperSlide)`

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2.4rem;
    margin: 2.5rem 1rem;

    position: relative;

    background-color: ${({ theme }) => theme.COLORS.OFF_WHITE};
    box-shadow: 5px 4px 9px 2px rgba(0, 0, 0, 0.25);
    border-radius: 1rem;
     
    height: 30rem;
    width: clamp(21rem, 80vw, 24rem);

    h1, section {
        display: flex;
        align-items: center;
    }

    h1, p {
        font-size: 1.6rem;
    }
    
    .slideButton {
        border: none;
        background: none;
    }
    

    > h1 {
        margin: 1rem 0;
        gap: 1rem;
    }


    > h2 {
        font-size: 1.8rem;
        margin-bottom: 1rem;

        color: ${({ theme }) => theme.COLORS.LIGHT_BLUE};
    }

    section {
        width: 100%;
        flex-direction: column;
    }


    .slideButton {
        position: relative;

        bottom: .4rem;
        left: 7.5rem;

        > svg {
            width: 2rem;
            height: 2rem;

            color: ${({ theme }) => theme.COLORS.RED};
        }
    }
    

`;
