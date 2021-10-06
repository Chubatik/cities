import React from 'react';

const Weather = props => (
    <div className={'infoWeath'}>
        {props.data.city &&
        <div>
            <p>Place: {props.data.city} {props.data.country}</p>
            <p>Temperature: {props.data.temp}</p>
            <p>Pressure: {props.data.pressure}</p>
            <p>Sunset: {props.data.sunset}</p>
        </div>
        }
        <p className={'error'}>{props.data.error}</p>
    </div>
)

export default Weather;
