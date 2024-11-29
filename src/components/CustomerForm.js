
import React, { useState } from 'react';
import axios from 'axios';

const CustomerForm = () => {
  const [customerData, setCustomerData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');

  // Handle input field change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('https://vtex-backend-3.onrender.com/api/customers', customerData);
      setResponse(res.data);  // Set the response data
      setError('');  // Clear any previous error
    } catch (err) {
      console.error('Error creating customer:', err);
      setError('Failed to create customer. Please try again.');
      setResponse(null);  // Clear any previous response
    }
  };

  return (
    <div>
      <h2>Create Customer Profile</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={customerData.firstName}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={customerData.lastName}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={customerData.email}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            value={customerData.phone}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">Create Customer</button>
      </form>

      {/* Show success or error message */}
      {response && (
        <div className="mt-4">
          <h3>Customer Created Successfully!</h3>
          <p>
            Customer ID: {response.Id}
            <br />
            Document ID: {response.DocumentId}
            <br />
            <a href={response.Href} target="_blank" rel="noopener noreferrer">
              View Customer Profile
            </a>
          </p>
        </div>
      )}

      {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>}
    </div>
  );
};

export default CustomerForm;
