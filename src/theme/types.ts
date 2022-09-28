export interface Colors {
  body: string;
  thisDayBackground: string;
  current: string;
  forecastDay: string;
  forecastSky: string;
  forecastTitle: string;
  forecastSubtitle: string;
  forecastTemperature: string;
}

// export interface Dark {
//   id: string;
//   name: string;
//   colors: Colors;
// }

// export interface Light {
//   id: string;
//   name: string;
//   colors: Colors;
// }
export interface Theme {
  id: string;
  name: string;
  colors: Colors;
}

export interface IThemeData {
  // dark: Dark;
  // light: Light;
  [key: string]: Theme;
}

export interface ITheme {
  data: IThemeData;
}
