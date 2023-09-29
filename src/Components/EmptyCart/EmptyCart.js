import React, { useState, useEffect } from 'react';
import './EmptyCart.css';

function EmptyCart() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className='loading-page'>
          <img
            src='https://i.gifer.com/origin/b4/b4d657e7ef262b88eb5f7ac021edda87.gif'
            alt='Loading'
          />
        </div>
      ) : (
        <div className="empty-page">
          <div>
            <h1 className='cartmessage'>Your cart is empty</h1>
          </div>
          <div>
            <img src="https://img.freepik.com/free-photo/person-shopping_1048-1695.jpg?size=626&ext=jpg" alt="empty-cart" />
          </div>
        </div>
      )}
    </div>
  );
}

export default EmptyCart;
