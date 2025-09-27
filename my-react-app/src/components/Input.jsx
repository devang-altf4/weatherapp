import React from 'react'
import {useWeather} from "../context/Weather"


const Input = (props) => {
  const weather = useWeather();
  
  
  const handleChange = (e) => {
    weather.setSearchedCity(e.target.value);
    
  }

  return (
    
      <input className="input-field" 
      type="text" placeholder="Enter city name"
       value={weather.searchedCity} 
       onChange={handleChange}/>
    
  )
}

export default Input
