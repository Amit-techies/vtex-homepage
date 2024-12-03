import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import AddressForm from './AddressForm'; // Import AddressForm to add an address

const CustomerPage = () => {
  const { customerId } = useParams(); // Retrieve customerId from URL params
  const [customerData, setCustomerData] = useState(null); // Store customer data
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch customer details by customerId
    const fetchCustomerData = async () => {
      try {
        const response = await axios.get(
          `https://vtex-backend-3.onrender.com/api/customers/${customerId}`
        );
        setCustomerData(response.data); // Store the customer data
      } catch (error) {
        console.error('Error fetching customer data:', error);
        setMessage('Failed to fetch customer data.');
      }
    };

    if (customerId) {
      fetchCustomerData();
    }
  }, [customerId]); // Re-fetch data when customerId changes

  if (!customerData) {
    return (
      <div className="container mt-5">
        <h2>Loading customer data...</h2>
        {message && <div className="alert alert-danger">{message}</div>}
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2>Customer Details</h2>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{customerData.firstName} {customerData.lastName}</h5>
          <p className="card-text">
            <strong>Email:</strong> {customerData.email} <br />
            <strong>Phone:</strong> {customerData.phone} <br />
            <strong>Document Type:</strong> {customerData.documentType} <br />
            <strong>Document:</strong> {customerData.document} <br />
            <strong>Locale:</strong> {customerData.localeDefault} <br />
            <strong>Corporate:</strong> {customerData.isCorporate ? 'Yes' : 'No'} <br />
            <strong>Newsletter Opt-in:</strong> {customerData.isNewsletterOptIn ? 'Yes' : 'No'} <br />
          </p>
        </div>
      </div>

      {/* Display AddressForm component to add address for the customer */}
      <h3 className="mt-4">Add Address</h3>
      <AddressForm customerId={customerId} />
    </div>
  );
};

export default CustomerPage;
