import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Welcome to My Product App</h1>
      <p>Explore our wide range of products and find exactly what you're looking for.</p>
      <Link to="/products" style={{ textDecoration: 'none', color: 'blue' }}>
        <button style={{ padding: '10px 20px', fontSize: '16px' }}>View Products</button>
      </Link>
    </div>
  );
};

export default Home;
