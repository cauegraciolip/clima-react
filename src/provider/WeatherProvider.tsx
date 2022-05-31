import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

import { Weather } from "../types/types";

type InitialWeather = Pick<Weather, "weather">;

export const WeatherContext = createContext<InitialWeather>({
  weather: undefined,
});

export const WeatherProvider = (props: any) => {
  const [weather, setWeather] = useState();

  const getMainWeather = async (lat: number, long: number): Promise<any> => {
    let res = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather",
      {
        params: {
          lat: lat,
          lon: long,
          appid: import.meta.env.VITE_APP_TOKEN,
          lang: "PT",
          units: "metric",
        },
      }
    );
    setWeather(res.data);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position: GeolocationPosition) => {
        getMainWeather(position.coords.latitude, position.coords.longitude);
      }
    );
  }, []);

  return (
    <WeatherContext.Provider value={{ weather }}>
      {props.children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
