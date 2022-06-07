import { css } from "@stitches/react";
import { CardSection, CardDiv } from "../styles/stitchesStyles";
import { mesNome, diaNome, icons } from "../utils/utils";

import { BsFillGeoAltFill } from "react-icons/bs";

import { useWeather } from "../provider/WeatherProvider";

const topControl = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  color: "#ffffff",
  padding: "0 15px",
  "& > *": {
    fontSize: 20,
    margin: 0,
    padding: "5px 0",
  },
  "& > h5": {
    fontSize: 14,
    fontWeight: 500,
  },
});

const bottomControl = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 15px",
});

export function Card() {
  const { weather } = useWeather();

  const icon: string = weather != undefined ? weather.weather[0].icon : "";
  const now = new Date();

  let image = "";

  for (let icone of icons) {
    if (icone.id == icon) {
      image = icone.image;
    }
  }

  return (
    <CardSection>
      <CardDiv>
        <section className={topControl()}>
          <h1>Hoje</h1>
          <h5>{`${diaNome[now.getDay()]}, ${now.getDate()} ${
            mesNome[now.getMonth()]
          }`}</h5>
        </section>
        <section className={bottomControl()}>
          <span style={{ fontSize: 40 }}>
            {weather != undefined ? String(weather.main.temp).slice(0, 2) : ""}
            <sup style={{ color: "#ECBE13", fontSize: 22, fontWeight: 400 }}>
              °C
            </sup>
          </span>
          <img style={{ width: "70px", height: "auto" }} src={image} />
        </section>
        <span
          style={{
            fontSize: 14,
            display: "flex",
            alignItems: "center",
            padding: "0 15px",
            gap: 5,
            fontWeight: 400,
          }}
        >
          <BsFillGeoAltFill style={{ color: "#ECBE13" }} />
          {weather != undefined ? (
            <>{`${weather.name} - ${weather.sys.country}`}</>
          ) : (
            ""
          )}
        </span>
      </CardDiv>
    </CardSection>
  );
}
