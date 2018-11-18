import transformForecast from "../services/transformForecast";

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

const setCity = payload => ({ type: SET_CITY, payload }); // payload => carga util (value)
const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload });

const api_key = '10b496ad45e010a92b2dc139a87c9f74';
const url = 'https://api.openweathermap.org/data/2.5/forecast';

export const setSelectedCity = payload => {
  return dispatch => {
    const api_forecast = `${url}?q=${payload}&appid=${api_key}`;

    // activar en el estado un identificador de busqueda de datos
    dispatch(setCity(payload));



    return fetch(api_forecast).then( data_api => (
      data_api.json()
  )).then( weather_data => {
      const forecastData = transformForecast(weather_data);
      console.log(forecastData);

      // modificar el estado con el resultado de la promise (fetch)
      dispatch(setForecastData({ city: payload, forecastData }));
    });
  };
};

