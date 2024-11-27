import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
 
  const [products, setProducts] = useState([]); // State to store products of a specific collection
  const [error, setError] = useState(null); // State to handle errors
  const [selectedCollectionId, setSelectedCollectionId] = useState(138); // Default collection ID



  // Fetch products of the selected collection
  useEffect(() => {
    const fetchCollectionProducts = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/collections/${selectedCollectionId}/products`
        );
        setProducts(response.data.Data || []); // Handle 'Data' key in the response
      } catch (error) {
        console.error('Error fetching products for collection:', error);
        setError('Failed to fetch products for the selected collection.');
      }
    };

    if (selectedCollectionId) {
      fetchCollectionProducts();
    }
  }, [selectedCollectionId]); // Refetch products when collection ID changes

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
     

      

      {/* Products Section */}
      <section>
        
        <div>
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product.ProductId} style={{ marginBottom: '20px' }}>
                
                {product.SkuImageUrl && (
                  <img
                    src={product.SkuImageUrl}
                    alt={product.ProductName}
                    width="200"
                    style={{ marginBottom: '10px' }}
                  />
                )}
                
                <h3>{product.ProductName}</h3>
              </div>
            ))
          ) : (
            <p>No products available for this collection.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default App;
