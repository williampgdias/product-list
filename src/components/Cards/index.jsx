import React, { useEffect, useState } from 'react';

// Import CSS
import './style.css';

// Import components
import EmptyCart from '../EmptyCart';

const Cards = () => {
    const [products, setProducts] = useState([]);
    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        fetch('/public/data.json')
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error('Erro ao carregar dados', error));
    }, []);

    return (
        <>
            <main className="productList">
                <h1 className="title">Desserts</h1>
                <div className="productsContainer">
                    <div className="cardsContainer">
                        {products.map((product, index) => (
                            <div key={index} className="cardProducts">
                                <img
                                    className="dessertsImage"
                                    src={product.image.desktop}
                                    alt={product.name}
                                />
                                <EmptyCart />
                                <div className="dessertInfo">
                                    <p className="productCategory">
                                        {product.category}
                                    </p>
                                    <h2 className="productName">
                                        {product.name}
                                    </h2>
                                    <p className="productPrice">
                                        ${product.price.toFixed(2)}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </>
    );
};

export default Cards;
