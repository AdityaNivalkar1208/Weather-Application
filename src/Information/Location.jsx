import React from 'react';
import '../Style/Location.css'
import { FaLocationDot } from "react-icons/fa6";

const Location = ({data}) => {


  const {name, country} = data.city;

  const today = new Date();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayOfWeek = days[today.getDay()];
  const date = today.getDate();
  const month = today.toLocaleString('default', { month: 'long' });
  const year = today.getFullYear();

  const formattedDate = `${dayOfWeek}, ${date} ${month} ${year}`;

  return (
    <div className="location-section">
      
      <div className="location">
        <FaLocationDot className='loc'/>
        <p className="city-name">{name}</p>
        <p className="country-name">{",  "}<strong>{country}</strong></p>
      </div>

      <div className="date">
        <p className="formatedDate">{formattedDate}</p>
      </div>


    </div>
  );
}

export default Location;
