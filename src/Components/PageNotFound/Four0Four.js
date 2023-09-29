import React, { useState, useEffect } from 'react';
import './Four0Four.css';

function Four0Four() {
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
        <div className='E404'>
          <h1>OOPS Page Not Found</h1>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScp42YAT5fDOkKrWoa8w8xvysIDo2MKoL-dg&usqp=CAU' alt='404' />
        </div>
      )}
    </div>
  );
}

export default Four0Four;
