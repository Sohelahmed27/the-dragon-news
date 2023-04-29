// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react';
import {Link} from 'react-router-dom'
import { Button, Container, Form } from 'react-bootstrap';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';

const Register = () => {
  const [accepted, setAccepted] = useState(true);
  const {createUser} = useContext(AuthContext);
  const handleRegister = event =>{
    event.preventDefault();
    const form = event.target;
    const name =form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, photo, email, password);

    createUser(email, password)
    .then(result => {
      const createdUser = result.user;
      console.log(createdUser)
    })
    .catch(error => {console.error(error)})
  }

  const handleAccept = event => {
    setAccepted(event.target.checked)
  }
  return (
    <Container>
    <div className="border p-3 mx-auto w-25 rounded mt-4">
    <h4 className="text-center">Please Register</h4>
      <Form onSubmit={handleRegister}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control name='name' type="name" placeholder="Name" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPhoto">
        <Form.Label>Photo</Form.Label>
        <Form.Control name='photo' type="photo" placeholder="photo" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" placeholder="Enter email" required/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' type="password" placeholder="Password" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
        onClick={handleAccept} 
        name="accept"
        type="checkbox" 
        label={<>Accept <Link to='/terms'>terms and condition</Link></>} required/>
      </Form.Group>
      <Button disabled={!accepted} variant="primary" type="submit">
        Register
      </Button>
      <br></br>
      <br></br>
      <Form.Text className="text-primary">
        Already have an account? <Link to='/login'>Login</Link>
        </Form.Text>
      <Form.Text className="text-primary">
         
        </Form.Text>
        <Form.Text className="text-danger">
         
        </Form.Text>
    </Form>
    </div>
    </Container>
  );
};

export default Register;