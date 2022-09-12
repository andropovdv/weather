import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ForecastWork } from "../types/IForecast";

interface forecastState {
  forecast: ForecastWork[];
  isLoading: boolean;
  error: string;
}

const initialState: forecastState = {
  forecast: [] as ForecastWork[],
  isLoading: false,
  error: "",
};

export const forecastSlice = createSlice({
  name: "forecast",
  initialState,
  reducers: {
    getForecastStart(state: forecastState) {
      state.isLoading = true;
    },
    setForecastSuccess(
      state: forecastState,
      actions: PayloadAction<ForecastWork[]>
    ) {
      state.isLoading = false;
      state.forecast = actions.payload;
    },
    setForecastError(state: forecastState, actions: PayloadAction<string>) {
      state.isLoading = false;
      state.error = actions.payload;
    },
  },
});

export const { getForecastStart, setForecastSuccess, setForecastError } =
  forecastSlice.actions;

export default forecastSlice.reducer;
