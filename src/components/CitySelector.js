// components/citySelector.js
import React, { useContext } from 'react';
import WeatherContext from './weatherContext';

const cities = [
  'Istanbul',
  'Ankara',
  'Izmir',
  'Bursa',
  'Antalya'
];

const CitySelector = () => {
  const { setCity } = useContext(WeatherContext);

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <select onChange={handleChange}>
      {cities.map((city, index) => (
        <option key={index} value={city}>
          {city}
        </option>
      ))}
    </select>
  );
};

export default CitySelector;
