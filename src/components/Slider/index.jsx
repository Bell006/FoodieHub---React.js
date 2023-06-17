import { Container, CustomSwiper, CustomSwiperSlide } from "./styles";

import { AiOutlineHeart, AiFillHeart ,AiOutlineArrowRight } from "react-icons/ai";
import { MdOutlineRemove, MdOutlineAdd } from "react-icons/md";
import { Button } from "../Button";
import { Amount } from "../Amount";

import SwiperCore, { Pagination, Navigation } from "swiper";
import "swiper/swiper.min.css";
import { useState } from "react";

SwiperCore.use([Pagination, Navigation]);

export function Slider({ items }) {

  const [favHeartOpen, setFavHeartOpen] = useState(false);

  function handleFavHeart() {
    setFavHeartOpen(!favHeartOpen)
  }

    return(
      <Container>
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
                    <button id="favorite" onClick={handleFavHeart}>
                      {favHeartOpen ? <AiFillHeart/> : <AiOutlineHeart/>}
                    </button>

                    <img src={item.img} alt="Food image" />
                    <h1>
                      {item.title}
                      <AiOutlineArrowRight/>
                    </h1>
                    <h2>{item.price}</h2>

                    <section>
                      <Amount/>
                    </section>
                    
                    <Button title="Incluir" />
                </CustomSwiperSlide>
            ))}
          </CustomSwiper>
      </Container>
    );
}