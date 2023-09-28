// ProductDetails.js

import React, { useState, useEffect } from 'react';
import './ProductDetails.css';
import CommentBox from '../../Comment-box/Comment-box';
import OldComments from '../OldComments/OldComment';
import LiveRating from '../LiveRating/LiveRating';

function ProductDetails(props) {
  const [data, setData] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false); // Track form submission
  const itemId = window.location.pathname.split('/').pop();

  useEffect(() => {
    if (itemId) {
      fetch(`/api/${props.product}/${itemId}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((fetchedData) => {
          setData(fetchedData);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }
  }, [props.product, itemId]);

  const addToCart = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`/api/${props.product}/${itemId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Handle success, if needed
    } catch (error) {
      console.error('Error:', error);
      // Handle the error, e.g., display an error message to the user
    }
  };

  const setCurrentURL = () => {
    // You can use window.location.href to get the current URL
    // Example: window.location.href
  };

  const { link, name, price, bool, display, size, _id, alreadyComment } = data;
  const stock = bool ? <p id="out-of-stock">Out Of Stock</p> : <p id="in-stock">In Stock</p>;

  return (
    <div>
      <div className="container">
        <div className="container-one">
          <div>
            <img id="product-logo" className="product-logo" alt="product-logo" src={link} />
          </div>
          {bool ? (
            <div></div>
          ) : (
            <div className="button-div">
              <div className="add-to-cart-button">
                <form id="form" method="post" action={setCurrentURL}>
                  <button className="add-to-cart" onClick={addToCart}>
                    ADD TO CART
                  </button>
                </form>
              </div>
              <div className="buy-button">
                <form action="/buy" method="post" onSubmit={setCurrentURL}>
                  <button className="buy-now" type="submit">
                    BUY NOW
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
        <div className="container-two">
          <div>
            <div>
              {stock}
              <h1 id="product-name">{name}</h1>
              <p id="product-size">{size}</p>
              <p id="product-display">{display}</p>
              <p>
                Price: <i className="fa-sharp fa-solid fa-indian-rupee-sign" style={{ color: '#000000' }}></i>
                <span id="product-price">{price}</span>
              </p>
              <LiveRating product={_id}></LiveRating>
            </div>
          </div>
        </div>
      </div>
      
      {/* Conditionally render CommentBox based on formSubmitted and alreadyComment */}
      {!formSubmitted && !alreadyComment && (
        <CommentBox onFormSubmit={() => setFormSubmitted(true)} product_id={_id} />
      )}

      <OldComments product={_id}></OldComments>
    </div>
  );
}

export default ProductDetails;
