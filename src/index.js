import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";

import ErrorBoundry from "./components/error-boundry";
import { WeatherServiceProvider } from "./components/weather-service-context";
import WeatherService from "./services";
import {BrowserRouter as Router } from "react-router-dom";
import App from "./components/app";

const weatherService = new WeatherService();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundry>
        <WeatherServiceProvider value={weatherService}>
          <Router>
            <App />
          </Router>
        </WeatherServiceProvider>
      </ErrorBoundry>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
