import React, { useState } from 'react';

// Import components
import FullCart from '../FullCart';

// import CSS
import './style.css';

// import images
import emptyCart from '../../../public/assets/images/illustration-empty-cart.svg';

const Cart = ({ isCartEmpty }) => {
    return (
        <>
            <aside className="cartContainer fixed-lg">
                {isCartEmpty ? (
                    <>
                        <h2 className="cartTitle">Your Cart (0)</h2>
                        <img
                            className="cartImage"
                            src={emptyCart}
                            alt="Empty cart"
                        />
                        <p className="cartInfo">
                            Your added items will appear here
                        </p>
                    </>
                ) : (
                    <FullCart />
                )}
            </aside>
        </>
    );
};

export default Cart;
