import './styles.css';

import React, { useEffect, useState } from 'react';

// import images
import emptyCart from '../../../public/assets/images/illustration-empty-cart.svg';
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
                    {/* Seção de Produtos */}
                    {/* Products Section */}
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

                    {/* Seção do Carrinho */}
                    {/* Cart Section */}
                    <div className="h-fit border rounded-lg p-4 shadow-lg">
                        <h2 className="text-2xl text-[#B23515] font-semibold mb-4">
                            Your Cart (0)
                        </h2>
                        <img
                            className="mx-auto mb-4"
                            src={emptyCart}
                            alt="Empty cart"
                        />
                        <p className="text-center text-sm text-[#B18F8B]">
                            Your added items will appear here
                        </p>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Cards;
