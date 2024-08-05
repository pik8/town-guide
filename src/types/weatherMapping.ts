import { IconType } from 'react-icons';
import {
    TiWeatherCloudy,
    TiWeatherDownpour,
    TiWeatherNight,
    TiWeatherPartlySunny,
    TiWeatherShower,
    TiWeatherSnow,
    TiWeatherStormy,
    TiWeatherSunny,
    TiWeatherWindy,
    TiWeatherWindyCloudy
} from 'react-icons/ti';

export const weatherIconMapper = new Map<string, IconType>([
    ['cloudy', TiWeatherCloudy],
    ['heavy-rain', TiWeatherDownpour],
    ['night', TiWeatherNight],
    ['partly-sunny', TiWeatherPartlySunny],
    ['rain', TiWeatherShower],
    ['snow', TiWeatherSnow],
    ['storm', TiWeatherStormy],
    ['sunny', TiWeatherSunny],
    ['windy', TiWeatherWindy],
    ['windy-cloudy', TiWeatherWindyCloudy],
]);
