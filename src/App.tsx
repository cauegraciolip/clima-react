import { Card } from "./components/Card";
import { useState, useEffect } from "react";
import { globalCss } from "@stitches/react";
import axios from "axios";

import { Box, Main, Section } from "./styles/stitchesStyles";

const globalStyles = globalCss({
  body: {
    fontFamily: "Nunito, sans-serif",
    margin: 0,
    padding: 0,
  },
});

function App() {
  globalStyles();

  const [location, setLocation] = useState<Boolean>(false);
  const [weather, setWeather] = useState<any>();

  const getMainWeather = async (lat: number, long: number): Promise<any> => {
    let res = await axios.get(
      "http://api.openweathermap.org/data/2.5/weather",
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
        setLocation(true);
      }
    );
  }, []);

  return (
    <Main>
      <Section>
        <Box>
          <h4 style={{ textAlign: "center", color: "#f5f5f5", margin: 0 }}>
            Previsão do Tempo
          </h4>
          {location && weather != undefined ? (
            <Card {...weather} />
          ) : (
            <p style={{ color: "#ffffff" }}>
              Você precisa autorizar sua localização
            </p>
          )}
        </Box>
      </Section>
    </Main>
  );
}

export default App;
