// src/pages/Home.js
import React from 'react';
import useFetch from './useFetch';

const Home = () => {
    const { data: products, loading, error } = useFetch('http://localhost:5000/products');

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    const categories = [...new Set(products.map(product => product.product_category))];

    return (
        <div className="home">
            {categories.map(category => (
                <div key={category}>
                    <h2>{category}</h2>
                    <ul>
                        {products.filter(product => product.product_category === category).map(product => (
                            <li key={product.product_id}>
                                <h3>{product.product_name}</h3>
                                <p>{product.product_desc}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Home;
