import React, { Component } from 'react';
import EmptyCart from '../EmptyCart/EmptyCart';
import BuyComponent from './BuyComponent';
import PriceBox from './PriceBox';
import './Buys.css';

class Buy extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
      isLoading: true, // Add isLoading state
    };
  }

  fetchData = () => {
    fetch('/api/buy')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  componentDidMount() {
    // Fetch data initially when the component mounts
    this.fetchData();

    // Fetch data at regular intervals (e.g., every 5 seconds)
    this.intervalId = setInterval(() => {
      this.fetchData();
    }, 5000); // Fetch data every 5 seconds

    // Set isLoading to true initially, then after 0.5 seconds, set it to false
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 500);
  }

  componentWillUnmount() {
    // Clear the interval when the component unmounts
    clearInterval(this.intervalId);
  }

  render() {
    const { data, isLoading } = this.state;

    if (isLoading) {
      // Render the loading animation for 0.5 seconds
      return (
        <div className='loading-page'>
          <img src='https://i.gifer.com/origin/b4/b4d657e7ef262b88eb5f7ac021edda87.gif' alt='Loading' />
        </div>
      );
    }

    if (data === null) {
      // Render a loading state or return null if you prefer
      return null;
    }

    // Check if data is an array before mapping over it
    if (!Array.isArray(data)) {
      return <EmptyCart></EmptyCart>;
    }

    const priceArr = [];
    for (let i = 0; i < data.length; i++) {
      priceArr.push(data[i].price);
    }

    var totalPrice = 0;
    for (let i = 0; i < priceArr.length; i++) {
      var temp = priceArr[i];
      let sum = 0;
      for (let j = 0; j < temp.length; j++) {
        if (temp[j] >= '0' && temp[j] <= '9') {
          sum *= 10;
          sum += parseInt(temp[j]); // Parse to integer instead of subtracting '0'
        } else continue;
      }
      totalPrice += sum;
    }

    return (
      <div>
        {data.length === 0 ? (
          <EmptyCart></EmptyCart>
        ) : (
          <div id="cart-box">
            <div>
              <p className='shopping-cart'>Shopping Cart</p>
              {data.map((item, index) => (
                <div key={index}>
                  <BuyComponent
                    name={item.name}
                    price={item.price}
                    size={item.size}
                    display={item.display}
                    link={item.link}
                    product_id={item._id}
                    fetchData={this.fetchData} // Pass the fetchData function
                    product={item.Product_id}
                  />
                </div>
              ))}
            </div>
            <div>
              <PriceBox item={data.length} amount={totalPrice}></PriceBox>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Buy;
