import React from 'react';
import '../Style/Feature.css';
import {PiThermometerHotLight} from "react-icons/pi";
import { WiHumidity,WiDayCloudyWindy } from "react-icons/wi";

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

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode,Pagination } from 'swiper/modules';

const Feature = ({data}) => {

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
        "windy": windy
    };

    const formatTime = (dateTimeStr) => {
        const date = new Date(dateTimeStr);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
        const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
        return `${formattedHours}:${formattedMinutes} ${ampm}`;
    }

  return (
    <>
      
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
        >       
              
              {data.list.map((forecast, index) => (
                  <SwiperSlide className="swiperjs" key={index}>
                      <div className="timezone">    
                          
                          <div className="block1">
                              <img src={images[forecast.weather[0].description] || haze} alt={forecast.weather[0].description} className="feature-img"/>
                          </div>

                          <div className="block2">
                              <h2 className='formattime'>{formatTime(forecast.dt_txt)}</h2>
                              <p className='feature-temp'>{(forecast.main.temp - 273.15).toFixed(2)}°C</p>
                          </div>
                          
                      </div>

                      <div className="phw">
                          <div className="cal1">
                            <p className='feature-icon'><PiThermometerHotLight className="icons-phw"/></p>  
                            <p className="cal">{forecast.main.pressure} pa</p>
                            <p className="infos">Pressure</p>  
                          </div>
                          <div className="cal1">
                            <p className='feature-icon'><WiHumidity className="icons-phw"/></p>  
                            <p className="cal">{forecast.main.humidity}%</p>
                            <p className="infos">Humidity</p>  
                          </div>
                          <div className="cal1">
                            <p className='feature-icon'><WiDayCloudyWindy className="icons-phw"/></p>  
                            <p className="cal">{forecast.wind.speed} km/hr</p>
                            <p className="infos">Wind</p>
                          </div>

                      </div>
                            
                        </SwiperSlide>
                    ))}

              

        </Swiper>
          
    </>
  );
}

export default Feature;
