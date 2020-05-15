import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinner from '../spinner';
import { weatherRequest, getCurrentWeather, weatherError } from '../../actions';
import withWeatherService from '../hoc';

const CurrentWeather = ({ data }) => {
  const getWeatherTime = (timeStamp) => {
    const date = new Date(timeStamp);

    let hour = date.getHours();
    let minutes = date.getMinutes();

    hour = hour < 10 ? '0' + hour : hour;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    return `${hour}:${minutes}`;
  };

  return (
    <div className='col-12 mt-3'>
      <h3 className='text-center'>
        В городе {data.city} {data.clouds}
        <img src={`${data.cloudsIcon}`} alt='weather-icon' />
      </h3>
      <p className='text-center mb-0'>
        данные о погоде на {getWeatherTime(data.time)}
      </p>
      <ul className='list-group col-4 m-auto'>
        <li className='list-group-item'>Температура: {data.temp} &#8451;</li>
        <li className='list-group-item'>Влажность: {data.humidity} &#37;</li>
        <li className='list-group-item'>
          Скорость ветра: {data.wind} &#13223;
        </li>
        <li className='list-group-item'>Давление: {data.pressure} &#13169;</li>
      </ul>
      <div className='text-center'>
        <Link className='btn btn-primary mt-3' to='/five-days-weather'>
          Посмотреть погоду на 5 дней
        </Link>
      </div>
    </div>
  );
};

class CurrentWeatherContainer extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.city !== this.props.city) {
      this.props.weatherRequest();

      this.props.weatherService
        .fetchCurrentWeather(this.props.city)
        .then((data) => {
          this.props.getCurrentWeather(data);
        })
        .catch((error) => {
          this.props.weatherError();
        });
    }
  }

  render() {
    const { data, loading, error } = this.props;

    if (error) {
      return (
        <div className='col-12 mt-3'>
          <h4 className='text-center text-danger'>
            Погоды по этому пункту, к сожалению, на сайте нет.
          </h4>
        </div>
      );
    }

    if (loading) {
      return <Spinner />;
    }

    if (data.length === 0) {
      return null;
    }

    return <CurrentWeather data={data} />;
  }
}

const mapStateToProps = ({ city, data, loading, error }) => {
  return {
    city,
    data,
    loading,
    error,
  };
};

const mapDispatchToProps = {
  weatherRequest,
  getCurrentWeather,
  weatherError,
};

export default withWeatherService(
  connect(mapStateToProps, mapDispatchToProps)(CurrentWeatherContainer)
);
