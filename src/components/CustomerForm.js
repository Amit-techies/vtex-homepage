import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
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
  const navigate = useNavigate(); // Initialize navigate hook

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Submit form to create customer
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://vtex-backend-3.onrender.com/api/customers', formData);
      const customerId = response.data.id; // Assuming backend returns a customer ID
      setMessage(`Customer created successfully: ${customerId}`);
      navigate(`/customer/${customerId}`); // Redirect to the customer details page
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
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            className="form-control"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            className="form-control"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Document Type</label>
          <input
            type="text"
            name="documentType"
            className="form-control"
            value={formData.documentType}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Document</label>
          <input
            type="text"
            name="document"
            className="form-control"
            value={formData.document}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            name="isCorporate"
            className="form-check-input"
            checked={formData.isCorporate}
            onChange={handleInputChange}
          />
          <label className="form-check-label">Is Corporate</label>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            name="isNewsletterOptIn"
            className="form-check-input"
            checked={formData.isNewsletterOptIn}
            onChange={handleInputChange}
          />
          <label className="form-check-label">Subscribe to Newsletter</label>
        </div>
        <div className="form-group">
          <label>Locale Default</label>
          <input
            type="text"
            name="localeDefault"
            className="form-control"
            value={formData.localeDefault}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Create Customer
        </button>
      </form>
    </div>
  );
};

export default CustomerForm;
