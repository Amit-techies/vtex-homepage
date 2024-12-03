import React from 'react';
import AddressForm from './AddressForm';

const CustomerPage = ({ customerId }) => {
  return (
    <div className="container mt-5">
      <h1>Customer Details</h1>
      <p>Customer ID: {customerId}</p>
      <AddressForm userId={customerId} />
    </div>
  );
};

export default CustomerPage;
