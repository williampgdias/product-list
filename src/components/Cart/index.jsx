import React from 'react';

// Import Bootstrap

// import CSS
import './style.css';

// import images
import emptyCart from '../../../public/assets/images/illustration-empty-cart.svg';

const Cart = () => {
    return (
        <>
            <aside className="cartContainer fixed-lg">
                <h2 className="cartTitle">Your Cart (0)</h2>
                <img className="cartImage" src={emptyCart} alt="Empty cart" />
                <p className="cartInfo">Your added items will appear here</p>
            </aside>

            <div>
                <button
                    className="btn btn-primary d-xl-none"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasCart"
                    aria-controls="offcanvasCart"
                >
                    Open Cart
                </button>

                <div
                    className="offcanvas offcanvas-end"
                    tabIndex="-1"
                    id="offcanvasCart"
                    aria-labelledby="offcanvasCartLabel"
                >
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasCartLabel">
                            Your Cart (0)
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="offcanvas-body">
                        {/* Aqui você coloca o conteúdo do seu carrinho */}
                        <img className="" src={emptyCart} alt="Empty cart" />
                        <p className="cartInfo">
                            Your added items will appear here
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cart;
