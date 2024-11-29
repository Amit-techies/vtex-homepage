import React from 'react';
import Banner from './components/banner';
import Header from './components/Header';
import CustomerForm from './components/CustomerForm';

const App = () => {
  const defaultImage = 'https://via.placeholder.com/200'; // Placeholder image if no product image

  return (
    <div style={{fontFamily: 'Arial, sans-serif' }}>
      <Header />

     
      <Banner 
      customText="Exclusive Spring Collection!"
      collectionId={138} 
      customImage="/asset/banner1.jpg"
      defaultImage={defaultImage} />

      <Banner      
      customText="Exclusive Spring Collection!"
      collectionId={137} 
      customImage="/asset/banner2.jpg"
      defaultImage={defaultImage} />
      
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
