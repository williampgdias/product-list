// ItemCart.jsx
import React, { useState } from 'react';

// Import CSS
import './style.css';

// Import images
import decrementImage from '../../../public/assets/images/icon-decrement-quantity.svg';
import incrementImage from '../../../public/assets/images/icon-increment-quantity.svg';

// Import components
import EmptyCart from '../EmptyCart';

const ItemCart = () => {
    const [quantity, setQuantity] = useState(1);

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    if (quantity === 0) {
        return <EmptyCart />;
    }

    return (
        <div className="itemCartContainer">
            <button className="itemCart">
                <img
                    className="btnQuantity decrementQuantity"
                    src={decrementImage}
                    onClick={decrementQuantity}
                />
                <p className="cardQuantity">{quantity}</p>
                <img
                    className="btnQuantity incrementQuantity"
                    src={incrementImage}
                    onClick={incrementQuantity}
                />
            </button>
        </div>
    );
};

export default ItemCart;
