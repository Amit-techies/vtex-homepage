import React from 'react';
import { useParams } from 'react-router-dom';

const CustomerDetails = () => {
  const { customerId } = useParams();

  return (
    <div>
      <h2>Customer Details</h2>
      <p>Customer ID: {customerId}</p>
      {/* Additional customer information can be added here */}
    </div>
  );
};

export default CustomerDetails;
