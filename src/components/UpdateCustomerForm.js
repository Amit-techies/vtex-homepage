import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateCustomerForm = ({ customerId }) => {
  const [customerData, setCustomerData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');

  // Fetch current customer data when the component mounts
  useEffect(() => {
    const fetchCustomerData = async () => {
      try {
        const res = await axios.get(`https://vtex-backend-3.onrender.com/api/customers/${customerId}`);
        setCustomerData(res.data);
      } catch (err) {
        console.error('Error fetching customer data:', err);
        setError('Failed to fetch customer data.');
      }
    };

    if (customerId) {
      fetchCustomerData();
    }
  }, [customerId]);

  // Handle input field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission for updating customer data
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.put(
        `https://vtex-backend-3.onrender.com/api/customers/${customerId}`,
        customerData
      );
      setResponse(res.data);  // Set the response data after update
      setError('');  // Clear any previous error
    } catch (err) {
      console.error('Error updating customer:', err);
      setError('Failed to update customer. Please try again.');
      setResponse(null);  // Clear any previous response
    }
  };

  return (
    <div>
      <h2>Update Customer Profile</h2>
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
        <button type="submit" className="btn btn-primary">Update Customer</button>
      </form>

      {/* Show success or error message */}
      {response && (
        <div className="mt-4">
          <h3>Customer Updated Successfully!</h3>
          <p>
            Customer ID: {response.Id}
            <br />
            Document ID: {response.DocumentId}
            <br />
            <a href={response.Href} target="_blank" rel="noopener noreferrer">
              View Updated Profile
            </a>
          </p>
        </div>
      )}

      {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>}
    </div>
  );
};

export default UpdateCustomerForm;
