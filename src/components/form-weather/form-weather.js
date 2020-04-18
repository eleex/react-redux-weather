import React from "react";
import { connect } from "react-redux";
import {
  onChangeInputCity,
  weatherRequest,
  getCurrentWeather,
  weatherError,
} from "../../actions";
import withWeatherService from "../hoc";

import "./form-weather.css";

const FormWeather = (props) => {
  const {
    inputCityValue,
    dataCity,
    time,
    onChangeInputCity,
    weatherRequest,
    getCurrentWeather,
    weatherError,
    weatherService,
  } = props;

  const onSubmit = (evt) => {
    evt.preventDefault();

    const isMoreMinutesAgo = (prev, interval) => {
      const diff = Date.now() - new Date(prev);

      const minAgo = diff / (60 * 1000);

      return interval > minAgo;
    };

    if (dataCity === inputCityValue && isMoreMinutesAgo(time, 5)) {
      return;
    }

    weatherRequest();

    weatherService
      .fetchCurrentWeather(inputCityValue)
      .then((data) => {
        getCurrentWeather(data);
      })
      .catch((error) => {
        weatherError();
      });
  };

  return (
    <form
      onSubmit={onSubmit}
      className="form-inline col-12 justify-content-center"
    >
      <label>
        Введите город
        <input
          type="text"
          className="form-control ml-1 mr-2"
          value={inputCityValue}
          onChange={onChangeInputCity}
        />
      </label>
      <input type="submit" className="btn btn-outline-info search" value="" />
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    inputCityValue: state.inputCityValue,
    dataCity: state.data.city,
    time: state.data.time,
    loading: state.loading,
  };
};

const mapDispatchToProps = {
  weatherRequest,
  onChangeInputCity,
  getCurrentWeather,
  weatherError,
};

export default withWeatherService(
  connect(mapStateToProps, mapDispatchToProps)(FormWeather)
);
