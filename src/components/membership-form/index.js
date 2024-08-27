
import React from 'react'
import { Col, Container, Input, Row } from 'reactstrap'
import uploadCar from "../../assets/images/upload-car.png"

const MembershipForm = () => {
  return (
    <section className='m-form'>
      <Container>
        <Row className='j justify-content-between'>
          <Col md={3} lg={3}>
            <div className='m-image'>
              <img src={uploadCar} className='img-fluid' alt="" />
              <div className='plus'>
                <p>+</p>
              </div>
            </div>
            <h2 className='text-center upload-txt mb-5 mb-md-0'>Upload Image</h2>
          </Col>
          <Col md={5} lg={5}>
            <h2 className='heading'>Start your free membership today!</h2>
            <p className='sub-heading'>Just three quick and easy steps to get online.</p>
            <div className='steps'>
              <div className='text-center'>
                <div className='circle active'>1</div>
                <p className='name'>Your Details</p>
              </div>
              <div>
                <div className='circle'>2</div>
                <p className='name'>Company Details</p>
              </div>
              <div>
                <div className='circle'>3</div>
                <p className='name'>Confirmation</p>
              </div>
            </div>
            <form>
              <div className='mb-3'>
                <label htmlFor="">Full Name</label>
                <Input type='text' name='full_name' placeholder='Type Here' />
              </div>
              <div className='mb-3'>
                <label htmlFor="">Full Name</label>
                <Input type='text' name='full_name' placeholder='Type Here' />
              </div>
              <div className='mb-3'>
                <label htmlFor="">Full Name</label>
                <Input type='text' name='full_name' placeholder='Type Here' />
              </div>
              <div className='mb-3'>
                <input type="radio" className='' /> <span className='me-4'>Four days</span>
                <input type="radio" /> Five days
              </div>
              <div className='mb-5'>
                <textarea name="" id="" cols="30" rows="5" className='form-control' placeholder="Type Here"></textarea>
              </div>
              <div className='mb-3 text-end'>
                <a href="" className='next-btn'>Next</a>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default MembershipForm