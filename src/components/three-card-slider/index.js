
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { Card, CardText, CardTitle } from 'reactstrap';
import { featureCard } from '../../data';


const ThreeCardSlider = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
      modules={[Pagination, Navigation]}
      className="three-card-slider"
    >
      {featureCard.map((card) => {
        return (
          <SwiperSlide key={card.id}>
            <Card>
              <div className='d-flex align-items-center mb-3'>
                <div className='icon-box-wrapper'>
                  <div className='icon-box'>
                    <img src={card.img} className='img-fluid' alt="" />
                  </div>
                </div>
                <div className='title-wrapper'>
                  <CardTitle className='mb-0'>{card.title}</CardTitle>
                </div>
              </div>
              <CardText>{card.description}</CardText>
            </Card>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default ThreeCardSlider