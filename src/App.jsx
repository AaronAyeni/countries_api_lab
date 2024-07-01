import React, { useState, useEffect } from 'react';
import CountryList from './containers/CountryList';
import VisitedCountries from './containers/VisitedCountries';
import './App.css';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => setCountries(data));
  }, []);

  const markAsVisited = (country) => {
    setVisitedCountries([...visitedCountries, country]);
  };

  return (
    <div className="App">
      <h1>Country Bucket List</h1>
      <CountryList countries={countries} markAsVisited={markAsVisited} />
      <VisitedCountries visitedCountries={visitedCountries} />
    </div>
    
  )
}

export default App
