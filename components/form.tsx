'use client'

import { useState } from 'react';
import axios from 'axios';
import { Grid , Button, Typography, TextField,  Container } from '@mui/material';

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrs] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const validateForm = () => {
    let isValid = true;
    const updatedErrors = { ...errors };
    // Email validation using a simple Regex
    const emailvalidation = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailvalidation.test(formData.email)) {
      updatedErrors.email = 'Please enter a valid email address';
      isValid = false;
    } else {
      updatedErrors.email = '';
    }

    // validation the password length
    if (formData.password.length < 8) {
      updatedErrors.password = 'Password must be at least 8 characters';
      isValid = false;
    } else {
      updatedErrors.password = '';
    }

    // Password and Confirm Password match validation
    if (formData.password !== formData.confirmPassword) {
      updatedErrors.confirmPassword = 'Passwords do not match';
      isValid = false;
    } else {
      updatedErrors.confirmPassword = '';
    }

    setErrs(updatedErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const apiUrl = 'http://localhost:5000/api/register';

      axios.post(apiUrl, formData)
        .then((response) => {
          alert("User created");
          setFormData({
            email: '',
            password: '',
            confirmPassword: '',
          });
        })
        .catch((error) => {
          alert('Error sending data: '+ error.response.data.errors[0].error);
        });
    }
  };
  return (
    <Container>
      <Typography variant="h4">Registration Form</Typography>
      <br></br>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={1}>
          <Grid item xs={7}>
            <TextField
              type="email" id="email" name="email"label="Email"fullWidth variant="outlined"
              value={formData.email}
              onChange={handleChange}
              error={Boolean(errors.email)}
              helperText={errors.email}
              required
            />
          </Grid>

          <Grid item xs={7}>
            <TextField
              type="password"
              id="password"
              name="password"
              label="Password"
              fullWidth
              variant="outlined"
              value={formData.password}
              onChange={handleChange}
              required
              error={Boolean(errors.password)}
              helperText={errors.password}
            />
          </Grid>

          <Grid item xs={7}>
            <TextField
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              label="Confirm Password"
              fullWidth
              variant="outlined"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              error={Boolean(errors.confirmPassword)}
              helperText={errors.confirmPassword}
            />
          </Grid>

          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="secondary">
              Create
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}