import { Container, DesktopGradientRight, CustomSwiper, CustomSwiperSlide, DesktopGradientLeft } from "./styles";

import { useState, useEffect } from "react";

import { AiOutlineHeart, AiFillHeart ,AiOutlineArrowRight } from "react-icons/ai";
import { GoPencil } from 'react-icons/go';

import { Button } from "../Button";
import { Amount } from "../Amount";

import SwiperCore, { Pagination, Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";

SwiperCore.use([Pagination, Navigation]);


export function Slider({ items, Admin }) {

  const [favHeartOpen, setFavHeartOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  function handleFavHeart() {
    setFavHeartOpen(!favHeartOpen);
  }
    
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth >= 770);
    };

    handleResize(); // Verifica a resolução

    window.addEventListener('resize', handleResize); // Atualiza a resolução ao redimensionar a tela

    return () => {
      window.removeEventListener('resize', handleResize); // Remove o listener quando o componente é desmontado
    };
  }, []);
    
  return(
    <Container Admin={Admin}>

      <CustomSwiper
          spaceBetween={10}
          slidesPerView="auto"
          slidesPerGroup={4}
          breakpoints={{
            320: {
              slidesPerView: "auto",
              slidesPerGroup: 1,
            },
            375: {
              slidesPerView: "auto",
              slidesPerGroup: 2,
            },
            600: {
              slidesPerView: "auto",
              slidesPerGroup: 4,
            }
          }}
          navigation={isMobile ? true : false}
      >

        {
          isMobile ? <DesktopGradientLeft/> : ""
        }

        {items.map((item, index) => (
            <CustomSwiperSlide key={index}>

              {Admin ? 
                <div className="admin">
                  <div className="item">
                    <button className="itemButton">
                      <img src={item.img} alt="Food image" />

                      <div className="title">
                      {item.title}
                      <AiOutlineArrowRight/>
                      </div>
                    </button>

                    <h2>{item.price}</h2>
                  </div>

                  <section>
                    <Button title="Editar" RedIconButton icon={GoPencil}/>
                  </section>
                </div>
              :
                <div className="customer">
                  <button className="favButton" onClick={handleFavHeart}>
                    {favHeartOpen ? <AiFillHeart/> : <AiOutlineHeart/>}
                  </button>

                  <div className="item">
                    <button className="itemButton">
                      <img src={item.img} alt="Food image" />

                      <div className="title">
                      {item.title}
                      <AiOutlineArrowRight/>
                      </div>
                    </button>

                    <h2>{item.price}</h2>
                  </div>

                  <section>
                  <Amount/>

                  <Button title="Incluir" />
                  </section>
                </div>
              }

            </CustomSwiperSlide>
          ))
        }

        {
          isMobile ? <DesktopGradientRight/> : ""
        }

      </CustomSwiper>

    </Container>
  );
}