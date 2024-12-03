import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import CustomerForm from './components/CustomerForm';
import AddressForm from './components/AddressForm';

const App = () => {
  const [customerId, setCustomerId] = useState(null); // State to store created customer ID

  const handleCustomerCreated = (id) => {
    setCustomerId(id); // Set customer ID after creation
  };

  return (
    <Router>
      <div className="container mt-5">
        <h1>Customer Management</h1>
        <Routes>
          {/* Route to create a customer */}
          <Route
            path="/"
            element={<CustomerForm onCustomerCreated={handleCustomerCreated} />}
          />

          {/* Route to add an address */}
          <Route
            path="/add-address"
            element={customerId ? (
              <AddressForm userId={customerId} />
            ) : (
              <RedirectToCustomerForm />
            )}
          />
        </Routes>
      </div>
    </Router>
  );
};

// Component to redirect to the Customer Form if no customer is created yet
const RedirectToCustomerForm = () => {
  const navigate = useNavigate();
  React.useEffect(() => {
    navigate('/'); // Navigate to the customer creation page
  }, [navigate]);
  return null;
};

export default App;
