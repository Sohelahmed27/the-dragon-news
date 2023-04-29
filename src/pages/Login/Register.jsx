// eslint-disable-next-line no-unused-vars
import React from 'react';
import {Link} from 'react-router-dom'
import { Button, Container, Form } from 'react-bootstrap';

const Register = () => {
  return (
    <Container>
    <div className="border p-3 mx-auto w-25 rounded mt-4">
    <h4 className="text-center">Please Register</h4>
      <Form className=" ">
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control name='name' type="name" placeholder="Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Accept terms and condition" />
      </Form.Group>
      <Button variant="primary" type="submit">
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