import React, { useState, useEffect } from 'react';
import './Alert.css';

function Alert(props) {
  const [isVisible, setIsVisible] = useState(false);

  const showPopup = () => {
    setIsVisible(true);

    setTimeout(() => {
      setIsVisible(false);
    }, 5000); // Set the duration for 5 seconds (5000 milliseconds)
  };
  console.log('onClick')
  return (
    <div>
      <button onClick={showPopup}>Show Alert</button>

      {isVisible && (
        <div className="popup-container">
          <div className="popup">
            {props.message}
          </div>
        </div>
      )}
    </div>
  );
}

export default Alert;
