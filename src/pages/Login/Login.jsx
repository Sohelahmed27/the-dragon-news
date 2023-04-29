// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import {Link ,useNavigate} from 'react-router-dom'
import { Button, Container, Form } from 'react-bootstrap';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';

const Login = () => {
  const navigate = useNavigate();
  const{signIn} =useContext(AuthContext);
  const handleSignIn = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const from = location.state?.from?.pathname || '/category/0';

    console.log(email, password);
    signIn(email, password)
    .then(result => {
      const loggedUser = result.user;
      console.log(loggedUser);
      navigate(from, {replace:true})
    })
    .catch(error => console.error(error));
   
  }
  return (
    <Container>
    <div className="border p-3 mx-auto w-25 rounded mt-4">
    <h4 className="text-center">Please Login</h4>
      <Form onSubmit={handleSignIn}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <br></br>
      <br></br>
      <Form.Text className="text-primary">
         Don't have a account? <Link to='/register'>Register</Link>
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

export default Login;