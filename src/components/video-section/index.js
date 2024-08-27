
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import thumb from "../../assets/images/thumb.png"
import playBtn from "../../assets/images/play-button.svg"

const VideoSection = () => {
  return (
    <section className='video-section'>
      <Container>
        <Row className='justify-content-center'>
          <Col md={6} lg={6}>
            <div className='video'>
              <img src={thumb} className='img-fluid' alt="" />
              <div className='play-btn'>
                <img src={playBtn} className='img-fluid' alt="" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default VideoSection