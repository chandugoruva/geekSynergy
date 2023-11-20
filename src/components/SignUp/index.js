import { useState } from "react";
import {Container,Heading,Form,Label,Input,Button,Error} from "./styledComponents"
import {useNavigate} from "react-router-dom"

const SignUp = () => {
    const [formData, setFormData] = useState({
      name: '',
      password: '',
      email: '',
      phone: '',
      profession: 'Developer',
    });
  
    const [errors, setErrors] = useState({});
  const navigate=useNavigate();
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
      setErrors({
        ...errors,
        [name]: '', // Clear the error when the input changes
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Perform your own validation
      const newErrors = {};
  
      if (!formData.name) {
        newErrors.name = 'Name is required';
      }
  
      if (!formData.password) {
        newErrors.password = 'Password is required';
      } else if (formData.password.length < 6) {
        newErrors.password = 'Password must be at least 6 characters';
      }
  
      if (!formData.email) {
        newErrors.email = 'Email is required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)) {
        newErrors.email = 'Invalid email address';
      }
  
      if (!formData.phone) {
        newErrors.phone = 'Phone number is required';
      }
  
      if (Object.keys(newErrors).length === 0) {
        // If there are no errors, store data in local storage
        localStorage.setItem('userData', JSON.stringify(formData));

        
        // Clear form fields after submission
        setFormData({
          name: '',
          password: '',
          email: '',
          phone: '',
          profession: 'Developer',
        });
        navigate("/login")
      } else {
        // If there are errors, update the state
        setErrors(newErrors);
      }
    };
  
    return (
      <Container>
        <Heading>User Signup</Heading>
        <Form onSubmit={handleSubmit}>
          <Label>
            Name:
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <Error>{errors.name}</Error>}
          </Label>
  
          <Label>
            Password:
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <Error>{errors.password}</Error>}
          </Label>
  
          <Label>
            Email:
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <Error>{errors.email}</Error>}
          </Label>
  
          <Label>
            Phone:
            <Input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <Error>{errors.phone}</Error>}
          </Label>
  
          <Label>
            Profession:
            <select
              name="profession"
              value={formData.profession}
              onChange={handleChange}
            >
              <option value="Developer">Developer</option>
              <option value="Designer">Designer</option>
              <option value="Manager">Manager</option>
            </select>
          </Label>
  
          <Button type="submit">Sign Up</Button>
        </Form>
      </Container>
    );
  };
  
  export default SignUp;