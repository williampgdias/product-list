import React, { useEffect, useState } from 'react';

// Import CSS
import './style.css';

// import images
import addToCart from '../../../public/assets/images/icon-add-to-cart.svg';

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
            <main className="productList">
                <h1 className="title">Desserts</h1>
                <div className="productsContainer">
                    <div className="cardsContainer">
                        {products.map((product, index) => (
                            <div key={index} className="card">
                                <img
                                    className="dessertsImage"
                                    src={product.image.desktop}
                                    alt={product.name}
                                />
                                <div className="cartButtonContainer">
                                    <button className="cartButton">
                                        <img
                                            className="mr-2"
                                            src={addToCart}
                                            alt="Add to cart"
                                        />
                                        <p className="lg:text-sm xl:text-xs 2xl:text-base">
                                            Add to Cart
                                        </p>
                                    </button>
                                </div>
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
