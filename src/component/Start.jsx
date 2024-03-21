import React from 'react'
import '../Style/Start.css'
import Hurricane from '../Weather_Img/Hurricane.png';
import clearSky from '../Weather_Img/clear-sky.png';
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
import sleet from '../Weather_Img/sleet.png';
import snow from '../Weather_Img/snow.png';
import sunny from '../Weather_Img/sunny.png';
import thunderstorm from '../Weather_Img/thunderstorm.png';
import windy from '../Weather_Img/windy.png';


const Start = ({dispatch}) => {


    const images = [ Hurricane, clearSky,coldWave, drizzle,dustSandstorm, fog,freezingRain,haze,mist,mostlyCloud,partlyCloud,overcast,rain,sandstorm,sleet, snow, sunny,thunderstorm, windy ];

  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };

  return (
    <div className="start">

        <div className="heading1">
            <img src={getRandomImage()} className="random-image" alt="cloud" />
        </div>      


        <div className="heading2">
            <h1 className="daily">Daily Weather</h1>
            <br />
            <h4 className="info">Get to know about weather maps and radar precipitation forecast</h4>      
        </div>


        <div className="heading3">
            <button className="btn" onClick={() => dispatch({ type: "start" })} >Get Started</button>      
        </div>


    </div>
  )
}

export default Start
