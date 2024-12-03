import React, { useState } from 'react';
import axios from 'axios';

const AddressForm = ({ userId }) => {
  const [addressData, setAddressData] = useState({
    addressName: '',
    addressType: 'residential',
    city: '',
    complement: '',
    country: 'USA',
    postalCode: '',
    receiverName: '',
    reference: '',
    state: '',
    street: '',
    neighborhood: '',
    number: '',
    userId, // userId passed from parent (customer ID)
  });

  const [message, setMessage] = useState('');

  // Handle input change for all fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddressData({ ...addressData, [name]: value });
  };

  // Handle form submission to create address
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send address data including userId
      const response = await axios.post('https://vtex-backend-3.onrender.com/api/addresses', addressData);
      setMessage('Address created successfully.');
    } catch (error) {
      console.error('Error creating address:', error.response?.data || error.message);
      setMessage('Failed to create address.');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Add Address</h2>
      {message && <div className="alert alert-info">{message}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Address Name</label>
          <input
            type="text"
            name="addressName"
            className="form-control"
            value={addressData.addressName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Address Type</label>
          <select
            name="addressType"
            className="form-control"
            value={addressData.addressType}
            onChange={handleInputChange}
          >
            <option value="residential">Residential</option>
            <option value="commercial">Commercial</option>
          </select>
        </div>
        <div className="form-group">
          <label>City</label>
          <input
            type="text"
            name="city"
            className="form-control"
            value={addressData.city}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>State</label>
          <input
            type="text"
            name="state"
            className="form-control"
            value={addressData.state}
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
            value={addressData.street}
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
            value={addressData.number}
            onChange={handleInputChange}
            required
          />
        </div>
        {/* Optional fields */}
        <div className="form-group">
          <label>Neighborhood</label>
          <input
            type="text"
            name="neighborhood"
            className="form-control"
            value={addressData.neighborhood}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Postal Code</label>
          <input
            type="text"
            name="postalCode"
            className="form-control"
            value={addressData.postalCode}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Complement</label>
          <input
            type="text"
            name="complement"
            className="form-control"
            value={addressData.complement}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Add Address
        </button>
      </form>
    </div>
  );
};

export default AddressForm;
