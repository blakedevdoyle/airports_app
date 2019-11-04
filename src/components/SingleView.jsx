import React from 'react';
import { Link } from 'react-router-dom';
import './SingleView.scss';

export const SingleView = (props) => {
  const { airport } = props.location.query;

  return (
    <div className="single-view-container">
      <div className="single-view-title">
        <span className="airport-title">{airport.airportName}</span> - <span className="airport-value">{airport.airportCode}</span>
      </div>
      <ul className="airport-info-container">
        <li className="item">
          <span className="airport-title">Region - </span>
          <span className="airport-value">{airport.region.regionName}</span>
        </li>
        <li className="item">
          <span className="airport-title">Country - </span>
          <span className="airport-value">{airport.country.countryName}</span>
        </li>
        <li className="item">
          <span className="airport-title">City - </span> 
          <span className="airport-value">{airport.city.cityName}</span>
        </li>
        <li className="item">
          <span className="airport-title">Timezone - </span>
          <span className="airport-value">{airport.city.timeZoneName}</span>
        </li>
        <li className="item">
          <span className="airport-title">Location - </span>
          <span className="airport-value">lat: {airport.location.latitude}, lng: {airport.location.longitude}</span>
        </li>
      </ul>
      <div className="home-button-container">
        <Link to="/"><button type="button" className="home-button">Home</button></Link>
      </div>
    </div>
  );
};
