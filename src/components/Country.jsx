import React from 'react';

const Country = ({ country, markAsVisited }) => {
  return (
    <div className="country">
      <h2>{country.name.common}</h2>
      <p>Capital: {country.capital ? country.capital[0] : 'N/A'}</p>
      <p>Region: {country.region}</p>
      <a href={`https://www.google.com/maps?q=${country.name.common}`} target="_blank">View on Map</a>
      <button onClick={() => markAsVisited(country)}>Mark as Visited</button>
    </div>
  );
};

export default Country;