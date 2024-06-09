import { useState } from 'react';
import './App.css';
import WeatherInput from './components/Main/WeatherInput';
import Navbar from './components/Navbar/Navbar';
import Weather from './components/Weather/Weather';

function App() {

  const [city, setCity] = useState('delhi');

  return (
   <>
   <Navbar/>
   <WeatherInput setCity={setCity}/>
   <Weather city={city}/>
   </>
  );
}

export default App;
