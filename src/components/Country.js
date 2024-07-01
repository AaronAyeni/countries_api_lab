import React from 'react';

const Country = ({ country, markAsVisited }) => {
  return (
    <div className="country">
      <h2>{country.name.common}</h2>
      <p>Capital: {country.capital ? country.capital[0] : 'N/A'}</p>
      <p>Region: {country.region}</p>
      <button onClick={() => markAsVisited(country)}>Mark as Visited</button>
    </div>
  );
};

export default Country;