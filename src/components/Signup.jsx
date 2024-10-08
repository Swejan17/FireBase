import { useRef } from 'react'
import { Card,Form,Button } from 'react-bootstrap'
const Signup = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordconfRef = useRef()

  return (
    <>
    <Card>
      <Card.Body>
        <h2 className='text-center mb-4'>Sign Up</h2>
        <Form>
          <Form.Group id='email'>
            <Form.Label>Email</Form.Label>
            <Form.Control type='email'ref={emailRef} required />
          </Form.Group>
          <Form.Group id='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' ref={passwordRef} required />
          </Form.Group>
          <Form.Group id='password-confirm'>
            <Form.Label ref={passwordconfRef}>Password Confirmation</Form.Label>
            <Form.Control type='password' required />
          </Form.Group>
          <Button className='w-100 mt-2' type='submit'>Sign Up</Button>
        </Form>
      </Card.Body>

    </Card>
    <div className='w-100 text-center mt-2'>
      Already have an account? Log in
    </div>
    </>

  )
}

export default Signup
