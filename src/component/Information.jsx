import React from 'react'
import Location from '../Information/Location'
import Weather from '../Information/Weather'
import Feature from '../Information/Feature'
import '../Style/Information.css'

const Information = ({data,onedata}) => {
  return (
    <div className="information-section">
      
      <div className="loc-name">
        <Location data={data}/>
      </div>

      <div className="weather-data">
        <Weather onedata={onedata} data={data}/>
      </div>

      <div className="feature">
        <Feature data={data}/>
      </div>

    </div>
  )
}

export default Information
