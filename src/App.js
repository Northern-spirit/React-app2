import React from "react";
import Info from "./components/info";
import Form from "./components/Form";
import Weather from "./components/Weather";
const API_KEY = "f5c5c72dc4f09e016f4af143d9ef6748";
class App extends React.Component {

  state = {
    temp: undefined,
    name: undefined,
    country: undefined,
    pressure: undefined,
    sunset: undefined,
    error: undefined
  }

  gettingWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_url = await
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await api_url.json();

    let sunset = data.sys.sunset;
    let date = new Date();
    date.setTime(sunset);
    let sunset_date = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();


    this.setState({
      temp: data.main.temp,
      name: data.name,
      country: data.sys.country,
      pressure: data.main.pressure,
      sunset: sunset_date,
      error: undefined
    });
  }


  render() {
    return (
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-sm-5 info"><Info /></div>
              <div className="col-sm-7 form">
                <Form weatherMethod={this.gettingWeather} />
                <Weather
                  temp={this.state.temp}
                  name={this.state.name}
                  country={this.state.country}
                  pressure={this.state.pressure}
                  sunset={this.state.sunset}
                  error={this.state.error}
                />
              </div>
            </div>
          </div>
        </div>
      </div>


    );
  }
};

export default App;