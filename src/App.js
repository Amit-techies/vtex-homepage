import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomerForm from './components/CustomerForm';
import UpdateCustomerForm from './components/UpdateCustomerForm';
import ProfilePage from './components/ProfilePage'; // We'll create this page

const App = () => {
  return (
    <Router>
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <header className="mb-4">
          <h1>Customer Management</h1>
          <p>Create and update customer profiles in VTEX.</p>
        </header>

        <Routes>
          {/* Route for the customer creation form */}
          <Route path="/" element={<CustomerForm />} />

          {/* Route for the update form */}
          <Route path="/update/:customerId" element={<UpdateCustomerForm />} />

          {/* Route for the profile page where details are shown */}
          <Route path="/profile/:customerId" element={<ProfilePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
