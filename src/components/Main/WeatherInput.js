import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import classes from "./WeatherInput.module.css";

const WeatherInput = ({ setCity }) => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    setCity(inputValue);
    setInputValue("");
  };

  const handleCurrentLocation = () => {
    if (navigator.geolocation) {
      setLoading(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          
          fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=d382d13da0899e15dd3a2805323e76b0`)
            .then((response) => response.json())
            .then((data) => {
              const cityName = data[0]?.name;
              if (cityName) {
                setCity(cityName);
              } else {
                setError('Could not determine the city name.');
              }
            })
            .catch((error) => {
              console.error(error);
              setError('Error fetching current location.');
            })
            .finally(() => {
              setLoading(false);
            });
        },
        (error) => {
          console.error(error);
          setError('Error getting current position.');
          setLoading(false);
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.main}>
        <input
          type="text"
          placeholder="Enter your location"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleSearch}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
        <div className={classes.separate}></div>
        <button onClick={handleCurrentLocation}>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
        </button>
      </div>
      {loading && <p className={classes.loading}>Loading...</p>}
        {error && <p className={classes.error}>{error}</p>}
    </div>
  );
};

export default WeatherInput;
