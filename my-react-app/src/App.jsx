import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Input from './components/Input'
import Button from './components/Button'
import { useWeather } from './context/Weather'



function App() {
  const weather = useWeather();
  console.log(weather);
  return (
    <>
    <div className="app">
       <h1>Weather App</h1>
       <Input placeholder="Enter city name" />
      <Button  onClick={() => weather.fetchWeatherData(weather.searchedCity)} value="Search"/>
      <Card />
      <Button onClick={() => window.location.reload()}value="Refresh" />



    </div>
     
    </>
  )
}

export default App
