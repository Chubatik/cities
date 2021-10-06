import React from 'react';
import Info from "./components/Info";
import Form from './components/Form';
import Weather from './components/Weather';
const API_KEY = 'c9ca293df89e1bd311d94dc22d49a5c1';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weather : {
                temp: undefined,
                city: undefined,
                country: undefined,
                pressure: undefined,
                sunset: undefined,
                error: undefined
            }
        };
    }

    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.city.value;
        if (city) {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
            const request = await fetch(url);
            const data = await request.json();
            this.setState({
                weather : {
                    temp: data.main.temp,
                    city: data.name,
                    country: data.sys.country,
                    pressure: data.main.pressure,
                    sunset: this.convertTime(data.sys.sunset),
                    error: undefined
                }
            });
        } else {
            this.setState({
                weather : {
                    temp: undefined,
                    city: undefined,
                    country: undefined,
                    pressure: undefined,
                    sunset: undefined,
                    error: "Enter city name"
                }
            })
        }
    }

    convertTime(givenDate) {
        let date = new Date(givenDate * 1000);
        let hours = date.getHours();
        let minutes = "0" + date.getMinutes();
        let seconds = "0" + date.getSeconds();
        return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    }

    render() {
        return (
            <div className={'wrapper'}>
                <div className={'main'}>
                    <div className={'container'}>
                        <div className={'row'}>
                            <div className={'col-sm-5 info'}>
                                <Info />
                            </div>
                            <div className={'col-sm-7 form'}>
                                <Form weather={this.getWeather}/>
                                <Weather data={this.state.weather} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
