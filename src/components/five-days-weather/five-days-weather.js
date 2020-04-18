import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import withWeatherService from "../hoc";
import {
  weatherRequest,
  getFiveDaysWeather,
  weatherError,
} from "../../actions";
import Spinner from "../spinner";

class FiveDaysWeather extends Component {
  componentDidMount() {
    const {
      city,
      weatherRequest,
      weatherService,
      getFiveDaysWeather,
      weatherError,
    } = this.props;

    if (city) {
      weatherRequest();
      weatherService
        .fetchFiveDaysWeather(city)
        .then((data) => {
          getFiveDaysWeather(data);
        })
        .catch((error) => {
          weatherError();
        });
    }
  }

  render() {
    const { city, multiData, error, loading } = this.props;

    if (!city || error) {
      return <Redirect to="/" />;
    }

    if (loading) {
      return <Spinner />;
    }

    const renderRow = (item, idx) => {
      const { time, temp, pressure, humidity, wind, clouds } = item;
      return (
        <tr key={idx}>
          <td>{time}</td>
          <td>{temp}</td>
          <td>{pressure}</td>
          <td>{humidity}</td>
          <td>{wind}</td>
          <td>{clouds}</td>
        </tr>
      );
    };

    return (
      <div className="row">
        <h2 className="col-12 text-center">Погода в городе {city}</h2>
        <Link to="/" role="button" className="btn btn-dark">
          На главную
        </Link>
        <table className="table table-hover table-dark">
          <thead>
            <tr>
              <th>Дата</th>
              <th>Температура &#8451;</th>
              <th>Давление &#13169;</th>
              <th>Влажность &#37;</th>
              <th>Ветер &#13223;</th>
              <th>Небо</th>
            </tr>
          </thead>
          <tbody>{multiData.map(renderRow)}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = ({ data: { city }, multiData, loading, error }) => {
  return {
    city,
    multiData,
    loading,
    error,
  };
};

const mapDispatchToProps = {
  weatherRequest,
  getFiveDaysWeather,
  weatherError,
};

export default withWeatherService(
  connect(mapStateToProps, mapDispatchToProps)(FiveDaysWeather)
);
