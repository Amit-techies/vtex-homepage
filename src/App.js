import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomerForm from './components/CustomerForm';
import CustomerPage from './components/CustomerPage';
import AddressForm from './components/AddressForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Route for the customer registration form */}
          <Route path="/" element={<CustomerForm />} />
          
          {/* Route for the customer details page */}
          <Route path="/customer/:customerId" element={<CustomerPage />} />
          
          {/* Optional: A dedicated address creation route (if needed) */}
          <Route path="/add-address/:customerId" element={<AddressForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
