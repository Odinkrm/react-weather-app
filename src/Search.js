import React, { useState } from "react";
import axios from "axios";
import Weather from "./Weather";
import "./styles.css";
export default function Search() {
  const [searchedCity, setSearchedCity] = useState("");
  const [cityName, setCityName] = useState("");
  const [temperature, setTemperature] = useState("");
  const [description, setDescription] = useState("");
  const [humidity, setHumidity] = useState("");
  const [wind, setWind] = useState("");
  const [icon, setIcon] = useState("");

  function getWeather(respond) {
    setCityName(respond.data.name);
    setTemperature(Math.round(respond.data.main.temp));
    setDescription(respond.data.weather[0].description);
    setHumidity(respond.data.main.humidity);
    setWind(respond.data.wind.speed);
    setIcon(
      `http://openweathermap.org/img/wn/${respond.data.weather[0].icon}@2x.png`
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchedCity}&units=metric&appid=c77c0f857560425c32ee92917087a412`;
    axios.get(apiUrl).then(getWeather);
  }

  function updateCity(event) {
    event.preventDefault();
    setSearchedCity(event.target.value);
  }
  return (
    <div className="search-form">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="search for a city..."
          onChange={updateCity}
          autoFocus="on"
        />
        <input type="submit" onSubmit="handleSubmit" value="Search" />
      </form>
      <Weather
        city={cityName}
        temperature={temperature}
        description={description}
        humidity={humidity}
        wind={wind}
        icon={icon}
      />
    </div>
  );
}
