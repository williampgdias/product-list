import React, { useState } from 'react';

// Import CSS
import './style.css';

// Import images
import decrementImage from '../../../public/assets/images/icon-decrement-quantity.svg';
import incrementImage from '../../../public/assets/images/icon-increment-quantity.svg';

const ItemCart = () => {
    const [increment, setIncrement] = useState(0);

    const incrementQuantity = () => {
        setIncrement(increment + 1);
    };

    const decrementQuantity = () => {
        if (increment > 0) {
            setIncrement(increment - 1);
        }
    };

    return (
        <div className="itemCartContainer">
            <button className="itemCart">
                <img
                    className="btnQuantity decrementQuantity"
                    src={decrementImage}
                    onClick={decrementQuantity}
                />
                <p className="cardQuantity">{increment}</p>
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
