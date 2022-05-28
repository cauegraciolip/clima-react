import { css } from "@stitches/react";
import { CardSection, CardDiv } from "../styles/stitchesStyles";
import { mesNome, diaNome, icons } from "../utils/utils";

import { BsFillGeoAltFill } from "react-icons/bs";

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

type ICardInfo = {
  temp: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  feels_like: number;
};

type IWeatherInfo = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

type IWeather = {
  main: ICardInfo;
  weather: Array<IWeatherInfo>;
  name: string;
};

export function Card(props: IWeather) {
  const icon: string = props.weather[0].icon;
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
            {String(props.main.temp).slice(0, 2)}
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
          {props.name}
        </span>
      </CardDiv>
    </CardSection>
  );
}
