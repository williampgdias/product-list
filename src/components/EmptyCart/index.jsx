import React, { useState } from 'react';

// Import componentes
import ItemCart from '../ItemCart';

// import images
import addToCart from '../../../public/assets/images/icon-add-to-cart.svg';

const EmptyCart = ({ setIsCartEmpty }) => {
    const [isItemAdded, setIsItemAdded] = useState(false);

    const handleClick = () => {
        setIsItemAdded(true);
        setIsCartEmpty(false);
    };

    if (isItemAdded) {
        return <ItemCart setIsCartEmpty={setIsCartEmpty} />;
    }

    return (
        <div className="cardButtonContainer">
            <button className="cardButton" onClick={handleClick}>
                <img className="mr-2" src={addToCart} alt="Add to cart" />
                <p className="cardText">Add to Cart</p>
            </button>
        </div>
    );
};

export default EmptyCart;
