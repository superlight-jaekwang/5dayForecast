import axios from 'axios';

const API_KEY = '219c713e690615edefb1f5a3ef5130ef';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},gb`;
    const request = axios.get(url);
    console.log(request)
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}