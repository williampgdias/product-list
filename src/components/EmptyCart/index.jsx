import React from 'react';

// import images
import addToCart from '../../../public/assets/images/icon-add-to-cart.svg';

const EmptyCart = () => {
    return (
        <div className="cardButtonContainer">
            <button className="cardButton">
                <img className="mr-2" src={addToCart} alt="Add to cart" />
                <p className="cardText">Add to Cart</p>
            </button>
        </div>
    );
};

export default EmptyCart;
