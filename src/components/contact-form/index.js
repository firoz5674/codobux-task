
import React from 'react'
import { Col, Container, Input, Row } from 'reactstrap'

const ContactForm = () => {
  return (
    <form>
      <div className='mb-3'>
        <label htmlFor="">Name</label>
        <Input type='text' name='full_name' placeholder='Type Here' />
      </div>
      <div className='mb-3'>
        <label htmlFor="">Email</label>
        <Input type='text' name='full_name' placeholder='Type Here' />
      </div>
      <div className='mb-3'>
        <label htmlFor="">What service you are interested in</label>
        <Input type='text' name='full_name' placeholder='Type Here' />
      </div>
      <div className='mb-4'>
        <label htmlFor="">Message</label>
        <textarea name="" id="" cols="30" rows="5" className='form-control' placeholder="Type Here"></textarea>
      </div>
      <div className='mb-3'>
        <a href="" className='submit-btn'>Submit</a>
      </div>
    </form>
  )
}

export default ContactForm