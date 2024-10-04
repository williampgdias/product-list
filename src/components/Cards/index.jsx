import './styles.css';

import React, { useEffect, useState } from 'react';

const Cards = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/public/data.json')
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error('Erro ao carregar dados', error));
    }, []);

    return (
        <>
            <h1>Desserts</h1>
            <div className="product-list">
                {products.map((product, index) => (
                    <div key={index} className="product">
                        <img src={product.image.thumbnail} alt={product.name} />
                        <p>{product.category}</p>
                        <h2 className="">{product.name}</h2>
                        <p>${product.price.toFixed(2)}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Cards;
