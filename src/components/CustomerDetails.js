import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CustomerDetails = () => {
  const { customerId } = useParams(); // Get customer ID from the URL
  const [customer, setCustomer] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCustomerDetails = async () => {
      try {
        const response = await axios.get(`https://vtex-backend-3.onrender.com/api/customers/${customerId}`);
        setCustomer(response.data);
      } catch (error) {
        console.error('Error fetching customer details:', error);
        setError('Failed to fetch customer details.');
      }
    };

    fetchCustomerDetails();
  }, [customerId]);

  return (
    <div className="container mt-5">
      {error ? (
        <div className="alert alert-danger">{error}</div>
      ) : customer ? (
        <div>
          <h2>Customer Details</h2>
          <p><strong>Email:</strong> {customer.email}</p>
          <p><strong>First Name:</strong> {customer.firstName}</p>
          <p><strong>Last Name:</strong> {customer.lastName}</p>
          <p><strong>Phone:</strong> {customer.phone}</p>
          <p><strong>Document Type:</strong> {customer.documentType}</p>
          <p><strong>Document:</strong> {customer.document}</p>
          <p><strong>Corporate:</strong> {customer.isCorporate ? 'Yes' : 'No'}</p>
          <p><strong>Newsletter Opt-In:</strong> {customer.isNewsletterOptIn ? 'Yes' : 'No'}</p>
          <p><strong>Locale:</strong> {customer.localeDefault}</p>
        </div>
      ) : (
        <p>Loading customer details...</p>
      )}
    </div>
  );
};

export default CustomerDetails;
