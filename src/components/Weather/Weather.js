import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import classes from "./Weather.module.css";
import rain from "../../asset/rain.webp";
import cloud from "../../asset/clouds.webp";
import clear from "../../asset/clear.webp";
import rainIcon from "../../asset/rainIcon.png";
import lowTemp from "../../asset/lowTemp.png";
import highTemp from "../../asset/highTemp.png";
import sunset from "../../asset/sunset.png";
import sunrise from "../../asset/sunrise.png";
import humidity from "../../asset/humidity.png";
import pressure from "../../asset/pressure.png";
import longitude from "../../asset/longitude.png";
import latitude from "../../asset/latitude.png";
import windSpeed from "../../asset/windSpeed.png";
import Deg from "../../asset/Deg.png";
import gust from "../../asset/gust.png";
import cloudIcon from "../../asset/Haze.png";
import sunnyIcon from "../../asset/sunny.png";
import stormIcon from "../../asset/storm.png";

const Weather = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const apiKey = "d382d13da0899e15dd3a2805323e76b0";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

      try {
        const response = await axios.get(url);
        console.log(response.data,"Data")
        setWeatherData(response.data);
      } catch (error) {
        console.error("Error fetching the weather data", error);
      }
    };

    fetchWeather();
  }, [city]);

  if (!weatherData) {
    return <div style={{"textAlign":"center"}}>Loading...</div>;
  }

  const getBackgroundImage = (weather) => {
    const weatherMain = weather[0].main.toLowerCase();
    switch (weatherMain) {
      case "rain":
        return rain;
      case "clouds":
        return cloud;
      case "clear":
        return clear;
      default:
        return clear;
    }
  };
  const getWeatherIcon = (weather) => {
    const weatherMain = weather[0].main.toLowerCase();
    switch (weatherMain) {
      case "rain":
        return rainIcon;
      case "clouds":
        return cloudIcon;
      case "sunny":
        return sunnyIcon;
      case "heavy rain":
        return stormIcon;
      default:
        return sunnyIcon;
    }
  };

  const { main, weather, wind, sys, coord,name } = weatherData;
  const date = new Date();
  const backgroundImage = getBackgroundImage(weather);
  const weatherIcon = getWeatherIcon(weather);
  console.log(backgroundImage, "bI");
  return (
    <div
      className={classes.container}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={classes.boxContainer}>
        <div className={classes.boxOne}>
          <div className={classes.subBox}>
            <div className={classes.time}>
              {date.toDateString()} {date.toLocaleTimeString()}
            </div>
            <div className={classes.weatherIcon}>
              <img src={weatherIcon} alt="Weather Icon" />
              <span>{weather[0].description}</span>
            </div>
          </div>
          <div className={classes.secondBox}>
            <div style={{"fontSize":"20px","margin":"0 0 20px 0"}}><FontAwesomeIcon icon={faMapMarkerAlt} />{name}</div>
            <strong>{main.temp} °C</strong>
          </div>
        </div>
        <div className={classes.boxTwo}>
          <div className={classes.subBoxOne}>
            <ul className={classes.ul}>
              <li>
                <span className={classes.imgs}>
                  <img src={lowTemp} alt="Low Temperature" />
                </span>
                <div style={{ width: "100px" }}>
                  <span style={{ marginRight: "5px" }}>Min</span>
                  <span className={classes.colorYellow}>{main.temp_min}°</span>
                </div>
              </li>
              <li>
                <span className={classes.imgs}>
                  <img src={highTemp} alt="High Temperature" />
                </span>
                <div style={{ width: "100px" }}>
                  <span style={{ marginRight: "5px" }}>Max</span>
                  <span className={classes.colorYellow}>{main.temp_max}°</span>
                </div>
              </li>
            </ul>
          </div>
          <div className={classes.line}></div>
          <div className={classes.subBoxTwo}>
            <ul className={classes.ul}>
              <li>
                <span className={classes.imgs}>
                  <img src={sunrise} alt="Sunrise" />
                </span>
                <span>Rise</span>
                <span className={classes.colorYellow}>
                  {new Date(sys.sunrise * 1000).toLocaleTimeString()}
                </span>
              </li>
              <li>
                <span className={classes.imgs}>
                  <img src={sunset} alt="Sunset" />
                </span>
                <span>Set</span>
                <span className={classes.colorYellow}>
                  {new Date(sys.sunset * 1000).toLocaleTimeString()}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={classes.detailContainer}>
        <div className={classes.detailBoxOne}>
          <ul className={classes.detailUl}>
            <li>
              <div className={classes.Icon}>
                <img src={humidity} alt="Humidity" />
              </div>
              <div className={classes.detailSecondBox}>
                <span className={classes.big}>{main.humidity}</span>
                <span className={classes.colorYellow}>Humidity</span>
              </div>
            </li>
            <li>
              <div className={classes.Icon}>
                <img src={pressure} alt="Pressure" />
              </div>
              <div className={classes.detailSecondBox}>
                <span className={classes.big}>{main.pressure}</span>
                <span className={classes.colorYellow}>Pressure</span>
              </div>
            </li>
            <li>
              <div className={classes.Icon}>
                <img src={longitude} alt="Longitude" />
              </div>
              <div className={classes.detailSecondBox}>
                <span className={classes.big}>{coord.lon}</span>
                <span className={classes.colorYellow}>Longitude</span>
              </div>
            </li>
            <li>
              <div className={classes.Icon}>
                <img src={latitude} alt="Latitude" />
              </div>
              <div className={classes.detailSecondBox}>
                <span className={classes.big}>{coord.lat}</span>
                <span className={classes.colorYellow}>Latitude</span>
              </div>
            </li>
          </ul>
        </div>
        <div className={classes.detailBoxTwo}>
          <div className={classes.windHeading}>
            Wind
            <span></span>
          </div>
          <div className={classes.windDetail}>
            <div className={classes.detailBoxOne}>
              <ul className={classes.detailUl}>
                <li>
                  <div className={classes.Icon}>
                    <img src={windSpeed} alt="Wind Speed" />
                  </div>
                  <div className={classes.detailSecondBox}>
                    <span className={classes.big}>{wind.speed}</span>
                    <span className={classes.colorYellow}>Speed</span>
                  </div>
                </li>
                <li>
                  <div className={classes.Icon}>
                    <img src={Deg} alt="Deg" />
                  </div>
                  <div className={classes.detailSecondBox}>
                    <span className={classes.big}>{wind.deg}</span>
                    <span className={classes.colorYellow}>Deg</span>
                  </div>
                </li>
                <li>
                  <div className={classes.Icon}>
                    <img src={gust} alt="Gust" />
                  </div>
                  <div className={classes.detailSecondBox}>
                    <span className={classes.big}>{wind.gust}</span>
                    <span className={classes.colorYellow}>Gust</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.description}>
        <div className={classes.windHeading}>
          Description
          <span></span>
        </div>
        <h6>
          The minimum temperature in {city} today is likely to hover around{" "}
          {main.temp_min} degrees Celsius, while the maximum temperature might
          reach {main.temp_max} degrees Celsius. The mercury level is expected
          to hover around {main.temp} degrees Celsius throughout the day, with
          the wind speed around {wind.speed}. The wind will move around{" "}
          {wind.deg} degrees with a gust speed of {wind.gust}. The sunrise time
          is {new Date(sys.sunrise * 1000).toLocaleTimeString()}, while it will
          set at {new Date(sys.sunset * 1000).toLocaleTimeString()} on Saturday.
        </h6>
      </div>
    </div>
  );
};

export default Weather;
