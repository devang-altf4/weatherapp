import React from 'react'
import {useWeather} from "../context/Weather"


const Input = (props) => {
  const weather = useWeather();
  
  
  const handleChange = (e) => {
    weather.setSearchedCity(e.target.value);
 
  }
 
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      weather.fetchWeatherData(weather.searchedCity);
      weather.setShowWarning(true);
    }
  }

  return (
    
      <input className="input-field" 
      type="text" placeholder="Enter city name"
       value={weather.searchedCity} 
       onChange={handleChange}
        onKeyDown={handleKeyDown}
        />
       
    
  )
}

export default Input
