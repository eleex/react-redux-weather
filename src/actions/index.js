const weatherRequest = () => {
  return {
    type: 'FETCH_WEATHER_REQUEST',
  };
};

const getCurrentWeather = (currentWeather) => {
  return {
    type: 'FETCH_CURRENT_WEATHER',
    payload: currentWeather,
  };
};

const getFiveDaysWeather = (weather) => {
  return {
    type: 'FETCH_FIVE_DAYS_WEATHER',
    payload: weather,
  };
};

const onChangeInputCity = (e) => {
  return {
    type: 'ON_CHANGE_INPUT_CITY',
    payload: e.target.value,
  };
};

const onSumbitCity = (city) => {
  return {
    type: 'ON_SUBMIT_CITY',
    payload: city,
  };
};

const weatherError = () => {
  return {
    type: 'FETCH_WEATHER_FAILURE',
  };
};

export {
  weatherRequest,
  getCurrentWeather,
  getFiveDaysWeather,
  onChangeInputCity,
  onSumbitCity,
  weatherError,
};
