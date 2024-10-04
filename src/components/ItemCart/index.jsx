import React from 'react';

// Import CSS
import './style.css';

// Import images
import decrementImage from '../../../public/assets/images/icon-decrement-quantity.svg';
import incrementImage from '../../../public/assets/images/icon-increment-quantity.svg';

const ItemCart = () => {
    return (
        <div className="itemCartContainer">
            <button className="itemCart">
                <img
                    className="btnQuantity decrementQuantity"
                    src={decrementImage}
                />
                <p className="cardQuantity">1</p>
                <img
                    className="btnQuantity incrementQuantity"
                    src={incrementImage}
                />
            </button>
        </div>
    );
};

export default ItemCart;
