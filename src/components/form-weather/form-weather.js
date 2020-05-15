import React from 'react';
import { connect } from 'react-redux';
import { onChangeInputCity, onSumbitCity } from '../../actions';

import './form-weather.css';

const FormWeather = (props) => {
  const { inputCityValue, onChangeInputCity, onSumbitCity } = props;

  const onSubmitHandler = (evt) => {
    evt.preventDefault();
    onSumbitCity(inputCityValue);
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className='form-inline col-12 justify-content-center'>
      <label>
        Введите город
        <input
          type='text'
          className='form-control ml-1 mr-2'
          value={inputCityValue}
          onChange={onChangeInputCity}
        />
      </label>
      <input type='submit' className='btn btn-outline-info search' value='' />
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    inputCityValue: state.inputCityValue,
  };
};

const mapDispatchToProps = {
  onChangeInputCity,
  onSumbitCity,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormWeather);
