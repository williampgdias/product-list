import React from 'react';
import './App.css';

// import components
import Cards from './components/Cards';
import Cart from './components/Cart';

function App() {
    return (
        <>
            <div className="container">
                <Cards />
                <Cart />
            </div>
        </>
    );
}

export default App;
