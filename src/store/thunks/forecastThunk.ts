import { getForecastApi } from "../../api/getForecast";
import {
  getForecastStart,
  setForecastError,
  setForecastSuccess,
} from "../slices/forecastSlice";
import { AppDispatch } from "../store";
import { ForecastWork } from "../types/IForecast";

export const getForecast =
  (lat: number, log: number) => async (dispatch: AppDispatch) => {
    try {
      dispatch(getForecastStart());
      const { data } = await getForecastApi.getForecast(lat, log);
      if (!data) {
        throw new Error("Данные не получены");
      }
      let res: ForecastWork[] = [];
      const {
        apparent_temperature_max,
        temperature_2m_max,
        temperature_2m_min,
        weathercode,
        winddirection_10m_dominant,
        windspeed_10m_max,
        time,
        precipitation_sum,
      } = data.daily;
      for (let i = 0; i < data.daily.weathercode.length; i++) {
        const element: ForecastWork = {
          apparent_temperature_max: apparent_temperature_max[i],
          temperature_2m_max: temperature_2m_max[i],
          temperature_2m_min: temperature_2m_min[i],
          weathercode: weathercode[i],
          winddirection_10m_dominant: winddirection_10m_dominant[i],
          windspeed_10m_max: windspeed_10m_max[i],
          time: time[i],
          precipitation_sum: precipitation_sum[i],
        };
        res.push(element);
      }

      dispatch(setForecastSuccess(res));
    } catch (e) {
      dispatch(setForecastError((e as Error).message));
    }
  };
