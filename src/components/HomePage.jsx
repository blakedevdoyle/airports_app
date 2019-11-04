import React, { useState, useEffect } from 'react';
import ReactLoading from 'react-loading';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './HomePage.scss';

export const HomePage = () => {
  const [airportData, setAirportData] = useState();
  const [apiError, setApiError] = useState();

  // Fetch from url and store results in state and in localStorage
  const fetchData = async() => {      
    await axios.get('https://api.qantas.com/flight/refData/airport')
    .then(res =>  {
      setAirportData(res.data.splice(0,99));
      localStorage.setItem("airports", JSON.stringify(res.data.splice(0,99)));
    })
    .catch(err => setApiError(err));
  };

  // Check if there is localStorage. If not, runs fetchData function to fetch from url
  useEffect(() => {    
    const data = localStorage.getItem("airports");
    if (data) {
      setAirportData(JSON.parse(data));
    } else {
      setTimeout(() => { fetchData(); }, 3000)
    }
  }, []);

  // If an error returns from the get request, log that to the screen
  if (apiError) {
    return <div>{apiError}</div>
  }

  // If there is no error, map the objects to the screen
  if (!apiError) {
    return (
      <div className="page-container">
        <h2 className="page-title">Airports</h2>
        {airportData ? (
          airportData.map(item => (
            <div key={item.airportCode} className="airport-item-container">
              <div className="details-container">
                <span className="airport-name">{item.airportName}</span>
                <span className="country-name">{item.country.countryName}</span>
              </div>
                <div className="view-item-button">
                  <Link to={{
                    pathname: `/airport/${item.airportCode}`,
                    query:{
                      airport: item,
                    }}}>
                      >
                    </Link>
                </div>
            </div>
          ))
        ) : <ReactLoading type="spin" color="red" height={50} width={50} className="loader" />}
      </div>
    );
  };
  return null;
}