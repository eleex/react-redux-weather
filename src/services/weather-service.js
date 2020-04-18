export default class WeatherService {
  _apiBase = "https://api.openweathermap.org/data/2.5";
  _apiKey = "8a9238f7118a7ebc926a12bc8101dfe5";

  getResource = async (url, city) => {
    const res = await fetch(
      `${this._apiBase}${url}${city}&appid=${this._apiKey}&units=metric&lang=ru`
    );

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }

    return await res.json();
  };

  fetchCurrentWeather = async (city) => {
    const res = await this.getResource("/weather?q=", city);

    return this._transformCurrentWeather(res);
  };

  fetchFiveDaysWeather = async (city) => {
    const res = await this.getResource("/forecast?q=", city);

    return res.list.map(this._transformFiveDaysWeather);
  };

  _transformCurrentWeather = (res) => {
    return {
      id: res.id,
      city: res.name,
      time: res.dt * 1000,
      temp: Math.round(res.main.temp),
      pressure: res.main.pressure,
      humidity: res.main.humidity,
      clouds: res.weather[0].description,
      cloudsIcon: `http://openweathermap.org/img/w/${res.weather[0].icon}.png`,
      wind: Math.round(res.wind.speed),
    };
  };

  _transformFiveDaysWeather = (res) => {
    return {
      time: res.dt_txt,
      temp: Math.round(res.main.temp),
      pressure: res.main.pressure,
      humidity: res.main.humidity,
      clouds: res.weather[0].description,
      wind: Math.round(res.wind.speed),
    };
  };
}
