import React from 'react';
import Country from '../components/Country';

const CountryList = ({ countries, markAsVisited }) => {
  return (
    <div className="country-list">
      {countries.map(country => (
        <Country key={country.cca3} country={country} markAsVisited={markAsVisited} />
      ))}
    </div>
  );
};

export default CountryList;