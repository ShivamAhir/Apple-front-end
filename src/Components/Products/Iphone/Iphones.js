import React, { Component } from 'react';
import Content from '../../Content/Content';
import './Iphones.css';


class Iphones extends Component {
  constructor() {
    super();
    this.state = {
      data: null, // Change the state property name to 'data'
    };
  }

  componentDidMount() {
    fetch('/api/iphone')
      .then((response) => response.json()) // Use .json() to parse JSON data
      .then((data) => {
        this.setState({ data }); // Update the state with the JSON data
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }
  
  render() {
    const { data } = this.state; // Destructure the data from state

    return (
      <div className="main-div">
        {data ? (
        <div>
          {data.map((item, index) => (
            <div key={index}>
              <Content
                name={item.name}
                stock={item.bool ?"Out Of Stock":"In Stock"}
                price={item.price}
                size={item.size}
                display={item.display}
                imageLink={item.link}
                productLink={`iphone/id=${index+1}`}
              ></Content>
            </div>
          ))}
        </div>
      ) : (
        <div className='loading-page'>
          <img src='https://i.gifer.com/origin/b4/b4d657e7ef262b88eb5f7ac021edda87.gif'></img>
        </div>
      )}
      </div>
    );
  }
}

export default Iphones;
