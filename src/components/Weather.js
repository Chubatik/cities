import React from 'react';

class Weather extends React.Component {
    render() {
        return (
            <div>
                {this.props.data.city &&
                <div>
                    <p>Place: {this.props.data.city} {this.props.data.country}</p>
                    <p>Temperature: {this.props.data.temp}</p>
                    <p>Pressure: {this.props.data.pressure}</p>
                    <p>Sunset: {this.props.data.sunset}</p>
                </div>
                }
            </div>
        );
    }
}

export default Weather;
