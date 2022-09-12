import { getCurrentWeatherApi } from "../../api/getCurrentWeather";
import {
  getCurrentWeatherStart,
  setCurrentWeatherError,
  setCurrentWeatherSuccess,
} from "../slices/currentWeatherSlice";
import { AppDispatch } from "../store";

export const getCurrentWeather =
  (lat: number, log: number) => async (dispatch: AppDispatch) => {
    try {
      dispatch(getCurrentWeatherStart());
      const { data } = await getCurrentWeatherApi.getCurrent(lat, log);
      if (!data) {
        throw new Error("Данные не получены");
      }
      dispatch(setCurrentWeatherSuccess(data.current_weather));
    } catch (e) {
      dispatch(setCurrentWeatherError((e as Error).message));
    }
  };
