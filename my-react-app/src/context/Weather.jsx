import { createContext, useContext, useState } from "react";
import { getWeatherDataForCity } from "../api/index";

const WeatherContext = createContext(null);

export const WeatherProvider = ({ children }) => {
  const [weatherdata, setWeatherdata] = useState(null);
  const [searchedCity, setSearchedCity] = useState("");
  const [showWarning, setShowWarning] = useState(false);
  const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);

const fetchWeatherData = async (city) => {
  setLoading(true);
  setError(null); 
  
  try {
    const data = await getWeatherDataForCity(city);
    setWeatherdata(data);
  } catch (err) {
    setError(err.message);
    console.error('Error fetching weather data:', err);
  } finally {
    setLoading(false); 
  }
};

  return (
    <WeatherContext.Provider value={{ weatherdata, setWeatherdata , searchedCity, setSearchedCity, fetchWeatherData, showWarning, setShowWarning , loading, setLoading,error,setError}}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => {
  return useContext(WeatherContext);
};