// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import {Navigate, useLocation} from 'react-router-dom'
import { Spinner } from 'react-bootstrap';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) =>{
  const {user, loading} =useContext(AuthContext);
  const location = useLocation();
  console.log('login page location', user)
  if(loading){
    return <Spinner animation="grow" variant="warning" />

  }
  if(user){
    return children
  }
  return <Navigate state={{from:location}} to='/login' replace></Navigate>
};

export default PrivateRoute;