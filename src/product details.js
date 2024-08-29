import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Error from './Error';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => setProducts(data))
      .catch((err) => setError('Failed to fetch products'));
  }, []);

  if (error) return <Error message={error} />;

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>
              <h2>{product.name}</h2>
            </Link>
            <p>{product.description}</p>
            <p>${product.price.toFixed(2)}</p>
            <img src={product.image} alt={product.name} style={{ width: '100px' }} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
