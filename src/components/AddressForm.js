import React, { useState } from 'react';
import axios from 'axios';

const AddressForm = ({ customerId }) => {
  const [addressData, setAddressData] = useState({
    addressName: '',
    addressType: 'residential',
    city: '',
    complement: '',
    country: 'USA',
    postalCode: '',
    receiverName: '',
    reference: null,
    state: '',
    street: '',
    neighborhood: '',
    number: '',
  });

  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddressData({
      ...addressData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const addressPayload = { ...addressData, userId: customerId };

      const response = await axios.post(
        'https://vtex-backend-3.onrender.com/api/addresses',
        addressPayload
      );

      setMessage('Address created successfully!');
    } catch (error) {
      console.error('Error creating address:', error);
      setMessage('Failed to create address. Please try again.');
    }
  };

  return (
    <div className="mt-5">
      <h3>Add Address</h3>
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
          <input
            type="text"
            name="addressType"
            className="form-control"
            value={addressData.addressType}
            onChange={handleInputChange}
          />
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
          <label>Complement</label>
          <input
            type="text"
            name="complement"
            className="form-control"
            value={addressData.complement}
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
            required
          />
        </div>

        <div className="form-group">
          <label>Receiver Name</label>
          <input
            type="text"
            name="receiverName"
            className="form-control"
            value={addressData.receiverName}
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
          <label>Neighborhood</label>
          <input
            type="text"
            name="neighborhood"
            className="form-control"
            value={addressData.neighborhood}
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

        <button type="submit" className="btn btn-primary mt-3">
          Add Address
        </button>
      </form>
    </div>
  );
};

export default AddressForm;
