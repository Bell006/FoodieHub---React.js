import { Container, DesktopGradientRight, CustomSwiper, CustomSwiperSlide, DesktopGradientLeft } from "./styles";

import { useState, useEffect } from "react";

import { AiOutlineHeart, AiFillHeart ,AiOutlineArrowRight } from "react-icons/ai";
import { GoPencil } from 'react-icons/go';

import { Button } from "../Button";
import { Amount } from "../Amount";

import SwiperCore, { Pagination, Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";

import { api } from "../../services/api";

import { useNavigate } from "react-router-dom";

SwiperCore.use([Pagination, Navigation]);

export function Slider({ items, Admin }) {

  const [favHeartOpen, setFavHeartOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const itemImgUrl = `${api.defaults.baseURL}/files`;

  const navigate = useNavigate();
  
  function handleFavHeart() {
    setFavHeartOpen(!favHeartOpen);
  }

  function handleEdit(item_id) {
    return navigate(`/edit/${item_id}`);
  }

  function handleDetails(item_id) {
    return navigate(`/details/${item_id}`);
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

          { items &&
            items.map((item, index) => (
              <CustomSwiperSlide key={index}>
                {Admin ? 
                  <div className="admin">
                    <div className="item">
                      <button className="itemButton" onClick={() => handleDetails(item.id)}>
                        <div className="image-wrapper">
                          <img src={`${itemImgUrl}/${item.image}`} alt="Food image" />
                        </div>

                        <div className="title">
                          {item.title}
                          <AiOutlineArrowRight/>
                        </div>
                      </button>

                      <h2>{`R$${item.price}`}</h2>
                    </div>

                    <section>
                      <Button title="Editar" RedIconButton icon={GoPencil} onClick={() => handleEdit(item.id)}/>
                    </section>
                  </div>
                :
                  <div className="customer">
                    <button className="favButton" onClick={handleFavHeart}>
                      {favHeartOpen ? <AiFillHeart/> : <AiOutlineHeart/>}
                    </button>

                    <div className="item">
                      <button className="itemButton" onClick={() => handleDetails(item.id)}>
                        <div className="image-wrapper">
                          <img src={`${itemImgUrl}/${item.image}`} alt="Food image" />
                        </div>

                        <div className="title">
                          {item.title}
                          <AiOutlineArrowRight/>
                        </div>
                      </button>

                      <h2>{`R$${item.price}`}</h2>
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