import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

export const Container = styled.div`
    width: 100%;
`;

export const CustomSwiper = styled(Swiper)`
    width: clamp(33rem, 90vw, 60rem);
    height:  36rem;
    
    display: flex;
    align-items: center;
`;

export const CustomSwiperSlide = styled(SwiperSlide)`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2.4rem;
    margin: 2.5rem 1rem;

    position: relative;

    background-color: ${({ theme }) => theme.COLORS.OFF_WHITE};
    filter: drop-shadow(11px 7px 19px rgba(0, 0, 0, 0.18));
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
    
    #favorite, section button {
        border: none;
        background: none;
    }
    
    section {

        gap: 2rem;
        font-weight: bold;

        margin-bottom: 1rem;

        > button {
            font-size: 2rem;
            color: ${({ theme }) => theme.COLORS.BLUE_800};
        }
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


    #favorite {
        position: relative;

        bottom: .4rem;
        left: 7.5rem;

        > svg {
            width: 2.5rem;
            height: 2.5rem;

            color: ${({ theme }) => theme.COLORS.RED};
        }
    }
    

`;
