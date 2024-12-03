import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomerForm from './components/CustomerForm';
import CustomerDetails from './components/CustomerDetails'; // Component to display customer details

const App = () => {
  return (
    <Router>
      <div>
        <h1 className="text-center my-4">Customer Management</h1>
        <Routes>
          {/* Route for the customer creation form */}
          <Route path="/" element={<CustomerForm />} />

          {/* Route for the customer details page */}
          <Route path="/customer/:id" element={<CustomerDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
