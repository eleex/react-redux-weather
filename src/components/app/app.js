import React from "react";
import Header from "../header";
import WeatherPage from "../weather-page";
import FiveDaysWeather from "../five-days-weather";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/" component={WeatherPage} />
        <Route path="/five-days-weather" component={FiveDaysWeather} />
      </Switch>
    </div>
  );
};

export default App;
