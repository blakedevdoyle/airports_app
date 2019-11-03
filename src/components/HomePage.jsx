import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [airportData, setAirportData] = useState();
  const [apiError, setApiError] = useState();

  useEffect(() => {
    const fetchData = async() => {      
      await axios.get('https://api.qantas.com/flight/refData/airport')
      .then(res => setAirportData(res.data))
      .then(setLoading(false))
      .catch(err => setApiError(err));
    };

    if (loading) {
      fetchData();
    }
  }, [loading]);

  console.log(airportData);

  if (apiError) {
    return <div>{apiError}</div>
  }
  if (!apiError) {
    return (
      <div>
        {airportData ? (
          airportData.map(item => (
            <div key={item.airportCode}>
              <span>{item.airportName}</span>
              <span>{item.country.countryName}</span>
            </div>
          ))
        ) : <h1>Loading component</h1>}
      </div>
    );
  };
  return null;
}