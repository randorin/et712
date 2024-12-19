import React, { useState } from 'react';
import './login.css'

const SignUpLoginForm = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setSuccessMessage('Order submitted');
  };

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
    setFormData({
      username: '',
      email: '',
      password: '',
    });
    setSuccessMessage('');
  };

  return (
    <div className="form-container">
      <h2>{isSignUp ? 'Sign Up' : 'Login'}</h2>
      <form onSubmit={handleFormSubmit} className="auth-form">
        {isSignUp && (
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
          </div>
        )}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          {isSignUp ? 'Sign Up' : 'Login'}
        </button>
      </form>
      {successMessage && <p className="success-message">{successMessage}</p>}
      <p className="toggle-link" onClick={toggleForm}>
        {isSignUp
          ? 'Already have an account? Login here.'
          : 'Don’t have an account? Sign up here.'}
      </p>
    </div>
  );
};

export default SignUpLoginForm;
