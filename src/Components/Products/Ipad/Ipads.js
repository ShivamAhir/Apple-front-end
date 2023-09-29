import React, { Component } from 'react';
import Content from '../../Content/Content';
import './Ipads.css'


class Ipads extends Component {
  constructor() {
    super();
    this.state = {
      data: null, 
    };
  }

  componentDidMount() {
    fetch('/api/ipad')
      .then((response) => response.json()) 
      .then((data) => {
        this.setState({ data });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }
  
  render() {
    const { data } = this.state; 

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
                productLink={`ipad/id=${index+1}`}
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

export default Ipads;
