import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomerForm from './components/CustomerForm';
import CustomerDetails from './components/CustomerDetails'; // Placeholder for the customer details component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CustomerForm />} />
        <Route path="/customer/:customerId" element={<CustomerDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
