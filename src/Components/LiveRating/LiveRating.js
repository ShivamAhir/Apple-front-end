import React, { useState, useEffect, useCallback } from 'react';
import ProductRating from '../Product-Rating/ProductRating';
import './LiveRating.css';

function LiveRating(props) {
  const [data, setData] = useState([]);
  
  // Define fetchData as a useCallback
  const fetchData = useCallback(() => {
    fetch(`/api/RatingBox/${props.product}`)
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
  }, [props.product]);

  // Fetch data when the component mounts and update the 'data' state
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Fetch data at regular intervals (e.g., every 5 seconds) and update the 'data' state
  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchData();
    }, 5000); // Fetch data every 5 seconds

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, [fetchData]);

  // Calculate the average rating
  const averageRating = data.reduce((sum, item) => sum + (item.rating) * 1, 0) / data.length;

  return (
    <ProductRating rating={averageRating}></ProductRating>
  );
}

export default React.memo(LiveRating);
