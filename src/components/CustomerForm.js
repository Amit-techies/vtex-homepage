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
    addressName: '',
    addressType: 'residential',
    city: '',
    state: '',
    country: '',
    postalCode: '',
    receiverName: '',
    street: '',
    number: '',
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

  // Submit form to create customer and address
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Step 1: Create Customer Profile
      const customerResponse = await axios.post(
        'https://iamtechiepartneruae.vtexcommercestable.com.br/api/dataentities/CL/documents',
        {
          email: formData.email,
          firstName: formData.firstName,
          lastName: formData.lastName,
          phone: formData.phone,
          document: formData.document,
          documentType: formData.documentType,
          isCorporate: formData.isCorporate,
          localeDefault: formData.localeDefault,
        }
      );

      const customerId = customerResponse.data.data.Id; // Get customer ID from response
      setMessage(`Customer created successfully: ${customerId}`);
      
      // Step 2: Create Address for the Customer
      const addressResponse = await axios.post(
        'https://iamtechiepartneruae.vtexcommercestable.com.br/api/dataentities/AD/documents',
        {
          addressName: formData.addressName,
          addressType: formData.addressType,
          city: formData.city,
          state: formData.state,
          country: formData.country,
          postalCode: formData.postalCode,
          receiverName: formData.receiverName,
          street: formData.street,
          number: formData.number,
          userId: customerId, // Associate address with the created customer
        }
      );

      setMessage(`Address created successfully for customer: ${customerId}`);
      navigate(`/customer/${customerId}`); // Redirect to the customer details page
    } catch (error) {
      console.error('Error creating customer or address:', error);
      setMessage('Failed to create customer or address. Please try again.');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Create Customer Profile and Address</h2>
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

        {/* Address Fields */}
        <h3>Address</h3>
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
            required
          />
        </div>
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
          <label>State</label>
          <input
            type="text"
            name="state"
            className="form-control"
            value={formData.state}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Country</label>
          <input
            type="text"
            name="country"
            className="form-control"
            value={formData.country}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Postal Code</label>
          <input
            type="text"
            name="postalCode"
            className="form-control"
            value={formData.postalCode}
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
            value={formData.receiverName}
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

        <button type="submit" className="btn btn-primary mt-3">
          Create Customer and Address
        </button>
      </form>
    </div>
  );
};

export default CustomerForm;
