import { ITheme } from "./types";

export const schema: ITheme = {
  data: {
    dark: {
      id: "001",
      name: "dark",
      colors: {
        body: "#0d1117",
        thisDayBackground: "#4f4f4f",
        current: "#4793ff",
        forecastDay: "#2e3035",
        forecastTitle: "#fff",
        forecastSubtitle: "#939cb0",
        forecastTemperature: "#939cb0",
        forecastSky: "#939cb0",
      },
    },
    light: {
      id: "002",
      name: "light",
      colors: {
        body: "#e4e4e4",
        thisDayBackground: "#e4e4e4",
        current: "#4f4f4f",
        forecastDay: "rgba(71, 147, 255, 0.2)",
        forecastTitle: "#4f4f4f",
        forecastSubtitle: "#939CB0",
        forecastTemperature: "#939CB0",
        forecastSky: "#939CB0",
      },
    },
  },
};
