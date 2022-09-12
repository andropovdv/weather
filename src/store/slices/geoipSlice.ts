import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGeoIp } from "../types";

interface geoipState {
  geoip: IGeoIp;
  isLoading: boolean;
  error: string;
}

const initialState: geoipState = {
  geoip: {} as IGeoIp,
  isLoading: false,
  error: "",
};

export const geoipSlice = createSlice({
  name: "geoip",
  initialState,
  reducers: {
    getGeoipStart(state: geoipState) {
      state.isLoading = true;
    },
    setGeoipSuccess(state: geoipState, action: PayloadAction<IGeoIp>) {
      state.isLoading = false;
      state.geoip = action.payload;
    },
    setGeoipError(state: geoipState, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { getGeoipStart, setGeoipSuccess, setGeoipError } =
  geoipSlice.actions;

export default geoipSlice.reducer;
