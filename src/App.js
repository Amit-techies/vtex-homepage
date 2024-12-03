import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import CustomerForm from './components/CustomerForm';
import AddressForm from './components/AddressForm';

const App = () => {
  const [customerId, setCustomerId] = useState(null); // State to store the created customer ID

  const handleCustomerCreated = (id) => {
    setCustomerId(id); // Set customer ID when customer is created
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
            element={
              customerId ? (
                <AddressForm userId={customerId} />
              ) : (
                <RedirectToCustomerForm />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

const RedirectToCustomerForm = () => {
  const navigate = useNavigate();
  React.useEffect(() => {
    navigate('/');
  }, [navigate]);
  return null;
};

export default App;
