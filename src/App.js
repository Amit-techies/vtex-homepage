import React, { useState } from 'react';
import CustomerForm from './components/CustomerForm';
import UpdateCustomerForm from './components/UpdateCustomerForm'; // Updated import

const App = () => {
  const [customerId, setCustomerId] = useState(''); // Store customer ID
  const [isFormVisible, setIsFormVisible] = useState(false); // Toggle form visibility for updating profile

  const handleCustomerIdChange = (e) => {
    setCustomerId(e.target.value); // Set customer ID from input
  };

  const handleSearchClick = () => {
    if (customerId) {
      setIsFormVisible(true); // Show the update form when customer ID is entered
    } else {
      alert('Please enter a valid customer ID');
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      {/* Header */}
      <header className="mb-4">
        <h1>Customer Management</h1>
        <p>Create and update customer profiles in VTEX.</p>
      </header>

      {/* Customer Form for profile creation */}
      <section>
        <h2>Create New Customer Profile</h2>
        <CustomerForm /> {/* This handles customer creation */}
      </section>

      {/* Customer ID Input for Profile Update */}
      <section className="mt-4">
        <h2>Update Customer Profile</h2>
        <div>
          <label htmlFor="customerId">Enter Customer ID:</label>
          <input
            type="text"
            id="customerId"
            value={customerId}
            onChange={handleCustomerIdChange}
            placeholder="Enter customer ID here"
            className="form-control"
          />
          <button onClick={handleSearchClick} className="btn btn-primary mt-2">Search</button>
        </div>

        {/* Conditionally render the UpdateCustomerForm when customerId is entered */}
        {isFormVisible && <UpdateCustomerForm customerId={customerId} />}
      </section>
    </div>
  );
};

export default App;
