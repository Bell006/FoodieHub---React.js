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
    margin-bottom: 4rem;

    @media (min-width: 650px) {
        width: clamp(70rem, 100vw, 80rem);
    
    }
`;

export const CustomSwiperSlide = styled(SwiperSlide)`

    background-color: ${({ theme }) => theme.COLORS.OFF_WHITE};
    box-shadow: 5px 4px 9px 2px rgba(0, 0, 0, 0.25);
    border-radius: 1rem;
    
    height: 28rem;
    width: clamp(14rem, 80vw, 18rem);   
    padding: 1rem;
    margin: 2rem 1.2rem;

    .admin, .customer, .itemButton, .item, section {
        display: flex;
        align-items: center;
    }
    
    .admin, .customer, .itemButton {
        width: 100%;
        height: 100%;

        flex-direction: column;
        justify-content: center;
    }

    .favButton, .itemButton, p {
        border: none;
        background: none;
    }

    .customer {
        position: relative;
    }

    .item {
        height: 70%;
        flex-direction: column;
        justify-content: center;

    }

    .itemButton {
        gap: 1rem;
        margin-bottom: .5rem;

        svg {
            margin-left: .5rem;
        }

        .title {
            font-size: 1.4rem;
        }
    }

    .image-wrapper {
        border-radius: 50%;
        overflow: hidden;
        width: clamp(10rem, 15vw, 11rem);
        height: clamp(10rem, 15vw, 11rem);
        position: relative; 

        img {
            width: 100%; 
            height: 100%; 
            object-fit: cover;
            position: absolute; 
            top: 0;
            left: 0;
        }
    }
  

    .favButton {
        position: relative;

        top: 1rem;
        left: 5rem;

        > svg {
            width: 1.5rem;
            height: 1.5rem;

            color: ${({ theme }) => theme.COLORS.RED};
        }
    }
    

    h2 {
        font-size: 1.5rem;
        margin-bottom: 1rem;

        color: ${({ theme }) => theme.COLORS.LIGHT_BLUE};
    }

    section {
        width: 100%;
        height: 23%;
        
        gap: .5rem;

        flex-direction: column;
    }



    @media (min-width: 600px) {
        height: 32rem;
        width: clamp(21rem, 80vw, 24rem);

        padding: 2.4rem;

        > #itemButton {
            margin: 1rem 0;
            gap: 1rem;
        }

        h2 {
            font-size: 2rem;
            margin-bottom: 1rem;
        }

        .favButton {
            top: .5rem;
            left: 7rem;

            > svg {
                width: 2rem;
                height: 2rem;
            }
        }
    }
`;
