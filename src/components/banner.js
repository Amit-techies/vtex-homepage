import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Banner = ({ collectionId, defaultImage, customText, customImage }) => {
  const [products, setProducts] = useState([]); // State to store products
  const [error, setError] = useState(null); // State to handle errors

  // Fetch products for the specified collection
  useEffect(() => {
    const fetchCollectionProducts = async () => {
      try {
        const response = await axios.get(
          `https://vtex-backend-3.onrender.com/api/collections/${collectionId}/products`
        );
        setProducts(response.data.Data || []); // Handle 'Data' key in the response
      } catch (error) {
        console.error('Error fetching products for collection:', error);
        setError('Failed to fetch products for the selected collection.');
      }
    };

    if (collectionId) {
      fetchCollectionProducts();
    }
  }, [collectionId]); // Refetch when collectionId changes

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      {/* Custom Image and Text */}
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        {customImage && (
          <img
            src={customImage}
            alt="Banner"
            style={{
              width: '100%',
              height: 'auto',
              maxHeight: '400px',
              objectFit: 'cover',
              borderRadius: '10px',
            }}
          />
        )}
        {customText && (
          <p
            style={{
              fontSize: '24px',
              fontWeight: 'bold',
              marginTop: '10px',
              color: '#333',
            }}
          >
            {customText}
          </p>
        )}
      </div>

      {/* Collection Title */}
      <h2>Collection {collectionId}</h2>

      {/* Display error or products */}
      {error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : products.length > 0 ? (
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          {products.map((product) => (
            <div key={product.ProductId} style={{ textAlign: 'center' }}>
              <img
                src={product.SkuImageUrl || defaultImage} // Use defaultImage if no SkuImageUrl
                alt={product.ProductName || 'Product Image'}
                width="200"
                style={{ marginBottom: '10px', borderRadius: '8px' }}
              />
              <h3>{product.ProductName || 'Unnamed Product'}</h3>
            </div>
          ))}
        </div>
      ) : (
        <p>No products available for this collection.</p>
      )}
    </div>
  );
};

export default Banner;
