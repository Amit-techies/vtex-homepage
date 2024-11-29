import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProfilePage = () => {
  const { customerId } = useParams(); // Get the customer ID from the URL
  const [customerData, setCustomerData] = useState(null); // Store customer data
  const [error, setError] = useState(null); // Handle errors

  useEffect(() => {
    const fetchCustomerData = async () => {
      try {
        const response = await axios.get(
          `https://vtex-backend-3.onrender.com/api/dataentities/CL/documents/${customerId}`
        );
        setCustomerData(response.data); // Store the response data
      } catch (error) {
        setError('Failed to fetch customer details.');
      }
    };

    fetchCustomerData();
  }, [customerId]); // Fetch data when customerId changes

  if (error) {
    return <div style={{ color: 'red' }}>{error}</div>;
  }

  if (!customerData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Customer Profile</h2>
      <div>
        <strong>Customer ID:</strong> {customerData.Id}
      </div>
      <div>
        <strong>Name:</strong> {customerData.FirstName} {customerData.LastName}
      </div>
      <div>
        <strong>Email:</strong> {customerData.Email}
      </div>
      {/* Add other fields as needed */}
    </div>
  );
};

export default ProfilePage;
