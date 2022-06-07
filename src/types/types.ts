export type Weather = {
  weather?: Array<MainDescription>;
  sys: Sys;
  main: ActualInfo;
  name: string;
};

type ActualInfo = {
  temp: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  feels_like: number;
};

type MainDescription = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

type Sys = {
  country: string;
};

export type WeatherInfo = {
  main: ActualInfo;
  weather?: Array<MainDescription>;
  sys: Sys;
  name: string;
};
