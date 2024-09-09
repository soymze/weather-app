// components/weatherContext.js
import React, { createContext, useState, useEffect } from 'react';
import { getWeatherData } from '../api/weatherApi';

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('Istanbul');

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const data = await getWeatherData(city);
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, [city]);

  return (
    <WeatherContext.Provider value={{ weatherData, setCity }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;
