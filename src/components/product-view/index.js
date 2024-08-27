
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import speaker from "../../assets/images/speaker.png"
import icon1 from "../../assets/images/clear.png"
import icon2 from "../../assets/images/patent.png"

const ProductView = () => {
  return (
    <section className='product-view'>
      <Container>
        <Row className='j align-items-center'>
          <Col md={6} lg={6}>
            <div className='image mb-4 mb-md-0'>
              <img src={speaker} className='img-fluid' alt="" />
            </div>
          </Col>
          <Col md={6} lg={6}>
            <h3 className='sub-title'>Bluetooth Speaker</h3>
            <h2 className='title'>uniting audience for 50 years</h2>
            <p className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dolore, minima illum quam ipsam illo nostrum deleniti voluptatum tenetur repellat.</p>
            <div className='features'>
              <div>
                <div className='icon-circle'>
                  <img src={icon1} className='img-fluid' alt="" />
                </div>
                <h4>Clear Sound</h4>
              </div>
              <div>
                <div className='icon-circle'>
                  <img src={icon2} className='img-fluid' alt="" />
                </div>
                <h4>Clear Sound</h4>
              </div>
            </div>
            <a href="" className='read-more'>Read More</a>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ProductView