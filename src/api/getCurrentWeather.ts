// https://api.open-meteo.com/v1/forecast?latitude=56.32867&longitude=44.00205&current_weather=true

import axios, { AxiosResponse } from "axios";
import { ResponseCurrentWeather } from "../store/types/ICurrentWeather";

const BASE_URL = "https://api.open-meteo.com/v1/";

export const getCurrentWeatherApi = {
  getCurrent: async (
    lat: number,
    lon: number
  ): Promise<AxiosResponse<ResponseCurrentWeather>> => {
    const response = await axios.get(
      `${BASE_URL}forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
    );
    return response;
  },
};
