
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Col, Container, Row } from 'reactstrap'
import CheckIcon from '../svg-icons/check-icon'
import yoImg from "../../assets/images/yo.png"
import checkIcon from "../../assets/images/check.svg"
import { bannerData } from '../../data';


const BannerWithSlider = () => {
  return (
    <section className='banner-with-slider'>
      <Container>
        <Row>
          <Col md={4} lg={4} className='col1'>
            <div className='banner-content'>
              <div className='banner-header'>
                <div className='d-flex align-items-center justify-content-between'>
                  <h4>Featured this week</h4>
                  <img src={yoImg} className='img-fluid' alt="icon" />
                </div>
              </div>
              <div className='body'>
                <h2 className='title'>2019 - Benz A200 Hatchback</h2>
                <p className='text1'>32,546 Miles</p>
                <div className='divider'></div>
                <p className='text2'>1 Day 5 Hours Remaining <br />01/01/2023 16:30:05</p>
                <p className='text3'>$14,500 Buy it now</p>
                <div className='d-flex align-items-center mb-5'>
                <img src={checkIcon} className='img-fluid slide' alt="" />
                  {/* <CheckIcon size={40} color="green" fill="green" /> */}
                  <p className='mb-0 ms-2 text4'>YoTrader Trusted Seller</p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={8} lg={8} className='col2'>
            <div className='slider'>
              <Swiper
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Pagination]}
                className="banner-slider"
              >
                {bannerData.map((item) => {
                  return (
                    <SwiperSlide key={item.id}>
                      <img src={item.img} className='img-fluid slide' alt="" />
                      <div className='caption'>
                        <h3>{item.caption}</h3>
                      </div>
                    </SwiperSlide>
                  )
                })}
              </Swiper>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default BannerWithSlider