// components/weatherAPI.js
import axios from 'axios';

const API_KEY = '62e3d98f5d881d65e694306b93695a2b';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/';

export const getWeatherData = async (city) => {
  const response = await axios.get(`${BASE_URL}weather`, {
    params: {
      q: city,
      appid: API_KEY,
      units: 'metric',
    },
  });
  return response.data;
};
