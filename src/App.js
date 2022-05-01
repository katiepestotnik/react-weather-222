import React from "react";
import "./styles.css";
import weatherData from './weatherData'
import WeatherForecast from "./Components/WeatherForecast";

export default function App() {
  console.log(weatherData)
  const weatherArr = weatherData.map((ele, idx) => {
    return (
      <WeatherForecast
        {...ele}
        key={idx}
        />
    )
  })
  return (
    <div className="App">
      <h1>My WeatherIcons App</h1>
        <section>{weatherArr}</section>
    </div>
  );
}
