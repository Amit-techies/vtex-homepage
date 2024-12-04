import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AddressForm from './AddressForm';

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

  const [customerId, setCustomerId] = useState(null);
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
      const response = await axios.post('https://vtex-backend-3.onrender.com/api/customers', formData);
      const newCustomerId = response.data.data.Id;
  
      console.log('Customer creation response:', response.data);
  
      setCustomerId(newCustomerId);
      setMessage('Customer created successfully!');
    } catch (error) {
      console.error('Error creating customer:', error.response?.data || error.message);
      setMessage('Failed to create customer. Please try again.');
    }
  };
  

  return (
    <div className="container mt-5">
      <h2>Create Customer Profile</h2>
      {message && <div className="alert alert-info">{message}</div>}
      <form onSubmit={handleSubmit}>
        {/** Input Fields */}
        {['email', 'firstName', 'lastName', 'phone', 'document'].map((field) => (
          <div key={field} className="form-group">
            <label>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
            <input
              type={field === 'email' ? 'email' : 'text'}
              name={field}
              className="form-control"
              value={formData[field]}
              onChange={handleInputChange}
              required
            />
          </div>
        ))}
        {/** Document Type */}
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
        {/** Corporate Checkbox */}
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
        {/** Newsletter Checkbox */}
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
        {/** Locale */}
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
        <button type="submit" className="btn btn-primary mt-3">Create Customer</button>
      </form>
      {/** Show AddressForm after customer is created */}
      {customerId && (
        <div className="mt-5">
          <h2>Add Address</h2>
          <AddressForm userId={customerId} />
        </div>
      )}
    </div>
  );
};

export default CustomerForm;
