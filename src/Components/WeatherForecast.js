import React from 'react'
import WeatherIcon from './WeatherIcon'
import WeatherData from './WeatherData'
const WeatherForecast = ({ img, conditions, time }) => {
    return (

        <div className="weather">
            <WeatherIcon img={img} />
            <WeatherData time={time} conditions={conditions}/>
        </div>

    )
}
export default WeatherForecast