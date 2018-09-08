import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from 'material-ui/CircularProgress';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../../services/transformWeather';
import './styles.css';

const api_key = '10b496ad45e010a92b2dc139a87c9f74';
const url = 'https://api.openweathermap.org/data/2.5/weather';

class WeatherLocation extends Component {

  /*
   * Ciclo de vida de una clase React
   * * Cuando cargas por primera vez
   *   - constructor()
   *   - componentWillMount()
   *   - render()
   *   - componentDidMount()
   * * Cada vez que cambias algo
   *   - componentWillUpdate()
   *   - render()
   *   - componentDidUpdate()
   */

  constructor({ city }) {
    super();
    //console.log("Se ejecuta 'constructor()'.");
    this.state = {
      city,
      data: null
    };
  }

  componentWillMount() {
    //console.log("Se ejecuta 'componentWillMount()'.");
    this.handleUpdateClick();
  }

  componentDidMount() {
    //console.log("Se ejecuta 'componentDidMount()'.");
  }

  componentWillUpdate() {
    //console.log("Se ejecuta 'componentWillUpdate()'.");
  }

  componentDidUpdate() {
    //console.log("Se ejecuta 'componentDidUpdate()'.");
  }

  handleUpdateClick = () => {
    const { city } = this.state;
    const api_weather = `${url}?q=${city}&appid=${api_key}`;
    fetch(api_weather).then( data_api => {
      return data_api.json();
    }).then( weather_data => {
      const data = transformWeather(weather_data);
      this.setState({ data });
    });
    //console.log("Actualizado");
  };

  render = () => {
    //console.log("Se ejecuta 'render()'.");
    const { onWeatherLocationClick } = this.props;
    const { city, data } = this.state;

    return (
      <div className='weatherLocationCont' onClick={onWeatherLocationClick}>
        <Location city={city}/>
        { data ? <WeatherData data={ data }/> : <CircularProgress/> }
      </div>
    );
  };
}

WeatherLocation.propTypes = {
  city: PropTypes.string,
  onWeatherLocationClick: PropTypes.func
};

export default WeatherLocation;