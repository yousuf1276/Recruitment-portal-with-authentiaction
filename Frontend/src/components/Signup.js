import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Container, Form } from 'react-bootstrap';
import axios from 'axios';
import './signup.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const validatePassword = (password) => {
    const errors = [];

    if (!/(?=.*[a-z])/.test(password)) {
      errors.push('at least one lowercase letter');
    }
    if (!/(?=.*[A-Z])/.test(password)) {
      errors.push('at least one uppercase letter');
    }
    if (!/(?=.*\d)/.test(password)) {
      errors.push('at least one digit');
    }
    if (!/(?=.*[!@#$%^&*])/.test(password)) {
      errors.push('at least one special character');
    }
    if (!/[A-Za-z\d!@#$%^&*]{8,}$/.test(password)) {
      errors.push('a minimum length of 8 characters');
    }

    return errors.length > 0 ? `Password must contain ${errors.join(', ')}.` : null;
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    const passwordError = validatePassword(password);
    if (passwordError) {
      setErrorMessage(passwordError);
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/signup', { email, password });
      if (response.status === 201) {
        navigate('/home');
      }
    } catch (error) {
      setErrorMessage('Error signing up');
    }
  };

  return (
    <div className='form'>
      <Container className="signup-container">
        <h1>Sign Up</h1>
        <Form onSubmit={handleSignup}>
          <Form.Group controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>

          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <Button className='m-2' variant="primary" type="submit">
            Sign Up
          </Button>

          <p className="login-link">
            Already have an account? <Link to="/home">Login</Link>
          </p>
        </Form>
      </Container>
    </div>
  );
};

export default Signup;
