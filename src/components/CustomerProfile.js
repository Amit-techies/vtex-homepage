import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CustomerProfile = () => {
  const { customerId } = useParams(); // Get the customer ID from the URL
  const [customer, setCustomer] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const response = await axios.get(
          `https://vtex-backend-3.onrender.com/api/customers/${customerId}`
        );
        setCustomer(response.data); // Assume the server returns customer data
      } catch (error) {
        console.error('Error fetching customer details:', error);
        setError('Failed to fetch customer details.');
      }
    };

    fetchCustomer();
  }, [customerId]);

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  if (!customer) {
    return <div>Loading customer details...</div>;
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Customer Profile</h2>
      <p><strong>ID:</strong> {customer.Id}</p>
      <p><strong>Name:</strong> {customer.firstName} {customer.lastName}</p>
      <p><strong>Email:</strong> {customer.email}</p>
      <p><strong>Phone:</strong> {customer.phone}</p>
    </div>
  );
};

export default CustomerProfile;
