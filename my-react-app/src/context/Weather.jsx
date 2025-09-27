import { createContext, useContext, useState } from "react";
import { getWeatherDataForCity } from "../api/index";

const WeatherContext = createContext(null);

export const WeatherProvider = ({ children }) => {
  const [weatherdata, setWeatherdata] = useState(null);
  const [searchedCity, setSearchedCity] = useState("");

  const fetchWeatherData = async (city) => {
    const data = await getWeatherDataForCity(city);
    setWeatherdata(data);
  };

  return (
    <WeatherContext.Provider value={{ weatherdata, setWeatherdata , searchedCity, setSearchedCity, fetchWeatherData }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => {
  return useContext(WeatherContext);
};