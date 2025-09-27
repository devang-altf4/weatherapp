import React from 'react'
import {useWeather} from "../context/Weather"

const Card = () => {
  const weather = useWeather();
  return (
    <div className="card">
        <img src={weather.weatherdata?.current?.condition?.icon} alt="weather icon" />
      <h2> {weather.weatherdata?.current?.temp_c} C (might not be accurate)</h2>
      <p>{weather.weatherdata?.location?.name}</p>
    </div>
  )
}

export default Card
