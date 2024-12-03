import React, { useState } from 'react';
import axios from 'axios';

const AddressForm = ({ userId }) => {
  const [formData, setFormData] = useState({
    addressName: '',
    addressType: 'residential',
    city: '',
    complement: '',
    country: '',
    postalCode: '',
    receiverName: '',
    reference: '',
    state: '',
    street: '',
    neighborhood: '',
    number: '',
    userId: userId || '', // Populate with customer ID
  });

  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://vtex-backend-3.onrender.com/api/addresses', formData);
      setMessage(`Address created successfully: ${response.data.data.Id}`);
    } catch (error) {
      console.error('Error creating address:', error);
      setMessage('Failed to create address. Please try again.');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Create Address</h2>
      {message && <div className="alert alert-info">{message}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Address Name</label>
          <input
            type="text"
            name="addressName"
            className="form-control"
            value={formData.addressName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Address Type</label>
          <input
            type="text"
            name="addressType"
            className="form-control"
            value={formData.addressType}
            onChange={handleInputChange}
          />
        </div>
        {/* Repeat similar structure for other fields */}
        <div className="form-group">
          <label>City</label>
          <input
            type="text"
            name="city"
            className="form-control"
            value={formData.city}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Street</label>
          <input
            type="text"
            name="street"
            className="form-control"
            value={formData.street}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Number</label>
          <input
            type="text"
            name="number"
            className="form-control"
            value={formData.number}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Create Address</button>
      </form>
    </div>
  );
};

export default AddressForm;
