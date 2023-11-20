import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Heading = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  width: 100%;
`;

export const Label = styled.label`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  padding: 8px;
  margin-top: 5px;
  border-radius: 4px;
  border: 1px solid #ccc;
  outline: none;
`;

export const Button = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px;
  cursor: pointer;
  margin-top: 20px;
  border: none;
  border-radius: 4px;
`;

export const Error = styled.p`
  color: red;
  margin-top: 5px;
`;