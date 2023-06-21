import { Container, CustomSwiper, CustomSwiperSlide } from "./styles";

import { AiOutlineHeart, AiFillHeart ,AiOutlineArrowRight } from "react-icons/ai";
import { GoPencil } from 'react-icons/go';

import { Button } from "../Button";
import { Amount } from "../Amount";

import SwiperCore, { Pagination, Navigation } from "swiper";
import "swiper/swiper.min.css";
import { useState } from "react";

SwiperCore.use([Pagination, Navigation]);

export function Slider({ items, Admin }) {

  const [favHeartOpen, setFavHeartOpen] = useState(false);

  function handleFavHeart() {
    setFavHeartOpen(!favHeartOpen)
  }

    return(
      <Container Admin={Admin}>
          <CustomSwiper
            spaceBetween={10}
            slidesPerView="auto"
            slidesPerGroup={2}
            breakpoints={{
              320: {
                slidesPerView: "auto",
                slidesPerGroup: 1,
              },
              375: {
                slidesPerView: "auto",
                slidesPerGroup: 2,
              },
            }}
            pagination={{ clickable: true }}
            navigation
          >
            {items.map((item, index) => (
                <CustomSwiperSlide key={index}>
                  {
                    Admin && 
                    <button className="slideButton">
                      <GoPencil/>
                    </button>
                  }
                    
                  {
                    !Admin && 
                    <button className="slideButton" onClick={handleFavHeart}>
                      {favHeartOpen ? <AiFillHeart/> : <AiOutlineHeart/>}
                    </button>
                  }

                  <img src={item.img} alt="Food image" />
                  <h1>
                    {item.title}
                    <AiOutlineArrowRight/>
                  </h1>
                  <h2>{item.price}</h2>

                  {
                    !Admin && 
                    <section>
                      <Amount/>

                      <Button title="Incluir" />
                    </section>
                  }

                  {
                    Admin &&
                      <Button title="Editar" icon={GoPencil} RedIconButton/>
                  }
                </CustomSwiperSlide>
            ))}
          </CustomSwiper>
      </Container>
    );
}