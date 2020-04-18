import React from "react";
import FormWeather from "../form-weather";
import CurrentWeather from "../current-weather";

const WeatherPage = () => {
  return (
    <div className="row justify-content-center">
      <FormWeather />
      <CurrentWeather />
    </div>
  );
};

export default WeatherPage;
