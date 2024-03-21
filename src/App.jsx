import React, {useState, useEffect, useReducer} from 'react';
import Start from './component/Start';
import Main from './component/Main';
import axios from 'axios';
import './App.css';


const initialState = {
  status: 'ready',
}

function reducer(state, action) {
  switch (action.type) {
    
    case "start":
      return {...state, status: "active"};
    
    default:
      throw new Error("Action unkonwn");

  }
}

function App() {

  const [data, setData] = useState(null);
  const [onedata, setOneData] = useState(null);
  const [ error, setError ] = useState(null);
  const [ city, setCityName ] = useState('pune');

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop === 0) {
        window.location.reload();
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    useEffect(() => {
    const fetchData = async () => {
      const API_KEY = process.env.REACT_APP_WEATHER_API
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=5&appid=${API_KEY}`)
        setData(response.data);
      } catch (error){
        setError(error);
      }
    }
    fetchData()
    }, [ city ])
  
    useEffect(() => {
      const fetchOneData = async () => {
        const API_KEY = process.env.REACT_APP_WEATHER_API
        try {
          const responses = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
          setOneData(responses.data);
        } catch (error){
          setError(error);
        }
      }
      fetchOneData()
    }, [ city ])
  


    const [{ status }, dispatch] = useReducer(
    reducer,
    initialState
    );
  
  


  return (
    <div className="App">

      {status === "ready" && <Start dispatch={dispatch} /> } 
      {status === "active" && <Main onedata={onedata} data={data} error={error} setCityName={setCityName} />}
      

    </div>

  );
}

export default App;
