import React from 'react';
import Banner from './components/banner';
import Header from './components/Header';
import CustomerForm from './components/CustomerForm';
import CustomerProfile from './components/CustomerProfile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  const defaultImage = 'https://via.placeholder.com/200'; // Placeholder image if no product image

  return (
    <div style={{fontFamily: 'Arial, sans-serif' }}>
      <Header />

     
      
      
      <Router>
      <Routes>
        <Route path="/" element={<CustomerForm />} />
        <Route path="/customer/:customerId" element={<CustomerProfile />} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;
