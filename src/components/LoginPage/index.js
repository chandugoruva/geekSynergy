import React, { useState } from 'react';
import {Container,Heading,Form,Label,Input,Button,Error} from "./styledComponents"
import {useNavigate} from "react-router-dom"
const Login = () => {
    const [formData, setFormData] = useState({
      name: '',
      password: '',
    });
  
    const [error, setError] = useState('');
  const navigate=useNavigate()
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
      setError('');
    };
  
    const handleLogin = (e) => {
      e.preventDefault();
  
      // Retrieve stored user data from local storage
      const storedUserData = JSON.parse(localStorage.getItem('userData'));
  
      // Check if entered credentials match stored credentials
      if (
        storedUserData &&
        storedUserData.name === formData.name &&
        storedUserData.password === formData.password
      ) {
        // If credentials match, trigger the login callback
        navigate("/movies")
      } else {
        // If credentials do not match, show an error message
        setError('Invalid Credentials');
      }
    };
  
    return (
      <Container>
        <Heading>Login</Heading>
        <Form onSubmit={handleLogin}>
          <Label>
            Name:
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </Label>
  
          <Label>
            Password:
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </Label>
  
          {error && <Error>{error}</Error>}
  
          <Button type="submit">Login</Button>
        </Form>
      </Container>
    );
  };
  
  export default Login;