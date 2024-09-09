// App.js
import React, { useContext } from 'react';
import WeatherContext from './components/weatherContext';
import CitySelector from './components/CitySelector';
import './App.css';

const App = () => {
  const { weatherData } = useContext(WeatherContext);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <div className='weather-card'>
      <h1>Weather Data</h1>
      <CitySelector />
      <p>Temperature: {weatherData.main.temp} °C</p>
      <p>Feels Like: {weatherData.main.feels_like} °C</p>
      <p>Weather: {weatherData.weather[0].description}</p>
      <p>Humidity: {weatherData.main.humidity}%</p>
      <p>Wind Speed: {weatherData.wind.speed} m/s</p>
    </div>
  );
};

export default App;
