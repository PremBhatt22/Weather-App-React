import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "930efdccc844685cb3930ba0605677a7";

  let getWeatherInfo = async (city) => {
    let response = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );
    let jsonResponse = await response.json();
    // console.log(jsonResponse);
    // return jsonResponse;

    let result = {
      city: city,
      temp: jsonResponse.main.temp,
      tempMin: jsonResponse.main.temp_min,
      tempMax: jsonResponse.main.temp_max,
      humidity: jsonResponse.main.humidity,
      feelsLike: jsonResponse.main.feels_like,
      weather: jsonResponse.weather[0].description,
    };

    console.log(result);
    return result;
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };
  let handleSubmit = async (event) => {
    event.preventDefault();
    console.log(city);
    getWeatherInfo(city);
    setCity("");

    let info = await getWeatherInfo(city);
    updateInfo(info);
  };

  return (
    <div className="searchbox">
      <form onSubmit={handleSubmit}>
        <TextField
          value={city}
          id="city"
          label="Search City"
          required
          variant="outlined"
          onChange={handleChange}
        />
        <Button id="search" type="submit" variant="contained">
          Search
        </Button>
      </form>
    </div>
  );
}
