import { RootState } from "./store";

export const selectGepIp = (state: RootState) => state.geoipSlice;
export const selectCityRus = (state: RootState) => state.cityRusSlice;
export const selectCurrentWeather = (state: RootState) =>
  state.currentWeatherSlice;
export const selectForecast = (state: RootState) => state.forecastSlice;
