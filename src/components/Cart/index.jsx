import React from 'react';

// import CSS
import './style.css';

// import images
import emptyCart from '../../../public/assets/images/illustration-empty-cart.svg';

const Cart = () => {
    return (
        <>
            <aside className="cartContainer">
                <h2 className="cartTitle">Your Cart (0)</h2>
                <img className="cartImage" src={emptyCart} alt="Empty cart" />
                <p className="cartInfo">Your added items will appear here</p>
            </aside>
        </>
    );
};

export default Cart;
