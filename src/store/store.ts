import { combineReducers, configureStore } from "@reduxjs/toolkit";
import geoipSlice from "./slices/geoipSlice";
import cityRusSlice from "./slices/cityRusSlice";
import currentWeatherSlice from "./slices/currentWeatherSlice";
import forecastSlice from "./slices/forecastSlice";

const rootReducer = combineReducers({
  geoipSlice,
  cityRusSlice,
  currentWeatherSlice,
  forecastSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = typeof store.getState;
export type AppDispatch = typeof store.dispatch;
