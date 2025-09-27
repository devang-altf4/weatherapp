import React from 'react';
import { useWeather } from "../context/Weather";
import Loading from './Loading'; // Import your Loading component

const Card = () => {
  const weather = useWeather();

  
  if (weather.loading) {
    return (
      <div className="card">
        <Loading size={50} color="#3498db" />
        <h2>Loading weather data...</h2>
      </div>
    );
  }

  if (weather.error) {
    return (
      <div className="card">
        <h2>Error: {weather.error}</h2>
        <p>Please try again</p>
      </div>
    );
  }

  if (!weather.weatherdata) {
    return (
      <div className="card">
        
        <p>Search for a city to get started</p>
      </div>
    );
  }

  return (
    <div className="card">
      <img src={weather.weatherdata?.current?.condition?.icon} alt="weather icon" />
      <h2>
        {weather.weatherdata?.current?.temp_c}°C
        {weather.showWarning && " (might not be accurate)"}
      </h2>
      <p>{weather.weatherdata?.location?.name}</p>
    </div>
  );
};

export default Card;
