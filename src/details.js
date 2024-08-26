// src/pages/ProductDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { id } = useParams();

    // Placeholder for product details
    const product = {
        name: "Sample Product",
        image: "https://via.placeholder.com/300",
        price: 99.99,
        description: "This is a sample product description."
    };

    return (
        <div className="product-details">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <p>{product.description}</p>
        </div>
    );
};

export default ProductDetails;
