import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CustomerForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    documentType: '',
    document: '',
    isCorporate: false,
    isNewsletterOptIn: false,
    localeDefault: 'en-US',
  });

  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://vtex-backend-3.onrender.com/api/customers',
        formData
      );
      const customerId = response.data.data.Id;
      setMessage(`Customer created successfully: ${customerId}`);
      navigate(`/customer/${customerId}`);
    } catch (error) {
      console.error('Error creating customer:', error);
      setMessage('Failed to create customer. Please try again.');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Create Customer Profile</h2>
      {message && <div className="alert alert-info">{message}</div>}
      <form onSubmit={handleSubmit}>
        {/* Form fields */}
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            className="form-control"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </div>
        {/* Other form fields */}
        <button type="submit" className="btn btn-primary mt-3">
          Create Customer
        </button>
      </form>
    </div>
  );
};

export default CustomerForm;
