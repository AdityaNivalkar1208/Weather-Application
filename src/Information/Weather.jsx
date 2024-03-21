import React from 'react';
import '../Style/Weather.css'
import {PiThermometerHotLight} from "react-icons/pi";
import {WiHumidity, WiDayCloudyWindy} from "react-icons/wi";
import hurricane from '../Weather_Img/Hurricane.png';
import brokenCloud from '../Weather_Img/brokenclouds.png';
import clearsky from '../Weather_Img/clear-sky.png';
import coldWave from '../Weather_Img/cold-wave.png';
import drizzle from '../Weather_Img/drizzle.png';
import dustSandstorm from '../Weather_Img/dust sandstorm.png';
import fog from '../Weather_Img/fog.png';
import freezingRain from '../Weather_Img/freezing rain.png';
import haze from '../Weather_Img/haze.png';
import mist from '../Weather_Img/mist.png';
import mostlyCloud from '../Weather_Img/mostly-cloud.png';
import partlyCloud from '../Weather_Img/partly-cloudy.png';
import overcast from '../Weather_Img/overcast.png';
import rain from '../Weather_Img/rain.png';
import sandstorm from '../Weather_Img/sandstorm.png';
import shower from '../Weather_Img/shower.png';
import sleet from '../Weather_Img/sleet.png';
import snow from '../Weather_Img/snow.png';
import sunny from '../Weather_Img/sunny.png';
import thunderstorm from '../Weather_Img/thunderstorm.png';
import windy from '../Weather_Img/windy.png';
import scatteredClouds from '../Weather_Img/scatteredClouds.png';

const Weather = ({onedata}) => {

  const images = {
        "broken clouds" : brokenCloud,
        "hurricane": hurricane,
        "clear sky": clearsky,
        "cold wave": coldWave,
        "drizzle": drizzle,
        "dust sandstorm": dustSandstorm,
        "fog": fog,
        "freezing rain": freezingRain,
        "haze": haze,
        "mist": mist,
        "mostly cloud": mostlyCloud,
        "partly cloud": partlyCloud,
        "overcast": overcast,
        "rain": rain,
        "sandstorm": sandstorm,
        "shower": shower,
        "sleet": sleet,
        "snow": snow,
        "sunny": sunny,
        "thunderstorm": thunderstorm,
        "windy": windy,
        "scattered clouds": scatteredClouds
    };

  
  const {temp,humidity,pressure} = onedata.main;
  const {speed} = onedata.wind;

  const temperature = (temp - 273.15).toFixed(2)
  const todayTemp = Math.round(temperature)

  const windSpeed = speed.toFixed(2);

  return (
    <div className='weather-part'>
      
      <div className="cloud-temp">
        <img src={images[onedata.weather[0].description] || haze} className='one-img' alt="cloud"/>
        <h3 className='temp'>{todayTemp}°C</h3>
      </div>

      <div className="sub-section">
        
        <div className="curr">
          <p><PiThermometerHotLight className="icons"/></p>
          <p className="curr-text">{pressure} Pa</p>
          <p className='name'>Pressure</p>
        </div>

        <div className="curr">
          <p><WiHumidity className="icons"/></p>
          <p className='curr-text'>{humidity}%</p>
          <p className='name'>Humidity</p>
        </div>

        <div className="curr">
          <p><WiDayCloudyWindy className="icons"/></p>
          <p className='curr-text'>{windSpeed} km/hr</p>
          <p className='name'>Wind</p>
        </div>

      </div>


    </div>
  );
}

export default Weather;

