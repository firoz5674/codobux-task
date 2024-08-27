

import React from 'react'
import { Col, Container, Input, Row } from 'reactstrap'

const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col md={6} lg={3}>
            <h2 className='logo'>Logo</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, sed aliquam nisi inventore veniam ratione sit hic eos autem minima animi iure! Eveniet eligendi quia sunt sint iste magnam quibusdam.</p>
          </Col>
          <Col md={6} lg={3}>
            <h2>Help</h2>
            <ul>
              <li>
                <a href="" target='_blank'>Privacy Policy</a>
              </li>
              <li>
                <a href="" target='_blank'>Privacy Policy</a>
              </li>
              <li>
                <a href="" target='_blank'>Privacy Policy</a>
              </li>
              <li>
                <a href="" target='_blank'>Privacy Policy</a>
              </li>
              <li>
                <a href="" target='_blank'>Privacy Policy</a>
              </li>
            </ul>
          </Col>
          <Col md={6} lg={3}>
            <h2>Menu</h2>
            <ul>
              <li>
                <a href="" target='_blank'>Privacy Policy</a>
              </li>
              <li>
                <a href="" target='_blank'>Privacy Policy</a>
              </li>
              <li>
                <a href="" target='_blank'>Privacy Policy</a>
              </li>
              <li>
                <a href="" target='_blank'>Privacy Policy</a>
              </li>
              <li>
                <a href="" target='_blank'>Privacy Policy</a>
              </li>
            </ul>
          </Col>
          <Col md={6} lg={3}>
            <h2>Newsletter</h2>
            <p>Lorem ipsum dolor sit amet</p>
            <Input type='text' placeholder='Enter Your email...' />
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer