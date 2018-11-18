import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import LocationListContainer from "./containers/LocationListContainer";
import './App.css';
import ForecastExtendedContainer from "./containers/ForecastExtendedContainer";

const cities = [
  'Zaragoza, es',
  'Madrid, es',
  'Bucharest, ro',
  'Bogotá, col'
];

class App extends Component {

  render() {
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
                  <ForecastExtendedContainer />
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
