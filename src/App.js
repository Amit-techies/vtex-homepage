import React from 'react';
import CustomerForm from './components/CustomerForm';

const App = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      {/* Header */}
      <header className="mb-4">
        <h1>Customer Management</h1>
        <p>Create new customer profiles in VTEX easily.</p>
      </header>

      {/* Customer Form */}
      <main>
        <CustomerForm />
      </main>
    </div>
  );
};

export default App;
