// src/components/ProductCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ id, name, image, price }) => (
    <div className="product-card">
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>Price: ${price}</p>
        <Link to={`/product/${id}`}>View Details</Link>
    </div>
);

export default ProductCard;
