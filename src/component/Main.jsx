import React from 'react'
import Information from '../component/Information'
import Search from '../component/Search'
import '../Style/Main.css'

const Main = ({data, error, setCityName,onedata}) => {
    
  return (
    <div className="main">
      

      <div className="search">
        <Search onedata={onedata} data={data} setCityName={setCityName} />
      </div>
      
      <div className="information">
        <Information onedata={onedata} data={data} error={error} />
      </div>

      

    </div>
  )
}

export default Main
