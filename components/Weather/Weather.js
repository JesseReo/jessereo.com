/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import styles from "./Weather.module.css";
import Text from "../Text";
import Spinner from "../../images/spinner.svg";

const Weather = (props) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const key = "a7201973c629e23cc92a521ac75c7411";
    const latlon = { lat: "37.8136", lon: "144.9631" };
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latlon.lat}&lon=${latlon.lon}&units=metric&appid=${key}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
      });
  }, []);

  return (
    <div className={styles.weather}>
      {weatherData ? (
        <>
          <Text className={styles.cityName}>Melbourne</Text>
          <div className={styles.iconAndTemp}>
            <img
              className={styles.icon}
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt={weatherData.weather[0].main}
            />
            <Text className={styles.temperature}>
              {Math.round(weatherData.main.temp)}&#176;
            </Text>
          </div>
        </>
      ) : (
        <div className={styles.loadingText}>
          <Text>Weather</Text>
          <Spinner className={styles.spinner} />
        </div>
      )}
    </div>
  );
};

export default Weather;
