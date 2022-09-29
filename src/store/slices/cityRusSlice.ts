import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICityName } from "../types/IOsmCityName";

interface cityRusState {
  city: ICityName;
  isLoading: boolean;
  error: string;
}

const initialState: cityRusState = {
  city: {} as ICityName,
  isLoading: false,
  error: "",
};

export const cityRusTranslate = createSlice({
  name: "cityRus",
  initialState,
  reducers: {
    getRusTranslateStart(state: cityRusState) {
      state.isLoading = true;
    },
    setRusTranslateSuccess(
      state: cityRusState,
      actions: PayloadAction<ICityName>
    ) {
      state.isLoading = false;
      state.city = actions.payload;
    },
    setRusTranslateError(state: cityRusState, actions: PayloadAction<string>) {
      state.isLoading = false;
      state.error = actions.payload;
    },
  },
});

export const {
  getRusTranslateStart,
  setRusTranslateSuccess,
  setRusTranslateError,
} = cityRusTranslate.actions;

export default cityRusTranslate.reducer;
