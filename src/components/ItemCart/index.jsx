// ItemCart.jsx
import React, { useState } from 'react';

// Import CSS
import './style.css';

// Import images
import decrementImage from '../../../public/assets/images/icon-decrement-quantity.svg';
import incrementImage from '../../../public/assets/images/icon-increment-quantity.svg';

// Import components
import EmptyCart from '../EmptyCart';

const ItemCart = ({ setIsCartEmpty }) => {
    const [quantity, setQuantity] = useState(1);

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        } else {
            setQuantity(0);
            setIsCartEmpty(true);
        }
    };

    if (quantity === 0) {
        return <EmptyCart setIsCartEmpty={setIsCartEmpty} />;
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
