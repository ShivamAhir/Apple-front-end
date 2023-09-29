import React from 'react';
import './BuyComponent.css';
import LiveRating from '../LiveRating/LiveRating';

function BuyComponent(props) {
  const handleDelete = () => {
    // Send a delete request to your API
    fetch(`/api/delete/${props.product_id}`, {
      method: 'POST',
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.message === 'Successfully deleted') {
          // If the delete operation is successful, call the fetchData function
          props.fetchData();
        } else {
          console.error('Product not found');
        }
      })
      .catch((error) => {
        console.error('Error deleting product:', error);
      });
  };

  return (
    <div className="left-box-cart">
      <hr />
      <div id="container-cart">
        <div id="product-image">
          <img className="product-logo" src={props.link} alt="product-image" />
        </div>
        <div id="product-description">
          <p>In stock</p>
          <LiveRating product={props.product}></LiveRating>
          <p>{props.name}</p>
          <p>{props.size}</p>
          <p>{props.display}</p>
        </div>
        <div className="trd-box">
          <p>Price: {props.price}</p>
          <p> Qty: <span>1</span></p>
          <button className="delete-button" type="submit" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default BuyComponent;
