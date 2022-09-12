import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CurrentWeather } from "../types/ICurrentWeather";

interface currentWeather {
  current: CurrentWeather;
  isLoading: boolean;
  error: string;
}

const initialState: currentWeather = {
  current: {} as CurrentWeather,
  isLoading: false,
  error: "",
};

export const currentWeatherSlice = createSlice({
  name: "currentWeather",
  initialState,
  reducers: {
    getCurrentWeatherStart(state: currentWeather) {
      state.isLoading = true;
    },
    setCurrentWeatherSuccess(
      state: currentWeather,
      actions: PayloadAction<CurrentWeather>
    ) {
      state.isLoading = false;
      state.current = actions.payload;
    },
    setCurrentWeatherError(
      state: currentWeather,
      actions: PayloadAction<string>
    ) {
      state.isLoading = false;
      state.error = actions.payload;
    },
  },
});

export const {
  getCurrentWeatherStart,
  setCurrentWeatherSuccess,
  setCurrentWeatherError,
} = currentWeatherSlice.actions;

export default currentWeatherSlice.reducer;
