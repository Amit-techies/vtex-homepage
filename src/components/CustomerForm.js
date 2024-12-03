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
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Handle input field changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');
    try {
      const response = await axios.post(
        'https://vtex-backend-3.onrender.com/api/customers',
        formData
      );
      const customerId = response.data.data.Id; // Adjust this based on the actual response structure
      setMessage(`Customer profile created successfully! Customer ID: ${customerId}`);
      navigate(`/customer/${customerId}`);
    } catch (err) {
      console.error('Error creating customer:', err.response?.data || err.message);
      setError(
        err.response?.data?.error || 'An error occurred while creating the customer profile.'
      );
    }
  };

  return (
    <div className="container mt-5">
      <h2>Create Customer Profile</h2>
      {message && <div className="alert alert-success">{message}</div>}
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        {/* Email field */}
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

        {/* First Name field */}
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

        {/* Last Name field */}
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

        {/* Phone field */}
        <div className="form-group">
          <label>Phone</label>
          <input
            type="tel"
            name="phone"
            className="form-control"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Document Type field */}
        <div className="form-group">
          <label>Document Type</label>
          <select
            name="documentType"
            className="form-control"
            value={formData.documentType}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Document Type</option>
            <option value="CPF">CPF</option>
            <option value="CNPJ">CNPJ</option>
          </select>
        </div>

        {/* Document field */}
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

        {/* Corporate checkbox */}
        <div className="form-check">
          <input
            type="checkbox"
            name="isCorporate"
            className="form-check-input"
            checked={formData.isCorporate}
            onChange={handleInputChange}
          />
          <label className="form-check-label">Corporate Customer</label>
        </div>

        {/* Newsletter Opt-In checkbox */}
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

        {/* Locale field */}
        <div className="form-group">
          <label>Locale</label>
          <input
            type="text"
            name="localeDefault"
            className="form-control"
            value={formData.localeDefault}
            onChange={handleInputChange}
          />
        </div>

        {/* Submit button */}
        <button type="submit" className="btn btn-primary mt-3">
          Create Customer
        </button>
      </form>
    </div>
  );
};

export default CustomerForm;
