import React, { useState } from 'react';
import './App.css';

// import components
import Cards from './components/Cards';
import Cart from './components/Cart';

function App() {
    const [isCartEmpty, setIsCartEmpty] = useState(true);

    return (
        <>
            <div className="container">
                <Cart isCartEmpty={isCartEmpty} />
                <Cards setIsCartEmpty={setIsCartEmpty} />
            </div>
        </>
    );
}

export default App;
