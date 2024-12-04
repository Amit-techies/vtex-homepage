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
    userId, // Ensure userId is added here
  });

  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddressData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Address data:', addressData); // Debug log
    try {
      await axios.post('https://vtex-backend-3.onrender.com/api/addresses', addressData);
      setMessage('Address created successfully.');
    } catch (error) {
      console.error('Error creating address:', error.response?.data || error.message);
      setMessage('Failed to create address.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {['addressName', 'city', 'state', 'street', 'number', 'postalCode', 'receiverName', 'reference'].map((field) => (
        <div key={field} className="form-group">
          <label>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
          <input
            type="text"
            name={field}
            className="form-control"
            value={addressData[field]}
            onChange={handleInputChange}
            required
          />
        </div>
      ))}
      <button type="submit" className="btn btn-primary mt-3">Add Address</button>
    </form>
  );
};

export default AddressForm;
