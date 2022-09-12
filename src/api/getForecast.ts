import axios, { AxiosResponse } from "axios";
import { Forecast } from "../store/types/IForecast";

const BASE_URL = "https://api.open-meteo.com/v1/";

export const getForecastApi = {
  getForecast: async (
    lat: number,
    log: number
  ): Promise<AxiosResponse<Forecast>> => {
    const response = await axios.get(
      `${BASE_URL}forecast?latitude=${lat}&longitude=${log}&timezone=Europe/Moscow&daily=precipitation_sum,weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,windspeed_10m_max,winddirection_10m_dominant`
    );
    return response;
  },
};
