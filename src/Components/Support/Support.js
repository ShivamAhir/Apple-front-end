import React, { useState, useEffect } from 'react';
import './Support.css';

function Support() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // You can handle form submission logic here, such as sending an email
    // or performing other actions with the form data.
  };

  return (
    <div>
      {isLoading ? (
        <div className='loading-page'>
          <img src='https://i.gifer.com/origin/b4/b4d657e7ef262b88eb5f7ac021edda87.gif' alt="Loading" />
        </div>
      ) : (
        <div className="supprt-main-page">
          <h1 id="heading">How can we help you?</h1>
          <p>
            <i class="fa-solid fa-phone"></i>
            <a className="contact" href="tel:+917701891644">
              Call us
            </a>
          </p>
          <p>
            <i className="fa-solid fa-envelope"></i>
            <a className="contact" href="mailto:11shivam00@gmail.com">
              Mail us
            </a>
          </p>
          <form onSubmit={handleFormSubmit}>
            <div className="form-child">
              <label className="customer-name-label">Customer Name:</label>
              <input
                className="customer-name"
                type="text"
                name="sname"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="form-child">
              <label className="customer-complain-label">Customer Complain:</label>
              <br />
              <input
                className="costomer-feedbak"
                type="text"
                name="ssubject"
                placeholder="Customer Feedback"
              />
            </div>
            <div className="form-child">
              <input
                className="mail-submit-button"
                type="submit"
                value="Send"
              />
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Support;
