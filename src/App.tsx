import { Card } from "./components/Card";
import { globalCss } from "@stitches/react";

import { Box, Section } from "./styles/stitchesStyles";

import { useWeather } from "./provider/WeatherProvider";

const globalStyles = globalCss({
  body: {
    fontFamily: "Nunito, sans-serif",
    margin: 0,
    padding: 0,
  },
});

function App() {
  globalStyles();

  const { weather } = useWeather();

  return (
    <Section>
      <Box>
        <h1 style={{ textAlign: "center", color: "#f5f5f5", margin: 0 }}>
          Temperatura atual
        </h1>
        {weather != undefined ? (
          <Card />
        ) : (
          <p style={{ color: "#ffffff" }}>
            Você precisa autorizar sua localização
          </p>
        )}
      </Box>
    </Section>
  );
}

export default App;
