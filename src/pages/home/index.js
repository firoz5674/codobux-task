
import React from 'react'
import BannerWithSlider from '../../components/banner-with-slider'
import MembershipForm from '../../components/membership-form'
import { Col, Container, Row } from 'reactstrap'
import ThreeCardSlider from '../../components/three-card-slider'
import VideoSection from '../../components/video-section'
import ContactForm from '../../components/contact-form'
import ProductView from '../../components/product-view'

const Home = () => {
  return (
    <main>
      <BannerWithSlider />
      <MembershipForm />
      <ProductView />
      <section className='speakers'>
        <Container>
          <h3>Bluetooth Speaker</h3>
          <h2>hear how sounds should sound.</h2>
          <div className='divider2'></div>
          <ThreeCardSlider />
          <a href="/" target='_blank' className='shop-btn mt-4 d-inline-block'>Shop Now</a>
        </Container>
      </section>
      <VideoSection />
      <section className='contact-form'>
        <Container>
          <Row className='align-items-center'>
            <Col md={5}>
              <h2 className='title'>Let's Talk</h2>
              <p className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam aspernatur id consectetur aliquid dicta quibusdam repudiandae illum sequi commodi.</p>
            </Col>
            <Col md={7}>
              <ContactForm />
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  )
}

export default Home