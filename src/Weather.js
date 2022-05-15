import React from "react";
import "./styles.css";
export default function Weather(props) {
  if (props.city) {
    return (
      <ul className="weather-info">
        <li>
          <img src={props.icon} alt={props.description} className="icon" />
        </li>
        <li>
          <strong>City:</strong> {props.city}
        </li>
        <li>
          <strong>Temprature:</strong> {props.temperature}ºC
        </li>
        <li>
          <strong>Description:</strong> {props.description}
        </li>
        <li>
          <strong>Humidty:</strong> {props.humidity}%
        </li>
        <li>
          <strong>Wind Speed:</strong> {props.wind}m/s
        </li>
      </ul>
    );
  }
}
