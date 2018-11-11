import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import LocationListContainer from "./containers/LocationListContainer";
import ForecastExtended from "./components/ForecastExtended";
import './App.css';

const cities = [
  'Zaragoza, es',
  'Madrid, es',
  'Bucharest, ro',
  'Bogotá, col'
];

class App extends Component {

  constructor() {
    super();

    this.state = {city: null};
  }

  render() {
    const { city } = this.state;
    return (
      <MuiThemeProvider>
        <Grid>
          <Row>
            <Col xs={12}>
              <AppBar title="Weather App"/>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12} lg={6}>
              <LocationListContainer cities={cities} />
            </Col>
            <Col xs={12} md={12} lg={6}>
              <Paper elevation={4}>
                <div className='details'>
                  { !city ? <h2>No se ha seleccionado ninguna ciudad</h2> : <ForecastExtended city={city}/>}
                </div>
              </Paper>
            </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default App;
