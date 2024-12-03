import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomerForm from './CustomerForm'; // Import the CustomerForm component
import CustomerPage from './CustomerPage'; // Import the CustomerPage component

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Route for creating a new customer */}
          <Route path="/" element={<CustomerForm />} />

          {/* Route for viewing customer details and adding an address */}
          <Route path="/customer/:customerId" element={<CustomerPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
